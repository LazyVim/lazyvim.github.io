# `Treesitter-context`

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
    { import = "lazyvim.plugins.extras.ui.treesitter-context" },
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

## [nvim-treesitter-context](https://github.com/nvim-treesitter/nvim-treesitter-context)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { mode = "cursor", max_lines = 3 }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-treesitter/nvim-treesitter-context",
  event = "LazyFile",
  opts = { mode = "cursor", max_lines = 3 },
  keys = {
    {
      "<leader>ut",
      function()
        local tsc = require("treesitter-context")
        tsc.toggle()
        if LazyVim.inject.get_upvalue(tsc.toggle, "enabled") then
          LazyVim.info("Enabled Treesitter Context", { title = "Option" })
        else
          LazyVim.warn("Disabled Treesitter Context", { title = "Option" })
        end
      end,
      desc = "Toggle Treesitter Context",
    },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
