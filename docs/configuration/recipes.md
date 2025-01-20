---
sidebar_position: 6
---

# Recipes

<!-- recipes:start -->

## Add a `nvim-cmp` source

override nvim-cmp and add cmp-emoji

```lua
{
  "hrsh7th/nvim-cmp",
  dependencies = { "hrsh7th/cmp-emoji" },
  ---@param opts cmp.ConfigSchema
  opts = function(_, opts)
    table.insert(opts.sources, { name = "emoji" })
  end,
}
```

## Supertab

Use `<tab>` for completion and snippets (supertab).

```lua
{
  "saghen/blink.cmp",
  opts = {
    keymap = {
      preset = "enter",
      ["<Tab>"] = { "select_next", "fallback" },
      ["<S-Tab>"] = { "select_prev", "fallback" },
    },
    completion = {
      list = {
        selection = "auto_insert",
      },
    },
  },
}
```

## Change surround mappings

```lua
{
  "echasnovski/mini.surround",
  opts = {
    mappings = {
      add = "gsa",
      delete = "gsd",
      find = "gsf",
      find_left = "gsF",
      highlight = "gsh",
      replace = "gsr",
      update_n_lines = "gsn",
    },
  },
}
```

## Make TokyoNight Transparent

```lua
{
  "folke/tokyonight.nvim",
  opts = {
    transparent = true,
    styles = {
      sidebars = "transparent",
      floats = "transparent",
    },
  },
}
```

## Fix clangd offset encoding

```lua
{
  "neovim/nvim-lspconfig",
  opts = {
    setup = {
      clangd = function(_, opts)
        opts.capabilities.offsetEncoding = { "utf-16" }
      end,
    },
  },
}
```

## Use Eslint for fix on save and prettier for formatting

The [recommended](https://prettier.io/docs/en/integrating-with-linters.html) setup to
integrate prettier with linters is to **not** integrate it with eslint.
For this config, we have two extras, to enable eslint fix on save and enable the prettier
formatter with null-ls.

Add the below to your `lua/config/lazy.lua` file

```lua
{
  { import = "lazyvim.plugins.extras.linting.eslint" },
  { import = "lazyvim.plugins.extras.formatting.prettier" },
}
```

## Add Eslint and use it for formatting

If your project is using eslint with [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier),
then this will automatically fix eslint errors and format with prettier on save.
Important: make sure not to add prettier to null-ls, otherwise this won't work!

```lua
{
  "neovim/nvim-lspconfig",
  opts = {
    servers = { eslint = {} },
    setup = {
      eslint = function()
        require("lazyvim.util").lsp.on_attach(function(client)
          if client.name == "eslint" then
            client.server_capabilities.documentFormattingProvider = true
          elseif client.name == "tsserver" then
            client.server_capabilities.documentFormattingProvider = false
          end
        end)
      end,
    },
  },
}
```

<!-- recipes:end -->
