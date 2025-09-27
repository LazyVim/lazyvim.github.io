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
  keys = {
    -- nes is also useful in normal mode
    { "<tab>", LazyVim.cmp.map({ "ai_nes" }, "<tab>"), mode = { "n" }, expr = true },
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
  table.insert(
    opts.sections.lualine_x,
    2,
    LazyVim.lualine.status(LazyVim.config.icons.kinds.Copilot, function()
      local status = require("sidekick.status").get()
      if status then
        return status.kind == "Error" and "error" or status.busy and "pending" or "ok"
      end
    end)
  )
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
    table.insert(
      opts.sections.lualine_x,
      2,
      LazyVim.lualine.status(LazyVim.config.icons.kinds.Copilot, function()
        local status = require("sidekick.status").get()
        if status then
          return status.kind == "Error" and "error" or status.busy and "pending" or "ok"
        end
      end)
    )
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
