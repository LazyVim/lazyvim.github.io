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
  ---@type lspconfig.options
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

      local function get_client(buf)
        return vim.lsp.get_clients({ name = "eslint", bufnr = buf })[1]
      end

      local formatter = LazyVim.lsp.formatter({
        name = "eslint: lsp",
        primary = false,
        priority = 200,
        filter = "eslint",
      })

      -- Use EslintFixAll on Neovim < 0.10.0
      if not pcall(require, "vim.lsp._dynamic") then
        formatter.name = "eslint: EslintFixAll"
        formatter.sources = function(buf)
          local client = get_client(buf)
          return client and { "eslint" } or {}
        end
        formatter.format = function(buf)
          local client = get_client(buf)
          if client then
            local diag = vim.diagnostic.get(buf, { namespace = vim.lsp.diagnostic.get_namespace(client.id) })
            if #diag > 0 then
              vim.cmd("EslintFixAll")
            end
          end
        end
      end

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
    ---@type lspconfig.options
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

        local function get_client(buf)
          return vim.lsp.get_clients({ name = "eslint", bufnr = buf })[1]
        end

        local formatter = LazyVim.lsp.formatter({
          name = "eslint: lsp",
          primary = false,
          priority = 200,
          filter = "eslint",
        })

        -- Use EslintFixAll on Neovim < 0.10.0
        if not pcall(require, "vim.lsp._dynamic") then
          formatter.name = "eslint: EslintFixAll"
          formatter.sources = function(buf)
            local client = get_client(buf)
            return client and { "eslint" } or {}
          end
          formatter.format = function(buf)
            local client = get_client(buf)
            if client then
              local diag = vim.diagnostic.get(buf, { namespace = vim.lsp.diagnostic.get_namespace(client.id) })
              if #diag > 0 then
                vim.cmd("EslintFixAll")
              end
            end
          end
        end

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
