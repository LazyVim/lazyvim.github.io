# `Smear-cursor`

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
    { import = "lazyvim.plugins.extras.ui.smear-cursor" },
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

## [smear-cursor.nvim](https://github.com/sphamba/smear-cursor.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  hide_target_hack = true,
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "sphamba/smear-cursor.nvim",
  event = "VeryLazy",
  cond = vim.g.neovide == nil,
  opts = {
    hide_target_hack = true,
  },
  specs = {
    -- disable mini.animate cursor
    {
      "echasnovski/mini.animate",
      optional = true,
      opts = {
        cursor = { enable = false },
      },
    },
  },
}
```

</TabItem>

</Tabs>

## [mini.animate](https://github.com/echasnovski/mini.animate) _(optional)_

 disable mini.animate cursor


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  cursor = { enable = false },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "echasnovski/mini.animate",
  optional = true,
  opts = {
    cursor = { enable = false },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
