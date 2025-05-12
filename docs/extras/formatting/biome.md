# `Biome`

<!-- plugins:start -->

:::info
You can enable the extra with the `:LazyExtras` command.
Plugins marked as optional will only be configured if they are installed.
:::

### Options

Additional options for this extra can be configured in your [lua/config/options.lua](/configuration/general#options) file:

```lua title="lua/config/options.lua"
-- Enable this option to avoid conflicts with Prettier.
vim.g.lazyvim_prettier_needs_config = true
```

Below you can find a list of included plugins and their default settings.

:::caution
You don't need to copy the default settings to your config.
They are only shown here for reference.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [mason.nvim](https://github.com/mason-org/mason.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { ensure_installed = { "biome" } }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "mason-org/mason.nvim",
  opts = { ensure_installed = { "biome" } },
}
```

</TabItem>

</Tabs>

## [conform.nvim](https://github.com/stevearc/conform.nvim) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  opts.formatters_by_ft = opts.formatters_by_ft or {}
  for _, ft in ipairs(supported) do
    opts.formatters_by_ft[ft] = opts.formatters_by_ft[ft] or {}
    table.insert(opts.formatters_by_ft[ft], "biome")
  end

  opts.formatters = opts.formatters or {}
  opts.formatters.biome = {
    require_cwd = true,
  }
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "stevearc/conform.nvim",
  optional = true,
  ---@param opts ConformOpts
  opts = function(_, opts)
    opts.formatters_by_ft = opts.formatters_by_ft or {}
    for _, ft in ipairs(supported) do
      opts.formatters_by_ft[ft] = opts.formatters_by_ft[ft] or {}
      table.insert(opts.formatters_by_ft[ft], "biome")
    end

    opts.formatters = opts.formatters or {}
    opts.formatters.biome = {
      require_cwd = true,
    }
  end,
}
```

</TabItem>

</Tabs>

## [none-ls.nvim](https://github.com/nvimtools/none-ls.nvim) _(optional)_

 none-ls support


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  local nls = require("null-ls")
  opts.sources = opts.sources or {}
  table.insert(opts.sources, nls.builtins.formatting.biome)
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvimtools/none-ls.nvim",
  optional = true,
  opts = function(_, opts)
    local nls = require("null-ls")
    opts.sources = opts.sources or {}
    table.insert(opts.sources, nls.builtins.formatting.biome)
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
