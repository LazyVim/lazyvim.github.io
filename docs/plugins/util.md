# Util

<!-- plugins:start -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [vim-startuptime](https://github.com/dstein64/vim-startuptime)

 measure startuptime


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "dstein64/vim-startuptime",
  cmd = "StartupTime",
  config = function()
    vim.g.startuptime_tries = 10
  end,
}
```

</TabItem>

</Tabs>

## [persistence.nvim](https://github.com/folke/persistence.nvim)

 session management


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { options = { "buffers", "curdir", "tabpages", "winsize", "help", "globals", "skiprtp" } }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "folke/persistence.nvim",
  event = "BufReadPre",
  opts = { options = { "buffers", "curdir", "tabpages", "winsize", "help", "globals", "skiprtp" } },
  -- stylua: ignore
  keys = {
    { "<leader>qs", function() require("persistence").load() end, desc = "Restore Session" },
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
