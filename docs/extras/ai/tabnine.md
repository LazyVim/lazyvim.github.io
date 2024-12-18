# `Tabnine`

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

## [cmp-tabnine](https://github.com/tzachar/cmp-tabnine)

 Tabnine cmp source


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  max_lines = 1000,
  max_num_results = 3,
  sort = true,
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "tzachar/cmp-tabnine",
  build = LazyVim.is_win() and "pwsh -noni .\\install.ps1" or "./install.sh",
  opts = {
    max_lines = 1000,
    max_num_results = 3,
    sort = true,
  },
  config = function(_, opts)
    require("cmp_tabnine.config"):setup(opts)
  end,
}
```

</TabItem>

</Tabs>

## [cmp-tabnine](https://github.com/tzachar/cmp-tabnine)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "tzachar/cmp-tabnine" }
```

</TabItem>

</Tabs>

## [cmp-tabnine](https://github.com/tzachar/cmp-tabnine)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "tzachar/cmp-tabnine", "saghen/blink.compat" }
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

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  table.insert(opts.sources, 1, {
    name = "cmp_tabnine",
    group_index = 1,
    priority = 100,
  })

  opts.formatting.format = LazyVim.inject.args(opts.formatting.format, function(entry, item)
    -- Hide percentage in the menu
    if entry.source.name == "cmp_tabnine" then
      item.menu = ""
    end
  end)
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "hrsh7th/nvim-cmp",
  optional = true,
  dependencies = { "tzachar/cmp-tabnine" },
  ---@param opts cmp.ConfigSchema
  opts = function(_, opts)
    table.insert(opts.sources, 1, {
      name = "cmp_tabnine",
      group_index = 1,
      priority = 100,
    })

    opts.formatting.format = LazyVim.inject.args(opts.formatting.format, function(entry, item)
      -- Hide percentage in the menu
      if entry.source.name == "cmp_tabnine" then
        item.menu = ""
      end
    end)
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
    compat = { "cmp_tabnine" },
    providers = {
      cmp_tabnine = {
        kind = "TabNine",
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
  dependencies = { "tzachar/cmp-tabnine", "saghen/blink.compat" },
  opts = {
    sources = {
      compat = { "cmp_tabnine" },
      providers = {
        cmp_tabnine = {
          kind = "TabNine",
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

 Show TabNine status in lualine


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  local icon = LazyVim.config.icons.kinds.TabNine
  table.insert(opts.sections.lualine_x, 2, LazyVim.lualine.cmp_source("cmp_tabnine", icon))
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
    local icon = LazyVim.config.icons.kinds.TabNine
    table.insert(opts.sections.lualine_x, 2, LazyVim.lualine.cmp_source("cmp_tabnine", icon))
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
