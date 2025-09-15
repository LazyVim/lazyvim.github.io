# `Smear-cursor`

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

## [smear-cursor.nvim](https://github.com/sphamba/smear-cursor.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  hide_target_hack = true,
  cursor_color = "none",
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
    cursor_color = "none",
  },
  specs = {
    -- disable mini.animate cursor
    {
      "nvim-mini/mini.animate",
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

## [mini.animate](https://github.com/nvim-mini/mini.animate) _(optional)_

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
  "nvim-mini/mini.animate",
  optional = true,
  opts = {
    cursor = { enable = false },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
