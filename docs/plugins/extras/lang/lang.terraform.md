# `lang.terraform`

<!-- plugins:start -->

To use this, add it to your **lazy.nvim** imports:

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.lang.terraform" },
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
    vim.list_extend(opts.ensure_installed, {
      "terraform",
      "hcl",
    })
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
      vim.list_extend(opts.ensure_installed, {
        "terraform",
        "hcl",
      })
    end
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
    terraformls = {},
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
      terraformls = {},
    },
  },
}
```

</TabItem>

</Tabs>

## [null-ls.nvim](https://github.com/jose-elias-alvarez/null-ls.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  if type(opts.sources) == "table" then
    local null_ls = require("null-ls")
    vim.list_extend(opts.sources, {
      null_ls.builtins.formatting.terraform_fmt,
      null_ls.builtins.diagnostics.terraform_validate,
    })
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "jose-elias-alvarez/null-ls.nvim",
  opts = function(_, opts)
    if type(opts.sources) == "table" then
      local null_ls = require("null-ls")
      vim.list_extend(opts.sources, {
        null_ls.builtins.formatting.terraform_fmt,
        null_ls.builtins.diagnostics.terraform_validate,
      })
    end
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
