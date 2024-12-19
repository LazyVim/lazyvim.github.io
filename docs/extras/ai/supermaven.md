# `Supermaven`

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

## [supermaven-nvim](https://github.com/supermaven-inc/supermaven-nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  keymaps = {
    accept_suggestion = nil, -- handled by nvim-cmp / blink.cmp
  },
  disable_inline_completion = vim.g.ai_cmp,
  ignore_filetypes = { "bigfile", "snacks_input", "snacks_notif" },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "supermaven-inc/supermaven-nvim",
  event = "InsertEnter",
  cmd = {
    "SupermavenUseFree",
    "SupermavenUsePro",
  },
  opts = {
    keymaps = {
      accept_suggestion = nil, -- handled by nvim-cmp / blink.cmp
    },
    disable_inline_completion = vim.g.ai_cmp,
    ignore_filetypes = { "bigfile", "snacks_input", "snacks_notif" },
  },
}
```

</TabItem>

</Tabs>

## [supermaven-nvim](https://github.com/supermaven-inc/supermaven-nvim)

 add ai_accept action


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  require("supermaven-nvim.completion_preview").suggestion_group = "SupermavenSuggestion"
  LazyVim.cmp.actions.ai_accept = function()
    local suggestion = require("supermaven-nvim.completion_preview")
    if suggestion.has_suggestion() then
      LazyVim.create_undo()
      vim.schedule(function()
        suggestion.on_accept_suggestion()
      end)
      return true
    end
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "supermaven-inc/supermaven-nvim",
  opts = function()
    require("supermaven-nvim.completion_preview").suggestion_group = "SupermavenSuggestion"
    LazyVim.cmp.actions.ai_accept = function()
      local suggestion = require("supermaven-nvim.completion_preview")
      if suggestion.has_suggestion() then
        LazyVim.create_undo()
        vim.schedule(function()
          suggestion.on_accept_suggestion()
        end)
        return true
      end
    end
  end,
}
```

</TabItem>

</Tabs>

## [supermaven-nvim](https://github.com/supermaven-inc/supermaven-nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "supermaven-nvim" }
```

</TabItem>

</Tabs>

## [supermaven-nvim](https://github.com/supermaven-inc/supermaven-nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "supermaven-nvim", "saghen/blink.compat" }
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
  if vim.g.ai_cmp then
    table.insert(opts.sources, 1, {
      name = "supermaven",
      group_index = 1,
      priority = 100,
    })
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "hrsh7th/nvim-cmp",
  optional = true,
  dependencies = { "supermaven-nvim" },
  opts = function(_, opts)
    if vim.g.ai_cmp then
      table.insert(opts.sources, 1, {
        name = "supermaven",
        group_index = 1,
        priority = 100,
      })
    end
  end,
}
```

</TabItem>

</Tabs>

## [blink.cmp](https://github.com/saghen/blink.cmp) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  sources = {
    compat = { "supermaven" },
    providers = {
      supermaven = {
        kind = "Supermaven",
        score_offset = 100,
        async = true,
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
  dependencies = { "supermaven-nvim", "saghen/blink.compat" },
  opts = {
    sources = {
      compat = { "supermaven" },
      providers = {
        supermaven = {
          kind = "Supermaven",
          score_offset = 100,
          async = true,
        },
      },
    },
  },
}
```

</TabItem>

</Tabs>

## [lualine.nvim](https://github.com/nvim-lualine/lualine.nvim) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  table.insert(opts.sections.lualine_x, 2, LazyVim.lualine.cmp_source("supermaven"))
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-lualine/lualine.nvim",
  optional = true,
  event = "VeryLazy",
  opts = function(_, opts)
    table.insert(opts.sections.lualine_x, 2, LazyVim.lualine.cmp_source("supermaven"))
  end,
}
```

</TabItem>

</Tabs>

## [noice.nvim](https://github.com/folke/noice.nvim) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  vim.list_extend(opts.routes, {
    {
      filter = {
        event = "msg_show",
        any = {
          { find = "Starting Supermaven" },
          { find = "Supermaven Free Tier" },
        },
      },
      skip = true,
    },
  })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "folke/noice.nvim",
  optional = true,
  opts = function(_, opts)
    vim.list_extend(opts.routes, {
      {
        filter = {
          event = "msg_show",
          any = {
            { find = "Starting Supermaven" },
            { find = "Supermaven Free Tier" },
          },
        },
        skip = true,
      },
    })
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
