# `Snacks_explorer`

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

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "folke/snacks.nvim",
  keys = {
    {
      "<leader>fe",
      function()
        Snacks.picker.explorer({ cwd = LazyVim.root() })
      end,
      desc = "Explorer Snacks (root dir)",
    },
    {
      "<leader>fE",
      function()
        Snacks.picker.explorer()
      end,
      desc = "Explorer Snacks (cwd)",
    },
    { "<leader>e", "<leader>fe", desc = "Explorer Snacks (root dir)", remap = true },
    { "<leader>E", "<leader>fE", desc = "Explorer Snacks (cwd)", remap = true },
  },
  init = function()
    vim.api.nvim_create_autocmd("BufEnter", {
      group = vim.api.nvim_create_augroup("snacks_explorer_start_directory", { clear = true }),
      desc = "Start Snacks Explorer with directory",
      once = true,
      callback = function()
        local dir = vim.fn.argv(0) --[[@as string]]
        if dir ~= "" and vim.fn.isdirectory(dir) == 1 then
          Snacks.picker.explorer({ cwd = dir })
        end
      end,
    })
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
