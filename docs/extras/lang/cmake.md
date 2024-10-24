# CMake

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
    { import = "lazyvim.plugins.extras.lang.cmake" },
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

## [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { ensure_installed = { "cmake" } }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-treesitter/nvim-treesitter",
  opts = { ensure_installed = { "cmake" } },
}
```

</TabItem>

</Tabs>

## [mason.nvim](https://github.com/williamboman/mason.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { ensure_installed = { "cmakelang", "cmakelint" } }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "mason.nvim",
  opts = { ensure_installed = { "cmakelang", "cmakelint" } },
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
  lazy = true,
  init = function()
    local loaded = false
    local function check()
      local cwd = vim.uv.cwd()
      if vim.fn.filereadable(cwd .. "/CMakeLists.txt") == 1 then
        require("lazy").load({ plugins = { "cmake-tools.nvim" } })
        loaded = true
      end
    end
    check()
    vim.api.nvim_create_autocmd("DirChanged", {
      callback = function()
        if not loaded then
          check()
        end
      end,
    })
  end,
  opts = {},
}
```

</TabItem>

</Tabs>

## [cmake-tools.nvim](https://github.com/Civitasv/cmake-tools.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "cmake-tools.nvim" }
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

## [nvim-lint](https://github.com/mfussenegger/nvim-lint) _(optional)_

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

<!-- plugins:end -->
