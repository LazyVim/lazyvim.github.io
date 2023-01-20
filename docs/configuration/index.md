# ⚙️ Configuration

## 📂 File Structure

The files under config will be automatically loaded at the appropriate time,
so you don't need to require those files manually. For more information, see [general settings](./configuration/general).

You can add your custom plugin specs under `lua/plugins/`. All files there
will be automatically loaded by [lazy.nvim](https://github.com/folke/lazy.nvim).
For more information, see [configuring plugins](./configuration/plugins).

```text {4-7,9-11}
~/.config/nvim
├── lua
│   ├── config
│   │   ├── autocmds.lua
│   │   ├── keymaps.lua
│   │   ├── lazy.lua
│   │   └── options.lua
│   └── plugins
│       ├── spec1.lua
│       ├── **
│       └── spec2.lua
└── init.toml
```

## Icons & Colorscheme

Icons & colorscheme can be configured as options for the **LazyVim** plugin.

For example in `lua/plugins/core.lua`

```lua
return {
  {
    "LazyVim/LazyVim",
    opts = {
      colorscheme = "catppuccin",
    }
  }
}
```

### Default Settings

<!-- config:start -->

```lua
{
  -- colorscheme can be a string like `catppuccin` or a function that will load the colorscheme
  ---@type string|fun()
  colorscheme = function()
    require("tokyonight").load()
  end,
  -- icons used by other plugins
  icons = {
    diagnostics = {
      Error = " ",
      Warn = " ",
      Hint = " ",
      Info = " ",
    },
    git = {
      added = " ",
      modified = " ",
      removed = " ",
    },
    kinds = {
      Array = " ",
      Boolean = " ",
      Class = " ",
      Color = " ",
      Constant = " ",
      Constructor = " ",
      Enum = " ",
      EnumMember = " ",
      Event = " ",
      Field = " ",
      File = " ",
      Folder = " ",
      Function = " ",
      Interface = " ",
      Key = " ",
      Keyword = " ",
      Method = " ",
      Module = " ",
      Namespace = " ",
      Null = "ﳠ ",
      Number = " ",
      Object = " ",
      Operator = " ",
      Package = " ",
      Property = " ",
      Reference = " ",
      Snippet = " ",
      String = " ",
      Struct = " ",
      Text = " ",
      TypeParameter = " ",
      Unit = " ",
      Value = " ",
      Variable = " ",
    },
  },
}
```

<!-- config:end -->
