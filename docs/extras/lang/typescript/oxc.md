# `Oxc`

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

## [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  servers = {
    ---@type lspconfig.settings.oxlint
    oxlint = {
      root_dir = function(bufnr, on_dir)
        -- prefer the top-level oxlint config if it exists (monorepo support)
        local git = vim.fs.root(bufnr, ".git")
        local markers = { ".oxlintrc.json", ".oxlintrc.jsonc", "oxlint.config.ts" }
        local root = git and vim.fs.root(git, markers) or vim.fs.root(bufnr, markers)
        if root then
          on_dir(root)
        end
      end,
      settings = {
        fixKind = "all",
      },
    },
    --- disable the oxfmt lsp server since we use conform for formatting
    oxfmt = { enabled = false },
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
      ---@type lspconfig.settings.oxlint
      oxlint = {
        root_dir = function(bufnr, on_dir)
          -- prefer the top-level oxlint config if it exists (monorepo support)
          local git = vim.fs.root(bufnr, ".git")
          local markers = { ".oxlintrc.json", ".oxlintrc.jsonc", "oxlint.config.ts" }
          local root = git and vim.fs.root(git, markers) or vim.fs.root(bufnr, markers)
          if root then
            on_dir(root)
          end
        end,
        settings = {
          fixKind = "all",
        },
      },
      --- disable the oxfmt lsp server since we use conform for formatting
      oxfmt = { enabled = false },
    },
  },
}
```

</TabItem>

</Tabs>

## [mason.nvim](https://github.com/mason-org/mason.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { ensure_installed = { "oxfmt" } }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "mason-org/mason.nvim",
  opts = { ensure_installed = { "oxfmt" } },
}
```

</TabItem>

</Tabs>

## [conform.nvim](https://github.com/stevearc/conform.nvim) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  opts.formatters_by_ft = opts.formatters_by_ft or {}
  for _, ft in ipairs(supported) do
    opts.formatters_by_ft[ft] = opts.formatters_by_ft[ft] or {}
    table.insert(opts.formatters_by_ft[ft], "oxfmt")
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "stevearc/conform.nvim",
  optional = true,
  opts = function(_, opts)
    opts.formatters_by_ft = opts.formatters_by_ft or {}
    for _, ft in ipairs(supported) do
      opts.formatters_by_ft[ft] = opts.formatters_by_ft[ft] or {}
      table.insert(opts.formatters_by_ft[ft], "oxfmt")
    end
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
