---
sidebar_position: 5
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
    local cmp = require("cmp")
    opts.sources = cmp.config.sources(vim.list_extend(opts.sources, { { name = "emoji" } }))
  end,
}
```

## Add telescope-fzf-native

```lua
{
  "telescope.nvim",
  dependencies = {
    "nvim-telescope/telescope-fzf-native.nvim",
    build = "make",
    config = function()
      require("telescope").load_extension("fzf")
    end,
  },
}
```

## Supertab

Use `<tab>` for completion and snippets (supertab).

1. Disable default `<tab>` and `<s-tab>` behavior in LuaSnip

```lua
{
  "L3MON4D3/LuaSnip",
  keys = function()
    return {}
  end,
}
```

2. Setup supertab in cmp

```lua
{
  "hrsh7th/nvim-cmp",
  dependencies = {
    "hrsh7th/cmp-emoji",
  },
  ---@param opts cmp.ConfigSchema
  opts = function(_, opts)
    local has_words_before = function()
      unpack = unpack or table.unpack
      local line, col = unpack(vim.api.nvim_win_get_cursor(0))
      return col ~= 0 and vim.api.nvim_buf_get_lines(0, line - 1, line, true)[1]:sub(col, col):match("%s") == nil
    end

    local luasnip = require("luasnip")
    local cmp = require("cmp")

    opts.mapping = vim.tbl_extend("force", opts.mapping, {
      ["<Tab>"] = cmp.mapping(function(fallback)
        if cmp.visible() then
          -- You could replace select_next_item() with confirm({ select = true }) to get VS Code autocompletion behavior
          cmp.select_next_item()
        -- You could replace the expand_or_jumpable() calls with expand_or_locally_jumpable()
        -- this way you will only jump inside the snippet region
        elseif luasnip.expand_or_jumpable() then
          luasnip.expand_or_jump()
        elseif has_words_before() then
          cmp.complete()
        else
          fallback()
        end
      end, { "i", "s" }),
      ["<S-Tab>"] = cmp.mapping(function(fallback)
        if cmp.visible() then
          cmp.select_prev_item()
        elseif luasnip.jumpable(-1) then
          luasnip.jump(-1)
        else
          fallback()
        end
      end, { "i", "s" }),
    })
  end,
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
        require("lazyvim.util").on_attach(function(client)
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

## Change `alpha-nvim` header

If you would like to change the logo that greets you when opening nvim, you can do this:
```lua
{
  "goolord/alpha-nvim",
  opts = function()
    local dashboard = require("alpha.themes.dashboard")

      local logo = [[
███╗   ██╗███████╗ ██████╗ ██╗   ██╗██╗███╗   ███╗
████╗  ██║██╔════╝██╔═══██╗██║   ██║██║████╗ ████║
██╔██╗ ██║█████╗  ██║   ██║██║   ██║██║██╔████╔██║
██║╚██╗██║██╔══╝  ██║   ██║╚██╗ ██╔╝██║██║╚██╔╝██║
██║ ╚████║███████╗╚██████╔╝ ╚████╔╝ ██║██║ ╚═╝ ██║
╚═╝  ╚═══╝╚══════╝ ╚═════╝   ╚═══╝  ╚═╝╚═╝     ╚═╝
      ]]
      dashboard.section.header.val = vim.split(logo, "\n")
  end,
},
```

Generate or find ASCII art by Googling for "ASCII art (generator)", or check https://github.com/goolord/alpha-nvim/discussions/16 for inspiration.

## Open `alpha-nvim` when all buffers are closed

If you like a clean Lualine and remove buffers a lot (for example when using `bd` or `bP`), you are greeted by an empty buffer when all buffers are closed. If you'd like, you can configure `alpha-nvim` to open when there are no more buffers:

```lua
{
  "echasnovski/mini.bufremove",
  keys = {
    {
      "<leader>bd",
      function()
        local bufs = vim.fn.getbufinfo({ buflisted = true })
        require("mini.bufremove").delete(0, false)
        if bufs and not bufs[2] then
          require("alpha").start(true)
        end
      end,
      desc = "Delete Buffer",
    },
    {
      "<leader>bD",
      function()
        local bufs = vim.fn.getbufinfo({ buflisted = true })
        require("mini.bufremove").delete(0, true)
        if bufs and not bufs[2] then
          require("alpha").start(true)
        end
      end,
      desc = "Delete Buffer (Force)",
    },
  },
},
{
  "akinsho/bufferline.nvim",
  keys = {
    {
      "<leader>bP",
      function()
        vim.cmd("BufferLineGroupClose ungrouped")
        local bufs = vim.fn.getbufinfo({ buflisted = true })
        if bufs and not bufs[2] then
          require("alpha").start(true)
        end
      end,
      desc = "Delete non-pinned buffers",
    },
  },
},
```

<!-- recipes:end -->
