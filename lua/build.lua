-- Ugly code to generate some things for the readme
local Docs = require("lazy.docs")
local Util = require("lazy.util")
local Handler = require("lazy.core.handler")
Handler.init()

local M = {}
local root = vim.fn.fnamemodify(debug.getinfo(1, "S").source:sub(2), ":p:h:h")
local rootLazyVim = root .. "/.nvim/plugins/LazyVim"
local rootStarter = root .. "/.nvim/plugins/starter"

---@generic V
---@param t table<string, V>
---@param fn fun(key:string, value:V)
function M.foreach(t, fn)
  ---@type string[]
  local keys = vim.tbl_keys(t)
  pcall(table.sort, keys, function(a, b)
    local swappedA = a:gsub(".", function(ch)
      return ch:upper() == ch and ch:lower() or ch:upper()
    end)

    local swappedB = b:gsub(".", function(ch)
      return ch:upper() == ch and ch:lower() or ch:upper()
    end)

    local la = a:lower()
    local lb = b:lower()

    if la == lb then
      return swappedA < swappedB
    end

    return la < lb
  end)
  for _, key in ipairs(keys) do
    fn(key, t[key])
  end
end

-- prints: aB, ab

---@return ReadmeBlock
function M.keymaps()
  local keymap_set = vim.keymap.set
  ---@type table<string,{mode?:string|string[], keys:string, desc?:string, i:number, group:string}>
  local keymaps = {}
  ---@type string
  local group = nil
  ---@type string[]
  local groups = {}
  local function map(mode, lhs, rhs, opts)
    if not (opts and opts.desc) then
      return
    end
    if not vim.tbl_contains(groups, group) then
      groups[#groups + 1] = group
    end
    mode = mode == nil and { "n", "v", "o" } or type(mode) == "string" and { mode } or mode
    local desc = opts and opts.desc or ""
    local key = lhs .. desc .. group
    -- print(group, lhs, desc)
    if keymaps[key] then
      vim.list_extend(keymaps[key].mode, mode)
    else
      keymaps[key] = { mode = mode, keys = lhs, desc = desc, i = vim.tbl_count(keymaps), group = group }
    end
  end
  vim.keymap.set = map

  group = "General"
  dofile(rootLazyVim .. "/lua/lazyvim/config/keymaps.lua")
  group = "LSP"
  local lsp = dofile(rootLazyVim .. "/lua/lazyvim/plugins/lsp/keymaps.lua")
  for _, keys in ipairs(lsp.get()) do
    map(keys.mode or "n", keys[1], keys[2], keys)
  end
  vim.keymap.set = keymap_set

  group = "Plugins"

  local core = require("lazy.core.plugin").Spec.new({ import = "lazyvim.plugins" }, { optional = true })
  Util.foreach(core.plugins, function(name, plugin)
    Handler.resolve(plugin)
    group = ("[%s](%s)"):format(plugin.name, plugin.url)
    M.foreach(plugin._.handlers.keys or {}, function(_, key)
      if type(key) == "table" and key.desc then
        local desc = key.desc or ""
        map(key.mode or "n", key.lhs, key.rhs, { desc = desc })
      end
    end)
  end)

  Util.walk(rootLazyVim .. "/lua/lazyvim/plugins/extras", function(path, name, t)
    if t == "file" and name:find("%.lua$") then
      local modname = path:gsub(".*/lua/", ""):gsub("/", "."):gsub("%.lua$", "")
      local extra_doc = "/extras/" .. modname:gsub("lazyvim%.plugins%.extras%.", ""):gsub("%.", "/")
      LazyVim.pick.picker = nil
      local extra = require("lazy.core.plugin").Spec.new({ import = modname }, { optional = true })
      local orig_spec = require("lazy.core.config").spec
      require("lazy.core.config").spec = extra
      Util.foreach(extra.plugins, function(name, plugin)
        group = ("[%s](%s)\nPart of [%s](%s)"):format(plugin.name, plugin.url, modname, extra_doc)
        Handler.resolve(plugin)
        M.foreach(plugin._.handlers.keys or {}, function(_, key)
          if type(key) == "table" and key.desc then
            local desc = key.desc or ""
            map(key.mode or "n", key.lhs, key.rhs, { desc = desc })
          end
        end)
      end)
      require("lazy.core.config").spec = orig_spec
    end
  end)

  ---@type string[]
  local lines = {}

  for _, group in ipairs(groups) do
    lines[#lines + 1] = "## " .. group
    lines[#lines + 1] = ""
    vim.list_extend(lines, { "| Key | Description | Mode |", "| --- | --- | --- |" })
    local mappings = vim.tbl_filter(function(m)
      return m.group == group and m.desc
    end, keymaps)

    table.sort(mappings, function(a, b)
      return a.i < b.i
    end)

    for _, m in ipairs(mappings) do
      lines[#lines + 1] = "| <code>"
        .. m.keys:gsub(">", "&gt;"):gsub("<", "&lt;"):gsub("|", "&vert;")
        .. "</code> | "
        .. m.desc
        .. " | "
        .. table.concat(
          vim.tbl_map(function(mode)
            return "**" .. mode .. "**"
          end, m.mode),
          ", "
        )
        .. " |"
    end
    lines[#lines + 1] = ""
  end
  return { content = table.concat(lines, "\n") }
end

function M.general()
  local lines = {
    [[
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
]],
  } ---@type string[]
  for _, entry in ipairs({
    { name = "options", title = "Options" },
    { name = "keymaps", title = "Keymaps" },
    { name = "autocmds", title = "Auto Commands" },
  }) do
    local name, title = entry.name, entry.title
    lines[#lines + 1] = "## " .. title
    vim.list_extend(lines, {
      "",
      "<Tabs>",
      ([[<TabItem value="custom" label="Custom %s">]]):format(title),
      "",
      ([[```lua title="lua/config/%s.lua"
%s
```]]):format(name, Util.read_file(vim.fn.fnamemodify(rootStarter .. "/lua/config/" .. name .. ".lua", ":p"))),
      "",
      "</TabItem>",
      ([[<TabItem value="defaults" label="Default %s">]]):format(title),
      "",
      ([[```lua title="lazyvim.config.%s"
%s
```]]):format(
        name,
        Util.read_file(vim.fn.fnamemodify(rootLazyVim .. "/lua/lazyvim/config/" .. name .. ".lua", ":p"))
      ),
      "",
      "</TabItem>",
      "</Tabs>",
      "",
    })
  end
  return { content = table.concat(lines, "\n") }
end

function M.recipes()
  local src = Util.read_file(vim.fs.normalize(root .. "/lua/recipes.lua"))
  local lines = vim.split(src, "\n")
  local ret = {}
  local header = {} ---@type string[]
  local block = {} ---@type string[]
  for _, line in ipairs(lines) do
    local comment = line:match("^  %-%- ?(.*)")
    if comment then
      header[#header + 1] = comment
    elseif line:find("^  {") then
      block = { "{" }
    elseif line:find("^  }") then
      block[#block + 1] = "  }"
      vim.list_extend(ret, header)
      ret[#ret + 1] = "\n```lua"
      local code = Docs.fix_indent(table.concat(block, "\n"))
      ret[#ret + 1] = code
      ret[#ret + 1] = "```\n"
      header = {}
      block = {}
    else
      block[#block + 1] = line
    end
  end
  return { content = table.concat(ret, "\n") }
end

function M.extract_options(extra_file)
  local contents = Util.read_file(extra_file)
  local lines = vim.split(contents, "\n")
  ---@type string[]
  local ret = {}
  local options = false
  for _, line in ipairs(lines) do
    if line == [[if lazyvim_docs then]] then
      options = true
    elseif line == [[end]] then
      options = false
    elseif options then
      ret[#ret + 1] = vim.trim(line)
    end
  end
  return #ret > 0 and table.concat(ret, "\n") or nil
end

function M.update()
  local news = Util.read_file(rootLazyVim .. "/NEWS.md")
  news = "---\nsidebar_position: 2\n---\n\n" .. news
  news = news:gsub("# What's new", "# 📰 What's new")
  Util.write_file("docs/news.md", news)

  local Plugin = require("lazy.core.plugin")
  --- include all specs
  ---
  function Plugin.Spec:fix_disabled()
    for _, plugin in pairs(self.plugins) do
      if plugin.enabled == false then
        self:remove_fragments(plugin.name, { self = true })
      end
    end
    self:rebuild()
  end
  local docs = vim.fs.normalize(root .. "/docs")

  local config = Docs.extract(rootLazyVim .. "/lua/lazyvim/config/init.lua", "\nlocal defaults = ({.-\n})")

  Docs.save({
    config = config,
  }, docs .. "/configuration/index.md")

  Docs.save({
    general = M.general(),
  }, docs .. "/configuration/general.md")

  Docs.save({
    recipes = M.recipes(),
  }, docs .. "/configuration/recipes.md")

  Docs.save({
    lazy = {
      content = [[```lua title="lua/config/lazy.lua"]] .. "\n" .. Util.read_file(
        vim.fn.fnamemodify(rootStarter .. "/lua/config/lazy.lua", ":p")
      ) .. "\n```",
    },
  }, docs .. "/configuration/lazy.nvim.md")

  Docs.save({
    keymaps = M.keymaps(),
  }, docs .. "/keymaps.md")

  Util.walk(rootLazyVim .. "/lua/lazyvim/plugins/extras", function(path, name, type)
    if type == "file" and name:find("%.lua$") then
      local modname = path:gsub(".*/lua/", ""):gsub("/", "."):gsub("%.lua$", "")
      local lines = {} ---@type string[]
      local title = modname:match("%.([^%.]+)$")
      title = title:sub(1, 1):upper() .. title:sub(2)
      print(path)
      local options = M.extract_options(path)
      if options then
        options = ([[
### Options

Additional options for this extra can be configured in your [lua/config/options.lua](/configuration/general#options) file:

```lua title="lua/config/options.lua"
%s
```

]]):format(options)
      end
      vim.list_extend(lines, {
        "",
        ([[
:::info
You can enable the extra with the `:LazyExtras` command.
Plugins marked as optional will only be configured if they are installed.
:::

<details>
<summary>Alternatively, you can add it to your <code>lazy.nvim</code> imports</summary>

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "%s" },
    { import = "plugins" },
  },
})
```

</details>

%sBelow you can find a list of included plugins and their default settings.

:::caution
You don't need to copy the default settings to your config.
They are only shown here for reference.
:::
]]):format(modname, options or ""),
        M.plugins("extras/" .. path:gsub(".*/extras/", "")).content,
        "",
      })
      local md_file = docs .. "/extras/" .. modname:gsub(".*extras%.", ""):gsub("%.", "/", 1) .. ".md"
      if not vim.loop.fs_stat(md_file) then
        local dir = vim.fn.fnamemodify(md_file, ":h")
        vim.fn.mkdir(dir, "p")
        Util.write_file(
          md_file,
          ([[
# `%s`

<!-- plugins:start -->
<!-- plugins:end -->
]]):format(title)
        )
      end

      Docs.save({
        plugins = { content = table.concat(lines, "\n") },
      }, md_file)
    end
  end)

  local examples = vim.fn.fnamemodify(rootStarter .. "/lua/plugins/example.lua", ":p")
  Docs.save({
    examples = Util.read_file(examples):gsub("^[^\n]+\n[^\n]+\n[^\n]+\n", ""),
  }, docs .. "/configuration/examples.md")

  Docs.save({
    plugins = M.plugins("lsp/init.lua"),
  }, docs .. "/plugins/lsp.md")

  for _, p in ipairs({ "coding", "colorscheme", "editor", "treesitter", "ui", "util", "formatting", "linting" }) do
    Docs.save({
      plugins = M.plugins(p .. ".lua"),
    }, docs .. "/plugins/" .. p .. ".md")
  end
end

function M.plugins(path)
  LazyVim.pick.picker = nil
  local test = rootLazyVim .. "/lua/lazyvim/plugins/" .. path
  local mod = dofile(test)
  local imports = {}
  for _, v in pairs(mod) do
    if type(v) == "table" and v.import then
      table.insert(imports, v.import)
    end
  end
  if #imports > 0 then
    local nmod = {}
    for _, v in ipairs(mod) do
      if not (type(v) == "table" and v.import) then
        table.insert(nmod, v)
      end
    end
    mod = nmod
  end
  local spec = require("lazy.core.plugin").Spec.new(mod, { optional = true })
  local source = Util.read_file(test)
  local parser = vim.treesitter.get_string_parser(source, "lua")
  parser:parse()
  local query = vim.treesitter.query.parse("lua", [[(table_constructor (field value: ( (string))@plugin !name))]])

  ---@type {code: string, opts: string, name: string, comment?:string, url: string, optional?: boolean, idx:number}[]
  local plugins = {}
  local found = {} ---@type table<string, boolean>

  local function get_text(node)
    return Docs.fix_indent(vim.treesitter.get_node_text(node, source))
  end

  local function get_field(node, field)
    for child in node:iter_children() do
      if child:type() == "field" then
        local name_node = child:field("name")[1]
        if name_node and get_text(name_node) == field then
          return child:field("value")[1]
        end
      end
    end
  end

  local function find_plugins(node)
    if node:type() == "string" then
      local text = vim.treesitter.get_node_text(node, source):sub(2, -2)
      if #node:parent():field("name") == 0 then
        local plugin_node = node:parent():parent()
        local first_child = plugin_node:named_child(0)
        if first_child and first_child:field("value")[1] and first_child:field("value")[1]:id() ~= node:id() then
          plugin_node = node
        end
        local comments = {}

        local comment_node = plugin_node:parent():prev_named_sibling()

        while comment_node and comment_node:type() == "comment" do
          table.insert(comments, 1, get_text(comment_node))
          comment_node = comment_node:prev_named_sibling()
        end

        local opts_node = get_field(plugin_node, "opts")

        local name_node = get_field(plugin_node, "name")
        local name = name_node and get_text(name_node):sub(2, -2) or text:match("([^/]*)$")

        if name == "dressing.nvim" and name == text then
          name = "ignore_this"
        end

        local plugin = spec.plugins[name]
        if plugin then
          local url = plugin.url or require("lazy.core.config").plugins[name].url
          if not url then
            error("Missing url for plugin " .. name)
          end
          url = url:gsub("%.git$", "")
          found[name] = true
          plugins[#plugins + 1] = {
            idx = #plugins + 1,
            name = name,
            optional = spec.plugins[name].optional,
            url = url,
            code = get_text(plugin_node),
            comment = #comments > 0 and table.concat(comments, "\n") or nil,
            opts = opts_node and get_text(opts_node) or get_field(plugin_node, "config") and "{}" or nil,
          }
        end
      end
    end
  end

  for id, node in query:iter_captures(parser:trees()[1]:root(), source) do
    local capture_name = query.captures[id]
    if capture_name == "plugin" then
      find_plugins(node)
    end
  end
  for name in pairs(spec.plugins) do
    if not found[name] then
      error("Missing plugins in " .. path .. ": " .. name)
    end
  end

  ---@type string[]
  local lines = {
    [[
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
]],
  }

  table.sort(imports)
  if #imports > 0 then
    lines[#lines + 1] = "### Includes the following extras"
    lines[#lines + 1] = ""
    for _, x in ipairs(imports) do
      x = x:gsub("lazyvim%.plugins%.extras%.", "")
      lines[#lines + 1] = ("- [%s](/extras/%s)"):format(x, x:gsub("%.", "/"))
    end
    lines[#lines + 1] = ""
  end

  -- sort by optional and idx
  table.sort(plugins, function(a, b)
    if a.optional ~= b.optional then
      return b.optional
    end
    return a.idx < b.idx
  end)

  for _, plugin in ipairs(plugins) do
    lines[#lines + 1] = "## ["
      .. plugin.name
      .. "]("
      .. plugin.url
      .. ")"
      .. (plugin.optional and " _(optional)_" or "")

    if plugin.comment then
      lines[#lines + 1] = ""
      lines[#lines + 1] = table.concat(
        vim.tbl_map(function(line)
          return line:gsub("^%-+", "")
        end, vim.split(plugin.comment, "\n")),
        "\n"
      )
      lines[#lines + 1] = ""
    end
    vim.list_extend(lines, {
      "",
      "<Tabs>",
    })
    vim.list_extend(lines, {
      "",
      [[<TabItem value="opts" label="Options">]],
      "",
      "```lua",
      "opts = " .. (plugin.opts or "nil"),
      "```",
      "",
      "</TabItem>",
      "",
    })
    vim.list_extend(lines, {
      "",
      [[<TabItem value="code" label="Full Spec">]],
      "",
      "```lua",
      plugin.code,
      "```",
      "",
      "</TabItem>",
      "",
    })
    vim.list_extend(lines, {
      "</Tabs>",
      "",
    })
  end
  return { content = table.concat(lines, "\n") }
end

M.update()

return M
