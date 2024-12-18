# `Indent-blankline`

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

## [snacks.nvim](https://github.com/folke/snacks.nvim)

 disable snacks indent when indent-blankline is enabled


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  indent = { enabled = false },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "snacks.nvim",
  opts = {
    indent = { enabled = false },
  },
}
```

</TabItem>

</Tabs>

## [indent-blankline.nvim](https://github.com/lukas-reineke/indent-blankline.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  Snacks.toggle({
    name = "Indention Guides",
    get = function()
      return require("ibl.config").get_config(0).enabled
    end,
    set = function(state)
      require("ibl").setup_buffer(0, { enabled = state })
    end,
  }):map("<leader>ug")

  return {
    indent = {
      char = "│",
      tab_char = "│",
    },
    scope = { show_start = false, show_end = false },
    exclude = {
      filetypes = {
        "Trouble",
        "alpha",
        "dashboard",
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
    },
  }
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "lukas-reineke/indent-blankline.nvim",
  event = "LazyFile",
  opts = function()
    Snacks.toggle({
      name = "Indention Guides",
      get = function()
        return require("ibl.config").get_config(0).enabled
      end,
      set = function(state)
        require("ibl").setup_buffer(0, { enabled = state })
      end,
    }):map("<leader>ug")

    return {
      indent = {
        char = "│",
        tab_char = "│",
      },
      scope = { show_start = false, show_end = false },
      exclude = {
        filetypes = {
          "Trouble",
          "alpha",
          "dashboard",
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
      },
    }
  end,
  main = "ibl",
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
