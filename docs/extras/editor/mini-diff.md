# `Mini-diff`

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
    { import = "lazyvim.plugins.extras.editor.mini-diff" },
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

## [mini.diff](https://github.com/echasnovski/mini.diff)

 setup mini.diff


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  view = {
    style = "sign",
    signs = {
      add = "▎",
      change = "▎",
      delete = "",
    },
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "echasnovski/mini.diff",
  event = "VeryLazy",
  keys = {
    {
      "<leader>go",
      function()
        require("mini.diff").toggle_overlay(0)
      end,
      desc = "Toggle mini.diff overlay",
    },
  },
  opts = {
    view = {
      style = "sign",
      signs = {
        add = "▎",
        change = "▎",
        delete = "",
      },
    },
  },
}
```

</TabItem>

</Tabs>

## [lualine.nvim](https://github.com/nvim-lualine/lualine.nvim)

 lualine integration


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  local x = opts.sections.lualine_x
  for _, comp in ipairs(x) do
    if comp[1] == "diff" then
      comp.source = function()
        local summary = vim.b.minidiff_summary
        return summary
          and {
            added = summary.add,
            modified = summary.change,
            removed = summary.delete,
          }
      end
      break
    end
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-lualine/lualine.nvim",
  opts = function(_, opts)
    local x = opts.sections.lualine_x
    for _, comp in ipairs(x) do
      if comp[1] == "diff" then
        comp.source = function()
          local summary = vim.b.minidiff_summary
          return summary
            and {
              added = summary.add,
              modified = summary.change,
              removed = summary.delete,
            }
        end
        break
      end
    end
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
