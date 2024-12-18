# VS Code

This extra will only load when `vim.g.vscode` is set.

Enabled plugins:

```lua
{
  "dial.nvim",
  "flit.nvim",
  "lazy.nvim",
  "leap.nvim",
  "mini.ai",
  "mini.comment",
  "mini.move",
  "mini.pairs",
  "mini.surround",
  "nvim-treesitter",
  "nvim-treesitter-textobjects",
  "nvim-ts-context-commentstring",
  "vim-repeat",
  "yanky.nvim",
}
```

Some additional keymaps are added similar to the ones in regular LazyVim.

If you want to include any additional plugins in **vscode**,
you can set `vscode=true` on a plugin spec.

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

<!-- plugins:end -->
