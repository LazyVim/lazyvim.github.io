# `Outline`

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
    { import = "lazyvim.plugins.extras.editor.outline" },
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

## [outline.nvim](https://github.com/hedyhli/outline.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  local defaults = require("outline.config").defaults
  local opts = {
    symbols = {},
    symbol_blacklist = {},
    keymaps = {
      up_and_jump = "<up>",
      down_and_jump = "<down>",
    },
  }
  local filter = LazyVim.config.kind_filter

  if type(filter) == "table" then
    filter = filter.default
    if type(filter) == "table" then
      for kind, symbol in pairs(defaults.symbols) do
        opts.symbols[kind] = {
          icon = LazyVim.config.icons.kinds[kind] or symbol.icon,
          hl = symbol.hl,
        }
        if not vim.tbl_contains(filter, kind) then
          table.insert(opts.symbol_blacklist, kind)
        end
      end
    end
  end
  return opts
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "hedyhli/outline.nvim",
  keys = { { "<leader>cs", "<cmd>Outline<cr>", desc = "Toggle Outline" } },
  cmd = "Outline",
  opts = function()
    local defaults = require("outline.config").defaults
    local opts = {
      symbols = {},
      symbol_blacklist = {},
      keymaps = {
        up_and_jump = "<up>",
        down_and_jump = "<down>",
      },
    }
    local filter = LazyVim.config.kind_filter

    if type(filter) == "table" then
      filter = filter.default
      if type(filter) == "table" then
        for kind, symbol in pairs(defaults.symbols) do
          opts.symbols[kind] = {
            icon = LazyVim.config.icons.kinds[kind] or symbol.icon,
            hl = symbol.hl,
          }
          if not vim.tbl_contains(filter, kind) then
            table.insert(opts.symbol_blacklist, kind)
          end
        end
      end
    end
    return opts
  end,
}
```

</TabItem>

</Tabs>

## [trouble.nvim](https://github.com/folke/trouble.nvim) _(optional)_

 Disable `<leader>cs` keymap so it doesn't conflict with `outline.nvim`


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "folke/trouble.nvim",
  optional = true,
  keys = {
    { "<leader>cs", false },
  },
}
```

</TabItem>

</Tabs>

## [edgy.nvim](https://github.com/folke/edgy.nvim) _(optional)_

 edgy integration


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  local edgy_idx = LazyVim.plugin.extra_idx("ui.edgy")
  local symbols_idx = LazyVim.plugin.extra_idx("editor.outline")

  if edgy_idx and edgy_idx > symbols_idx then
    LazyVim.warn(
      "The `edgy.nvim` extra must be **imported** before the `outline.nvim` extra to work properly.",
      { title = "LazyVim" }
    )
  end

  opts.right = opts.right or {}
  table.insert(opts.right, {
    title = "Outline",
    ft = "Outline",
    pinned = true,
    open = "Outline",
  })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "folke/edgy.nvim",
  optional = true,
  opts = function(_, opts)
    local edgy_idx = LazyVim.plugin.extra_idx("ui.edgy")
    local symbols_idx = LazyVim.plugin.extra_idx("editor.outline")

    if edgy_idx and edgy_idx > symbols_idx then
      LazyVim.warn(
        "The `edgy.nvim` extra must be **imported** before the `outline.nvim` extra to work properly.",
        { title = "LazyVim" }
      )
    end

    opts.right = opts.right or {}
    table.insert(opts.right, {
      title = "Outline",
      ft = "Outline",
      pinned = true,
      open = "Outline",
    })
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
