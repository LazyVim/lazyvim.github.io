# Tailwind CSS

<!-- plugins:start -->

To use this, add it to your **lazy.nvim** imports:

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.lang.tailwind" },
    { import = "plugins" },
  },
})
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  servers = {
    tailwindcss = {},
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
      tailwindcss = {},
    },
  },
}
```

</TabItem>

</Tabs>

## [nvim-colorizer.lua](https://github.com/NvChad/nvim-colorizer.lua)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  user_default_options = {
    tailwind = true,
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "NvChad/nvim-colorizer.lua",
  opts = {
    user_default_options = {
      tailwind = true,
    },
  },
}
```

</TabItem>

</Tabs>

## [nvim-cmp](https://github.com/hrsh7th/nvim-cmp)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  -- original LazyVim kind icon formatter
  local format_kinds = opts.formatting.format
  opts.formatting.format = function(entry, item)
    format_kinds(entry, item) -- add icons
    return require("tailwindcss-colorizer-cmp").formatter(entry, item)
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "hrsh7th/nvim-cmp",
  dependencies = {
    { "roobert/tailwindcss-colorizer-cmp.nvim", config = true },
  },
  opts = function(_, opts)
    -- original LazyVim kind icon formatter
    local format_kinds = opts.formatting.format
    opts.formatting.format = function(entry, item)
      format_kinds(entry, item) -- add icons
      return require("tailwindcss-colorizer-cmp").formatter(entry, item)
    end
  end,
}
```

</TabItem>

</Tabs>

## [tailwindcss-colorizer-cmp.nvim](https://github.com/roobert/tailwindcss-colorizer-cmp.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "roobert/tailwindcss-colorizer-cmp.nvim", config = true }
```

</TabItem>

</Tabs>

<!-- plugins:end -->
