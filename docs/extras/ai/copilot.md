# `Copilot`

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
    { import = "lazyvim.plugins.extras.ai.copilot" },
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

## [copilot.lua](https://github.com/zbirenbaum/copilot.lua)

 copilot


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  suggestion = {
    enabled = not vim.g.ai_cmp,
    auto_trigger = true,
    keymap = {
      accept = false, -- handled by nvim-cmp / blink.cmp
      next = "<M-]>",
      prev = "<M-[>",
    },
  },
  panel = { enabled = false },
  filetypes = {
    markdown = true,
    help = true,
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "zbirenbaum/copilot.lua",
  cmd = "Copilot",
  build = ":Copilot auth",
  event = "InsertEnter",
  opts = {
    suggestion = {
      enabled = not vim.g.ai_cmp,
      auto_trigger = true,
      keymap = {
        accept = false, -- handled by nvim-cmp / blink.cmp
        next = "<M-]>",
        prev = "<M-[>",
      },
    },
    panel = { enabled = false },
    filetypes = {
      markdown = true,
      help = true,
    },
  },
}
```

</TabItem>

</Tabs>

## [copilot-cmp](https://github.com/zbirenbaum/copilot-cmp)

 this will only be evaluated if nvim-cmp is enabled


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
  enabled = vim.g.ai_cmp, -- only enable if wanted
  opts = {},
  config = function(_, opts)
    local copilot_cmp = require("copilot_cmp")
    copilot_cmp.setup(opts)
    -- attach cmp source whenever copilot attaches
    -- fixes lazy-loading issues with the copilot cmp source
    LazyVim.lsp.on_attach(function()
      copilot_cmp._on_insert_enter({})
    end, "copilot")
  end,
  specs = {
    {
      "nvim-cmp",
      ---@param opts cmp.ConfigSchema
      opts = function(_, opts)
        table.insert(opts.sources, 1, {
          name = "copilot",
          group_index = 1,
          priority = 100,
        })
      end,
    },
  },
}
```

</TabItem>

</Tabs>

## [nvim-cmp](https://github.com/hrsh7th/nvim-cmp)

 copilot cmp source


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-cmp",
  optional = true,
  dependencies = { -- this will only be evaluated if nvim-cmp is enabled
    {
      "zbirenbaum/copilot-cmp",
      enabled = vim.g.ai_cmp, -- only enable if wanted
      opts = {},
      config = function(_, opts)
        local copilot_cmp = require("copilot_cmp")
        copilot_cmp.setup(opts)
        -- attach cmp source whenever copilot attaches
        -- fixes lazy-loading issues with the copilot cmp source
        LazyVim.lsp.on_attach(function()
          copilot_cmp._on_insert_enter({})
        end, "copilot")
      end,
      specs = {
        {
          "nvim-cmp",
          ---@param opts cmp.ConfigSchema
          opts = function(_, opts)
            table.insert(opts.sources, 1, {
              name = "copilot",
              group_index = 1,
              priority = 100,
            })
          end,
        },
      },
    },
  },
}
```

</TabItem>

</Tabs>

## [copilot.lua](https://github.com/zbirenbaum/copilot.lua)

 add ai_accept action


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  LazyVim.cmp.actions.ai_accept = function()
    if require("copilot.suggestion").is_visible() then
      LazyVim.create_undo()
      require("copilot.suggestion").accept()
      return true
    end
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "zbirenbaum/copilot.lua",
  opts = function()
    LazyVim.cmp.actions.ai_accept = function()
      if require("copilot.suggestion").is_visible() then
        LazyVim.create_undo()
        require("copilot.suggestion").accept()
        return true
      end
    end
  end,
}
```

</TabItem>

</Tabs>

## [copilot.lua](https://github.com/zbirenbaum/copilot.lua)

 blink has no copilot source, so force enable suggestions


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { suggestion = { enabled = true } }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "zbirenbaum/copilot.lua",
  opts = { suggestion = { enabled = true } },
}
```

</TabItem>

</Tabs>

## [nvim-cmp](https://github.com/hrsh7th/nvim-cmp)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  table.insert(opts.sources, 1, {
    name = "copilot",
    group_index = 1,
    priority = 100,
  })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-cmp",
  ---@param opts cmp.ConfigSchema
  opts = function(_, opts)
    table.insert(opts.sources, 1, {
      name = "copilot",
      group_index = 1,
      priority = 100,
    })
  end,
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
      local clients = package.loaded["copilot"] and LazyVim.lsp.get_clients({ name = "copilot", bufnr = 0 }) or {}
      if #clients > 0 then
        local status = require("copilot.api").status.data.status
        return (status == "InProgress" and "pending") or (status == "Warning" and "error") or "ok"
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
        local clients = package.loaded["copilot"] and LazyVim.lsp.get_clients({ name = "copilot", bufnr = 0 }) or {}
        if #clients > 0 then
          local status = require("copilot.api").status.data.status
          return (status == "InProgress" and "pending") or (status == "Warning" and "error") or "ok"
        end
      end)
    )
  end,
}
```

</TabItem>

</Tabs>

## [blink.cmp](https://github.com/saghen/blink.cmp) _(optional)_

 blink.cmp


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  windows = { ghost_text = { enabled = false } },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "saghen/blink.cmp",
  optional = true,
  opts = {
    windows = { ghost_text = { enabled = false } },
  },
  specs = {
    -- blink has no copilot source, so force enable suggestions
    {
      "zbirenbaum/copilot.lua",
      opts = { suggestion = { enabled = true } },
    },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
