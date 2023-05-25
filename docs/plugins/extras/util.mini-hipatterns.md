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
    tailwind = true,
    highlighters = {
      hex_color = hi.gen_highlighter.hex_color({ priority = 5000 }),
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
      tailwind = true,
      highlighters = {
        hex_color = hi.gen_highlighter.hex_color({ priority = 5000 }),
      },
    }
  end,
  config = function(_, opts)
    local hi = require("mini.hipatterns")
    if opts.tailwind then
      local hex_color = opts.highlighters.hex_color or hi.gen_highlighter.hex_color({ priority = 5000 })
      local tailwind_ft = { "typescriptreact", "javascriptreact", "css", "javascript", "typescript", "html" }
      opts.highlighters.tailwind = {
        pattern = function()
          if not vim.list_contains(tailwind_ft, vim.bo.filetype) then
            return
          end
          return "%f[%w:-]()[%w:-]+%-[a-z%-]+%-%d+()%f[^%w:-]"
        end,
        group = function(_, match)
          local color, shade = match:match("[%w-]+%-([a-z%-]+)%-(%d+)")
          local hex = vim.tbl_get(M.colors, color, tonumber(shade))
          if hex then
            return hex_color.group(nil, nil, { full_match = "#" .. hex })
          end
        end,
      }
    end
    require("mini.hipatterns").setup(opts)
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
