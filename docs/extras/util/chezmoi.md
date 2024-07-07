# `Chezmoi`

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
    { import = "lazyvim.plugins.extras.util.chezmoi" },
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

## [chezmoi.vim](https://github.com/alker0/chezmoi.vim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  -- highlighting for chezmoi files template files
  "alker0/chezmoi.vim",
  init = function()
    vim.g["chezmoi#use_tmp_buffer"] = 1
    vim.g["chezmoi#source_dir_path"] = os.getenv("HOME") .. "/.local/share/chezmoi"
  end,
}
```

</TabItem>

</Tabs>

## [chezmoi.nvim](https://github.com/xvzc/chezmoi.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  edit = {
    watch = false,
    force = false,
  },
  notification = {
    on_open = true,
    on_apply = true,
    on_watch = false,
  },
  telescope = {
    select = { "<CR>" },
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "xvzc/chezmoi.nvim",
  keys = {
    {
      "<leader>sz",
      pick_chezmoi,
      desc = "Chezmoi",
    },
  },
  opts = {
    edit = {
      watch = false,
      force = false,
    },
    notification = {
      on_open = true,
      on_apply = true,
      on_watch = false,
    },
    telescope = {
      select = { "<CR>" },
    },
  },
  init = function()
    -- run chezmoi edit on file enter
    vim.api.nvim_create_autocmd({ "BufRead", "BufNewFile" }, {
      pattern = { os.getenv("HOME") .. "/.local/share/chezmoi/*" },
      callback = function()
        vim.schedule(require("chezmoi.commands.__edit").watch)
      end,
    })
  end,
}
```

</TabItem>

</Tabs>

## [mini.icons](https://github.com/echasnovski/mini.icons)

 Filetype icons


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  file = {
    [".chezmoiignore"] = { glyph = "", hl = "MiniIconsGrey" },
    [".chezmoiremove"] = { glyph = "", hl = "MiniIconsGrey" },
    [".chezmoiroot"] = { glyph = "", hl = "MiniIconsGrey" },
    [".chezmoiversion"] = { glyph = "", hl = "MiniIconsGrey" },
    ["bash.tmpl"] = { glyph = "", hl = "MiniIconsGrey" },
    ["json.tmpl"] = { glyph = "", hl = "MiniIconsGrey" },
    ["ps1.tmpl"] = { glyph = "󰨊", hl = "MiniIconsGrey" },
    ["sh.tmpl"] = { glyph = "", hl = "MiniIconsGrey" },
    ["toml.tmpl"] = { glyph = "", hl = "MiniIconsGrey" },
    ["yaml.tmpl"] = { glyph = "", hl = "MiniIconsGrey" },
    ["zsh.tmpl"] = { glyph = "", hl = "MiniIconsGrey" },
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "echasnovski/mini.icons",
  opts = {
    file = {
      [".chezmoiignore"] = { glyph = "", hl = "MiniIconsGrey" },
      [".chezmoiremove"] = { glyph = "", hl = "MiniIconsGrey" },
      [".chezmoiroot"] = { glyph = "", hl = "MiniIconsGrey" },
      [".chezmoiversion"] = { glyph = "", hl = "MiniIconsGrey" },
      ["bash.tmpl"] = { glyph = "", hl = "MiniIconsGrey" },
      ["json.tmpl"] = { glyph = "", hl = "MiniIconsGrey" },
      ["ps1.tmpl"] = { glyph = "󰨊", hl = "MiniIconsGrey" },
      ["sh.tmpl"] = { glyph = "", hl = "MiniIconsGrey" },
      ["toml.tmpl"] = { glyph = "", hl = "MiniIconsGrey" },
      ["yaml.tmpl"] = { glyph = "", hl = "MiniIconsGrey" },
      ["zsh.tmpl"] = { glyph = "", hl = "MiniIconsGrey" },
    },
  },
}
```

</TabItem>

</Tabs>

## [dashboard-nvim](https://github.com/nvimdev/dashboard-nvim) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  local projects = {
    action = pick_chezmoi,
    desc = "  Config",
    icon = "",
    key = "c",
  }

  projects.desc = projects.desc .. string.rep(" ", 43 - #projects.desc)
  projects.key_format = "  %s"

  -- remove lazyvim config property
  for i = #opts.config.center, 1, -1 do
    if opts.config.center[i].key == "c" then
      table.remove(opts.config.center, i)
    end
  end

  table.insert(opts.config.center, 5, projects)
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvimdev/dashboard-nvim",
  optional = true,
  opts = function(_, opts)
    local projects = {
      action = pick_chezmoi,
      desc = "  Config",
      icon = "",
      key = "c",
    }

    projects.desc = projects.desc .. string.rep(" ", 43 - #projects.desc)
    projects.key_format = "  %s"

    -- remove lazyvim config property
    for i = #opts.config.center, 1, -1 do
      if opts.config.center[i].key == "c" then
        table.remove(opts.config.center, i)
      end
    end

    table.insert(opts.config.center, 5, projects)
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
