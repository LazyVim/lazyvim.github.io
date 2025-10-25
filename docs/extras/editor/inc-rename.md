# `Inc-rename`

<!-- plugins:start -->

:::info
You can enable the extra with the `:LazyExtras` command.
Plugins marked as optional will only be configured if they are installed.
:::

Below you can find a list of included plugins and their default settings.

:::caution
You don't need to copy the default settings to your config.
They are only shown here for reference.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [inc-rename.nvim](https://github.com/smjonas/inc-rename.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "smjonas/inc-rename.nvim",
  cmd = "IncRename",
  opts = {},
}
```

</TabItem>

</Tabs>

## [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)

 LSP Keymaps


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  servers = {
    ["*"] = {
      keys = {
        {
          "<leader>cr",
          function()
            local inc_rename = require("inc_rename")
            return ":" .. inc_rename.config.cmd_name .. " " .. vim.fn.expand("<cword>")
          end,
          expr = true,
          desc = "Rename (inc-rename.nvim)",
          has = "rename",
        },
      },
    },
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "neovim/nvim-lspconfig",
  opts = {
    servers = {
      ["*"] = {
        keys = {
          {
            "<leader>cr",
            function()
              local inc_rename = require("inc_rename")
              return ":" .. inc_rename.config.cmd_name .. " " .. vim.fn.expand("<cword>")
            end,
            expr = true,
            desc = "Rename (inc-rename.nvim)",
            has = "rename",
          },
        },
      },
    },
  },
}
```

</TabItem>

</Tabs>

## [noice.nvim](https://github.com/folke/noice.nvim) _(optional)_

 Noice integration


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  presets = { inc_rename = true },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "folke/noice.nvim",
  optional = true,
  opts = {
    presets = { inc_rename = true },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
