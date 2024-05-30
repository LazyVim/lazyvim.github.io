# `Vue`

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
    { import = "lazyvim.plugins.extras.lang.vue" },
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
    vim.list_extend(opts.ensure_installed, { "vue" })
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
      vim.list_extend(opts.ensure_installed, { "vue" })
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
opts = function(_, opts)
  local vue_typescript_plugin = require("mason-registry").get_package("vue-language-server"):get_install_path()
    .. "/node_modules/@vue/language-server"
    .. "/node_modules/@vue/typescript-plugin"

  opts.servers = vim.tbl_deep_extend("force", opts.servers, {
    volar = {},
    -- Volar 2.0 has discontinued their "take over mode" which in previous version provided support for typescript in vue files.
    -- The new approach to get typescript support involves using the typescript language server along side volar.
    vtsls = {
      settings = {
        vtsls = {
          tsserver = {
            globalPlugins = {
              -- Use typescript language server along with vue typescript plugin
              vue = {
                name = "@vue/typescript-plugin",
                location = vue_typescript_plugin,
                languages = { "vue" },
              },
            },
          },
        },
      },
      filetypes = {
        "javascript",
        "javascriptreact",
        "javascript.jsx",
        "typescript",
        "typescriptreact",
        "typescript.tsx",
        "vue",
      },
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
    local vue_typescript_plugin = require("mason-registry").get_package("vue-language-server"):get_install_path()
      .. "/node_modules/@vue/language-server"
      .. "/node_modules/@vue/typescript-plugin"

    opts.servers = vim.tbl_deep_extend("force", opts.servers, {
      volar = {},
      -- Volar 2.0 has discontinued their "take over mode" which in previous version provided support for typescript in vue files.
      -- The new approach to get typescript support involves using the typescript language server along side volar.
      vtsls = {
        settings = {
          vtsls = {
            tsserver = {
              globalPlugins = {
                -- Use typescript language server along with vue typescript plugin
                vue = {
                  name = "@vue/typescript-plugin",
                  location = vue_typescript_plugin,
                  languages = { "vue" },
                },
              },
            },
          },
        },
        filetypes = {
          "javascript",
          "javascriptreact",
          "javascript.jsx",
          "typescript",
          "typescriptreact",
          "typescript.tsx",
          "vue",
        },
      },
    })
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
