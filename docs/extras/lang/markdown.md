# Markdown

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
    { import = "lazyvim.plugins.extras.lang.markdown" },
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

## [mason.nvim](https://github.com/williamboman/mason.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  opts.ensure_installed = opts.ensure_installed or {}
  vim.list_extend(opts.ensure_installed, { "markdownlint", "markdown-toc" })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "williamboman/mason.nvim",
  opts = function(_, opts)
    opts.ensure_installed = opts.ensure_installed or {}
    vim.list_extend(opts.ensure_installed, { "markdownlint", "markdown-toc" })
  end,
}
```

</TabItem>

</Tabs>

## [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  servers = {
    marksman = {},
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
      marksman = {},
    },
  },
}
```

</TabItem>

</Tabs>

## [markdown-preview.nvim](https://github.com/iamcco/markdown-preview.nvim)

 Markdown preview


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "iamcco/markdown-preview.nvim",
  cmd = { "MarkdownPreviewToggle", "MarkdownPreview", "MarkdownPreviewStop" },
  build = function()
    vim.fn["mkdp#util#install"]()
  end,
  keys = {
    {
      "<leader>cp",
      ft = "markdown",
      "<cmd>MarkdownPreviewToggle<cr>",
      desc = "Markdown Preview",
    },
  },
  config = function()
    vim.cmd([[do FileType]])
  end,
}
```

</TabItem>

</Tabs>

## [headlines.nvim](https://github.com/lukas-reineke/headlines.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  local opts = {}
  for _, ft in ipairs({ "markdown", "norg", "rmd", "org" }) do
    opts[ft] = {
      headline_highlights = {},
      -- disable bullets for now. See https://github.com/lukas-reineke/headlines.nvim/issues/66
      bullets = {},
    }
    for i = 1, 6 do
      local hl = "Headline" .. i
      vim.api.nvim_set_hl(0, hl, { link = "Headline", default = true })
      table.insert(opts[ft].headline_highlights, hl)
    end
  end
  return opts
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "lukas-reineke/headlines.nvim",
  opts = function()
    local opts = {}
    for _, ft in ipairs({ "markdown", "norg", "rmd", "org" }) do
      opts[ft] = {
        headline_highlights = {},
        -- disable bullets for now. See https://github.com/lukas-reineke/headlines.nvim/issues/66
        bullets = {},
      }
      for i = 1, 6 do
        local hl = "Headline" .. i
        vim.api.nvim_set_hl(0, hl, { link = "Headline", default = true })
        table.insert(opts[ft].headline_highlights, hl)
      end
    end
    return opts
  end,
  ft = { "markdown", "norg", "rmd", "org" },
  config = function(_, opts)
    -- PERF: schedule to prevent headlines slowing down opening a file
    vim.schedule(function()
      require("headlines").setup(opts)
      require("headlines").refresh()
    end)
  end,
}
```

</TabItem>

</Tabs>

## [conform.nvim](https://github.com/stevearc/conform.nvim) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  formatters_by_ft = {
    ["markdown"] = { { "prettierd", "prettier" }, "markdownlint", "markdown-toc" },
    ["markdown.mdx"] = { { "prettierd", "prettier" }, "markdownlint", "markdown-toc" },
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "stevearc/conform.nvim",
  optional = true,
  opts = {
    formatters_by_ft = {
      ["markdown"] = { { "prettierd", "prettier" }, "markdownlint", "markdown-toc" },
      ["markdown.mdx"] = { { "prettierd", "prettier" }, "markdownlint", "markdown-toc" },
    },
  },
}
```

</TabItem>

</Tabs>

## [none-ls.nvim](https://github.com/nvimtools/none-ls.nvim) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  local nls = require("null-ls")
  opts.sources = vim.list_extend(opts.sources or {}, {
    nls.builtins.diagnostics.markdownlint,
  })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvimtools/none-ls.nvim",
  optional = true,
  opts = function(_, opts)
    local nls = require("null-ls")
    opts.sources = vim.list_extend(opts.sources or {}, {
      nls.builtins.diagnostics.markdownlint,
    })
  end,
}
```

</TabItem>

</Tabs>

## [nvim-lint](https://github.com/mfussenegger/nvim-lint) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  linters_by_ft = {
    markdown = { "markdownlint" },
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "mfussenegger/nvim-lint",
  optional = true,
  opts = {
    linters_by_ft = {
      markdown = { "markdownlint" },
    },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
