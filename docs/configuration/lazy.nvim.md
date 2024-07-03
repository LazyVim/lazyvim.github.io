---
sidebar_position: 1
---

# lazy.nvim

The [starter](https://github.com/LazyVim/starter) includes a pre-configured [lazy.nvim](https://github.com/folke/lazy.nvim)
setup that installs the **LazyVim** plugin and imports its plugins.

:::tip
The version for **lazy.nvim** and **LazyVim** will default to the latest
stable release.

If you'd rather use the latest development version, add the code below
to your specs:

```lua title="lua/plugins/core.lua"
return {
  { "folke/lazy.nvim", version = false },
  { "LazyVim/LazyVim", version = false },
}
```

:::

:::caution
**lazy.nvim** can be configured to always try to use the latest stable version
of a plugin, if a plugin has releases.

However, it's recommended to leave `version=false` for now, since a lot
the plugins that support versioning, have outdated releases, which may break
your Neovim install.

If you still want to try using the latest stable releases, you can set
`config.defaults.version = "*"`

Some plugins that are known to break with their outdated release will still
be forced to install the latest development version. To override that, specify
`version="*"` for those plugins. (see the **LazyVim** code)
:::

<!-- lazy:start -->

```lua title="lua/config/lazy.lua"
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not (vim.uv or vim.loop).fs_stat(lazypath) then
  local lazyrepo = "https://github.com/folke/lazy.nvim.git"
  local out = vim.fn.system({ "git", "clone", "--filter=blob:none", "--branch=stable", lazyrepo, lazypath })
  if vim.v.shell_error ~= 0 then
    vim.api.nvim_echo({
      { "Failed to clone lazy.nvim:\n", "ErrorMsg" },
      { out, "WarningMsg" },
      { "\nPress any key to exit..." },
    }, true, {})
    vim.fn.getchar()
    os.exit(1)
  end
end
vim.opt.rtp:prepend(lazypath)

require("lazy").setup({
  spec = {
    -- add LazyVim and import its plugins
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    -- import/override with your plugins
    { import = "plugins" },
  },
  defaults = {
    -- By default, only LazyVim plugins will be lazy-loaded. Your custom plugins will load during startup.
    -- If you know what you're doing, you can set this to `true` to have all your custom plugins lazy-loaded by default.
    lazy = false,
    -- It's recommended to leave version=false for now, since a lot the plugin that support versioning,
    -- have outdated releases, which may break your Neovim install.
    version = false, -- always use the latest git commit
    -- version = "*", -- try installing the latest stable version for plugins that support semver
  },
  install = { colorscheme = { "tokyonight", "habamax" } },
  checker = { enabled = true }, -- automatically check for plugin updates
  performance = {
    rtp = {
      -- disable some rtp plugins
      disabled_plugins = {
        "gzip",
        -- "matchit",
        -- "matchparen",
        -- "netrwPlugin",
        "tarPlugin",
        "tohtml",
        "tutor",
        "zipPlugin",
      },
    },
  },
})

```

<!-- lazy:end -->
