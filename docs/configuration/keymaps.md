---
sidebar_position: 4
---

# Keymaps

LazyVim provides multiple ways to configure keymaps.
If you want to override an existing mapping, make sure to
disable it first in the correct place.

## Global keymaps

Global keymaps are keymaps that are always active.
You can configure them in your [lua/config/keymaps.lua](/configuration/general#keymaps) file.
Default LazyVim keymaps can be deleted with `vim.keymap.del`.

## Plugin keymaps

For more info on configuring plugin keymaps, see [Adding & Disabling Plugin Keymaps](/configuration/plugins#%EF%B8%8F-adding--disabling-plugin-keymaps)

## LSP keymaps

LSP keymaps are configured using the `keys` option in your LSP server configuration.
You can add global keymaps that apply to all LSP servers using the special `servers['*']` key,
or server-specific keymaps.

For more info see [Customizing LSP Keymaps](/plugins/lsp#%EF%B8%8F-customizing-lsp-keymaps)

### Global LSP Keymaps

Global LSP keymaps apply to all LSP servers:

```lua
{
  "neovim/nvim-lspconfig",
  opts = {
    servers = {
      ['*'] = {
        keys = {
          -- Add or change a keymap
          { "K", vim.lsp.buf.hover, desc = "Hover" },
          -- Disable a keymap
          { "gd", false },
          -- Capability-based keymap (only set if server supports it)
          { "<leader>ca", vim.lsp.buf.code_action, desc = "Code Action", has = "codeAction" },
        },
      },
    },
  },
}
```

### Server-Specific Keymaps

Add keymaps for specific LSP servers:

```lua
{
  "neovim/nvim-lspconfig",
  opts = {
    servers = {
      vtsls = {
        keys = {
          { "<leader>co", function()
            vim.lsp.buf.code_action({
              apply = true,
              context = { only = { "source.organizeImports" }, diagnostics = {} },
            })
          end, desc = "Organize Imports" },
        },
      },
    },
  },
}
```
