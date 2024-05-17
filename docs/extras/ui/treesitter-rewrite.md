# `Treesitter-rewrite`

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
    { import = "lazyvim.plugins.extras.ui.treesitter-rewrite" },
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

## [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  patch()
  return {
    highlight = { enable = true },
    indent = { enable = true },
    ensure_install = {
      "bash",
      "c",
      "diff",
      "html",
      "javascript",
      "jsdoc",
      "json",
      "jsonc",
      "lua",
      "luadoc",
      "luap",
      "markdown",
      "markdown_inline",
      "python",
      "query",
      "regex",
      "toml",
      "tsx",
      "typescript",
      "vim",
      "vimdoc",
      "xml",
      "yaml",
    },
  }
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-treesitter/nvim-treesitter",
  version = false, -- last release is way too old and doesn't work on Windows
  branch = "main",
  build = ":TSUpdate",
  lazy = false,
  cmd = {},
  opts = function()
    patch()
    return {
      highlight = { enable = true },
      indent = { enable = true },
      ensure_install = {
        "bash",
        "c",
        "diff",
        "html",
        "javascript",
        "jsdoc",
        "json",
        "jsonc",
        "lua",
        "luadoc",
        "luap",
        "markdown",
        "markdown_inline",
        "python",
        "query",
        "regex",
        "toml",
        "tsx",
        "typescript",
        "vim",
        "vimdoc",
        "xml",
        "yaml",
      },
    }
  end,
  init = function() end,
  ---@param opts TSConfig
  config = function(_, opts)
    ---@return string[]
    local function norm(ensure)
      return ensure == nil and {} or type(ensure) == "string" and { ensure } or ensure
    end

    -- ensure_installed is deprecated, but still supported
    opts.ensure_install = LazyVim.dedup(vim.list_extend(norm(opts.ensure_install), norm(opts.ensure_installed)))

    require("nvim-treesitter").setup(opts)
    patch()

    -- backwards compatibility with the old treesitter config for indent
    if vim.tbl_get(opts, "indent", "enable") then
      vim.bo.indentexpr = "v:lua.require'nvim-treesitter'.indentexpr()"
    end

    -- backwards compatibility with the old treesitter config for highlight
    if vim.tbl_get(opts, "highlight", "enable") then
      vim.api.nvim_create_autocmd("FileType", {
        callback = function()
          pcall(vim.treesitter.start)
        end,
      })
    end
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
