# `Neogen`

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
    { import = "lazyvim.plugins.extras.coding.neogen" },
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

## [neogen](https://github.com/danymat/neogen)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  if opts.snippet_engine ~= nil then
    return
  end

  local map = {
    ["LuaSnip"] = "luasnip",
    ["nvim-snippy"] = "snippy",
    ["vim-vsnip"] = "vsnip",
  }

  for plugin, engine in pairs(map) do
    if LazyVim.has(plugin) then
      opts.snippet_engine = engine
      return
    end
  end

  if vim.snippet then
    opts.snippet_engine = "nvim"
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "danymat/neogen",
  cmd = "Neogen",
  keys = {
    {
      "<leader>cn",
      function()
        require("neogen").generate()
      end,
      desc = "Generate Annotations (Neogen)",
    },
  },
  opts = function(_, opts)
    if opts.snippet_engine ~= nil then
      return
    end

    local map = {
      ["LuaSnip"] = "luasnip",
      ["nvim-snippy"] = "snippy",
      ["vim-vsnip"] = "vsnip",
    }

    for plugin, engine in pairs(map) do
      if LazyVim.has(plugin) then
        opts.snippet_engine = engine
        return
      end
    end

    if vim.snippet then
      opts.snippet_engine = "nvim"
    end
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
