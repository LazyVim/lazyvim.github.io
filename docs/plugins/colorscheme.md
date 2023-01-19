# Colorscheme

Example for changing the colorscheme to [Gruvbox](https://github.com/ellisonleao/gruvbox.nvim):

```lua title="lua/plugins/colorscheme.lua"
-- add gruvbox
{ "ellisonleao/gruvbox.nvim" },

-- Configure LazyVim to load gruvbox
{
  "LazyVim/LazyVim",
  opts = {
    colorscheme = "gruvbox",
  },
},
```

<!-- plugins:start -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [tokyonight.nvim](https://github.com/folke/tokyonight.nvim)

 tokyonight


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { style = "moon" }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "folke/tokyonight.nvim",
  lazy = true,
  opts = { style = "moon" },
}
```

</TabItem>

</Tabs>

## [catppuccin](https://github.com/catppuccin/nvim)

 catppuccin


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "catppuccin/nvim",
  lazy = true,
  name = "catppuccin",
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
