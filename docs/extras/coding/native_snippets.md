# `Native_snippets`

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
    { import = "lazyvim.plugins.extras.coding.native_snippets" },
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

## [nvim-cmp](https://github.com/hrsh7th/nvim-cmp)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  opts.snippet = {
    expand = function(args)
      vim.snippet.expand(args.body)
    end,
  }
  table.insert(opts.sources, { name = "snippets" })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-cmp",
  dependencies = {
    { "rafamadriz/friendly-snippets" },
    { "garymjr/nvim-snippets", opts = { friendly_snippets = true } },
  },
  opts = function(_, opts)
    opts.snippet = {
      expand = function(args)
        vim.snippet.expand(args.body)
      end,
    }
    table.insert(opts.sources, { name = "snippets" })
  end,
  keys = {
    {
      "<Tab>",
      function()
        if vim.snippet.active({ direction = 1 }) then
          vim.schedule(function()
            vim.snippet.jump(1)
          end)
          return
        end
        return "<Tab>"
      end,
      expr = true,
      silent = true,
      mode = "i",
    },
    {
      "<Tab>",
      function()
        vim.schedule(function()
          vim.snippet.jump(1)
        end)
      end,
      silent = true,
      mode = "s",
    },
    {
      "<S-Tab>",
      function()
        if vim.snippet.active({ direction = -1 }) then
          vim.schedule(function()
            vim.snippet.jump(-1)
          end)
          return
        end
        return "<S-Tab>"
      end,
      expr = true,
      silent = true,
      mode = { "i", "s" },
    },
  },
}
```

</TabItem>

</Tabs>

## [friendly-snippets](https://github.com/rafamadriz/friendly-snippets)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "rafamadriz/friendly-snippets" }
```

</TabItem>

</Tabs>

## [nvim-snippets](https://github.com/garymjr/nvim-snippets)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { friendly_snippets = true }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "garymjr/nvim-snippets", opts = { friendly_snippets = true } }
```

</TabItem>

</Tabs>

<!-- plugins:end -->
