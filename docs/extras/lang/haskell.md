# `Haskell`

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

 Add Haskell to treesitter


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { ensure_installed = { "haskell" } }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-treesitter/nvim-treesitter",
  opts = { ensure_installed = { "haskell" } },
}
```

</TabItem>

</Tabs>

## [haskell-tools.nvim](https://github.com/mrcjkb/haskell-tools.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "mrcjkb/haskell-tools.nvim",
  version = false,
  ft = { "haskell", "lhaskell", "cabal", "cabalproject" },
  keys = {
    {
      "<localleader>e",
      "<cmd>HlsEvalAll<cr>",
      ft = "haskell",
      desc = "Evaluate All",
    },
    {
      "<localleader>h",
      function()
        require("haskell-tools").hoogle.hoogle_signature()
      end,
      ft = "haskell",
      desc = "Hoogle Signature",
    },
    {
      "<localleader>r",
      function()
        require("haskell-tools").repl.toggle()
      end,
      ft = "haskell",
      desc = "REPL (Package)",
    },
    {
      "<localleader>R",
      function()
        require("haskell-tools").repl.toggle(vim.api.nvim_buf_get_name(0))
      end,
      ft = "haskell",
      desc = "REPL (Buffer)",
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
opts = { ensure_installed = { "haskell-language-server" } }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "mason-org/mason.nvim",
  opts = { ensure_installed = { "haskell-language-server" } },
}
```

</TabItem>

</Tabs>

## [mason.nvim](https://github.com/mason-org/mason.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { ensure_installed = { "haskell-debug-adapter" } }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "mason-org/mason.nvim",
  opts = { ensure_installed = { "haskell-debug-adapter" } },
}
```

</TabItem>

</Tabs>

## [neotest-haskell](https://github.com/mrcjkb/neotest-haskell)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "mrcjkb/neotest-haskell" }
```

</TabItem>

</Tabs>

## [haskell-snippets.nvim](https://github.com/mrcjkb/haskell-snippets.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "mrcjkb/haskell-snippets.nvim",
  dependencies = { "L3MON4D3/LuaSnip" },
  ft = { "haskell", "lhaskell", "cabal", "cabalproject" },
  config = function()
    local haskell_snippets = require("haskell-snippets").all
    require("luasnip").add_snippets("haskell", haskell_snippets, { key = "haskell" })
  end,
}
```

</TabItem>

</Tabs>

## [LuaSnip](https://github.com/L3MON4D3/LuaSnip)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "L3MON4D3/LuaSnip" }
```

</TabItem>

</Tabs>

## [telescope_hoogle](https://github.com/luc-tielen/telescope_hoogle)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  LazyVim.on_load("telescope.nvim", function()
    require("telescope").load_extension("ht")
  end)
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "luc-tielen/telescope_hoogle",
  ft = { "haskell", "lhaskell", "cabal", "cabalproject" },
  opts = function()
    LazyVim.on_load("telescope.nvim", function()
      require("telescope").load_extension("ht")
    end)
  end,
  keys = {
    {
      "<localleader>H",
      "<cmd>Telescope hoogle<cr>",
      ft = "haskell",
      desc = "Hoogle",
    },
  },
}
```

</TabItem>

</Tabs>

## [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)

 Make sure lspconfig doesn't start hls,
 as it conflicts with haskell-tools


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  setup = {
    hls = function()
      return true
    end,
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "neovim/nvim-lspconfig",
  opts = {
    setup = {
      hls = function()
        return true
      end,
    },
  },
}
```

</TabItem>

</Tabs>

## [nvim-dap](https://github.com/mfussenegger/nvim-dap) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "mfussenegger/nvim-dap",
  optional = true,
  dependencies = {
    {
      "mason-org/mason.nvim",
      opts = { ensure_installed = { "haskell-debug-adapter" } },
    },
  },
}
```

</TabItem>

</Tabs>

## [neotest](https://github.com/nvim-neotest/neotest) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  adapters = {
    ["neotest-haskell"] = {},
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-neotest/neotest",
  optional = true,
  dependencies = {
    { "mrcjkb/neotest-haskell" },
  },
  opts = {
    adapters = {
      ["neotest-haskell"] = {},
    },
  },
}
```

</TabItem>

</Tabs>

## [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-telescope/telescope.nvim",
  optional = true,
  specs = {
    {
      "luc-tielen/telescope_hoogle",
      ft = { "haskell", "lhaskell", "cabal", "cabalproject" },
      opts = function()
        LazyVim.on_load("telescope.nvim", function()
          require("telescope").load_extension("ht")
        end)
      end,
      keys = {
        {
          "<localleader>H",
          "<cmd>Telescope hoogle<cr>",
          ft = "haskell",
          desc = "Hoogle",
        },
      },
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
    haskell = { "fourmolu" },
    cabal = { "cabal_fmt" },
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
      haskell = { "fourmolu" },
      cabal = { "cabal_fmt" },
    },
  },
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
    haskell = { "hlint" },
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
      haskell = { "hlint" },
    },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
