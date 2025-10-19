# `Copilot-chat`

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

## [CopilotChat.nvim](https://github.com/CopilotC-Nvim/CopilotChat.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  local user = vim.env.USER or "User"
  user = user:sub(1, 1):upper() .. user:sub(2)
  return {
    auto_insert_mode = true,
    headers = {
      user = "  " .. user .. " ",
      assistant = "  Copilot ",
      tool = "󰊳  Tool ",
    },
    window = {
      width = 0.4,
    },
  }
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "CopilotC-Nvim/CopilotChat.nvim",
  branch = "main",
  cmd = "CopilotChat",
  opts = function()
    local user = vim.env.USER or "User"
    user = user:sub(1, 1):upper() .. user:sub(2)
    return {
      auto_insert_mode = true,
      headers = {
        user = "  " .. user .. " ",
        assistant = "  Copilot ",
        tool = "󰊳  Tool ",
      },
      window = {
        width = 0.4,
      },
    }
  end,
  keys = {
    { "<c-s>", "<CR>", ft = "copilot-chat", desc = "Submit Prompt", remap = true },
    { "<leader>a", "", desc = "+ai", mode = { "n", "v" } },
    {
      "<leader>aa",
      function()
        return require("CopilotChat").toggle()
      end,
      desc = "Toggle (CopilotChat)",
      mode = { "n", "v" },
    },
    {
      "<leader>ax",
      function()
        return require("CopilotChat").reset()
      end,
      desc = "Clear (CopilotChat)",
      mode = { "n", "v" },
    },
    {
      "<leader>aq",
      function()
        vim.ui.input({
          prompt = "Quick Chat: ",
        }, function(input)
          if input ~= "" then
            require("CopilotChat").ask(input)
          end
        end)
      end,
      desc = "Quick Chat (CopilotChat)",
      mode = { "n", "v" },
    },
    {
      "<leader>ap",
      function()
        require("CopilotChat").select_prompt()
      end,
      desc = "Prompt Actions (CopilotChat)",
      mode = { "n", "v" },
    },
  },
  config = function(_, opts)
    local chat = require("CopilotChat")

    vim.api.nvim_create_autocmd("BufEnter", {
      pattern = "copilot-chat",
      callback = function()
        vim.opt_local.relativenumber = false
        vim.opt_local.number = false
      end,
    })

    chat.setup(opts)
  end,
}
```

</TabItem>

</Tabs>

## [edgy.nvim](https://github.com/folke/edgy.nvim) _(optional)_

 Edgy integration


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  opts.right = opts.right or {}
  table.insert(opts.right, {
    ft = "copilot-chat",
    title = "Copilot Chat",
    size = { width = 50 },
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
      ft = "copilot-chat",
      title = "Copilot Chat",
      size = { width = 50 },
    })
  end,
}
```

</TabItem>

</Tabs>

## [blink.cmp](https://github.com/saghen/blink.cmp) _(optional)_

 Blink integration


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  sources = {
    providers = {
      path = {
        -- Path sources triggered by "/" interfere with CopilotChat commands
        enabled = function()
          return vim.bo.filetype ~= "copilot-chat"
        end,
      },
    },
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "saghen/blink.cmp",
  optional = true,
  ---@module 'blink.cmp'
  ---@type blink.cmp.Config
  opts = {
    sources = {
      providers = {
        path = {
          -- Path sources triggered by "/" interfere with CopilotChat commands
          enabled = function()
            return vim.bo.filetype ~= "copilot-chat"
          end,
        },
      },
    },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
