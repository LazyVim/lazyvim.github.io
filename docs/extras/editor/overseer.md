# `Overseer`

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
    { import = "lazyvim.plugins.extras.editor.overseer" },
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

## [overseer.nvim](https://github.com/stevearc/overseer.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  dap = false,
  task_list = {
    bindings = {
      ["<C-h>"] = false,
      ["<C-j>"] = false,
      ["<C-k>"] = false,
      ["<C-l>"] = false,
    },
  },
  form = {
    win_opts = {
      winblend = 0,
    },
  },
  confirm = {
    win_opts = {
      winblend = 0,
    },
  },
  task_win = {
    win_opts = {
      winblend = 0,
    },
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "stevearc/overseer.nvim",
  cmd = {
    "OverseerOpen",
    "OverseerClose",
    "OverseerToggle",
    "OverseerSaveBundle",
    "OverseerLoadBundle",
    "OverseerDeleteBundle",
    "OverseerRunCmd",
    "OverseerRun",
    "OverseerInfo",
    "OverseerBuild",
    "OverseerQuickAction",
    "OverseerTaskAction",
    "OverseerClearCache",
  },
  opts = {
    dap = false,
    task_list = {
      bindings = {
        ["<C-h>"] = false,
        ["<C-j>"] = false,
        ["<C-k>"] = false,
        ["<C-l>"] = false,
      },
    },
    form = {
      win_opts = {
        winblend = 0,
      },
    },
    confirm = {
      win_opts = {
        winblend = 0,
      },
    },
    task_win = {
      win_opts = {
        winblend = 0,
      },
    },
  },
  -- stylua: ignore
  keys = {
    { "<leader>ow", "<cmd>OverseerToggle<cr>",      desc = "Task list" },
    { "<leader>oo", "<cmd>OverseerRun<cr>",         desc = "Run task" },
    { "<leader>oq", "<cmd>OverseerQuickAction<cr>", desc = "Action recent task" },
    { "<leader>oi", "<cmd>OverseerInfo<cr>",        desc = "Overseer Info" },
    { "<leader>ob", "<cmd>OverseerBuild<cr>",       desc = "Task builder" },
    { "<leader>ot", "<cmd>OverseerTaskAction<cr>",  desc = "Task action" },
    { "<leader>oc", "<cmd>OverseerClearCache<cr>",  desc = "Clear cache" },
  },
}
```

</TabItem>

</Tabs>

## [catppuccin](https://github.com/catppuccin/nvim) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  integrations = { overseer = true },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "catppuccin",
  optional = true,
  opts = {
    integrations = { overseer = true },
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
  defaults = { ["<leader>o"] = { name = "+overseer" } },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "folke/which-key.nvim",
  optional = true,
  opts = {
    defaults = { ["<leader>o"] = { name = "+overseer" } },
  },
}
```

</TabItem>

</Tabs>

## [edgy.nvim](https://github.com/folke/edgy.nvim) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  opts.right = opts.right or {}
  table.insert(opts.right, {
    title = "Overseer",
    ft = "OverseerList",
    open = function()
      require("overseer").open()
    end,
  })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "folke/edgy.nvim",
  optional = true,
  opts = function(_, opts)
    opts.right = opts.right or {}
    table.insert(opts.right, {
      title = "Overseer",
      ft = "OverseerList",
      open = function()
        require("overseer").open()
      end,
    })
  end,
}
```

</TabItem>

</Tabs>

## [neotest](https://github.com/nvim-neotest/neotest) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  opts = opts or {}
  opts.consumers = opts.consumers or {}
  opts.consumers.overseer = require("neotest.consumers.overseer")
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-neotest/neotest",
  optional = true,
  opts = function(_, opts)
    opts = opts or {}
    opts.consumers = opts.consumers or {}
    opts.consumers.overseer = require("neotest.consumers.overseer")
  end,
}
```

</TabItem>

</Tabs>

## [nvim-dap](https://github.com/mfussenegger/nvim-dap) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  require("overseer").enable_dap()
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "mfussenegger/nvim-dap",
  optional = true,
  opts = function()
    require("overseer").enable_dap()
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
