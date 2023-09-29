# `nvim-lint`

LazyVim adds a custom `linter_opts` option to allow overriding the
default options for each formatter.
`condition` is another LazyVim extension that allows you to
dynamically enable/disable linters based on the context.

<!-- plugins:start -->

To use this, add it to your **lazy.nvim** imports:

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.linting.nvim-lint" },
    { import = "plugins" },
  },
})
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [nvim-lint](https://github.com/mfussenegger/nvim-lint)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  -- Event to trigger linters
  events = { "BufWritePost", "BufReadPost", "InsertLeave" },
  linters_by_ft = {
    fish = { "fish" },
  },
  -- Custom linters, or fully replace a builtin
  linters = {},
  -- LazyVim extension to easily override linter options
  ---@type table<string,table>
  linter_opts = {
    -- -- Example of using selene only when a selene.toml file is present
    selene = {
      -- `condition` is another LazyVim extension that allows you to
      -- dynamically enable/disable linters based on the context.
      condition = function(ctx)
        return vim.fs.find({ "selene.toml" }, { path = ctx.filename, upward = true })[1]
      end,
    },
  },
}
```

</TabItem>

<TabItem value="code" label="Full Spec">

```lua
{
  "mfussenegger/nvim-lint",
  event = "BufReadPost",
  opts = {
    -- Event to trigger linters
    events = { "BufWritePost", "BufReadPost", "InsertLeave" },
    linters_by_ft = {
      fish = { "fish" },
    },
    -- Custom linters, or fully replace a builtin
    linters = {},
    -- LazyVim extension to easily override linter options
    ---@type table<string,table>
    linter_opts = {
      -- -- Example of using selene only when a selene.toml file is present
      selene = {
        -- `condition` is another LazyVim extension that allows you to
        -- dynamically enable/disable linters based on the context.
        condition = function(ctx)
          return vim.fs.find({ "selene.toml" }, { path = ctx.filename, upward = true })[1]
        end,
      },
    },
  },
  config = function(_, opts)
    local M = {}
    M._did_setup = false

    function M.setup()
      if M._did_setup then
        return
      end
      local lint = require("lint")
      for name, linter in pairs(opts.linters) do
        lint.linters[name] = linter
      end
      lint.linters_by_ft = vim.tbl_extend("force", lint.linters_by_ft, opts.linters_by_ft)
      for l, o in pairs(opts.linter_opts or {}) do
        lint.linters[l] = vim.tbl_deep_extend("force", lint.linters[l], o)
      end
      M._did_setup = true
    end

    function M.debounce(ms, fn)
      local timer = vim.loop.new_timer()
      return function(...)
        local argv = { ... }
        timer:start(ms, 0, function()
          timer:stop()
          vim.schedule_wrap(fn)(unpack(argv))
        end)
      end
    end

    function M.lint()
      M.setup()
      local lint = require("lint")
      local names = lint.linters_by_ft[vim.bo.filetype] or {}
      local ctx = { filename = vim.api.nvim_buf_get_name(0) }
      ctx.dirname = vim.fn.fnamemodify(ctx.filename, ":h")
      names = vim.tbl_filter(function(name)
        local linter = lint.linters[name]
        return linter and not (linter.condition and not linter.condition(ctx))
      end, names)

      if #names > 0 then
        lint.try_lint(names)
      end
    end

    vim.api.nvim_create_autocmd(opts.events, {
      group = vim.api.nvim_create_augroup("nvim-lint", { clear = true }),
      callback = M.debounce(100, M.lint),
    })
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
