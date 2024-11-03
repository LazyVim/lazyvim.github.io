# `Blink`

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
    { import = "lazyvim.plugins.extras.coding.blink" },
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

## [blink.cmp](https://github.com/saghen/blink.cmp)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  highlight = {
    -- sets the fallback highlight groups to nvim-cmp's highlight groups
    -- useful for when your theme doesn't support blink.cmp
    -- will be removed in a future release, assuming themes add support
    use_nvim_cmp_as_default = false,
  },
  -- set to 'mono' for 'Nerd Font Mono' or 'normal' for 'Nerd Font'
  -- adjusts spacing to ensure icons are aligned
  nerd_font_variant = "mono",
  windows = {
    autocomplete = {
      draw = "reversed",
      winblend = vim.o.pumblend,
    },
    documentation = {
      auto_show = true,
    },
    ghost_text = {
      enabled = true,
    },
  },

  -- experimental auto-brackets support
  accept = { auto_brackets = { enabled = true } },

  -- experimental signature help support
  -- trigger = { signature_help = { enabled = true } }
  sources = {
    completion = {
      -- remember to enable your providers here
      enabled_providers = { "lsp", "path", "snippets", "buffer" },
    },
  },

  keymap = {
    preset = "enter",
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "saghen/blink.cmp",
  version = "*",
  opts_extend = { "sources.completion.enabled_providers" },
  dependencies = {
    "rafamadriz/friendly-snippets",
    -- add blink.compat to dependencies
    -- { "saghen/blink.compat", opts = {} },
  },
  event = "InsertEnter",

  ---@module 'blink.cmp'
  ---@type blink.cmp.Config
  opts = {
    highlight = {
      -- sets the fallback highlight groups to nvim-cmp's highlight groups
      -- useful for when your theme doesn't support blink.cmp
      -- will be removed in a future release, assuming themes add support
      use_nvim_cmp_as_default = false,
    },
    -- set to 'mono' for 'Nerd Font Mono' or 'normal' for 'Nerd Font'
    -- adjusts spacing to ensure icons are aligned
    nerd_font_variant = "mono",
    windows = {
      autocomplete = {
        draw = "reversed",
        winblend = vim.o.pumblend,
      },
      documentation = {
        auto_show = true,
      },
      ghost_text = {
        enabled = true,
      },
    },

    -- experimental auto-brackets support
    accept = { auto_brackets = { enabled = true } },

    -- experimental signature help support
    -- trigger = { signature_help = { enabled = true } }
    sources = {
      completion = {
        -- remember to enable your providers here
        enabled_providers = { "lsp", "path", "snippets", "buffer" },
      },
    },

    keymap = {
      preset = "enter",
    },
  },
}
```

</TabItem>

</Tabs>

## [friendly-snippets](https://github.com/rafamadriz/friendly-snippets)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "rafamadriz/friendly-snippets",
  -- add blink.compat to dependencies
  -- { "saghen/blink.compat", opts = {} },
}
```

</TabItem>

</Tabs>

## [blink.cmp](https://github.com/saghen/blink.cmp)

 add icons


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  opts.kind_icons = LazyVim.config.icons.kinds
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "saghen/blink.cmp",
  opts = function(_, opts)
    opts.kind_icons = LazyVim.config.icons.kinds
  end,
}
```

</TabItem>

</Tabs>

## [blink.cmp](https://github.com/saghen/blink.cmp)

 lazydev


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  sources = {
    completion = {
      -- add lazydev to your completion providers
      enabled_providers = { "lazydev" },
    },
    providers = {
      lsp = {
        -- dont show LuaLS require statements when lazydev has items
        fallback_for = { "lazydev" },
      },
      lazydev = {
        name = "LazyDev",
        module = "lazydev.integrations.blink",
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
  opts = {
    sources = {
      completion = {
        -- add lazydev to your completion providers
        enabled_providers = { "lazydev" },
      },
      providers = {
        lsp = {
          -- dont show LuaLS require statements when lazydev has items
          fallback_for = { "lazydev" },
        },
        lazydev = {
          name = "LazyDev",
          module = "lazydev.integrations.blink",
        },
      },
    },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
