# Prettier

<!-- plugins:start -->

To use this, add it to your **lazy.nvim** imports:

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.formatting.prettier" },
    { import = "plugins" },
  },
})
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [mason.nvim](https://github.com/williamboman/mason.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  table.insert(opts.ensure_installed, "prettierd")
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "williamboman/mason.nvim",
  opts = function(_, opts)
    table.insert(opts.ensure_installed, "prettierd")
  end,
}
```

</TabItem>

</Tabs>

## [none-ls.nvim](https://github.com/nvimtools/none-ls.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  local nls = require("null-ls")
  table.insert(opts.sources, nls.builtins.formatting.prettierd)
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
    table.insert(opts.sources, nls.builtins.formatting.prettierd)
  end,
}
```

</TabItem>

</Tabs>

## [conform.nvim](https://github.com/stevearc/conform.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  formatters_by_ft = {
    ["javascript"] = { { "prettierd", "prettier" } },
    ["javascriptreact"] = { { "prettierd", "prettier" } },
    ["typescript"] = { { "prettierd", "prettier" } },
    ["typescriptreact"] = { { "prettierd", "prettier" } },
    ["vue"] = { { "prettierd", "prettier" } },
    ["css"] = { { "prettierd", "prettier" } },
    ["scss"] = { { "prettierd", "prettier" } },
    ["less"] = { { "prettierd", "prettier" } },
    ["html"] = { { "prettierd", "prettier" } },
    ["json"] = { { "prettierd", "prettier" } },
    ["jsonc"] = { { "prettierd", "prettier" } },
    ["yaml"] = { { "prettierd", "prettier" } },
    ["markdown"] = { { "prettierd", "prettier" } },
    ["markdown.mdx"] = { { "prettierd", "prettier" } },
    ["graphql"] = { { "prettierd", "prettier" } },
    ["handlebars"] = { { "prettierd", "prettier" } },
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
      ["javascript"] = { { "prettierd", "prettier" } },
      ["javascriptreact"] = { { "prettierd", "prettier" } },
      ["typescript"] = { { "prettierd", "prettier" } },
      ["typescriptreact"] = { { "prettierd", "prettier" } },
      ["vue"] = { { "prettierd", "prettier" } },
      ["css"] = { { "prettierd", "prettier" } },
      ["scss"] = { { "prettierd", "prettier" } },
      ["less"] = { { "prettierd", "prettier" } },
      ["html"] = { { "prettierd", "prettier" } },
      ["json"] = { { "prettierd", "prettier" } },
      ["jsonc"] = { { "prettierd", "prettier" } },
      ["yaml"] = { { "prettierd", "prettier" } },
      ["markdown"] = { { "prettierd", "prettier" } },
      ["markdown.mdx"] = { { "prettierd", "prettier" } },
      ["graphql"] = { { "prettierd", "prettier" } },
      ["handlebars"] = { { "prettierd", "prettier" } },
    },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
