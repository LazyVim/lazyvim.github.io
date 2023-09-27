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

These are the default keymaps that will be added when an LSP server is attached to the current buffer.
For more info see [Customizing LSP Keymaps](/plugins/lsp#%EF%B8%8F-customizing-lsp-keymaps)

### LSP Server keymaps

Sometimes it may be necessary to add keymaps for a specific LSP server.
Lazyutils provides a `keys` LSP option for this purpose.

```lua
{
  "neovim/nvim-lspconfig",
  opts = {
    servers = {
      tsserver = {
        keys = {
          { "<leader>co", "<cmd>TypescriptOrganizeImports<CR>", desc = "Organize Imports" },
          { "<leader>cR", "<cmd>TypescriptRenameFile<CR>", desc = "Rename File" },
        },
      },
    },
  },
}
```
