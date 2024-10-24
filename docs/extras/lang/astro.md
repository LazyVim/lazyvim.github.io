# `Astro`

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
    { import = "lazyvim.plugins.extras.lang.astro" },
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

### Includes the following extras

- [lang.typescript](/extras/lang/typescript)

## [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { ensure_installed = { "astro", "css" } }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-treesitter/nvim-treesitter",
  opts = { ensure_installed = { "astro", "css" } },
}
```

</TabItem>

</Tabs>

## [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)

 LSP Servers


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  servers = {
    astro = {},
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
      astro = {},
    },
  },
}
```

</TabItem>

</Tabs>

## [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)

 Configure tsserver plugin


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  LazyVim.extend(opts.servers.vtsls, "settings.vtsls.tsserver.globalPlugins", {
    {
      name = "@astrojs/ts-plugin",
      location = LazyVim.get_pkg_path("astro-language-server", "/node_modules/@astrojs/ts-plugin"),
      enableForWorkspaceTypeScriptVersions = true,
    },
  })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "neovim/nvim-lspconfig",
  opts = function(_, opts)
    LazyVim.extend(opts.servers.vtsls, "settings.vtsls.tsserver.globalPlugins", {
      {
        name = "@astrojs/ts-plugin",
        location = LazyVim.get_pkg_path("astro-language-server", "/node_modules/@astrojs/ts-plugin"),
        enableForWorkspaceTypeScriptVersions = true,
      },
    })
  end,
}
```

</TabItem>

</Tabs>

## [conform.nvim](https://github.com/stevearc/conform.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  if LazyVim.has_extra("formatting.prettier") then
    opts.formatters_by_ft = opts.formatters_by_ft or {}
    opts.formatters_by_ft.astro = { "prettier" }
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "conform.nvim",
  opts = function(_, opts)
    if LazyVim.has_extra("formatting.prettier") then
      opts.formatters_by_ft = opts.formatters_by_ft or {}
      opts.formatters_by_ft.astro = { "prettier" }
    end
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
