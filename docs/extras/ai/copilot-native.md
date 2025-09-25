# `Copilot-native`

<!-- plugins:start -->

:::info
You can enable the extra with the `:LazyExtras` command.
Plugins marked as optional will only be configured if they are installed.
:::

### Options

Additional options for this extra can be configured in your [lua/config/options.lua](/configuration/general#options) file:

```lua title="lua/config/options.lua"
-- Native inline completions don't support being shown as regular completions
vim.g.ai_cmp = false

-- Set to `true` in your `options.lua` to enable experimental support for Next Edit Suggestions
vim.g.copilot_nes = false
```

Below you can find a list of included plugins and their default settings.

:::caution
You don't need to copy the default settings to your config.
They are only shown here for reference.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)

 copilot-language-server


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  servers = {
    copilot = {
      handlers = {
        didChangeStatus = function(err, res, ctx)
          if err then
            return
          end
          status[ctx.client_id] = res.kind ~= "Normal" and "error" or res.busy and "pending" or "ok"
          if res.status == "Error" then
            LazyVim.error("Please use `:LspCopilotSignIn` to sign in to Copilot")
          end
        end,
      },
      -- stylua: ignore
      keys = {
        {
          "<M-]>",
          function() vim.lsp.inline_completion.select({ count = 1 }) end,
          desc = "Next Copilot Suggestion",
          mode = { "i", "n" },
        },
        {
          "<M-[>",
          function() vim.lsp.inline_completion.select({ count = -1 }) end,
          desc = "Next Copilot Suggestion",
          mode = { "i", "n" },
        },
      },
    },
  },
  setup = {
    copilot = function()
      vim.lsp.inline_completion.enable()

      -- Only trigger NES updates:
      -- * when leaving insert mode
      -- * when text is changed (in normal mode)
      -- * when accepting a next edit suggestion
      local nes_update = Snacks.util.debounce(function()
        return vim.g.copilot_nes and require("copilot-lsp.nes").request_nes("copilot")
      end, { ms = 100 })

      vim.api.nvim_create_autocmd({ "InsertLeave", "TextChanged" }, {
        group = vim.api.nvim_create_augroup("lazyvim.copilot-native.complete", { clear = true }),
        callback = nes_update,
      })

      -- Accept inline suggestions or next edits
      LazyVim.cmp.actions.ai_accept = function()
        if vim.b.nes_state then
          local nes = require("copilot-lsp.nes")

          -- Try to jump to the start of the suggestion edit.
          if nes.walk_cursor_start_edit() then
            return true
          end

          -- apply the pending suggestion and jump to the end of the edit.
          if nes.apply_pending_nes() then
            nes.walk_cursor_end_edit()
            nes_update() -- trigger new nes update after accept
            return true
          end
        end
        if vim.lsp.inline_completion.get() then
          -- nes_update() -- ensure nes update is triggered after inline completion
          return true
        end
      end
    end,
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
      copilot = {
        handlers = {
          didChangeStatus = function(err, res, ctx)
            if err then
              return
            end
            status[ctx.client_id] = res.kind ~= "Normal" and "error" or res.busy and "pending" or "ok"
            if res.status == "Error" then
              LazyVim.error("Please use `:LspCopilotSignIn` to sign in to Copilot")
            end
          end,
        },
        -- stylua: ignore
        keys = {
          {
            "<M-]>",
            function() vim.lsp.inline_completion.select({ count = 1 }) end,
            desc = "Next Copilot Suggestion",
            mode = { "i", "n" },
          },
          {
            "<M-[>",
            function() vim.lsp.inline_completion.select({ count = -1 }) end,
            desc = "Next Copilot Suggestion",
            mode = { "i", "n" },
          },
        },
      },
    },
    setup = {
      copilot = function()
        vim.lsp.inline_completion.enable()

        -- Only trigger NES updates:
        -- * when leaving insert mode
        -- * when text is changed (in normal mode)
        -- * when accepting a next edit suggestion
        local nes_update = Snacks.util.debounce(function()
          return vim.g.copilot_nes and require("copilot-lsp.nes").request_nes("copilot")
        end, { ms = 100 })

        vim.api.nvim_create_autocmd({ "InsertLeave", "TextChanged" }, {
          group = vim.api.nvim_create_augroup("lazyvim.copilot-native.complete", { clear = true }),
          callback = nes_update,
        })

        -- Accept inline suggestions or next edits
        LazyVim.cmp.actions.ai_accept = function()
          if vim.b.nes_state then
            local nes = require("copilot-lsp.nes")

            -- Try to jump to the start of the suggestion edit.
            if nes.walk_cursor_start_edit() then
              return true
            end

            -- apply the pending suggestion and jump to the end of the edit.
            if nes.apply_pending_nes() then
              nes.walk_cursor_end_edit()
              nes_update() -- trigger new nes update after accept
              return true
            end
          end
          if vim.lsp.inline_completion.get() then
            -- nes_update() -- ensure nes update is triggered after inline completion
            return true
          end
        end
      end,
    },
  },
}
```

</TabItem>

</Tabs>

## [lualine.nvim](https://github.com/nvim-lualine/lualine.nvim) _(optional)_

 lualine


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  table.insert(
    opts.sections.lualine_x,
    2,
    LazyVim.lualine.status(LazyVim.config.icons.kinds.Copilot, function()
      local clients = vim.lsp.get_clients({ name = "copilot", bufnr = 0 })
      return #clients > 0 and status[clients[1].id] or nil
    end)
  )
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-lualine/lualine.nvim",
  optional = true,
  event = "VeryLazy",
  opts = function(_, opts)
    table.insert(
      opts.sections.lualine_x,
      2,
      LazyVim.lualine.status(LazyVim.config.icons.kinds.Copilot, function()
        local clients = vim.lsp.get_clients({ name = "copilot", bufnr = 0 })
        return #clients > 0 and status[clients[1].id] or nil
      end)
    )
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
