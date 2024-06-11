# `Mini-indentscope`

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
    { import = "lazyvim.plugins.extras.ui.mini-indentscope" },
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

## [mini.indentscope](https://github.com/echasnovski/mini.indentscope)

 Active indent guide and indent text objects. When you're browsing
 code, this highlights the current level of indentation, and animates
 the highlighting.


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  -- symbol = "▏",
  symbol = "│",
  options = { try_as_border = true },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "echasnovski/mini.indentscope",
  version = false, -- wait till new 0.7.0 release to put it back on semver
  event = "LazyFile",
  opts = {
    -- symbol = "▏",
    symbol = "│",
    options = { try_as_border = true },
  },
  init = function()
    vim.api.nvim_create_autocmd("FileType", {
      pattern = {
        "alpha",
        "dashboard",
        "fzf",
        "help",
        "lazy",
        "lazyterm",
        "mason",
        "neo-tree",
        "notify",
        "toggleterm",
        "Trouble",
        "trouble",
      },
      callback = function()
        vim.b.miniindentscope_disable = true
      end,
    })
  end,
}
```

</TabItem>

</Tabs>

## [indent-blankline.nvim](https://github.com/lukas-reineke/indent-blankline.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  scope = { enabled = false },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "lukas-reineke/indent-blankline.nvim",
  event = "LazyFile",
  opts = {
    scope = { enabled = false },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
