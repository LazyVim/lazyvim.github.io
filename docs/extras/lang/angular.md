# `Angular`

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

### Includes the following extras

- [lang.typescript](/extras/lang/typescript)

## [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  if type(opts.ensure_installed) == "table" then
    vim.list_extend(opts.ensure_installed, { "angular", "scss" })
  end
  vim.api.nvim_create_autocmd({ "BufReadPost", "BufNewFile" }, {
    pattern = { "*.component.html", "*.container.html" },
    callback = function()
      vim.treesitter.start(nil, "angular")
    end,
  })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-treesitter",
  opts = function(_, opts)
    if type(opts.ensure_installed) == "table" then
      vim.list_extend(opts.ensure_installed, { "angular", "scss" })
    end
    vim.api.nvim_create_autocmd({ "BufReadPost", "BufNewFile" }, {
      pattern = { "*.component.html", "*.container.html" },
      callback = function()
        vim.treesitter.start(nil, "angular")
      end,
    })
  end,
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
    angularls = {},
  },
  setup = {
    angularls = function()
      Snacks.util.lsp.on({ name = "angularls" }, function(_, client)
        --HACK: disable angular renaming capability due to duplicate rename popping up
        client.server_capabilities.renameProvider = false
      end)
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
      angularls = {},
    },
    setup = {
      angularls = function()
        Snacks.util.lsp.on({ name = "angularls" }, function(_, client)
          --HACK: disable angular renaming capability due to duplicate rename popping up
          client.server_capabilities.renameProvider = false
        end)
      end,
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
      name = "@angular/language-server",
      location = LazyVim.get_pkg_path("angular-language-server", "/node_modules/@angular/language-server"),
      enableForWorkspaceTypeScriptVersions = false,
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
        name = "@angular/language-server",
        location = LazyVim.get_pkg_path("angular-language-server", "/node_modules/@angular/language-server"),
        enableForWorkspaceTypeScriptVersions = false,
      },
    })
  end,
}
```

</TabItem>

</Tabs>

## [conform.nvim](https://github.com/stevearc/conform.nvim)

 formatting


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  if LazyVim.has_extra("formatting.prettier") then
    opts.formatters_by_ft = opts.formatters_by_ft or {}
    opts.formatters_by_ft.htmlangular = { "prettier" }
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
      opts.formatters_by_ft.htmlangular = { "prettier" }
    end
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
