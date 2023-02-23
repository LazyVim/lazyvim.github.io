---
sidebar_position: 3
---

# Plugins

Configuring **LazyVim** plugins is exactly the same as using **lazy.nvim** to build
a config from scratch.

For the full plugin spec documentation please check the **lazy.nvim**
[readme](https://github.com/folke/lazy.nvim).

Refer to the **plugins** section in the sidebar for configuring
included plugins.

## ➕ Adding Plugins

Adding a plugin is as simple as adding the plugin spec to one of the files
under `lua/plugins/*.lua`. You can create as many files there as you want.

You can structure your `lua/plugins` folder with a file per plugin,
or a separate file containing all the plugin specs for some functionality.

```lua title="lua/plugins/lsp.lua"
return {
  -- add symbols-outline
  {
    "simrat39/symbols-outline.nvim",
    cmd = "SymbolsOutline",
    keys = { { "<leader>cs", "<cmd>SymbolsOutline<cr>", desc = "Symbols Outline" } },
    opts = {
      -- add your options that should be passed to the setup() function here
      position = "right",
    },
  },
}
```

## ❌ Disabling Plugins

In order to disable a plugin, add a spec with `enabled=false`

```lua title="lua/plugins/disabled.lua"
-- disable trouble
{ "folke/trouble.nvim", enabled = false }
```

## ✏️ Customizing Plugin Specs

Defaults merging rules:

- **cmd**: the list of commands will be extended with your custom commands
- **event**: the list of events will be extended with your custom events
- **ft**: the list of filetypes will be extended with your custom filetypes
- **keys**: the list of keymaps will be extended with your custom keymaps
- **opts**: your custom opts will be merged with the default opts
- **dependencies**: the list of dependencies will be extended with your custom dependencies
- **_any other property will override the defaults_**

For `ft`, `event`, `keys`, `cmd` and `opts` you can instead also specify a `values` function
that can make changes to the default values, or return new values to be used instead.

```lua
-- change trouble config
{
  "folke/trouble.nvim",
  -- opts will be merged with the parent spec
  opts = { use_diagnostic_signs = true },
}

-- add cmp-emoji
{
  "hrsh7th/nvim-cmp",
  dependencies = { "hrsh7th/cmp-emoji" },
  ---@param opts cmp.ConfigSchema
  opts = function(_, opts)
    local cmp = require("cmp")
    opts.sources = cmp.config.sources(vim.list_extend(opts.sources, { { name = "emoji" } }))
  end,
}
```

## ⌨️ Adding & Disabling Plugin Keymaps

Adding `keys=` follows the rules as explained above.

You can also disable a default keymap by setting it to `false`.
To override a keymap, simply add one with the same `lhs` and a new `rhs`.

```lua title="lua/plugins/telescope.lua"
{
  "nvim-telescope/telescope.nvim",
  keys = {
    -- disable the keymap to grep files
    {"<leader>/", false},
    -- change a keymap
    { "<leader>ff", "Telescope find_files", desc = "Find Files" },
    -- add a keymap to browse plugin files
    {
      "<leader>fp",
      function() require("telescope.builtin").find_files({ cwd = require("lazy.core.config").options.root }) end,
      desc = "Find Plugin File",
    },
  },
},
```

You can also return a whole new set of keymaps to be used instead.
Or return `{}` to disable all keymaps for a plugin.

```lua title="lua/plugins/telescope.lua"
{
  "nvim-telescope/telescope.nvim",
  -- replace all Telescope keymaps with only one mapping
  keys = function()
    return {
      { "<leader>ff", "Telescope find_files", desc = "Find Files" },
    }
  end,
},
```
