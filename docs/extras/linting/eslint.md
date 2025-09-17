# Eslint

<!-- plugins:start -->

:::info
You can enable the extra with the `:LazyExtras` command.
Plugins marked as optional will only be configured if they are installed.
:::

### Options

Additional options for this extra can be configured in your [lua/config/options.lua](/configuration/general#options) file:

```lua title="lua/config/options.lua"
-- Set to false to disable auto format
vim.g.lazyvim_eslint_auto_format = true
```

Below you can find a list of included plugins and their default settings.

:::caution
You don't need to copy the default settings to your config.
They are only shown here for reference.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  ---@type table<string, vim.lsp.Config>
  servers = {
    eslint = {
      settings = {
        -- helps eslint find the eslintrc when it's placed in a subfolder instead of the cwd root
        workingDirectories = { mode = "auto" },
        format = auto_format,
      },
    },
  },
  setup = {
    eslint = function()
      if not auto_format then
        return
      end

      local formatter = LazyVim.lsp.formatter({
        name = "eslint: lsp",
        primary = false,
        priority = 200,
        filter = "eslint",
      })

      -- register the formatter with LazyVim
      LazyVim.format.register(formatter)
    end,
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "neovim/nvim-lspconfig",
  -- other settings removed for brevity
  opts = {
    ---@type table<string, vim.lsp.Config>
    servers = {
      eslint = {
        settings = {
          -- helps eslint find the eslintrc when it's placed in a subfolder instead of the cwd root
          workingDirectories = { mode = "auto" },
          format = auto_format,
        },
      },
    },
    setup = {
      eslint = function()
        if not auto_format then
          return
        end

        local formatter = LazyVim.lsp.formatter({
          name = "eslint: lsp",
          primary = false,
          priority = 200,
          filter = "eslint",
        })

        -- register the formatter with LazyVim
        LazyVim.format.register(formatter)
      end,
    },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
