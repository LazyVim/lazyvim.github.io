# `flash.nvim`

`flash.nvim` lets you navigate your code with search labels,
enhanced character motions, and Treesitter integration.

This **extra** will disable `leap.nvim` and `flit.nvim`.

<!-- plugins:start -->

To use this, add it to your **lazy.nvim** imports:

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.editor.flash" },
    { import = "plugins" },
  },
})
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [flash.nvim](https://github.com/folke/flash.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "folke/flash.nvim",
  event = "VeryLazy",
  vscode = true,
  ---@type Flash.Config
  opts = {},
  keys = {
    {
      "s",
      mode = { "n", "x", "o" },
      function()
        require("flash").jump()
      end,
      desc = "Flash",
    },
    {
      "S",
      mode = { "n", "o", "x" },
      function()
        require("flash").treesitter()
      end,
      desc = "Flash Treesitter",
    },
    {
      "r",
      mode = "o",
      function()
        require("flash").remote()
      end,
      desc = "Remote Flash",
    },
  },
}
```

</TabItem>

</Tabs>

## [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  local function flash(prompt_bufnr)
    require("flash").jump({
      pattern = "^",
      highlight = { label = { after = { 0, 0 } } },
      search = {
        mode = "search",
        exclude = {
          function(win)
            return vim.bo[vim.api.nvim_win_get_buf(win)].filetype ~= "TelescopeResults"
          end,
        },
      },
      action = function(match)
        local picker = require("telescope.actions.state").get_current_picker(prompt_bufnr)
        picker:set_selection(match.pos[1] - 1)
      end,
    })
  end
  opts.defaults = vim.tbl_deep_extend("force", opts.defaults or {}, {
    mappings = {
      n = { s = flash },
      i = { ["<c-s>"] = flash },
    },
  })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-telescope/telescope.nvim",
  optional = true,
  opts = function(_, opts)
    local function flash(prompt_bufnr)
      require("flash").jump({
        pattern = "^",
        highlight = { label = { after = { 0, 0 } } },
        search = {
          mode = "search",
          exclude = {
            function(win)
              return vim.bo[vim.api.nvim_win_get_buf(win)].filetype ~= "TelescopeResults"
            end,
          },
        },
        action = function(match)
          local picker = require("telescope.actions.state").get_current_picker(prompt_bufnr)
          picker:set_selection(match.pos[1] - 1)
        end,
      })
    end
    opts.defaults = vim.tbl_deep_extend("force", opts.defaults or {}, {
      mappings = {
        n = { s = flash },
        i = { ["<c-s>"] = flash },
      },
    })
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
