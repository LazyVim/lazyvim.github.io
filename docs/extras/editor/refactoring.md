# `Refactoring`

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

## [async.nvim](https://github.com/lewis6991/async.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "lewis6991/async.nvim", lazy = true }
```

</TabItem>

</Tabs>

## [refactoring.nvim](https://github.com/ThePrimeagen/refactoring.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "ThePrimeagen/refactoring.nvim",
  event = { "BufReadPre", "BufNewFile" },
  keys = {
    { "<leader>r", "", desc = "+refactor", mode = { "n", "x" } },
    {
      "<leader>rs",
      function()
        return require("refactoring").select_refactor()
      end,
      mode = { "n", "x" },
      desc = "Select Refactor",
    },
    {
      "<leader>ri",
      function()
        return require("refactoring").inline_var()
      end,
      mode = { "n", "x" },
      desc = "Inline Variable",
      expr = true,
    },
    {
      "<leader>rP",
      function()
        return require("refactoring.debug").print_loc({ output_location = "below" })
      end,
      desc = "Debug Print Location",
      expr = true,
    },
    {
      "<leader>rp",
      function()
        return require("refactoring.debug").print_var({ output_location = "below" }) .. "iw"
      end,
      mode = { "n", "x" },
      desc = "Debug Print Variable",
      expr = true,
    },
    {
      "<leader>rc",
      function()
        return require("refactoring.debug").cleanup({ restore_view = true }) .. "ag"
      end,
      desc = "Debug Cleanup",
      expr = true,
    },
    {
      "<leader>rf",
      function()
        return require("refactoring").extract_func()
      end,
      mode = { "n", "x" },
      desc = "Extract Function",
      expr = true,
    },
    {
      "<leader>rF",
      function()
        return require("refactoring").extract_func_to_file()
      end,
      mode = { "n", "x" },
      desc = "Extract Function To File",
      expr = true,
    },
    {
      "<leader>rx",
      function()
        return require("refactoring").extract_var()
      end,
      mode = { "n", "x" },
      desc = "Extract Variable",
      expr = true,
    },
  },
  opts = {},
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
