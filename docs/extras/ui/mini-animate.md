# Mini Animate

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

 disable snacks scroll when animate is enabled


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  scroll = { enabled = false },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "snacks.nvim",
  opts = {
    scroll = { enabled = false },
  },
}
```

</TabItem>

</Tabs>

## [mini.animate](https://github.com/echasnovski/mini.animate)

 setup animate


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  -- don't use animate when scrolling with the mouse
  local mouse_scrolled = false
  for _, scroll in ipairs({ "Up", "Down" }) do
    local key = "<ScrollWheel" .. scroll .. ">"
    vim.keymap.set({ "", "i" }, key, function()
      mouse_scrolled = true
      return key
    end, { expr = true })
  end

  vim.api.nvim_create_autocmd("FileType", {
    pattern = "grug-far",
    callback = function()
      vim.b.minianimate_disable = true
    end,
  })

  Snacks.toggle({
    name = "Mini Animate",
    get = function()
      return not vim.g.minianimate_disable
    end,
    set = function(state)
      vim.g.minianimate_disable = not state
    end,
  }):map("<leader>ua")

  local animate = require("mini.animate")
  return vim.tbl_deep_extend("force", opts, {
    resize = {
      timing = animate.gen_timing.linear({ duration = 50, unit = "total" }),
    },
    scroll = {
      timing = animate.gen_timing.linear({ duration = 150, unit = "total" }),
      subscroll = animate.gen_subscroll.equal({
        predicate = function(total_scroll)
          if mouse_scrolled then
            mouse_scrolled = false
            return false
          end
          return total_scroll > 1
        end,
      }),
    },
  })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "echasnovski/mini.animate",
  event = "VeryLazy",
  cond = vim.g.neovide == nil,
  opts = function(_, opts)
    -- don't use animate when scrolling with the mouse
    local mouse_scrolled = false
    for _, scroll in ipairs({ "Up", "Down" }) do
      local key = "<ScrollWheel" .. scroll .. ">"
      vim.keymap.set({ "", "i" }, key, function()
        mouse_scrolled = true
        return key
      end, { expr = true })
    end

    vim.api.nvim_create_autocmd("FileType", {
      pattern = "grug-far",
      callback = function()
        vim.b.minianimate_disable = true
      end,
    })

    Snacks.toggle({
      name = "Mini Animate",
      get = function()
        return not vim.g.minianimate_disable
      end,
      set = function(state)
        vim.g.minianimate_disable = not state
      end,
    }):map("<leader>ua")

    local animate = require("mini.animate")
    return vim.tbl_deep_extend("force", opts, {
      resize = {
        timing = animate.gen_timing.linear({ duration = 50, unit = "total" }),
      },
      scroll = {
        timing = animate.gen_timing.linear({ duration = 150, unit = "total" }),
        subscroll = animate.gen_subscroll.equal({
          predicate = function(total_scroll)
            if mouse_scrolled then
              mouse_scrolled = false
              return false
            end
            return total_scroll > 1
          end,
        }),
      },
    })
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
