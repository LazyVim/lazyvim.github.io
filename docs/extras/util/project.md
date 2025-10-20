# Project

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

## [project.nvim](https://github.com/ahmedkhalf/project.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  manual_mode = true,
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "ahmedkhalf/project.nvim",
  opts = {
    manual_mode = true,
  },
  event = "VeryLazy",
  config = function(_, opts)
    require("project_nvim").setup(opts)
    local history = require("project_nvim.utils.history")
    history.delete_project = function(project)
      for k, v in pairs(history.recent_projects) do
        if v == project.value then
          history.recent_projects[k] = nil
          return
        end
      end
    end
    LazyVim.on_load("telescope.nvim", function()
      require("telescope").load_extension("projects")
    end)
  end,
}
```

</TabItem>

</Tabs>

## [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-telescope/telescope.nvim",
  optional = true,
  keys = {
    { "<leader>fp", pick, desc = "Projects" },
  },
}
```

</TabItem>

</Tabs>

## [fzf-lua](https://github.com/ibhagwan/fzf-lua) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "ibhagwan/fzf-lua",
  optional = true,
  keys = {
    { "<leader>fp", pick, desc = "Projects" },
  },
}
```

</TabItem>

</Tabs>

## [alpha-nvim](https://github.com/goolord/alpha-nvim) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, dashboard)
  local button = dashboard.button("P", " " .. " Projects (util.project)", pick)
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
  optional = true,
  opts = function(_, dashboard)
    local button = dashboard.button("P", " " .. " Projects (util.project)", pick)
    button.opts.hl = "AlphaButtons"
    button.opts.hl_shortcut = "AlphaShortcut"
    table.insert(dashboard.section.buttons.val, 4, button)
  end,
}
```

</TabItem>

</Tabs>

## [mini.starter](https://github.com/nvim-mini/mini.starter) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  local items = {
    {
      name = "Projects (util.project)",
      action = pick,
      section = string.rep(" ", 22) .. "Telescope",
    },
  }
  vim.list_extend(opts.items, items)
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-mini/mini.starter",
  optional = true,
  opts = function(_, opts)
    local items = {
      {
        name = "Projects (util.project)",
        action = pick,
        section = string.rep(" ", 22) .. "Telescope",
      },
    }
    vim.list_extend(opts.items, items)
  end,
}
```

</TabItem>

</Tabs>

## [dashboard-nvim](https://github.com/nvimdev/dashboard-nvim) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  if not vim.tbl_get(opts, "config", "center") then
    return
  end
  local projects = {
    action = pick,
    desc = " Projects (util.project)",
    icon = " ",
    key = "P",
  }

  projects.desc = projects.desc .. string.rep(" ", 43 - #projects.desc)
  projects.key_format = "  %s"

  table.insert(opts.config.center, 3, projects)
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvimdev/dashboard-nvim",
  optional = true,
  opts = function(_, opts)
    if not vim.tbl_get(opts, "config", "center") then
      return
    end
    local projects = {
      action = pick,
      desc = " Projects (util.project)",
      icon = " ",
      key = "P",
    }

    projects.desc = projects.desc .. string.rep(" ", 43 - #projects.desc)
    projects.key_format = "  %s"

    table.insert(opts.config.center, 3, projects)
  end,
}
```

</TabItem>

</Tabs>

## [snacks.nvim](https://github.com/folke/snacks.nvim) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  table.insert(opts.dashboard.preset.keys, 3, {
    action = pick,
    desc = "Projects (util.project)",
    icon = " ",
    key = "P",
  })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "folke/snacks.nvim",
  optional = true,
  opts = function(_, opts)
    table.insert(opts.dashboard.preset.keys, 3, {
      action = pick,
      desc = "Projects (util.project)",
      icon = " ",
      key = "P",
    })
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
