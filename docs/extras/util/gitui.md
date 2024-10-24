# `Gitui`

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
    { import = "lazyvim.plugins.extras.util.gitui" },
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

## [mason.nvim](https://github.com/williamboman/mason.nvim)

 Ensure GitUI tool is installed


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { ensure_installed = { "gitui" } }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "williamboman/mason.nvim",
  opts = { ensure_installed = { "gitui" } },
  keys = {
    {
      "<leader>gG",
      function()
        LazyVim.terminal.open({ "gitui" }, { esc_esc = false, ctrl_hjkl = false })
      end,
      desc = "GitUi (cwd)",
    },
    {
      "<leader>gg",
      function()
        LazyVim.terminal.open({ "gitui" }, { cwd = LazyVim.root.get(), esc_esc = false, ctrl_hjkl = false })
      end,
      desc = "GitUi (Root Dir)",
    },
  },
  init = function()
    -- delete lazygit keymap for file history
    vim.api.nvim_create_autocmd("User", {
      pattern = "LazyVimKeymaps",
      once = true,
      callback = function()
        pcall(vim.keymap.del, "n", "<leader>gf")
        pcall(vim.keymap.del, "n", "<leader>gl")
      end,
    })
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
