# Leap

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
    { import = "lazyvim.plugins.extras.editor.leap" },
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
    { "s", mode = { "n", "x", "o" }, desc = "Leap Forward to" },
    { "S", mode = { "n", "x", "o" }, desc = "Leap Backward to" },
    { "gs", mode = { "n", "x", "o" }, desc = "Leap from Windows" },
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

## [mini.surround](https://github.com/echasnovski/mini.surround) _(optional)_

 rename surround mappings from gs to gz to prevent conflict with leap


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  mappings = {
    add = "gza", -- Add surrounding in Normal and Visual modes
    delete = "gzd", -- Delete surrounding
    find = "gzf", -- Find surrounding (to the right)
    find_left = "gzF", -- Find surrounding (to the left)
    highlight = "gzh", -- Highlight surrounding
    replace = "gzr", -- Replace surrounding
    update_n_lines = "gzn", -- Update `n_lines`
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "echasnovski/mini.surround",
  optional = true,
  opts = {
    mappings = {
      add = "gza", -- Add surrounding in Normal and Visual modes
      delete = "gzd", -- Delete surrounding
      find = "gzf", -- Find surrounding (to the right)
      find_left = "gzF", -- Find surrounding (to the left)
      highlight = "gzh", -- Highlight surrounding
      replace = "gzr", -- Replace surrounding
      update_n_lines = "gzn", -- Update `n_lines`
    },
  },
}
```

</TabItem>

</Tabs>

## [which-key.nvim](https://github.com/folke/which-key.nvim) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  defaults = {
    ["gz"] = { name = "+surround" },
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "folke/which-key.nvim",
  optional = true,
  opts = {
    defaults = {
      ["gz"] = { name = "+surround" },
    },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
