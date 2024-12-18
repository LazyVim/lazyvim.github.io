# `Mini-indentscope`

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

## [mini.indentscope](https://github.com/echasnovski/mini.indentscope)

 Active indent guide and indent text objects. When you're browsing
 code, this highlights the current level of indentation, and animates
 the highlighting.


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  -- symbol = "▏",
  symbol = "│",
  options = { try_as_border = true },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "echasnovski/mini.indentscope",
  version = false, -- wait till new 0.7.0 release to put it back on semver
  event = "LazyFile",
  opts = {
    -- symbol = "▏",
    symbol = "│",
    options = { try_as_border = true },
  },
  init = function()
    vim.api.nvim_create_autocmd("FileType", {
      pattern = {
        "Trouble",
        "alpha",
        "dashboard",
        "fzf",
        "help",
        "lazy",
        "mason",
        "neo-tree",
        "notify",
        "snacks_dashboard",
        "snacks_notif",
        "snacks_terminal",
        "snacks_win",
        "toggleterm",
        "trouble",
      },
      callback = function()
        vim.b.miniindentscope_disable = true
      end,
    })

    vim.api.nvim_create_autocmd("User", {
      pattern = "SnacksDashboardOpened",
      callback = function(data)
        vim.b[data.buf].miniindentscope_disable = true
      end,
    })
  end,
}
```

</TabItem>

</Tabs>

## [snacks.nvim](https://github.com/folke/snacks.nvim)

 disable snacks scroll when mini-indentscope is enabled


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  indent = {
    scope = { enabled = false },
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "snacks.nvim",
  opts = {
    indent = {
      scope = { enabled = false },
    },
  },
}
```

</TabItem>

</Tabs>

## [indent-blankline.nvim](https://github.com/lukas-reineke/indent-blankline.nvim) _(optional)_

 disable inent-blankline scope when mini-indentscope is enabled


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  scope = { enabled = false },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "lukas-reineke/indent-blankline.nvim",
  optional = true,
  event = "LazyFile",
  opts = {
    scope = { enabled = false },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
