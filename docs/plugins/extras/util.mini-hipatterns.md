# Mini Hipatterns

<!-- plugins:start -->

To use this, add it to your **lazy.nvim** imports:

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.util.mini-hipatterns" },
    { import = "plugins" },
  },
})
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [mini.hipatterns](https://github.com/echasnovski/mini.hipatterns)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  local hi = require("mini.hipatterns")
  return {
    -- custom LazyVim option to enable the tailwind integration
    tailwind = {
      enabled = true,
      ft = { "typescriptreact", "javascriptreact", "css", "javascript", "typescript", "html" },
      -- full: the whole css class will be highlighted
      -- compact: only the color will be highlighted
      style = "full",
    },
    highlighters = {
      hex_color = hi.gen_highlighter.hex_color({ priority = 2000 }),
    },
  }
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "echasnovski/mini.hipatterns",
  event = "BufReadPre",
  opts = function()
    local hi = require("mini.hipatterns")
    return {
      -- custom LazyVim option to enable the tailwind integration
      tailwind = {
        enabled = true,
        ft = { "typescriptreact", "javascriptreact", "css", "javascript", "typescript", "html" },
        -- full: the whole css class will be highlighted
        -- compact: only the color will be highlighted
        style = "full",
      },
      highlighters = {
        hex_color = hi.gen_highlighter.hex_color({ priority = 2000 }),
      },
    }
  end,
  config = function(_, opts)
    -- backward compatibility
    if opts.tailwind == true then
      opts.tailwind = {
        enabled = true,
        ft = { "typescriptreact", "javascriptreact", "css", "javascript", "typescript", "html" },
        style = "full",
      }
    end
    if type(opts.tailwind) == "table" and opts.tailwind.enabled then
      -- reset hl groups when colorscheme changes
      vim.api.nvim_create_autocmd("ColorScheme", {
        callback = function()
          M.hl = {}
        end,
      })
      opts.highlighters.tailwind = {
        pattern = function()
          if not vim.tbl_contains(opts.tailwind.ft, vim.bo.filetype) then
            return
          end
          if opts.tailwind.style == "full" then
            return "%f[%w:-]()[%w:-]+%-[a-z%-]+%-%d+()%f[^%w:-]"
          elseif opts.tailwind.style == "compact" then
            return "%f[%w:-][%w:-]+%-()[a-z%-]+%-%d+()%f[^%w:-]"
          end
        end,
        group = function(_, _, m)
          ---@type string
          local match = m.full_match
          ---@type string, number
          local color, shade = match:match("[%w-]+%-([a-z%-]+)%-(%d+)")
          shade = assert(tonumber(shade))
          local bg = vim.tbl_get(M.colors, color, shade)
          if bg then
            local hl = "MiniHipatternsTailwind" .. color .. shade
            if not M.hl[hl] then
              M.hl[hl] = true
              local bg_shade = shade == 500 and 950 or shade < 500 and 900 or 100
              local fg = vim.tbl_get(M.colors, color, bg_shade)
              vim.api.nvim_set_hl(0, hl, { bg = "#" .. bg, fg = "#" .. fg })
            end
            return hl
          end
        end,
        priority = 2000,
      }
    end
    require("mini.hipatterns").setup(opts)
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
