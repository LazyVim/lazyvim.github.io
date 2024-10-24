# `Helm`

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
    { import = "lazyvim.plugins.extras.lang.helm" },
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

## [vim-helm](https://github.com/towolf/vim-helm)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "towolf/vim-helm", ft = "helm" }
```

</TabItem>

</Tabs>

## [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { ensure_installed = { "helm" } }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-treesitter/nvim-treesitter",
  opts = { ensure_installed = { "helm" } },
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
    helm_ls = {},
  },
  setup = {
    yamlls = function()
      LazyVim.lsp.on_attach(function(client, buffer)
        if vim.bo[buffer].filetype == "helm" then
          vim.schedule(function()
            vim.cmd("LspStop ++force yamlls")
          end)
        end
      end, "yamlls")
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
    servers = {
      helm_ls = {},
    },
    setup = {
      yamlls = function()
        LazyVim.lsp.on_attach(function(client, buffer)
          if vim.bo[buffer].filetype == "helm" then
            vim.schedule(function()
              vim.cmd("LspStop ++force yamlls")
            end)
          end
        end, "yamlls")
      end,
    },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
