# Terraform

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
    { import = "lazyvim.plugins.extras.lang.terraform" },
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

## [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim)

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
  dependencies = {
    {
      "ANGkeith/telescope-terraform-doc.nvim",
      config = function()
        Util.on_load("telescope.nvim", function()
          require("telescope").load_extension("terraform_doc")
        end)
      end,
    },
    {
      "cappyzawa/telescope-terraform.nvim",
      config = function()
        Util.on_load("telescope.nvim", function()
          require("telescope").load_extension("terraform")
        end)
      end,
    },
  },
}
```

</TabItem>

</Tabs>

## [telescope-terraform-doc.nvim](https://github.com/ANGkeith/telescope-terraform-doc.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "ANGkeith/telescope-terraform-doc.nvim",
  config = function()
    Util.on_load("telescope.nvim", function()
      require("telescope").load_extension("terraform_doc")
    end)
  end,
}
```

</TabItem>

</Tabs>

## [telescope-terraform.nvim](https://github.com/cappyzawa/telescope-terraform.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "cappyzawa/telescope-terraform.nvim",
  config = function()
    Util.on_load("telescope.nvim", function()
      require("telescope").load_extension("terraform")
    end)
  end,
}
```

</TabItem>

</Tabs>

## [none-ls.nvim](https://github.com/nvimtools/none-ls.nvim) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  local null_ls = require("null-ls")
  opts.sources = vim.list_extend(opts.sources or {}, {
    null_ls.builtins.formatting.terraform_fmt,
    null_ls.builtins.diagnostics.terraform_validate,
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
    local null_ls = require("null-ls")
    opts.sources = vim.list_extend(opts.sources or {}, {
      null_ls.builtins.formatting.terraform_fmt,
      null_ls.builtins.diagnostics.terraform_validate,
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
    terraform = { "terraform_validate" },
    tf = { "terraform_validate" },
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
      terraform = { "terraform_validate" },
      tf = { "terraform_validate" },
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
    terraform = { "terraform_fmt" },
    tf = { "terraform_fmt" },
    ["terraform-vars"] = { "terraform_fmt" },
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
      terraform = { "terraform_fmt" },
      tf = { "terraform_fmt" },
      ["terraform-vars"] = { "terraform_fmt" },
    },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
