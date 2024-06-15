# edgy.nvim

<!-- plugins:start -->

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
    { import = "lazyvim.plugins.extras.ui.edgy" },
    { import = "plugins" },
  },
})
```

</details>

Below you can find a list of included plugins and their default settings.

:::caution
You don't need to copy the default settings to your config.
They are only shown here for reference.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [edgy.nvim](https://github.com/folke/edgy.nvim)

 edgy


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  local opts = {
    bottom = {
      {
        ft = "toggleterm",
        size = { height = 0.4 },
        filter = function(buf, win)
          return vim.api.nvim_win_get_config(win).relative == ""
        end,
      },
      {
        ft = "noice",
        size = { height = 0.4 },
        filter = function(buf, win)
          return vim.api.nvim_win_get_config(win).relative == ""
        end,
      },
      {
        ft = "lazyterm",
        title = "LazyTerm",
        size = { height = 0.4 },
        filter = function(buf)
          return not vim.b[buf].lazyterm_cmd
        end,
      },
      "Trouble",
      { ft = "qf", title = "QuickFix" },
      {
        ft = "help",
        size = { height = 20 },
        -- don't open help files in edgy that we're editing
        filter = function(buf)
          return vim.bo[buf].buftype == "help"
        end,
      },
      { title = "Spectre", ft = "spectre_panel", size = { height = 0.4 } },
      { title = "Neotest Output", ft = "neotest-output-panel", size = { height = 15 } },
    },
    left = {
      {
        title = "Neo-Tree",
        ft = "neo-tree",
        filter = function(buf)
          return vim.b[buf].neo_tree_source == "filesystem"
        end,
        pinned = true,
        open = function()
          require("neo-tree.command").execute({ dir = LazyVim.root() })
        end,
        size = { height = 0.5 },
      },
      { title = "Neotest Summary", ft = "neotest-summary" },
      {
        title = "Neo-Tree Other",
        ft = "neo-tree",
        filter = function(buf)
          return vim.b[buf].neo_tree_source ~= nil
        end,
      },
      -- "neo-tree",
    },
    keys = {
      -- increase width
      ["<c-Right>"] = function(win)
        win:resize("width", 2)
      end,
      -- decrease width
      ["<c-Left>"] = function(win)
        win:resize("width", -2)
      end,
      -- increase height
      ["<c-Up>"] = function(win)
        win:resize("height", 2)
      end,
      -- decrease height
      ["<c-Down>"] = function(win)
        win:resize("height", -2)
      end,
    },
  }

  -- only add neo-tree sources if they are enabled in config
  local neotree_opts = LazyVim.opts("neo-tree.nvim")
  local neotree_sources = { buffers = "top", git_status = "right" }

  for source, pos in pairs(neotree_sources) do
    if vim.list_contains(neotree_opts.sources, source) then
      table.insert(opts.left, 3, {
        title = "Neo-Tree " .. source:gsub("_", " "),
        ft = "neo-tree",
        filter = function(buf)
          return vim.b[buf].neo_tree_source == source
        end,
        pinned = true,
        open = "Neotree position=" .. pos .. " " .. source,
      })
    end
  end

  for _, pos in ipairs({ "top", "bottom", "left", "right" }) do
    opts[pos] = opts[pos] or {}
    table.insert(opts[pos], {
      ft = "trouble",
      filter = function(_buf, win)
        return vim.w[win].trouble
          and vim.w[win].trouble.position == pos
          and vim.w[win].trouble.type == "split"
          and vim.w[win].trouble.relative == "editor"
          and not vim.w[win].trouble_preview
      end,
    })
  end
  return opts
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "folke/edgy.nvim",
  event = "VeryLazy",
  keys = {
    {
      "<leader>ue",
      function()
        require("edgy").toggle()
      end,
      desc = "Edgy Toggle",
    },
    -- stylua: ignore
    { "<leader>uE", function() require("edgy").select() end, desc = "Edgy Select Window" },
  },
  opts = function()
    local opts = {
      bottom = {
        {
          ft = "toggleterm",
          size = { height = 0.4 },
          filter = function(buf, win)
            return vim.api.nvim_win_get_config(win).relative == ""
          end,
        },
        {
          ft = "noice",
          size = { height = 0.4 },
          filter = function(buf, win)
            return vim.api.nvim_win_get_config(win).relative == ""
          end,
        },
        {
          ft = "lazyterm",
          title = "LazyTerm",
          size = { height = 0.4 },
          filter = function(buf)
            return not vim.b[buf].lazyterm_cmd
          end,
        },
        "Trouble",
        { ft = "qf", title = "QuickFix" },
        {
          ft = "help",
          size = { height = 20 },
          -- don't open help files in edgy that we're editing
          filter = function(buf)
            return vim.bo[buf].buftype == "help"
          end,
        },
        { title = "Spectre", ft = "spectre_panel", size = { height = 0.4 } },
        { title = "Neotest Output", ft = "neotest-output-panel", size = { height = 15 } },
      },
      left = {
        {
          title = "Neo-Tree",
          ft = "neo-tree",
          filter = function(buf)
            return vim.b[buf].neo_tree_source == "filesystem"
          end,
          pinned = true,
          open = function()
            require("neo-tree.command").execute({ dir = LazyVim.root() })
          end,
          size = { height = 0.5 },
        },
        { title = "Neotest Summary", ft = "neotest-summary" },
        {
          title = "Neo-Tree Other",
          ft = "neo-tree",
          filter = function(buf)
            return vim.b[buf].neo_tree_source ~= nil
          end,
        },
        -- "neo-tree",
      },
      keys = {
        -- increase width
        ["<c-Right>"] = function(win)
          win:resize("width", 2)
        end,
        -- decrease width
        ["<c-Left>"] = function(win)
          win:resize("width", -2)
        end,
        -- increase height
        ["<c-Up>"] = function(win)
          win:resize("height", 2)
        end,
        -- decrease height
        ["<c-Down>"] = function(win)
          win:resize("height", -2)
        end,
      },
    }

    -- only add neo-tree sources if they are enabled in config
    local neotree_opts = LazyVim.opts("neo-tree.nvim")
    local neotree_sources = { buffers = "top", git_status = "right" }

    for source, pos in pairs(neotree_sources) do
      if vim.list_contains(neotree_opts.sources, source) then
        table.insert(opts.left, 3, {
          title = "Neo-Tree " .. source:gsub("_", " "),
          ft = "neo-tree",
          filter = function(buf)
            return vim.b[buf].neo_tree_source == source
          end,
          pinned = true,
          open = "Neotree position=" .. pos .. " " .. source,
        })
      end
    end

    for _, pos in ipairs({ "top", "bottom", "left", "right" }) do
      opts[pos] = opts[pos] or {}
      table.insert(opts[pos], {
        ft = "trouble",
        filter = function(_buf, win)
          return vim.w[win].trouble
            and vim.w[win].trouble.position == pos
            and vim.w[win].trouble.type == "split"
            and vim.w[win].trouble.relative == "editor"
            and not vim.w[win].trouble_preview
        end,
      })
    end
    return opts
  end,
}
```

</TabItem>

</Tabs>

## [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim) _(optional)_

 use edgy's selection window


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  defaults = {
    get_selection_window = function()
      require("edgy").goto_main()
      return 0
    end,
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-telescope/telescope.nvim",
  optional = true,
  opts = {
    defaults = {
      get_selection_window = function()
        require("edgy").goto_main()
        return 0
      end,
    },
  },
}
```

</TabItem>

</Tabs>

## [neo-tree.nvim](https://github.com/nvim-neo-tree/neo-tree.nvim) _(optional)_

 prevent neo-tree from opening files in edgy windows


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  opts.open_files_do_not_replace_types = opts.open_files_do_not_replace_types
    or { "terminal", "Trouble", "qf", "Outline", "trouble" }
  table.insert(opts.open_files_do_not_replace_types, "edgy")
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-neo-tree/neo-tree.nvim",
  optional = true,
  opts = function(_, opts)
    opts.open_files_do_not_replace_types = opts.open_files_do_not_replace_types
      or { "terminal", "Trouble", "qf", "Outline", "trouble" }
    table.insert(opts.open_files_do_not_replace_types, "edgy")
  end,
}
```

</TabItem>

</Tabs>

## [bufferline.nvim](https://github.com/akinsho/bufferline.nvim) _(optional)_

 Fix bufferline offsets when edgy is loaded


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  local Offset = require("bufferline.offset")
  if not Offset.edgy then
    local get = Offset.get
    Offset.get = function()
      if package.loaded.edgy then
        local layout = require("edgy.config").layout
        local ret = { left = "", left_size = 0, right = "", right_size = 0 }
        for _, pos in ipairs({ "left", "right" }) do
          local sb = layout[pos]
          if sb and #sb.wins > 0 then
            local title = " Sidebar" .. string.rep(" ", sb.bounds.width - 8)
            ret[pos] = "%#EdgyTitle#" .. title .. "%*" .. "%#WinSeparator#│%*"
            ret[pos .. "_size"] = sb.bounds.width
          end
        end
        ret.total_size = ret.left_size + ret.right_size
        if ret.total_size > 0 then
          return ret
        end
      end
      return get()
    end
    Offset.edgy = true
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "akinsho/bufferline.nvim",
  optional = true,
  opts = function()
    local Offset = require("bufferline.offset")
    if not Offset.edgy then
      local get = Offset.get
      Offset.get = function()
        if package.loaded.edgy then
          local layout = require("edgy.config").layout
          local ret = { left = "", left_size = 0, right = "", right_size = 0 }
          for _, pos in ipairs({ "left", "right" }) do
            local sb = layout[pos]
            if sb and #sb.wins > 0 then
              local title = " Sidebar" .. string.rep(" ", sb.bounds.width - 8)
              ret[pos] = "%#EdgyTitle#" .. title .. "%*" .. "%#WinSeparator#│%*"
              ret[pos .. "_size"] = sb.bounds.width
            end
          end
          ret.total_size = ret.left_size + ret.right_size
          if ret.total_size > 0 then
            return ret
          end
        end
        return get()
      end
      Offset.edgy = true
    end
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
