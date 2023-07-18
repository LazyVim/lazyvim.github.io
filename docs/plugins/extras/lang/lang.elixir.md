# `lang.elixir`

<!-- plugins:start -->

To use this, add it to your **lazy.nvim** imports:

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.lang.elixir" },
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
  vim.list_extend(opts.ensure_installed, {
    "elixir",
    "heex",
    "eex",
  })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-treesitter/nvim-treesitter",
  opts = function(_, opts)
    vim.list_extend(opts.ensure_installed, {
      "elixir",
      "heex",
      "eex",
    })
  end,
}
```

</TabItem>

</Tabs>

## [mason.nvim](https://github.com/williamboman/mason.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  vim.list_extend(opts.ensure_installed, {
    "elixir-ls",
  })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "williamboman/mason.nvim",
  opts = function(_, opts)
    vim.list_extend(opts.ensure_installed, {
      "elixir-ls",
    })
  end,
}
```

</TabItem>

</Tabs>

## [neotest](https://github.com/nvim-neotest/neotest)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  adapters = {
    ["neotest-elixir"] = {},
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
    "jfpedroza/neotest-elixir",
  },
  opts = {
    adapters = {
      ["neotest-elixir"] = {},
    },
  },
}
```

</TabItem>

</Tabs>

## [neotest-elixir](https://github.com/jfpedroza/neotest-elixir)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "jfpedroza/neotest-elixir",
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
