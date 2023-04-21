# Project

<!-- plugins:start -->

To use this, add it to your **lazy.nvim** imports:

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.util.project" },
    { import = "plugins" },
  },
})
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [project.nvim](https://github.com/ahmedkhalf/project.nvim)

 project management


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "ahmedkhalf/project.nvim",
  opts = {},
  event = "VeryLazy",
  config = function(_, opts)
    require("project_nvim").setup(opts)
    require("telescope").load_extension("projects")
  end,
  keys = {
    { "<leader>fp", "<Cmd>Telescope projects<CR>", desc = "Projects" },
  },
}
```

</TabItem>

</Tabs>

## [alpha-nvim](https://github.com/goolord/alpha-nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, dashboard)
  local button = dashboard.button("p", " " .. " Projects", ":Telescope projects <CR>")
  button.opts.hl = "AlphaButtons"
  button.opts.hl_shortcut = "AlphaShortcut"
  table.insert(dashboard.section.buttons.val, 4, button)
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "goolord/alpha-nvim",
  opts = function(_, dashboard)
    local button = dashboard.button("p", " " .. " Projects", ":Telescope projects <CR>")
    button.opts.hl = "AlphaButtons"
    button.opts.hl_shortcut = "AlphaShortcut"
    table.insert(dashboard.section.buttons.val, 4, button)
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
