# `Octo`

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
    { import = "lazyvim.plugins.extras.util.octo" },
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

### Includes the following extras

- [lang.git](/extras/lang/git)

## [octo.nvim](https://github.com/pwntester/octo.nvim)

 Octo


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  enable_builtin = true,
  default_to_projects_v2 = true,
  default_merge_method = "squash",
  picker = "telescope",
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "pwntester/octo.nvim",
  cmd = "Octo",
  event = { { event = "BufReadCmd", pattern = "octo://*" } },
  init = function()
    vim.treesitter.language.register("markdown", "octo")
  end,
  opts = {
    enable_builtin = true,
    default_to_projects_v2 = true,
    default_merge_method = "squash",
    picker = "telescope",
  },
  keys = {
    { "<leader>gi", "<cmd>Octo issue list<CR>", desc = "List Isues (Octo)" },
    { "<leader>gI", "<cmd>Octo issue search<CR>", desc = "Search Isues (Octo)" },
    { "<leader>gp", "<cmd>Octo pr list<CR>", desc = "List PRs (Octo)" },
    { "<leader>gP", "<cmd>Octo pr search<CR>", desc = "Search PRs (Octo)" },
    { "<leader>gr", "<cmd>Octo repo list<CR>", desc = "List Repos (Octo)" },
    { "<leader>gS", "<cmd>Octo search<CR>", desc = "Search (Octo)" },

    { "<leader>a", "", desc = "+assignee (Otco)", ft = "octo" },
    { "<leader>c", "", desc = "+comment/code (Otco)", ft = "octo" },
    { "<leader>l", "", desc = "+label (Otco)", ft = "octo" },
    { "<leader>i", "", desc = "+issue (Otco)", ft = "octo" },
    { "<leader>r", "", desc = "+react (Otco)", ft = "octo" },
    { "<leader>p", "", desc = "+pr (Otco)", ft = "octo" },
    { "<leader>v", "", desc = "+review (Otco)", ft = "octo" },
    { "@", "@<C-x><C-o>", mode = "i", ft = "octo", silent = true },
    { "#", "#<C-x><C-o>", mode = "i", ft = "octo", silent = true },
  },
}
```

</TabItem>

</Tabs>

## [octo.nvim](https://github.com/pwntester/octo.nvim)

 Octo Picker


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  if LazyVim.has("telescope.nvim") then
    opts.picker = "telescope"
  elseif LazyVim.has("fzf-lua") then
    opts.picker = "fzf-lua"
  else
    LazyVim.error("`octo.nvim` requires `telescope.nvim` or `fzf-lua`")
  end
  local Signs = require("octo.ui.signs")

  ---@type {buf: number, from: number, to: number, dirty: boolean}[]
  local signs = {}

  local unplace = Signs.unplace
  function Signs.unplace(bufnr)
    signs = vim.tbl_filter(function(s)
      return s.buf ~= bufnr
    end, signs)
    return unplace(bufnr)
  end

  function Signs.place_signs(bufnr, start_line, end_line, is_dirty)
    signs[#signs + 1] = { buf = bufnr, from = start_line, to = end_line, dirty = is_dirty }
  end
  -- stylua: ignore
  local corners = {
    top    = "┌╴",
    middle = "│ ",
    last   = "└╴",
    single = "[ ",
  }

  --- Fixes octo's comment rendering to take wrapping into account
  ---@param buf number
  ---@param lnum number
  ---@param vnum number
  ---@param win number
  table.insert(LazyVim.ui.virtual, function(buf, lnum, vnum, win)
    lnum = lnum - 1
    for _, s in ipairs(signs) do
      if buf == s.buf and lnum >= s.from and lnum <= s.to then
        local height = vim.api.nvim_win_text_height(win, { start_row = s.from, end_row = s.to }).all
        local height_end = vim.api.nvim_win_text_height(win, { start_row = s.to, end_row = s.to }).all
        local corner = corners.middle
        if height == 1 then
          corner = corners.single
        elseif lnum == s.from and vnum == 0 then
          corner = corners.top
        elseif lnum == s.to and vnum == height_end - 1 then
          corner = corners.last
        end
        return { { text = corner, texthl = s.dirty and "OctoDirty" or "IblScope" } }
      end
    end
  end)
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "pwntester/octo.nvim",
  opts = function(_, opts)
    if LazyVim.has("telescope.nvim") then
      opts.picker = "telescope"
    elseif LazyVim.has("fzf-lua") then
      opts.picker = "fzf-lua"
    else
      LazyVim.error("`octo.nvim` requires `telescope.nvim` or `fzf-lua`")
    end
    local Signs = require("octo.ui.signs")

    ---@type {buf: number, from: number, to: number, dirty: boolean}[]
    local signs = {}

    local unplace = Signs.unplace
    function Signs.unplace(bufnr)
      signs = vim.tbl_filter(function(s)
        return s.buf ~= bufnr
      end, signs)
      return unplace(bufnr)
    end

    function Signs.place_signs(bufnr, start_line, end_line, is_dirty)
      signs[#signs + 1] = { buf = bufnr, from = start_line, to = end_line, dirty = is_dirty }
    end
    -- stylua: ignore
    local corners = {
      top    = "┌╴",
      middle = "│ ",
      last   = "└╴",
      single = "[ ",
    }

    --- Fixes octo's comment rendering to take wrapping into account
    ---@param buf number
    ---@param lnum number
    ---@param vnum number
    ---@param win number
    table.insert(LazyVim.ui.virtual, function(buf, lnum, vnum, win)
      lnum = lnum - 1
      for _, s in ipairs(signs) do
        if buf == s.buf and lnum >= s.from and lnum <= s.to then
          local height = vim.api.nvim_win_text_height(win, { start_row = s.from, end_row = s.to }).all
          local height_end = vim.api.nvim_win_text_height(win, { start_row = s.to, end_row = s.to }).all
          local corner = corners.middle
          if height == 1 then
            corner = corners.single
          elseif lnum == s.from and vnum == 0 then
            corner = corners.top
          elseif lnum == s.to and vnum == height_end - 1 then
            corner = corners.last
          end
          return { { text = corner, texthl = s.dirty and "OctoDirty" or "IblScope" } }
        end
      end
    end)
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
