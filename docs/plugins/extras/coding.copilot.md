# Copilot

<!-- plugins:start -->

To use this, add it to your **lazy.nvim** imports:

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.coding.copilot" },
    { import = "plugins" },
  },
})
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [copilot.lua](https://github.com/zbirenbaum/copilot.lua)

 copilot


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  suggestion = { enabled = false },
  panel = { enabled = false },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "zbirenbaum/copilot.lua",
  cmd = "Copilot",
  build = ":Copilot auth",
  opts = {
    suggestion = { enabled = false },
    panel = { enabled = false },
  },
}
```

</TabItem>

</Tabs>

## [lualine.nvim](https://github.com/nvim-lualine/lualine.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  local Util = require("lazyvim.util")
  local colors = {
    [""] = Util.fg("Special"),
    ["Normal"] = Util.fg("Special"),
    ["Warning"] = Util.fg("DiagnosticWarn"),
    ["InProgress"] = Util.fg("DiagnosticInfo"),
  }
  table.insert(opts.sections.lualine_x, 2, {
    function()
      local icon = require("lazyvim.config").icons.kinds.Copilot
      local status = require("copilot.api").status.data
      return icon .. (status.message or "")
    end,
    cond = function()
      local clients = vim.lsp.get_active_clients({ name = "copilot", bufnr = 0 })
      return #clients > 0
    end,
    color = function()
      local status = require("copilot.api").status.data
      return colors[status.status] or colors[""]
    end,
  })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-lualine/lualine.nvim",
  event = "VeryLazy",
  opts = function(_, opts)
    local Util = require("lazyvim.util")
    local colors = {
      [""] = Util.fg("Special"),
      ["Normal"] = Util.fg("Special"),
      ["Warning"] = Util.fg("DiagnosticWarn"),
      ["InProgress"] = Util.fg("DiagnosticInfo"),
    }
    table.insert(opts.sections.lualine_x, 2, {
      function()
        local icon = require("lazyvim.config").icons.kinds.Copilot
        local status = require("copilot.api").status.data
        return icon .. (status.message or "")
      end,
      cond = function()
        local clients = vim.lsp.get_active_clients({ name = "copilot", bufnr = 0 })
        return #clients > 0
      end,
      color = function()
        local status = require("copilot.api").status.data
        return colors[status.status] or colors[""]
      end,
    })
  end,
}
```

</TabItem>

</Tabs>

## [copilot-cmp](https://github.com/zbirenbaum/copilot-cmp)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "zbirenbaum/copilot-cmp",
  dependencies = "copilot.lua",
  opts = {},
  config = function(_, opts)
    local copilot_cmp = require("copilot_cmp")
    copilot_cmp.setup(opts)
    -- attach cmp source whenever copilot attaches
    -- fixes lazy-loading issues with the copilot cmp source
    require("lazyvim.util").on_attach(function(client)
      if client.name == "copilot" then
        copilot_cmp._on_insert_enter()
      end
    end)
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
