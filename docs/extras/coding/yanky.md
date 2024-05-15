# yanky.nvim

> The default LazyVim mappings to cycle yank history are `[y` and `]y`

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
    { import = "lazyvim.plugins.extras.coding.yanky" },
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

## [yanky.nvim](https://github.com/gbprod/yanky.nvim)

 better yank/paste


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  highlight = { timer = 150 },
  ring = { storage = LazyVim.is_win() and "shada" or "sqlite" },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "gbprod/yanky.nvim",
  dependencies = not LazyVim.is_win() and { "kkharji/sqlite.lua" } or {},
  opts = {
    highlight = { timer = 150 },
    ring = { storage = LazyVim.is_win() and "shada" or "sqlite" },
  },
  keys = {
      -- stylua: ignore
    { "<leader>p", function() require("telescope").extensions.yank_history.yank_history({ }) end, desc = "Open Yank History" },
    { "y", "<Plug>(YankyYank)", mode = { "n", "x" }, desc = "Yank Text" },
    { "p", "<Plug>(YankyPutAfter)", mode = { "n", "x" }, desc = "Put Yanked Text After Cursor" },
    { "P", "<Plug>(YankyPutBefore)", mode = { "n", "x" }, desc = "Put Yanked Text Before Cursor" },
    { "gp", "<Plug>(YankyGPutAfter)", mode = { "n", "x" }, desc = "Put Yanked Text After Selection" },
    { "gP", "<Plug>(YankyGPutBefore)", mode = { "n", "x" }, desc = "Put Yanked Text Before Selection" },
    { "[y", "<Plug>(YankyCycleForward)", desc = "Cycle Forward Through Yank History" },
    { "]y", "<Plug>(YankyCycleBackward)", desc = "Cycle Backward Through Yank History" },
    { "]p", "<Plug>(YankyPutIndentAfterLinewise)", desc = "Put Indented After Cursor (Linewise)" },
    { "[p", "<Plug>(YankyPutIndentBeforeLinewise)", desc = "Put Indented Before Cursor (Linewise)" },
    { "]P", "<Plug>(YankyPutIndentAfterLinewise)", desc = "Put Indented After Cursor (Linewise)" },
    { "[P", "<Plug>(YankyPutIndentBeforeLinewise)", desc = "Put Indented Before Cursor (Linewise)" },
    { ">p", "<Plug>(YankyPutIndentAfterShiftRight)", desc = "Put and Indent Right" },
    { "<p", "<Plug>(YankyPutIndentAfterShiftLeft)", desc = "Put and Indent Left" },
    { ">P", "<Plug>(YankyPutIndentBeforeShiftRight)", desc = "Put Before and Indent Right" },
    { "<P", "<Plug>(YankyPutIndentBeforeShiftLeft)", desc = "Put Before and Indent Left" },
    { "=p", "<Plug>(YankyPutAfterFilter)", desc = "Put After Applying a Filter" },
    { "=P", "<Plug>(YankyPutBeforeFilter)", desc = "Put Before Applying a Filter" },
  },
}
```

</TabItem>

</Tabs>

## [sqlite.lua](https://github.com/kkharji/sqlite.lua)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "kkharji/sqlite.lua" }
```

</TabItem>

</Tabs>

<!-- plugins:end -->
