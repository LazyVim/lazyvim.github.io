# `Avante`

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

## [nui.nvim](https://github.com/MunifTanjim/nui.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "MunifTanjim/nui.nvim", lazy = true }
```

</TabItem>

</Tabs>

## [avante.nvim](https://github.com/yetone/avante.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  provider = "copilot",
  selection = {
    hint_display = "none",
  },
  behaviour = {
    auto_set_keymaps = false,
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "yetone/avante.nvim",
  build = vim.fn.has("win32") ~= 0 and "powershell -ExecutionPolicy Bypass -File Build.ps1 -BuildFromSource false"
    or "make",
  event = "VeryLazy",
  opts = {
    provider = "copilot",
    selection = {
      hint_display = "none",
    },
    behaviour = {
      auto_set_keymaps = false,
    },
  },
  cmd = {
    "AvanteAsk",
    "AvanteBuild",
    "AvanteChat",
    "AvanteClear",
    "AvanteEdit",
    "AvanteFocus",
    "AvanteHistory",
    "AvanteModels",
    "AvanteRefresh",
    "AvanteShowRepoMap",
    "AvanteStop",
    "AvanteSwitchProvider",
    "AvanteToggle",
  },
  keys = {
    { "<leader>aa", "<cmd>AvanteAsk<CR>", desc = "Ask Avante" },
    { "<leader>ac", "<cmd>AvanteChat<CR>", desc = "Chat with Avante" },
    { "<leader>ae", "<cmd>AvanteEdit<CR>", desc = "Edit Avante" },
    { "<leader>af", "<cmd>AvanteFocus<CR>", desc = "Focus Avante" },
    { "<leader>ah", "<cmd>AvanteHistory<CR>", desc = "Avante History" },
    { "<leader>am", "<cmd>AvanteModels<CR>", desc = "Select Avante Model" },
    { "<leader>an", "<cmd>AvanteChatNew<CR>", desc = "New Avante Chat" },
    { "<leader>ap", "<cmd>AvanteSwitchProvider<CR>", desc = "Switch Avante Provider" },
    { "<leader>ar", "<cmd>AvanteRefresh<CR>", desc = "Refresh Avante" },
    { "<leader>as", "<cmd>AvanteStop<CR>", desc = "Stop Avante" },
    { "<leader>at", "<cmd>AvanteToggle<CR>", desc = "Toggle Avante" },
  },
}
```

</TabItem>

</Tabs>

## [blink-cmp-avante](https://github.com/Kaiser-Yang/blink-cmp-avante)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "Kaiser-Yang/blink-cmp-avante" }
```

</TabItem>

</Tabs>

## [img-clip.nvim](https://github.com/HakonHarnes/img-clip.nvim) _(optional)_

 support for image pasting


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  -- recommended settings
  default = {
    embed_image_as_base64 = false,
    prompt_for_file_name = false,
    drag_and_drop = {
      insert_mode = true,
    },
    -- required for Windows users
    use_absolute_path = true,
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "HakonHarnes/img-clip.nvim",
  event = "VeryLazy",
  optional = true,
  opts = {
    -- recommended settings
    default = {
      embed_image_as_base64 = false,
      prompt_for_file_name = false,
      drag_and_drop = {
        insert_mode = true,
      },
      -- required for Windows users
      use_absolute_path = true,
    },
  },
}
```

</TabItem>

</Tabs>

## [render-markdown.nvim](https://github.com/MeanderingProgrammer/render-markdown.nvim) _(optional)_

 Make sure to set this up properly if you have lazy=true


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  file_types = { "markdown", "Avante" },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "MeanderingProgrammer/render-markdown.nvim",
  optional = true,
  opts = {
    file_types = { "markdown", "Avante" },
  },
  ft = { "markdown", "Avante" },
}
```

</TabItem>

</Tabs>

## [blink.cmp](https://github.com/saghen/blink.cmp) _(optional)_

 blink.cmp source for avante.nvim


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  sources = {
    default = { "avante" },
    providers = { avante = { module = "blink-cmp-avante", name = "Avante" } },
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "saghen/blink.cmp",
  optional = true,
  specs = { "Kaiser-Yang/blink-cmp-avante" },
  opts = {
    sources = {
      default = { "avante" },
      providers = { avante = { module = "blink-cmp-avante", name = "Avante" } },
    },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
