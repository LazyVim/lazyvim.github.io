# `editor.leap`

<!-- plugins:start -->

To use this, add it to your **lazy.nvim** imports:

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.editor.leap" },
    { import = "plugins" },
  },
})
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [flit.nvim](https://github.com/ggandor/flit.nvim)

 easily jump to any location and enhanced f/t motions for Leap


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { labeled_modes = "nx" }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "ggandor/flit.nvim",
  enabled = true,
  keys = function()
    ---@type LazyKeys[]
    local ret = {}
    for _, key in ipairs({ "f", "F", "t", "T" }) do
      ret[#ret + 1] = { key, mode = { "n", "x", "o" }, desc = key }
    end
    return ret
  end,
  opts = { labeled_modes = "nx" },
}
```

</TabItem>

</Tabs>

## [leap.nvim](https://github.com/ggandor/leap.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "ggandor/leap.nvim",
  enabled = true,
  keys = {
    { "s", mode = { "n", "x", "o" }, desc = "Leap forward to" },
    { "S", mode = { "n", "x", "o" }, desc = "Leap backward to" },
    { "gs", mode = { "n", "x", "o" }, desc = "Leap from windows" },
  },
  config = function(_, opts)
    local leap = require("leap")
    for k, v in pairs(opts) do
      leap.opts[k] = v
    end
    leap.add_default_mappings(true)
    vim.keymap.del({ "x", "o" }, "x")
    vim.keymap.del({ "x", "o" }, "X")
  end,
}
```

</TabItem>

</Tabs>

## [vim-repeat](https://github.com/tpope/vim-repeat)

 makes some plugins dot-repeatable like leap


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "tpope/vim-repeat", event = "VeryLazy" }
```

</TabItem>

</Tabs>

<!-- plugins:end -->
