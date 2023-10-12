# `editor.navic`

<!-- plugins:start -->

To use this, add it to your **lazy.nvim** imports:

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.editor.navic" },
    { import = "plugins" },
  },
})
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [nvim-navic](https://github.com/SmiteshP/nvim-navic)

 lsp symbol navigation for lualine. This shows where
 in the code structure you are - within functions, classes,
 etc - in the statusline.


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  return {
    separator = " ",
    highlight = true,
    depth_limit = 5,
    icons = require("lazyvim.config").icons.kinds,
    lazy_update_context = true,
  }
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "SmiteshP/nvim-navic",
  lazy = true,
  init = function()
    vim.g.navic_silence = true
    require("lazyvim.util").lsp.on_attach(function(client, buffer)
      if client.supports_method("textDocument/documentSymbol") then
        require("nvim-navic").attach(client, buffer)
      end
    end)
  end,
  opts = function()
    return {
      separator = " ",
      highlight = true,
      depth_limit = 5,
      icons = require("lazyvim.config").icons.kinds,
      lazy_update_context = true,
    }
  end,
}
```

</TabItem>

</Tabs>

## [lualine.nvim](https://github.com/nvim-lualine/lualine.nvim)

 lualine integration


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  table.insert(opts.sections.lualine_c, {
    function()
      return require("nvim-navic").get_location()
    end,
    cond = function()
      return package.loaded["nvim-navic"] and require("nvim-navic").is_available()
    end,
  })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-lualine/lualine.nvim",
  optional = true,
  opts = function(_, opts)
    table.insert(opts.sections.lualine_c, {
      function()
        return require("nvim-navic").get_location()
      end,
      cond = function()
        return package.loaded["nvim-navic"] and require("nvim-navic").is_available()
      end,
    })
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
