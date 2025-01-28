# `Luasnip`

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

## [LuaSnip](https://github.com/L3MON4D3/LuaSnip)

 add luasnip


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  history = true,
  delete_check_events = "TextChanged",
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "L3MON4D3/LuaSnip",
  lazy = true,
  build = (not LazyVim.is_win())
      and "echo 'NOTE: jsregexp is optional, so not a big deal if it fails to build'; make install_jsregexp"
    or nil,
  dependencies = {
    {
      "rafamadriz/friendly-snippets",
      config = function()
        require("luasnip.loaders.from_vscode").lazy_load()
        require("luasnip.loaders.from_vscode").lazy_load({ paths = { vim.fn.stdpath("config") .. "/snippets" } })
      end,
    },
  },
  opts = {
    history = true,
    delete_check_events = "TextChanged",
  },
}
```

</TabItem>

</Tabs>

## [friendly-snippets](https://github.com/rafamadriz/friendly-snippets)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "rafamadriz/friendly-snippets",
  config = function()
    require("luasnip.loaders.from_vscode").lazy_load()
    require("luasnip.loaders.from_vscode").lazy_load({ paths = { vim.fn.stdpath("config") .. "/snippets" } })
  end,
}
```

</TabItem>

</Tabs>

## [LuaSnip](https://github.com/L3MON4D3/LuaSnip)

 add snippet_forward action


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  LazyVim.cmp.actions.snippet_forward = function()
    if require("luasnip").jumpable(1) then
      vim.schedule(function()
        require("luasnip").jump(1)
      end)
      return true
    end
  end
  LazyVim.cmp.actions.snippet_stop = function()
    if require("luasnip").expand_or_jumpable() then -- or just jumpable(1) is fine?
      require("luasnip").unlink_current()
      return true
    end
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "L3MON4D3/LuaSnip",
  opts = function()
    LazyVim.cmp.actions.snippet_forward = function()
      if require("luasnip").jumpable(1) then
        vim.schedule(function()
          require("luasnip").jump(1)
        end)
        return true
      end
    end
    LazyVim.cmp.actions.snippet_stop = function()
      if require("luasnip").expand_or_jumpable() then -- or just jumpable(1) is fine?
        require("luasnip").unlink_current()
        return true
      end
    end
  end,
}
```

</TabItem>

</Tabs>

## [cmp_luasnip](https://github.com/saadparwaiz1/cmp_luasnip)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "saadparwaiz1/cmp_luasnip" }
```

</TabItem>

</Tabs>

## [nvim-cmp](https://github.com/hrsh7th/nvim-cmp) _(optional)_

 nvim-cmp integration


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  opts.snippet = {
    expand = function(args)
      require("luasnip").lsp_expand(args.body)
    end,
  }
  table.insert(opts.sources, { name = "luasnip" })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "hrsh7th/nvim-cmp",
  optional = true,
  dependencies = { "saadparwaiz1/cmp_luasnip" },
  opts = function(_, opts)
    opts.snippet = {
      expand = function(args)
        require("luasnip").lsp_expand(args.body)
      end,
    }
    table.insert(opts.sources, { name = "luasnip" })
  end,
  -- stylua: ignore
  keys = {
    { "<tab>", function() require("luasnip").jump(1) end, mode = "s" },
    { "<s-tab>", function() require("luasnip").jump(-1) end, mode = { "i", "s" } },
  },
}
```

</TabItem>

</Tabs>

## [blink.cmp](https://github.com/saghen/blink.cmp) _(optional)_

 blink.cmp integration


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  snippets = {
    preset = "luasnip",
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "saghen/blink.cmp",
  optional = true,
  opts = {
    snippets = {
      preset = "luasnip",
    },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
