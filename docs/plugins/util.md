# Util

<!-- plugins:start -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [snacks.nvim](https://github.com/folke/snacks.nvim)

 Snacks utils


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  bigfile = { enabled = true },
  quickfile = { enabled = true },
  terminal = {
    win = {
      keys = {
        nav_h = { "<C-h>", term_nav("h"), desc = "Go to Left Window", expr = true, mode = "t" },
        nav_j = { "<C-j>", term_nav("j"), desc = "Go to Lower Window", expr = true, mode = "t" },
        nav_k = { "<C-k>", term_nav("k"), desc = "Go to Upper Window", expr = true, mode = "t" },
        nav_l = { "<C-l>", term_nav("l"), desc = "Go to Right Window", expr = true, mode = "t" },
        hide_slash = { "<C-/>", "hide", desc = "Hide Terminal", mode = { "t", "n" } },
        hide_underscore = { "<c-_>", "hide", desc = "which_key_ignore", mode = { "t", "n" } },
      },
    },
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "snacks.nvim",
  opts = {
    bigfile = { enabled = true },
    quickfile = { enabled = true },
    terminal = {
      win = {
        keys = {
          nav_h = { "<C-h>", term_nav("h"), desc = "Go to Left Window", expr = true, mode = "t" },
          nav_j = { "<C-j>", term_nav("j"), desc = "Go to Lower Window", expr = true, mode = "t" },
          nav_k = { "<C-k>", term_nav("k"), desc = "Go to Upper Window", expr = true, mode = "t" },
          nav_l = { "<C-l>", term_nav("l"), desc = "Go to Right Window", expr = true, mode = "t" },
          hide_slash = { "<C-/>", "hide", desc = "Hide Terminal", mode = { "t", "n" } },
          hide_underscore = { "<c-_>", "hide", desc = "which_key_ignore", mode = { "t", "n" } },
        },
      },
    },
  },
  -- stylua: ignore
  keys = {
    { "<leader>.",  function() Snacks.scratch() end, desc = "Toggle Scratch Buffer" },
    { "<leader>S",  function() Snacks.scratch.select() end, desc = "Select Scratch Buffer" },
    { "<leader>dps", function() Snacks.profiler.scratch() end, desc = "Profiler Scratch Buffer" },
  },
}
```

</TabItem>

</Tabs>

## [persistence.nvim](https://github.com/folke/persistence.nvim)

 Session management. This saves your session in the background,
 keeping track of open buffers, window arrangement, and more.
 You can restore sessions when returning through the dashboard.


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "folke/persistence.nvim",
  event = "BufReadPre",
  opts = {},
  -- stylua: ignore
  keys = {
    { "<leader>qs", function() require("persistence").load() end, desc = "Restore Session" },
    { "<leader>qS", function() require("persistence").select() end,desc = "Select Session" },
    { "<leader>ql", function() require("persistence").load({ last = true }) end, desc = "Restore Last Session" },
    { "<leader>qd", function() require("persistence").stop() end, desc = "Don't Save Current Session" },
  },
}
```

</TabItem>

</Tabs>

## [plenary.nvim](https://github.com/nvim-lua/plenary.nvim)

 library used by other plugins


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "nvim-lua/plenary.nvim", lazy = true }
```

</TabItem>

</Tabs>

<!-- plugins:end -->
