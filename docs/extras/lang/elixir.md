# Elixir

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

## [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  servers = {
    elixirls = {
      keys = {
        {
          "<leader>cp",
          function()
            local params = vim.lsp.util.make_position_params()
            LazyVim.lsp.execute({
              command = "manipulatePipes:serverid",
              arguments = { "toPipe", params.textDocument.uri, params.position.line, params.position.character },
            })
          end,
          desc = "To Pipe",
        },
        {
          "<leader>cP",
          function()
            local params = vim.lsp.util.make_position_params()
            LazyVim.lsp.execute({
              command = "manipulatePipes:serverid",
              arguments = { "fromPipe", params.textDocument.uri, params.position.line, params.position.character },
            })
          end,
          desc = "From Pipe",
        },
      },
    },
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "neovim/nvim-lspconfig",
  opts = {
    servers = {
      elixirls = {
        keys = {
          {
            "<leader>cp",
            function()
              local params = vim.lsp.util.make_position_params()
              LazyVim.lsp.execute({
                command = "manipulatePipes:serverid",
                arguments = { "toPipe", params.textDocument.uri, params.position.line, params.position.character },
              })
            end,
            desc = "To Pipe",
          },
          {
            "<leader>cP",
            function()
              local params = vim.lsp.util.make_position_params()
              LazyVim.lsp.execute({
                command = "manipulatePipes:serverid",
                arguments = { "fromPipe", params.textDocument.uri, params.position.line, params.position.character },
              })
            end,
            desc = "From Pipe",
          },
        },
      },
    },
  },
}
```

</TabItem>

</Tabs>

## [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  opts.ensure_installed = opts.ensure_installed or {}
  vim.list_extend(opts.ensure_installed, { "elixir", "heex", "eex" })
  vim.treesitter.language.register("markdown", "livebook")
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-treesitter/nvim-treesitter",
  opts = function(_, opts)
    opts.ensure_installed = opts.ensure_installed or {}
    vim.list_extend(opts.ensure_installed, { "elixir", "heex", "eex" })
    vim.treesitter.language.register("markdown", "livebook")
  end,
}
```

</TabItem>

</Tabs>

## [neotest-elixir](https://github.com/jfpedroza/neotest-elixir)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "jfpedroza/neotest-elixir",
}
```

</TabItem>

</Tabs>

## [neotest](https://github.com/nvim-neotest/neotest) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  adapters = {
    ["neotest-elixir"] = {},
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-neotest/neotest",
  optional = true,
  dependencies = {
    "jfpedroza/neotest-elixir",
  },
  opts = {
    adapters = {
      ["neotest-elixir"] = {},
    },
  },
}
```

</TabItem>

</Tabs>

## [none-ls.nvim](https://github.com/nvimtools/none-ls.nvim) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  local nls = require("null-ls")
  opts.sources = vim.list_extend(opts.sources or {}, {
    nls.builtins.diagnostics.credo.with({
      condition = function(utils)
        return utils.root_has_file(".credo.exs")
      end,
    }),
  })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvimtools/none-ls.nvim",
  optional = true,
  opts = function(_, opts)
    local nls = require("null-ls")
    opts.sources = vim.list_extend(opts.sources or {}, {
      nls.builtins.diagnostics.credo.with({
        condition = function(utils)
          return utils.root_has_file(".credo.exs")
        end,
      }),
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
  opts.linters_by_ft = {
    elixir = { "credo" },
  }

  opts.linters = {
    credo = {
      condition = function(ctx)
        return vim.fs.find({ ".credo.exs" }, { path = ctx.filename, upward = true })[1]
      end,
    },
  }
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "mfussenegger/nvim-lint",
  optional = true,
  opts = function(_, opts)
    opts.linters_by_ft = {
      elixir = { "credo" },
    }

    opts.linters = {
      credo = {
        condition = function(ctx)
          return vim.fs.find({ ".credo.exs" }, { path = ctx.filename, upward = true })[1]
        end,
      },
    }
  end,
}
```

</TabItem>

</Tabs>

## [render-markdown.nvim](https://github.com/MeanderingProgrammer/render-markdown.nvim) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "MeanderingProgrammer/render-markdown.nvim",
  optional = true,
  ft = function(_, ft)
    vim.list_extend(ft, { "livebook" })
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
