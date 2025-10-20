# `Typst`

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

## [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  ensure_installed = { "typst" },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-treesitter/nvim-treesitter",
  opts = {
    ensure_installed = { "typst" },
  },
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
    tinymist = {
      keys = {
        {
          "<leader>cP",
          function()
            local buf_name = vim.api.nvim_buf_get_name(0)
            local file_name = vim.fn.fnamemodify(buf_name, ":t")
            LazyVim.lsp.execute({
              command = "tinymist.pinMain",
              arguments = { buf_name },
            })
            LazyVim.info("Tinymist: Pinned " .. file_name)
          end,
          desc = "Pin main file",
        },
      },
      single_file_support = true, -- Fixes LSP attachment in non-Git directories
      settings = {
        formatterMode = "typstyle",
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
      tinymist = {
        keys = {
          {
            "<leader>cP",
            function()
              local buf_name = vim.api.nvim_buf_get_name(0)
              local file_name = vim.fn.fnamemodify(buf_name, ":t")
              LazyVim.lsp.execute({
                command = "tinymist.pinMain",
                arguments = { buf_name },
              })
              LazyVim.info("Tinymist: Pinned " .. file_name)
            end,
            desc = "Pin main file",
          },
        },
        single_file_support = true, -- Fixes LSP attachment in non-Git directories
        settings = {
          formatterMode = "typstyle",
        },
      },
    },
  },
}
```

</TabItem>

</Tabs>

## [typst-preview.nvim](https://github.com/chomosuke/typst-preview.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  dependencies_bin = {
    tinymist = "tinymist",
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "chomosuke/typst-preview.nvim",
  cmd = { "TypstPreview", "TypstPreviewToggle", "TypstPreviewUpdate" },
  keys = {
    {
      "<leader>cp",
      ft = "typst",
      "<cmd>TypstPreviewToggle<cr>",
      desc = "Toggle Typst Preview",
    },
  },
  opts = {
    dependencies_bin = {
      tinymist = "tinymist",
    },
  },
}
```

</TabItem>

</Tabs>

## [ts-comments.nvim](https://github.com/folke/ts-comments.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  lang = {
    typst = { "// %s", "/* %s */" },
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "folke/ts-comments.nvim",
  opts = {
    lang = {
      typst = { "// %s", "/* %s */" },
    },
  },
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
    typst = { "typstyle", lsp_format = "prefer" },
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
      typst = { "typstyle", lsp_format = "prefer" },
    },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
