# Extras

<!-- plugins:start -->

## <code>lang.json</code>

To use this, add it to your **lazy.nvim** imports:

```lua
require("lazy").setup({
  spec = {
    { "folke/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.lang.json" },
    { import = "plugins" },
  },
})
```

- [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)
- [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)
- [SchemaStore.nvim](https://github.com/b0o/SchemaStore.nvim)

## <code>lang.typescript</code>

To use this, add it to your **lazy.nvim** imports:

```lua
require("lazy").setup({
  spec = {
    { "folke/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.lang.typescript" },
    { import = "plugins" },
  },
})
```

- [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)
- [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)
- [typescript.nvim](https://github.com/jose-elias-alvarez/typescript.nvim)

## <code>ui.mini-starter</code>

To use this, add it to your **lazy.nvim** imports:

```lua
require("lazy").setup({
  spec = {
    { "folke/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.ui.mini-starter" },
    { import = "plugins" },
  },
})
```

- [mini.starter](https://github.com/echasnovski/mini.starter)

<!-- plugins:end -->
