# `Copilot-chat`

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
    { import = "lazyvim.plugins.extras.coding.copilot-chat" },
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

## [CopilotChat.nvim](https://github.com/CopilotC-Nvim/CopilotChat.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  model = "gpt-4",
  auto_insert_mode = true,
  window = {
    width = 0.4,
  },
  selection = function(source)
    local select = require("CopilotChat.select")
    return select.visual(source) or select.buffer(source)
  end,
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "CopilotC-Nvim/CopilotChat.nvim",
  branch = "canary",
  cmd = "CopilotChat",
  opts = {
    model = "gpt-4",
    auto_insert_mode = true,
    window = {
      width = 0.4,
    },
    selection = function(source)
      local select = require("CopilotChat.select")
      return select.visual(source) or select.buffer(source)
    end,
  },
  keys = {
    {
      "<leader>aa",
      function()
        return require("CopilotChat").toggle()
      end,
      desc = "Toggle (CopilotChat)",
    },
    {
      "<leader>ax",
      function()
        return require("CopilotChat").clear()
      end,
      desc = "Clear (CopilotChat)",
    },
    {
      "<leader>aq",
      function()
        local input = vim.fn.input("Quick Chat: ")
        if input ~= "" then
          require("CopilotChat").ask(input, { selection = require("CopilotChat.select").buffer })
        end
      end,
      desc = "Quick Chat (CopilotChat)",
    },
  },
  init = function()
    LazyVim.on_load("which-key.nvim", function()
      vim.schedule(function()
        require("which-key").register({ a = { name = "+CopilotChat (AI)" } }, { prefix = "<leader>" })
      end)
    end)
  end,
  config = function(_, opts)
    vim.api.nvim_create_autocmd("BufEnter", {
      pattern = "copilot-chat",
      callback = function()
        vim.opt_local.relativenumber = false
        vim.opt_local.number = false
      end,
    })
    require("CopilotChat").setup(opts)
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
    -- Show help actions with telescope
    {
      "<leader>ad",
      function()
        local actions = require("CopilotChat.actions")
        local help = actions.help_actions()
        if not help then
          LazyVim.warn("No diagnostics found on the current line")
          return
        end
        require("CopilotChat.integrations.telescope").pick(help)
      end,
      desc = "Diagnostic Help (CopilotChat)",
    },
    -- Show prompts actions with telescope
    {
      "<leader>ap",
      function()
        local actions = require("CopilotChat.actions")
        require("CopilotChat.integrations.telescope").pick(actions.prompt_actions())
      end,
      desc = "Prompt Actions (CopilotChat)",
    },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
