# `Typescript`

<!-- plugins:start -->

:::info
You can enable the extra with the `:LazyExtras` command.
Plugins marked as optional will only be configured if they are installed.
:::

### Options

Additional options for this extra can be configured in your [lua/config/options.lua](/configuration/general#options) file:

```lua title="lua/config/options.lua"
-- LSP Server to use for TypeScript.
---@type "vtsls" | "tsgo"
vim.g.lazyvim_ts_lsp = "vtsls" -- currently the default

-- To use the newer, much faster `tsgo` LSP server, either:
-- * enable the `tsgo` extra, or
-- * set `vim.g.lazyvim_ts_lsp = "tsgo"` in your `options.lua`
```

Below you can find a list of included plugins and their default settings.

:::caution
You don't need to copy the default settings to your config.
They are only shown here for reference.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Includes the following extras

- [lang.typescript.vtsls](/extras/lang/typescript/vtsls)

## [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)

 correctly setup lspconfig


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  local lsp = extra.name or "vtsls"
  local servers = { "tsserver", "ts_ls", "vtsls", "tsgo", lsp }
  for _, server in ipairs(servers) do
    opts.servers[server] = opts.servers[server] or {}
    opts.servers[server].enabled = server == lsp
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "neovim/nvim-lspconfig",
  opts = function(_, opts)
    local lsp = extra.name or "vtsls"
    local servers = { "tsserver", "ts_ls", "vtsls", "tsgo", lsp }
    for _, server in ipairs(servers) do
      opts.servers[server] = opts.servers[server] or {}
      opts.servers[server].enabled = server == lsp
    end
  end,
}
```

</TabItem>

</Tabs>

## [mason.nvim](https://github.com/mason-org/mason.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  opts.ensure_installed = opts.ensure_installed or {}
  table.insert(opts.ensure_installed, "js-debug-adapter")
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "mason-org/mason.nvim",
  opts = function(_, opts)
    opts.ensure_installed = opts.ensure_installed or {}
    table.insert(opts.ensure_installed, "js-debug-adapter")
  end,
}
```

</TabItem>

</Tabs>

## [mini.icons](https://github.com/nvim-mini/mini.icons)

 Filetype icons


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  file = {
    [".eslintrc.js"] = { glyph = "󰱺", hl = "MiniIconsYellow" },
    [".node-version"] = { glyph = "", hl = "MiniIconsGreen" },
    [".prettierrc"] = { glyph = "", hl = "MiniIconsPurple" },
    [".yarnrc.yml"] = { glyph = "", hl = "MiniIconsBlue" },
    ["eslint.config.js"] = { glyph = "󰱺", hl = "MiniIconsYellow" },
    ["package.json"] = { glyph = "", hl = "MiniIconsGreen" },
    ["tsconfig.json"] = { glyph = "", hl = "MiniIconsAzure" },
    ["tsconfig.build.json"] = { glyph = "", hl = "MiniIconsAzure" },
    ["yarn.lock"] = { glyph = "", hl = "MiniIconsBlue" },
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-mini/mini.icons",
  opts = {
    file = {
      [".eslintrc.js"] = { glyph = "󰱺", hl = "MiniIconsYellow" },
      [".node-version"] = { glyph = "", hl = "MiniIconsGreen" },
      [".prettierrc"] = { glyph = "", hl = "MiniIconsPurple" },
      [".yarnrc.yml"] = { glyph = "", hl = "MiniIconsBlue" },
      ["eslint.config.js"] = { glyph = "󰱺", hl = "MiniIconsYellow" },
      ["package.json"] = { glyph = "", hl = "MiniIconsGreen" },
      ["tsconfig.json"] = { glyph = "", hl = "MiniIconsAzure" },
      ["tsconfig.build.json"] = { glyph = "", hl = "MiniIconsAzure" },
      ["yarn.lock"] = { glyph = "", hl = "MiniIconsBlue" },
    },
  },
}
```

</TabItem>

</Tabs>

## [nvim-dap](https://github.com/mfussenegger/nvim-dap) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  local dap = require("dap")

  for _, adapterType in ipairs({ "node", "chrome", "msedge" }) do
    local pwaType = "pwa-" .. adapterType

    if not dap.adapters[pwaType] then
      dap.adapters[pwaType] = {
        type = "server",
        host = "localhost",
        port = "${port}",
        executable = {
          command = "js-debug-adapter",
          args = { "${port}" },
        },
      }
    end

    -- Define adapters without the "pwa-" prefix for VSCode compatibility
    if not dap.adapters[adapterType] then
      dap.adapters[adapterType] = function(cb, config)
        local nativeAdapter = dap.adapters[pwaType]

        config.type = pwaType

        if type(nativeAdapter) == "function" then
          nativeAdapter(cb, config)
        else
          cb(nativeAdapter)
        end
      end
    end
  end

  local js_filetypes = { "typescript", "javascript", "typescriptreact", "javascriptreact" }

  local vscode = require("dap.ext.vscode")
  vscode.type_to_filetypes["node"] = js_filetypes
  vscode.type_to_filetypes["pwa-node"] = js_filetypes

  for _, language in ipairs(js_filetypes) do
    if not dap.configurations[language] then
      local runtimeExecutable = nil
      if language:find("typescript") then
        runtimeExecutable = vim.fn.executable("tsx") == 1 and "tsx" or "ts-node"
      end
      dap.configurations[language] = {
        {
          type = "pwa-node",
          request = "launch",
          name = "Launch file",
          program = "${file}",
          cwd = "${workspaceFolder}",
          sourceMaps = true,
          runtimeExecutable = runtimeExecutable,
          skipFiles = {
            "<node_internals>/**",
            "node_modules/**",
          },
          resolveSourceMapLocations = {
            "${workspaceFolder}/**",
            "!**/node_modules/**",
          },
        },
        {
          type = "pwa-node",
          request = "attach",
          name = "Attach",
          processId = require("dap.utils").pick_process,
          cwd = "${workspaceFolder}",
          sourceMaps = true,
          runtimeExecutable = runtimeExecutable,
          skipFiles = {
            "<node_internals>/**",
            "node_modules/**",
          },
          resolveSourceMapLocations = {
            "${workspaceFolder}/**",
            "!**/node_modules/**",
          },
        },
      }
    end
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "mfussenegger/nvim-dap",
  optional = true,
  dependencies = {
    {
      "mason-org/mason.nvim",
      opts = function(_, opts)
        opts.ensure_installed = opts.ensure_installed or {}
        table.insert(opts.ensure_installed, "js-debug-adapter")
      end,
    },
  },
  opts = function()
    local dap = require("dap")

    for _, adapterType in ipairs({ "node", "chrome", "msedge" }) do
      local pwaType = "pwa-" .. adapterType

      if not dap.adapters[pwaType] then
        dap.adapters[pwaType] = {
          type = "server",
          host = "localhost",
          port = "${port}",
          executable = {
            command = "js-debug-adapter",
            args = { "${port}" },
          },
        }
      end

      -- Define adapters without the "pwa-" prefix for VSCode compatibility
      if not dap.adapters[adapterType] then
        dap.adapters[adapterType] = function(cb, config)
          local nativeAdapter = dap.adapters[pwaType]

          config.type = pwaType

          if type(nativeAdapter) == "function" then
            nativeAdapter(cb, config)
          else
            cb(nativeAdapter)
          end
        end
      end
    end

    local js_filetypes = { "typescript", "javascript", "typescriptreact", "javascriptreact" }

    local vscode = require("dap.ext.vscode")
    vscode.type_to_filetypes["node"] = js_filetypes
    vscode.type_to_filetypes["pwa-node"] = js_filetypes

    for _, language in ipairs(js_filetypes) do
      if not dap.configurations[language] then
        local runtimeExecutable = nil
        if language:find("typescript") then
          runtimeExecutable = vim.fn.executable("tsx") == 1 and "tsx" or "ts-node"
        end
        dap.configurations[language] = {
          {
            type = "pwa-node",
            request = "launch",
            name = "Launch file",
            program = "${file}",
            cwd = "${workspaceFolder}",
            sourceMaps = true,
            runtimeExecutable = runtimeExecutable,
            skipFiles = {
              "<node_internals>/**",
              "node_modules/**",
            },
            resolveSourceMapLocations = {
              "${workspaceFolder}/**",
              "!**/node_modules/**",
            },
          },
          {
            type = "pwa-node",
            request = "attach",
            name = "Attach",
            processId = require("dap.utils").pick_process,
            cwd = "${workspaceFolder}",
            sourceMaps = true,
            runtimeExecutable = runtimeExecutable,
            skipFiles = {
              "<node_internals>/**",
              "node_modules/**",
            },
            resolveSourceMapLocations = {
              "${workspaceFolder}/**",
              "!**/node_modules/**",
            },
          },
        }
      end
    end
  end,
}
```

</TabItem>

</Tabs>

## [mason-nvim-dap.nvim](https://github.com/jay-babu/mason-nvim-dap.nvim) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  -- chrome adapter is deprecated, use js-debug-adapter instead
  automatic_installation = { exclude = { "chrome" } },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "jay-babu/mason-nvim-dap.nvim",
  optional = true,
  opts = {
    -- chrome adapter is deprecated, use js-debug-adapter instead
    automatic_installation = { exclude = { "chrome" } },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
