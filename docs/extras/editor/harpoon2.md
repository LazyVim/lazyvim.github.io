# `Harpoon2`

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
    { import = "lazyvim.plugins.extras.editor.harpoon2" },
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

## [harpoon](https://github.com/ThePrimeagen/harpoon)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  menu = {
    width = vim.api.nvim_win_get_width(0) - 4,
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "ThePrimeagen/harpoon",
  branch = "harpoon2",
  opts = {
    menu = {
      width = vim.api.nvim_win_get_width(0) - 4,
    },
  },
  keys = {
    {
      "<leader>H",
      function()
        require("harpoon"):list():append()
      end,
      desc = "Harpoon file",
    },
    {
      "<leader>h",
      function()
        local harpoon = require("harpoon")
        harpoon.ui:toggle_quick_menu(harpoon:list())
      end,
      desc = "Harpoon quick menu",
    },
    {
      "<leader>1",
      function()
        require("harpoon"):list():select(1)
      end,
      desc = "Harpoon to file 1",
    },
    {
      "<leader>2",
      function()
        require("harpoon"):list():select(2)
      end,
      desc = "Harpoon to file 2",
    },
    {
      "<leader>3",
      function()
        require("harpoon"):list():select(3)
      end,
      desc = "Harpoon to file 3",
    },
    {
      "<leader>4",
      function()
        require("harpoon"):list():select(4)
      end,
      desc = "Harpoon to file 4",
    },
    {
      "<leader>5",
      function()
        require("harpoon"):list():select(5)
      end,
      desc = "Harpoon to file 5",
    },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
