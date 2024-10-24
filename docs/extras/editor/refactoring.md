# `Refactoring`

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
    { import = "lazyvim.plugins.extras.editor.refactoring" },
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

## [refactoring.nvim](https://github.com/ThePrimeagen/refactoring.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  prompt_func_return_type = {
    go = false,
    java = false,
    cpp = false,
    c = false,
    h = false,
    hpp = false,
    cxx = false,
  },
  prompt_func_param_type = {
    go = false,
    java = false,
    cpp = false,
    c = false,
    h = false,
    hpp = false,
    cxx = false,
  },
  printf_statements = {},
  print_var_statements = {},
  show_success_message = true, -- shows a message with information about the refactor on success
  -- i.e. [Refactor] Inlined 3 variable occurrences
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "ThePrimeagen/refactoring.nvim",
  event = { "BufReadPre", "BufNewFile" },
  dependencies = {
    "nvim-lua/plenary.nvim",
    "nvim-treesitter/nvim-treesitter",
  },
  keys = {
    { "<leader>r", "", desc = "+refactor", mode = { "n", "v" } },
    {
      "<leader>rs",
      pick,
      mode = "v",
      desc = "Refactor",
    },
    {
      "<leader>ri",
      function()
        require("refactoring").refactor("Inline Variable")
      end,
      mode = { "n", "v" },
      desc = "Inline Variable",
    },
    {
      "<leader>rb",
      function()
        require("refactoring").refactor("Extract Block")
      end,
      desc = "Extract Block",
    },
    {
      "<leader>rf",
      function()
        require("refactoring").refactor("Extract Block To File")
      end,
      desc = "Extract Block To File",
    },
    {
      "<leader>rP",
      function()
        require("refactoring").debug.printf({ below = false })
      end,
      desc = "Debug Print",
    },
    {
      "<leader>rp",
      function()
        require("refactoring").debug.print_var({ normal = true })
      end,
      desc = "Debug Print Variable",
    },
    {
      "<leader>rc",
      function()
        require("refactoring").debug.cleanup({})
      end,
      desc = "Debug Cleanup",
    },
    {
      "<leader>rf",
      function()
        require("refactoring").refactor("Extract Function")
      end,
      mode = "v",
      desc = "Extract Function",
    },
    {
      "<leader>rF",
      function()
        require("refactoring").refactor("Extract Function To File")
      end,
      mode = "v",
      desc = "Extract Function To File",
    },
    {
      "<leader>rx",
      function()
        require("refactoring").refactor("Extract Variable")
      end,
      mode = "v",
      desc = "Extract Variable",
    },
    {
      "<leader>rp",
      function()
        require("refactoring").debug.print_var()
      end,
      mode = "v",
      desc = "Debug Print Variable",
    },
  },
  opts = {
    prompt_func_return_type = {
      go = false,
      java = false,
      cpp = false,
      c = false,
      h = false,
      hpp = false,
      cxx = false,
    },
    prompt_func_param_type = {
      go = false,
      java = false,
      cpp = false,
      c = false,
      h = false,
      hpp = false,
      cxx = false,
    },
    printf_statements = {},
    print_var_statements = {},
    show_success_message = true, -- shows a message with information about the refactor on success
    -- i.e. [Refactor] Inlined 3 variable occurrences
  },
  config = function(_, opts)
    require("refactoring").setup(opts)
    if LazyVim.has("telescope.nvim") then
      LazyVim.on_load("telescope.nvim", function()
        require("telescope").load_extension("refactoring")
      end)
    end
  end,
}
```

</TabItem>

</Tabs>

## [plenary.nvim](https://github.com/nvim-lua/plenary.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-lua/plenary.nvim",
  "nvim-treesitter/nvim-treesitter",
}
```

</TabItem>

</Tabs>

## [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
"nvim-treesitter/nvim-treesitter"
```

</TabItem>

</Tabs>

<!-- plugins:end -->
