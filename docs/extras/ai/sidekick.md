# `Sidekick`

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

## [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)

 copilot-language-server


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  servers = {
    copilot = {},
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "neovim/nvim-lspconfig",
  opts = {
    servers = {
      copilot = {},
    },
  },
}
```

</TabItem>

</Tabs>

## [sidekick.nvim](https://github.com/folke/sidekick.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  -- Accept inline suggestions or next edits
  LazyVim.cmp.actions.ai_nes = function()
    local Nes = require("sidekick.nes")
    if Nes.have() and (Nes.jump() or Nes.apply()) then
      return true
    end
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "folke/sidekick.nvim",
  opts = function()
    -- Accept inline suggestions or next edits
    LazyVim.cmp.actions.ai_nes = function()
      local Nes = require("sidekick.nes")
      if Nes.have() and (Nes.jump() or Nes.apply()) then
        return true
      end
    end
  end,
  -- stylua: ignore
  keys = {
    -- nes is also useful in normal mode
    { "<tab>", LazyVim.cmp.map({ "ai_nes" }, "<tab>"), mode = { "n" }, expr = true },
    { "<leader>a", "", desc = "+ai", mode = { "n", "v" } },
    {
      "<leader>aa",
      function() require("sidekick.cli").toggle() end,
      desc = "Sidekick Toggle CLI",
    },
    {
      "<leader>as",
      function() require("sidekick.cli").select() end,
      mode = { "n" },
      desc = "Sidekick Select CLI",
    },
    {
      "<leader>as",
      function() require("sidekick.cli").send() end,
      mode = { "v" },
      desc = "Sidekick Send Visual Selection",
    },
    {
      "<leader>ap",
      function() require("sidekick.cli").prompt() end,
      desc = "Sidekick Select Prompt",
      mode = { "n", "v" },
    },
    {
      "<c-.>",
      function() require("sidekick.cli").focus() end,
      mode = { "n", "x", "i", "t" },
      desc = "Sidekick Switch Focus",
    },
  },
}
```

</TabItem>

</Tabs>

## [lualine.nvim](https://github.com/nvim-lualine/lualine.nvim) _(optional)_

 lualine


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  local icons = {
    Error = { " ", "DiagnosticError" },
    Inactive = { " ", "MsgArea" },
    Warning = { " ", "DiagnosticWarn" },
    Normal = { LazyVim.config.icons.kinds.Copilot, "Special" },
  }
  table.insert(opts.sections.lualine_x, 2, {
    function()
      local status = require("sidekick.status").get()
      return status and vim.tbl_get(icons, status.kind, 1)
    end,
    cond = function()
      return require("sidekick.status").get() ~= nil
    end,
    color = function()
      local status = require("sidekick.status").get()
      local hl = status and (status.busy and "DiagnosticWarn" or vim.tbl_get(icons, status.kind, 2))
      return { fg = Snacks.util.color(hl) }
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
    local icons = {
      Error = { " ", "DiagnosticError" },
      Inactive = { " ", "MsgArea" },
      Warning = { " ", "DiagnosticWarn" },
      Normal = { LazyVim.config.icons.kinds.Copilot, "Special" },
    }
    table.insert(opts.sections.lualine_x, 2, {
      function()
        local status = require("sidekick.status").get()
        return status and vim.tbl_get(icons, status.kind, 1)
      end,
      cond = function()
        return require("sidekick.status").get() ~= nil
      end,
      color = function()
        local status = require("sidekick.status").get()
        local hl = status and (status.busy and "DiagnosticWarn" or vim.tbl_get(icons, status.kind, 2))
        return { fg = Snacks.util.color(hl) }
      end,
    })
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
