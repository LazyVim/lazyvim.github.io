# Prettier

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
    { import = "lazyvim.plugins.extras.formatting.prettier" },
    { import = "plugins" },
  },
})
```

</details>

### Options

Additional options for this extra can be configured in your [lua/config/options.lua](/configuration/general#options) file:

```lua title="lua/config/options.lua"
-- Enable the option to require a Prettier config file
-- If no prettier config file is found, the formatter will not be used
vim.g.lazyvim_prettier_needs_config = false
```

Below you can find a list of included plugins and their default settings.

:::caution
You don't need to copy the default settings to your config.
They are only shown here for reference.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [mason.nvim](https://github.com/williamboman/mason.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { ensure_installed = { "prettier" } }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "williamboman/mason.nvim",
  opts = { ensure_installed = { "prettier" } },
}
```

</TabItem>

</Tabs>

## [conform.nvim](https://github.com/stevearc/conform.nvim) _(optional)_

 conform


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  opts.formatters_by_ft = opts.formatters_by_ft or {}
  for _, ft in ipairs(supported) do
    opts.formatters_by_ft[ft] = { "prettier" }
  end

  opts.formatters = {
    prettier = {
      condition = function(_, ctx)
        return M.has_parser(ctx) and (vim.g.lazyvim_prettier_needs_config ~= true or M.has_config(ctx))
      end,
    },
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
      opts.formatters_by_ft[ft] = { "prettier" }
    end

    opts.formatters = {
      prettier = {
        condition = function(_, ctx)
          return M.has_parser(ctx) and (vim.g.lazyvim_prettier_needs_config ~= true or M.has_config(ctx))
        end,
      },
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
  table.insert(opts.sources, nls.builtins.formatting.prettier)
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
    table.insert(opts.sources, nls.builtins.formatting.prettier)
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
