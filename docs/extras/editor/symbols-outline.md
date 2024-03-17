# Symbols Outline

<!-- plugins:start -->

:::caution
This plugin is now migrated to a new Github repository and managed by another plugin inside Lazyvim.
Please check out the new plugin document [outline.nvim](./outline.md).
For compatability, we are still keeping the old plugin document here, [as well as automatically maintaining the old configuration to the new plugin.](https://github.com/LazyVim/LazyVim/commit/ee2e876252c82458d47617b6d87d827ea442ddcd)
However, for the latest information, please refer to the new plugin document.
:::

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
    { import = "lazyvim.plugins.extras.editor.symbols-outline" },
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

## [symbols-outline.nvim](https://github.com/simrat39/symbols-outline.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  local Config = require("lazyvim.config")
  local defaults = require("symbols-outline.config").defaults
  local opts = {
    symbols = {},
    symbol_blacklist = {},
  }
  local filter = Config.kind_filter

  if type(filter) == "table" then
    filter = filter.default
    if type(filter) == "table" then
      for kind, symbol in pairs(defaults.symbols) do
        opts.symbols[kind] = {
          icon = Config.icons.kinds[kind] or symbol.icon,
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
  "simrat39/symbols-outline.nvim",
  keys = { { "<leader>cs", "<cmd>SymbolsOutline<cr>", desc = "Symbols Outline" } },
  cmd = "SymbolsOutline",
  opts = function()
    local Config = require("lazyvim.config")
    local defaults = require("symbols-outline.config").defaults
    local opts = {
      symbols = {},
      symbol_blacklist = {},
    }
    local filter = Config.kind_filter

    if type(filter) == "table" then
      filter = filter.default
      if type(filter) == "table" then
        for kind, symbol in pairs(defaults.symbols) do
          opts.symbols[kind] = {
            icon = Config.icons.kinds[kind] or symbol.icon,
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

## [edgy.nvim](https://github.com/folke/edgy.nvim) _(optional)_

 edgy integration

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  local edgy_idx = Util.plugin.extra_idx("ui.edgy")
  local symbols_idx = Util.plugin.extra_idx("editor.symbols-outline")

  if edgy_idx and edgy_idx > symbols_idx then
    Util.warn(
      "The `edgy.nvim` extra must be **imported** before the `symbols-outline.nvim` extra to work properly.",
      {
        title = "LazyVim",
      }
    )
  end

  opts.right = opts.right or {}
  table.insert(opts.right, {
    title = "Symbols Outline",
    ft = "Outline",
    pinned = true,
    open = "SymbolsOutline",
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
    local edgy_idx = Util.plugin.extra_idx("ui.edgy")
    local symbols_idx = Util.plugin.extra_idx("editor.symbols-outline")

    if edgy_idx and edgy_idx > symbols_idx then
      Util.warn(
        "The `edgy.nvim` extra must be **imported** before the `symbols-outline.nvim` extra to work properly.",
        {
          title = "LazyVim",
        }
      )
    end

    opts.right = opts.right or {}
    table.insert(opts.right, {
      title = "Symbols Outline",
      ft = "Outline",
      pinned = true,
      open = "SymbolsOutline",
    })
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
