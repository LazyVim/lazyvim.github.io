# `Codeium`

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

## [codeium.nvim](https://github.com/Exafunction/codeium.nvim)

 codeium


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  enable_cmp_source = vim.g.ai_cmp,
  virtual_text = {
    enabled = not vim.g.ai_cmp,
    key_bindings = {
      accept = false, -- handled by nvim-cmp / blink.cmp
      next = "<M-]>",
      prev = "<M-[>",
    },
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "Exafunction/codeium.nvim",
  cmd = "Codeium",
  event = "InsertEnter",
  build = ":Codeium Auth",
  opts = {
    enable_cmp_source = vim.g.ai_cmp,
    virtual_text = {
      enabled = not vim.g.ai_cmp,
      key_bindings = {
        accept = false, -- handled by nvim-cmp / blink.cmp
        next = "<M-]>",
        prev = "<M-[>",
      },
    },
  },
}
```

</TabItem>

</Tabs>

## [codeium.nvim](https://github.com/Exafunction/codeium.nvim)

 add ai_accept action


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  LazyVim.cmp.actions.ai_accept = function()
    if require("codeium.virtual_text").get_current_completion_item() then
      LazyVim.create_undo()
      vim.api.nvim_input(require("codeium.virtual_text").accept())
      return true
    end
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "Exafunction/codeium.nvim",
  opts = function()
    LazyVim.cmp.actions.ai_accept = function()
      if require("codeium.virtual_text").get_current_completion_item() then
        LazyVim.create_undo()
        vim.api.nvim_input(require("codeium.virtual_text").accept())
        return true
      end
    end
  end,
}
```

</TabItem>

</Tabs>

## [codeium.nvim](https://github.com/Exafunction/codeium.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "codeium.nvim" }
```

</TabItem>

</Tabs>

## [codeium.nvim](https://github.com/Exafunction/codeium.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "codeium.nvim", "saghen/blink.compat" }
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

 codeium cmp source


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  table.insert(opts.sources, 1, {
    name = "codeium",
    group_index = 1,
    priority = 100,
  })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "hrsh7th/nvim-cmp",
  optional = true,
  dependencies = { "codeium.nvim" },
  opts = function(_, opts)
    table.insert(opts.sources, 1, {
      name = "codeium",
      group_index = 1,
      priority = 100,
    })
  end,
}
```

</TabItem>

</Tabs>

## [lualine.nvim](https://github.com/nvim-lualine/lualine.nvim) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  table.insert(opts.sections.lualine_x, 2, LazyVim.lualine.cmp_source("codeium"))
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
    table.insert(opts.sections.lualine_x, 2, LazyVim.lualine.cmp_source("codeium"))
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
    compat = { "codeium" },
    providers = {
      codeium = {
        kind = "Codeium",
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
  dependencies = { "codeium.nvim", "saghen/blink.compat" },
  opts = {
    sources = {
      compat = { "codeium" },
      providers = {
        codeium = {
          kind = "Codeium",
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

<!-- plugins:end -->
