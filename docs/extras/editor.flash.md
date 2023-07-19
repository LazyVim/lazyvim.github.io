# `flash.nvim`

`flash.nvim` lets you navigate your code with search labels,
enhanced character motions, and Treesitter integration.

`flash.nvim` is now the default jump plugin for **LazyVim**,
so it's no longer needed to import this extra.

<!-- plugins:start -->

To use this, add it to your **lazy.nvim** imports:

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.editor.flash" },
    { import = "plugins" },
  },
})
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- plugins:end -->
