# `Clojure`

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
    { import = "lazyvim.plugins.extras.lang.clojure" },
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

 Add Clojure & related to treesitter


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { ensure_installed = { "clojure" } }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-treesitter/nvim-treesitter",
  opts = { ensure_installed = { "clojure" } },
}
```

</TabItem>

</Tabs>

## [cmp-conjure](https://github.com/PaterJason/cmp-conjure)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "PaterJason/cmp-conjure",
}
```

</TabItem>

</Tabs>

## [rainbow-delimiters.nvim](https://github.com/HiPhish/rainbow-delimiters.nvim)

 Enable rainbow parenthesis


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "HiPhish/rainbow-delimiters.nvim" }
```

</TabItem>

</Tabs>

## [nvim-treesitter-sexp](https://github.com/PaterJason/nvim-treesitter-sexp)

 Add s-exp mappings


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "PaterJason/nvim-treesitter-sexp" }
```

</TabItem>

</Tabs>

## [baleia.nvim](https://github.com/m00qek/baleia.nvim)

 Colorize the output of the log buffer


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "m00qek/baleia.nvim",
  config = function()
    vim.g.conjure_baleia = require("baleia").setup({ line_starts_at = 3 })

    vim.api.nvim_create_user_command("BaleiaColorize", function()
      vim.g.conjure_baleia.once(vim.api.nvim_get_current_buf())
    end, { bang = true })

    vim.api.nvim_create_user_command("BaleiaLogs", vim.g.conjure_baleia.logger.show, { bang = true })
  end,
}
```

</TabItem>

</Tabs>

## [conjure](https://github.com/Olical/conjure)

 Use Clojure REPL


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "Olical/conjure",
  config = function(_, _)
    require("conjure.main").main()
    require("conjure.mapping")["on-filetype"]()
  end,
  init = function()
    -- print color codes if baleia.nvim is available
    local colorize = require("lazyvim.util").has("baleia.nvim")

    if colorize then
      vim.g["conjure#log#strip_ansi_escape_sequences_line_limit"] = 0
    else
      vim.g["conjure#log#strip_ansi_escape_sequences_line_limit"] = 1
    end

    -- disable diagnostics in log buffer and colorize it
    vim.api.nvim_create_autocmd({ "BufWinEnter" }, {
      pattern = "conjure-log-*",
      callback = function()
        local buffer = vim.api.nvim_get_current_buf()
        vim.diagnostic.enable(false, { bufnr = buffer })

        if colorize and vim.g.conjure_baleia then
          vim.g.conjure_baleia.automatically(buffer)
        end

        vim.keymap.set(
          { "n", "v" },
          "[c",
          "<CMD>call search('^; -\\+$', 'bw')<CR>",
          { silent = true, buffer = true, desc = "Jumps to the begining of previous evaluation output." }
        )
        vim.keymap.set(
          { "n", "v" },
          "]c",
          "<CMD>call search('^; -\\+$', 'w')<CR>",
          { silent = true, buffer = true, desc = "Jumps to the begining of next evaluation output." }
        )
      end,
    })

    -- prefer LSP for jump-to-definition and symbol-doc, and use conjure
    -- alternatives with <localleader>K and <localleader>gd
    vim.g["conjure#mapping#doc_word"] = "K"
    vim.g["conjure#mapping#def_word"] = "gd"
  end,
}
```

</TabItem>

</Tabs>

## [nvim-cmp](https://github.com/hrsh7th/nvim-cmp) _(optional)_

 Extend auto completion


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  if type(opts.sources) == "table" then
    vim.list_extend(opts.sources, { name = "clojure" })
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "hrsh7th/nvim-cmp",
  optional = true,
  dependencies = {
    "PaterJason/cmp-conjure",
  },
  opts = function(_, opts)
    if type(opts.sources) == "table" then
      vim.list_extend(opts.sources, { name = "clojure" })
    end
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
