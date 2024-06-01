# `R`

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
    { import = "lazyvim.plugins.extras.lang.r" },
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

## [R.nvim](https://github.com/R-nvim/R.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  -- Create a table with the options to be passed to setup()
  R_args = { "--quiet", "--no-save" },
  hook = {
    on_filetype = function()
      -- This function will be called at the FileType event
      -- of files supported by R.nvim. This is an
      -- opportunity to create mappings local to buffers.
      vim.keymap.set("n", "<Enter>", "<Plug>RDSendLine", { buffer = true })
      vim.keymap.set("v", "<Enter>", "<Plug>RSendSelection", { buffer = true })

      -- Increase the width of which-key to handle the longer r-nvim descriptions
      local wk = require("which-key")
      -- Workaround from https://github.com/folke/which-key.nvim/issues/514#issuecomment-1987286901
      wk.register({
        ["<localleader>"] = {
          a = { name = "+(a)ll", ["🚫"] = "which_key_ignore" },
          b = { name = "+(b)etween marks", ["🚫"] = "which_key_ignore" },
          c = { name = "+(c)hunks", ["🚫"] = "which_key_ignore" },
          f = { name = "+(f)unctions", ["🚫"] = "which_key_ignore" },
          g = { name = "+(g)oto", ["🚫"] = "which_key_ignore" },
          k = { name = "+(k)nit", ["🚫"] = "which_key_ignore" },
          p = { name = "+(p)aragraph", ["🚫"] = "which_key_ignore" },
          q = { name = "+(q)uarto", ["🚫"] = "which_key_ignore" },
          r = { name = "+(r) general", ["🚫"] = "which_key_ignore" },
          s = { name = "+(s)plit or (s)end", ["🚫"] = "which_key_ignore" },
          t = { name = "+(t)erminal", ["🚫"] = "which_key_ignore" },
          v = { name = "+(v)iew", ["🚫"] = "which_key_ignore" },
        },
      })
    end,
  },
  pdfviewer = ""
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "R-nvim/R.nvim",
  lazy = false,
  opts = {
    -- Create a table with the options to be passed to setup()
    R_args = { "--quiet", "--no-save" },
    hook = {
      on_filetype = function()
        -- This function will be called at the FileType event
        -- of files supported by R.nvim. This is an
        -- opportunity to create mappings local to buffers.
        vim.keymap.set("n", "<Enter>", "<Plug>RDSendLine", { buffer = true })
        vim.keymap.set("v", "<Enter>", "<Plug>RSendSelection", { buffer = true })

        -- Increase the width of which-key to handle the longer r-nvim descriptions
        local wk = require("which-key")
        -- Workaround from https://github.com/folke/which-key.nvim/issues/514#issuecomment-1987286901
        wk.register({
          ["<localleader>"] = {
            a = { name = "+(a)ll", ["🚫"] = "which_key_ignore" },
            b = { name = "+(b)etween marks", ["🚫"] = "which_key_ignore" },
            c = { name = "+(c)hunks", ["🚫"] = "which_key_ignore" },
            f = { name = "+(f)unctions", ["🚫"] = "which_key_ignore" },
            g = { name = "+(g)oto", ["🚫"] = "which_key_ignore" },
            k = { name = "+(k)nit", ["🚫"] = "which_key_ignore" },
            p = { name = "+(p)aragraph", ["🚫"] = "which_key_ignore" },
            q = { name = "+(q)uarto", ["🚫"] = "which_key_ignore" },
            r = { name = "+(r) general", ["🚫"] = "which_key_ignore" },
            s = { name = "+(s)plit or (s)end", ["🚫"] = "which_key_ignore" },
            t = { name = "+(t)erminal", ["🚫"] = "which_key_ignore" },
            v = { name = "+(v)iew", ["🚫"] = "which_key_ignore" },
          },
        })
      end,
    },
    pdfviewer = ""
  },
  config = function(_, opts)
    vim.g.rout_follow_colorscheme = true
    require("r").setup(opts)
    require("r.pdf.generic").open = vim.ui.open
  end,
}
```

</TabItem>

</Tabs>

## [cmp-r](https://github.com/R-nvim/cmp-r)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "R-nvim/cmp-r" }
```

</TabItem>

</Tabs>

## [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  if type(opts.ensure_installed) == "table" then
    vim.list_extend(opts.ensure_installed, { "markdown", "markdown_inline", "r", "rnoweb" })
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
      vim.list_extend(opts.ensure_installed, { "markdown", "markdown_inline", "r", "rnoweb" })
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
    r_language_server = {
      root_dir = function(fname)
        return require("lspconfig.util").root_pattern("DESCRIPTION", "NAMESPACE", ".Rbuildignore")(fname)
          or require("lspconfig.util").find_git_ancestor(fname)
          or vim.loop.os_homedir()
      end,
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
      r_language_server = {
        root_dir = function(fname)
          return require("lspconfig.util").root_pattern("DESCRIPTION", "NAMESPACE", ".Rbuildignore")(fname)
            or require("lspconfig.util").find_git_ancestor(fname)
            or vim.loop.os_homedir()
        end,
      },
    },
  },
}
```

</TabItem>

</Tabs>

## [neotest-testthat](https://github.com/shunsambongi/neotest-testthat)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "shunsambongi/neotest-testthat",
}
```

</TabItem>

</Tabs>

## [nvim-cmp](https://github.com/hrsh7th/nvim-cmp) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  opts.sources = opts.sources or {}
  table.insert(opts.sources, { name = "cmp_r" })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "hrsh7th/nvim-cmp",
  optional = true,
  dependencies = { "R-nvim/cmp-r" },
  opts = function(_, opts)
    opts.sources = opts.sources or {}
    table.insert(opts.sources, { name = "cmp_r" })
  end,
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
    ["neotest-testthat"] = {},
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
    "shunsambongi/neotest-testthat",
  },
  opts = {
    adapters = {
      ["neotest-testthat"] = {},
    },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
