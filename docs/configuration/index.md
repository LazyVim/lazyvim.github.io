# âïž Configuration

## đ File Structure

The files under config will be automatically loaded at the appropriate time,
so you don't need to require those files manually. For more information, see [general settings](./configuration/general).

You can add your custom plugin specs under `lua/plugins/`. All files there
will be automatically loaded by [lazy.nvim](https://github.com/folke/lazy.nvim).
For more information, see [configuring plugins](./configuration/plugins).

```text {4-7,9-11}
~/.config/nvim
âââ lua
âÂ Â  âââ config
âÂ Â  âÂ Â  âââ autocmds.lua
âÂ Â  âÂ Â  âââ keymaps.lua
âÂ Â  âÂ Â  âââ lazy.lua
âÂ Â  âÂ Â  âââ options.lua
âÂ Â  âââ plugins
âÂ Â      âââ spec1.lua
âÂ Â      âââ **
âÂ Â      âââ spec2.lua
âââ init.toml
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
  -- load the default settings
  defaults = {
    autocmds = true, -- lazyvim.config.autocmds
    keymaps = true, -- lazyvim.config.keymaps
    options = true, -- lazyvim.config.options
  },
  -- icons used by other plugins
  icons = {
    diagnostics = {
      Error = "ï ",
      Warn = "ï± ",
      Hint = "ï ” ",
      Info = "ï ",
    },
    git = {
      added = "ïŸ ",
      modified = "ï ",
      removed = "ï ",
    },
    kinds = {
      Array = "îȘ ",
      Boolean = "îȘ ",
      Class = "î­ ",
      Color = "î­ ",
      Constant = "î­ ",
      Constructor = "îȘ ",
      Copilot = "î ",
      Enum = "îȘ ",
      EnumMember = "î­ ",
      Event = "îȘ ",
      Field = "î­ ",
      File = "î©» ",
      Folder = "ï ",
      Function = "îȘ ",
      Interface = "î­Ą ",
      Key = "îȘ ",
      Keyword = "î­ą ",
      Method = "îȘ ",
      Module = "îŹ© ",
      Namespace = "îȘ ",
      Null = "ïł  ",
      Number = "îȘ ",
      Object = "îȘ ",
      Operator = "î­€ ",
      Package = "îŹ© ",
      Property = "î­„ ",
      Reference = "îŹ¶ ",
      Snippet = "î­Š ",
      String = "îź ",
      Struct = "îȘ ",
      Text = "îȘ ",
      TypeParameter = "îȘ ",
      Unit = "îȘ ",
      Value = "îȘ ",
      Variable = "îȘ ",
    },
  },
}
```

<!-- config:end -->
