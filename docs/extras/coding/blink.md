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

### Options

Additional options for this extra can be configured in your [lua/config/options.lua](/configuration/general#options) file:

```lua title="lua/config/options.lua"
-- set to `true` to follow the main branch
-- you need to have a working rust toolchain to build the plugin
-- in this case.
vim.g.lazyvim_blink_main = false
```

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
      -- draw = "reversed",
      winblend = vim.o.pumblend,
    },
    documentation = {
      auto_show = true,
    },
    ghost_text = {
      enabled = vim.g.ai_cmp,
    },
  },

  -- experimental auto-brackets support
  accept = { auto_brackets = { enabled = true } },

  -- experimental signature help support
  -- trigger = { signature_help = { enabled = true } }
  sources = {
    -- adding any nvim-cmp sources here will enable them
    -- with blink.compat
    compat = {},
    completion = {
      -- remember to enable your providers here
      enabled_providers = { "lsp", "path", "snippets", "buffer" },
    },
  },

  keymap = {
    preset = "enter",
    ["<Tab>"] = {
      LazyVim.cmp.map({ "snippet_forward", "ai_accept" }),
      "fallback",
    },
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "saghen/blink.cmp",
  version = not vim.g.lazyvim_blink_main and "*",
  build = vim.g.lazyvim_blink_main and "cargo build --release",
  opts_extend = {
    "sources.completion.enabled_providers",
    "sources.compat",
  },
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
        -- draw = "reversed",
        winblend = vim.o.pumblend,
      },
      documentation = {
        auto_show = true,
      },
      ghost_text = {
        enabled = vim.g.ai_cmp,
      },
    },

    -- experimental auto-brackets support
    accept = { auto_brackets = { enabled = true } },

    -- experimental signature help support
    -- trigger = { signature_help = { enabled = true } }
    sources = {
      -- adding any nvim-cmp sources here will enable them
      -- with blink.compat
      compat = {},
      completion = {
        -- remember to enable your providers here
        enabled_providers = { "lsp", "path", "snippets", "buffer" },
      },
    },

    keymap = {
      preset = "enter",
      ["<Tab>"] = {
        LazyVim.cmp.map({ "snippet_forward", "ai_accept" }),
        "fallback",
      },
    },
  },
  ---@param opts blink.cmp.Config | { sources: { compat: string[] } }
  config = function(_, opts)
    -- setup compat sources
    local enabled = opts.sources.completion.enabled_providers
    for _, source in ipairs(opts.sources.compat or {}) do
      opts.sources.providers[source] = vim.tbl_deep_extend(
        "force",
        { name = source, module = "blink.compat.source" },
        opts.sources.providers[source] or {}
      )
      if type(enabled) == "table" and not vim.tbl_contains(enabled, source) then
        table.insert(enabled, source)
      end
    end
    require("blink.cmp").setup(opts)
  end,
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
