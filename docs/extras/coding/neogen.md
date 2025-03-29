# `Neogen`

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
    ["mini.snippets"] = "mini",
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
  dependencies = LazyVim.has("mini.snippets") and { "mini.snippets" } or {},
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
      ["mini.snippets"] = "mini",
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
