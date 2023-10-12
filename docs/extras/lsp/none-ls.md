# `lsp.none-ls`

<!-- plugins:start -->

To use this, add it to your **lazy.nvim** imports:

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.lsp.none-ls" },
    { import = "plugins" },
  },
})
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [none-ls.nvim](https://github.com/nvimtools/none-ls.nvim)

 none-ls


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  local nls = require("null-ls")
  opts.root_dir = opts.root_dir
    or require("null-ls.utils").root_pattern(".null-ls-root", ".neoconf.json", "Makefile", ".git")
  opts.sources = vim.list_extend(opts.sources or {}, {
    nls.builtins.formatting.fish_indent,
    nls.builtins.diagnostics.fish,
    nls.builtins.formatting.stylua,
    nls.builtins.formatting.shfmt,
  })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvimtools/none-ls.nvim",
  event = "LazyFile",
  dependencies = { "mason.nvim" },
  init = function()
    Util.on_very_lazy(function()
      -- register the formatter with LazyVim
      require("lazyvim.util").format.register({
        name = "none-ls.nvim",
        priority = 200, -- set higher than conform, the builtin formatter
        primary = true,
        format = function(buf)
          return Util.lsp.format({
            bufnr = buf,
            filter = function(client)
              return client.name == "null-ls"
            end,
          })
        end,
        sources = function(buf)
          local ret = require("null-ls.sources").get_available(vim.bo[buf].filetype, "NULL_LS_FORMATTING") or {}
          return vim.tbl_map(function(source)
            return source.name
          end, ret)
        end,
      })
    end)
  end,
  opts = function(_, opts)
    local nls = require("null-ls")
    opts.root_dir = opts.root_dir
      or require("null-ls.utils").root_pattern(".null-ls-root", ".neoconf.json", "Makefile", ".git")
    opts.sources = vim.list_extend(opts.sources or {}, {
      nls.builtins.formatting.fish_indent,
      nls.builtins.diagnostics.fish,
      nls.builtins.formatting.stylua,
      nls.builtins.formatting.shfmt,
    })
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
