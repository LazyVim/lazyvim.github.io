# `Ocaml`

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

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  if type(opts.ensure_installed) == "table" then
    vim.list_extend(opts.ensure_installed, { "ocaml" })
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
      vim.list_extend(opts.ensure_installed, { "ocaml" })
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
    ocamllsp = {
      filetypes = {
        "ocaml",
        "ocaml.menhir",
        "ocaml.interface",
        "ocaml.ocamllex",
        "reason",
        "dune",
      },
      root_dir = function(fname)
        return require("lspconfig.util").root_pattern(
          "*.opam",
          "esy.json",
          "package.json",
          ".git",
          "dune-project",
          "dune-workspace",
          "*.ml"
        )(fname)
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
      ocamllsp = {
        filetypes = {
          "ocaml",
          "ocaml.menhir",
          "ocaml.interface",
          "ocaml.ocamllex",
          "reason",
          "dune",
        },
        root_dir = function(fname)
          return require("lspconfig.util").root_pattern(
            "*.opam",
            "esy.json",
            "package.json",
            ".git",
            "dune-project",
            "dune-workspace",
            "*.ml"
          )(fname)
        end,
      },
    },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
