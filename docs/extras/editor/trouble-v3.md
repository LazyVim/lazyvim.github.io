# `Trouble-v3`

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
    { import = "lazyvim.plugins.extras.editor.trouble-v3" },
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

## [trouble.nvim](https://github.com/folke/trouble.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "folke/trouble.nvim",
  branch = "dev",
  keys = {
    { "<leader>xx", "<cmd>Trouble diagnostics toggle<cr>", desc = "Diagnostics (Trouble)" },
    { "<leader>xX", "<cmd>Trouble diagnostics toggle filter.buf=0<cr>", desc = "Buffer Diagnostics (Trouble)" },
    { "<leader>cs", "<cmd>Trouble symbols toggle focus=false<cr>", desc = "Symbols (Trouble)" },
    { "<leader>xL", "<cmd>Trouble loclist toggle<cr>", desc = "Location List (Trouble)" },
    { "<leader>xQ", "<cmd>Trouble qflist toggle<cr>", desc = "Quickfix List (Trouble)" },
  },
}
```

</TabItem>

</Tabs>

## [lualine.nvim](https://github.com/nvim-lualine/lualine.nvim) _(optional)_

 lualine integration


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  local trouble = require("trouble")
  if not trouble.statusline then
    LazyVim.error("You have enabled the **trouble-v3** extra,\nbut still need to update it with `:Lazy`")
    return
  end

  local symbols = trouble.statusline({
    mode = "symbols",
    groups = {},
    title = false,
    filter = { range = true },
    format = "{kind_icon}{symbol.name:Normal}",
  })
  table.insert(opts.sections.lualine_c, {
    symbols.get,
    cond = symbols.has,
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
    local trouble = require("trouble")
    if not trouble.statusline then
      LazyVim.error("You have enabled the **trouble-v3** extra,\nbut still need to update it with `:Lazy`")
      return
    end

    local symbols = trouble.statusline({
      mode = "symbols",
      groups = {},
      title = false,
      filter = { range = true },
      format = "{kind_icon}{symbol.name:Normal}",
    })
    table.insert(opts.sections.lualine_c, {
      symbols.get,
      cond = symbols.has,
    })
  end,
}
```

</TabItem>

</Tabs>

## [edgy.nvim](https://github.com/folke/edgy.nvim) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  -- disable for now
  do
    return
  end
  for _, pos in ipairs({ "top", "bottom", "left", "right" }) do
    opts[pos] = opts[pos] or {}
    table.insert(opts[pos], {
      ft = "trouble",
      filter = function(_buf, win)
        return vim.w[win].trouble
          and vim.w[win].trouble.position == pos
          and vim.w[win].trouble.type == "split"
          and vim.w[win].trouble.relative == "editor"
          and not vim.w[win].trouble_preview
      end,
    })
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "folke/edgy.nvim",
  optional = true,
  opts = function(_, opts)
    -- disable for now
    do
      return
    end
    for _, pos in ipairs({ "top", "bottom", "left", "right" }) do
      opts[pos] = opts[pos] or {}
      table.insert(opts[pos], {
        ft = "trouble",
        filter = function(_buf, win)
          return vim.w[win].trouble
            and vim.w[win].trouble.position == pos
            and vim.w[win].trouble.type == "split"
            and vim.w[win].trouble.relative == "editor"
            and not vim.w[win].trouble_preview
        end,
      })
    end
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
