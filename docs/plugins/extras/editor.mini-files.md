# Mini Files

<!-- plugins:start -->

To use this, add it to your **lazy.nvim** imports:

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.editor.mini-files" },
    { import = "plugins" },
  },
})
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [mini.files](https://github.com/echasnovski/mini.files)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  windows = {
    preview = true,
  },
  options = {
    -- Whether to use for editing directories
    -- Disabled by default in LazyVim because neo-tree is used for that
    use_as_default_explorer = false,
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "echasnovski/mini.files",
  opts = {
    windows = {
      preview = true,
    },
    options = {
      -- Whether to use for editing directories
      -- Disabled by default in LazyVim because neo-tree is used for that
      use_as_default_explorer = false,
    },
  },
  keys = {
    {
      "<leader>fm",
      function()
        require("mini.files").open(vim.api.nvim_buf_get_name(0), true)
      end,
      desc = "Open mini.files (directory of current file)",
    },
    {
      "<leader>fM",
      function()
        require("mini.files").open(vim.loop.cwd(), true)
      end,
      desc = "Open mini.files (cwd)",
    },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
