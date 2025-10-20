# `Julia`

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
opts = { ensure_installed = { "julia" } }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-treesitter/nvim-treesitter",
  opts = { ensure_installed = { "julia" } },
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
    julials = {
      settings = {
        -- use the same default settings as the Julia VS Code extension
        julia = {
          completionmode = "qualify",
          lint = { missingrefs = "none" },
        },
      },
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
      julials = {
        settings = {
          -- use the same default settings as the Julia VS Code extension
          julia = {
            completionmode = "qualify",
            lint = { missingrefs = "none" },
          },
        },
      },
    },
  },
}
```

</TabItem>

</Tabs>

## [cmp-latex-symbols](https://github.com/kdheepak/cmp-latex-symbols)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "kdheepak/cmp-latex-symbols" }
```

</TabItem>

</Tabs>

## [cmp-latex-symbols](https://github.com/kdheepak/cmp-latex-symbols)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "kdheepak/cmp-latex-symbols", "saghen/blink.compat" }
```

</TabItem>

</Tabs>

## [blink.compat](https://github.com/saghen/blink.compat)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
"saghen/blink.compat"
```

</TabItem>

</Tabs>

## [nvim-cmp](https://github.com/hrsh7th/nvim-cmp) _(optional)_

 cmp integration


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  table.insert(opts.sources, {
    name = "latex_symbols",
    option = {
      strategy = 0, -- mixed
    },
  })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "hrsh7th/nvim-cmp",
  optional = true,
  dependencies = { "kdheepak/cmp-latex-symbols" },
  opts = function(_, opts)
    table.insert(opts.sources, {
      name = "latex_symbols",
      option = {
        strategy = 0, -- mixed
      },
    })
  end,
}
```

</TabItem>

</Tabs>

## [blink.cmp](https://github.com/saghen/blink.cmp) _(optional)_

 blink.cmp integration


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  sources = {
    compat = { "latex_symbols" },
    providers = {
      latex_symbols = {
        kind = "LatexSymbols",
        async = true,
        opts = {
          strategy = 0, -- mixed
        },
      },
    },
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "saghen/blink.cmp",
  optional = true,
  dependencies = { "kdheepak/cmp-latex-symbols", "saghen/blink.compat" },
  opts = {
    sources = {
      compat = { "latex_symbols" },
      providers = {
        latex_symbols = {
          kind = "LatexSymbols",
          async = true,
          opts = {
            strategy = 0, -- mixed
          },
        },
      },
    },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
