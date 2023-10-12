# `lang.cmake`

<!-- plugins:start -->

To use this, add it to your **lazy.nvim** imports:

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.lang.cmake" },
    { import = "plugins" },
  },
})
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  if type(opts.ensure_installed) == "table" then
    vim.list_extend(opts.ensure_installed, { "cmake" })
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-treesitter/nvim-treesitter",
  opts = function(_, opts)
    if type(opts.ensure_installed) == "table" then
      vim.list_extend(opts.ensure_installed, { "cmake" })
    end
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
  opts.sources = vim.list_extend(opts.sources or {}, {
    nls.builtins.diagnostics.cmake_lint,
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
      nls.builtins.diagnostics.cmake_lint,
    })
  end,
}
```

</TabItem>

</Tabs>

## [nvim-lint](https://github.com/mfussenegger/nvim-lint)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  linters_by_ft = {
    cmake = { "cmakelint" },
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
      cmake = { "cmakelint" },
    },
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
    neocmake = {},
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
      neocmake = {},
    },
  },
}
```

</TabItem>

</Tabs>

## [cmake-tools.nvim](https://github.com/Civitasv/cmake-tools.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "Civitasv/cmake-tools.nvim",
  opts = {},
  event = "LazyFile",
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
