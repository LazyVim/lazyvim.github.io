# `Sql`

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
    { import = "lazyvim.plugins.extras.lang.sql" },
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

## [vim-dadbod](https://github.com/tpope/vim-dadbod)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "tpope/vim-dadbod",
  cmd = "DB",
}
```

</TabItem>

</Tabs>

## [vim-dadbod-completion](https://github.com/kristijanhusak/vim-dadbod-completion)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "kristijanhusak/vim-dadbod-completion",
  dependencies = "vim-dadbod",
  ft = sql_ft,
  init = function()
    vim.api.nvim_create_autocmd("FileType", {
      pattern = sql_ft,
      callback = function()
        local cmp = require("cmp")

        -- global sources
        ---@param source cmp.SourceConfig
        local sources = vim.tbl_map(function(source)
          return { name = source.name }
        end, cmp.get_config().sources)

        -- add vim-dadbod-completion source
        table.insert(sources, { name = "vim-dadbod-completion" })

        -- update sources for the current buffer
        cmp.setup.buffer({ sources = sources })
      end,
    })
  end,
}
```

</TabItem>

</Tabs>

## [vim-dadbod-ui](https://github.com/kristijanhusak/vim-dadbod-ui)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "kristijanhusak/vim-dadbod-ui",
  cmd = { "DBUI", "DBUIToggle", "DBUIAddConnection", "DBUIFindBuffer" },
  dependencies = "vim-dadbod",
  keys = {
    { "<leader>D", "<cmd>DBUIToggle<CR>", desc = "Toggle DBUI" },
  },
  init = function()
    local data_path = vim.fn.stdpath("data")

    vim.g.db_ui_auto_execute_table_helpers = 1
    vim.g.db_ui_save_location = data_path .. "/dadbod_ui"
    vim.g.db_ui_show_database_icon = true
    vim.g.db_ui_tmp_query_location = data_path .. "/dadbod_ui/tmp"
    vim.g.db_ui_use_nerd_fonts = true
    vim.g.db_ui_use_nvim_notify = true

    -- NOTE: The default behavior of auto-execution of queries on save is disabled
    -- this is useful when you have a big query that you don't want to run every time
    -- you save the file running those queries can crash neovim to run use the
    -- default keymap: <leader>S
    vim.g.db_ui_execute_on_save = false
  end,
}
```

</TabItem>

</Tabs>

## [mason.nvim](https://github.com/williamboman/mason.nvim)

 Linters & formatters


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { ensure_installed = { "sqlfluff" } }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "williamboman/mason.nvim",
  opts = { ensure_installed = { "sqlfluff" } },
}
```

</TabItem>

</Tabs>

## [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter) _(optional)_

 Treesitter


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { ensure_installed = { "sql" } }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-treesitter/nvim-treesitter",
  optional = true,
  opts = { ensure_installed = { "sql" } },
}
```

</TabItem>

</Tabs>

## [edgy.nvim](https://github.com/folke/edgy.nvim) _(optional)_

 Edgy integration


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  opts.right = opts.right or {}
  table.insert(opts.right, {
    title = "Database",
    ft = "dbui",
    pinned = true,
    width = 0.3,
    open = function()
      vim.cmd("DBUI")
    end,
  })

  opts.bottom = opts.bottom or {}
  table.insert(opts.bottom, {
    title = "DB Query Result",
    ft = "dbout",
  })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "folke/edgy.nvim",
  optional = true,
  opts = function(_, opts)
    opts.right = opts.right or {}
    table.insert(opts.right, {
      title = "Database",
      ft = "dbui",
      pinned = true,
      width = 0.3,
      open = function()
        vim.cmd("DBUI")
      end,
    })

    opts.bottom = opts.bottom or {}
    table.insert(opts.bottom, {
      title = "DB Query Result",
      ft = "dbout",
    })
  end,
}
```

</TabItem>

</Tabs>

## [nvim-lint](https://github.com/mfussenegger/nvim-lint) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  for _, ft in ipairs(sql_ft) do
    opts.linters_by_ft[ft] = opts.linters_by_ft[ft] or {}
    table.insert(opts.linters_by_ft[ft], "sqlfluff")
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "mfussenegger/nvim-lint",
  optional = true,
  opts = function(_, opts)
    for _, ft in ipairs(sql_ft) do
      opts.linters_by_ft[ft] = opts.linters_by_ft[ft] or {}
      table.insert(opts.linters_by_ft[ft], "sqlfluff")
    end
  end,
}
```

</TabItem>

</Tabs>

## [conform.nvim](https://github.com/stevearc/conform.nvim) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  opts.formatters.sqlfluff = {
    args = { "format", "--dialect=ansi", "-" },
  }
  for _, ft in ipairs(sql_ft) do
    opts.formatters_by_ft[ft] = opts.formatters_by_ft[ft] or {}
    table.insert(opts.formatters_by_ft[ft], "sqlfluff")
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "stevearc/conform.nvim",
  optional = true,
  opts = function(_, opts)
    opts.formatters.sqlfluff = {
      args = { "format", "--dialect=ansi", "-" },
    }
    for _, ft in ipairs(sql_ft) do
      opts.formatters_by_ft[ft] = opts.formatters_by_ft[ft] or {}
      table.insert(opts.formatters_by_ft[ft], "sqlfluff")
    end
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
