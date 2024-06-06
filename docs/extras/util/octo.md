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
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
