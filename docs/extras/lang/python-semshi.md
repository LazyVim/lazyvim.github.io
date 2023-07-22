# `lang.python-semshi`

<!-- plugins:start -->

To use this, add it to your **lazy.nvim** imports:

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.lang.python-semshi" },
    { import = "plugins" },
  },
})
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [semshi](https://github.com/wookayin/semshi)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  -- "numiras/semshi",
  "wookayin/semshi", -- use a maintained fork
  ft = "python",
  build = ":UpdateRemotePlugins",
  init = function()
    -- Disabled these features better provided by LSP or other more general plugins
    vim.g["semshi#error_sign"] = false
    vim.g["semshi#simplify_markup"] = false
    vim.g["semshi#mark_selected_nodes"] = false
    vim.g["semshi#update_delay_factor"] = 0.001

    -- This autocmd must be defined in init to take effect
    vim.api.nvim_create_autocmd({ "VimEnter", "ColorScheme" }, {
      group = vim.api.nvim_create_augroup("SemanticHighlight", {}),
      callback = function()
        -- Only add style, inherit or link to the LSP's colors
        vim.cmd([[
            highlight! semshiGlobal gui=italic
            highlight! semshiImported gui=bold
            highlight! link semshiParameter @lsp.type.parameter
            highlight! link semshiParameterUnused DiagnosticUnnecessary
            highlight! link semshiBuiltin @function.builtin
            highlight! link semshiAttribute @attribute
            highlight! link semshiSelf @lsp.type.selfKeyword
            highlight! link semshiUnresolved @lsp.type.unresolvedReference
            ]])
      end,
    })
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
