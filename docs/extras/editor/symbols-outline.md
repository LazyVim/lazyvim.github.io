# `editor.symbols-outline`

<!-- plugins:start -->

To use this, add it to your **lazy.nvim** imports:

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.editor.symbols-outline" },
    { import = "plugins" },
  },
})
```

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

  for kind, symbol in pairs(defaults.symbols) do
    opts.symbols[kind] = {
      icon = Config.icons.kinds[kind] or symbol.icon,
      hl = symbol.hl,
    }
    if not vim.tbl_contains(Config.kind_filter.default, kind) then
      table.insert(opts.symbol_blacklist, kind)
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

    for kind, symbol in pairs(defaults.symbols) do
      opts.symbols[kind] = {
        icon = Config.icons.kinds[kind] or symbol.icon,
        hl = symbol.hl,
      }
      if not vim.tbl_contains(Config.kind_filter.default, kind) then
        table.insert(opts.symbol_blacklist, kind)
      end
    end
    return opts
  end,
}
```

</TabItem>

</Tabs>

## [edgy.nvim](https://github.com/folke/edgy.nvim)

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
