# `coding.codeium`

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
    { import = "lazyvim.plugins.extras.coding.codeium" },
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

## [codeium.nvim](https://github.com/Exafunction/codeium.nvim)

 codeium


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "Exafunction/codeium.nvim",
  cmd = "Codeium",
  build = ":Codeium Auth",
  opts = {},
}
```

</TabItem>

</Tabs>

## [lualine.nvim](https://github.com/nvim-lualine/lualine.nvim) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  local started = false
  local function status()
    if not package.loaded["cmp"] then
      return
    end
    for _, s in ipairs(require("cmp").core.sources) do
      if s.name == "codeium" then
        if s.source:is_available() then
          started = true
        else
          return started and "error" or nil
        end
        if s.status == s.SourceStatus.FETCHING then
          return "pending"
        end
        return "ok"
      end
    end
  end

  local Util = require("lazyvim.util")
  local colors = {
    ok = Util.ui.fg("Special"),
    error = Util.ui.fg("DiagnosticError"),
    pending = Util.ui.fg("DiagnosticWarn"),
  }
  table.insert(opts.sections.lualine_x, 2, {
    function()
      return require("lazyvim.config").icons.kinds.Codeium
    end,
    cond = function()
      return status() ~= nil
    end,
    color = function()
      return colors[status()] or colors.ok
    end,
  })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-lualine/lualine.nvim",
  optional = true,
  event = "VeryLazy",
  opts = function(_, opts)
    local started = false
    local function status()
      if not package.loaded["cmp"] then
        return
      end
      for _, s in ipairs(require("cmp").core.sources) do
        if s.name == "codeium" then
          if s.source:is_available() then
            started = true
          else
            return started and "error" or nil
          end
          if s.status == s.SourceStatus.FETCHING then
            return "pending"
          end
          return "ok"
        end
      end
    end

    local Util = require("lazyvim.util")
    local colors = {
      ok = Util.ui.fg("Special"),
      error = Util.ui.fg("DiagnosticError"),
      pending = Util.ui.fg("DiagnosticWarn"),
    }
    table.insert(opts.sections.lualine_x, 2, {
      function()
        return require("lazyvim.config").icons.kinds.Codeium
      end,
      cond = function()
        return status() ~= nil
      end,
      color = function()
        return colors[status()] or colors.ok
      end,
    })
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
