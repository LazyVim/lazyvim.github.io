# Mini Starter

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
    { import = "lazyvim.plugins.extras.ui.mini-starter" },
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

## [mini.starter](https://github.com/echasnovski/mini.starter)

 enable mini.starter


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  local logo = table.concat({
    "            ██╗      █████╗ ███████╗██╗   ██╗██╗   ██╗██╗███╗   ███╗          Z",
    "            ██║     ██╔══██╗╚══███╔╝╚██╗ ██╔╝██║   ██║██║████╗ ████║      Z    ",
    "            ██║     ███████║  ███╔╝  ╚████╔╝ ██║   ██║██║██╔████╔██║   z       ",
    "            ██║     ██╔══██║ ███╔╝    ╚██╔╝  ╚██╗ ██╔╝██║██║╚██╔╝██║ z         ",
    "            ███████╗██║  ██║███████╗   ██║    ╚████╔╝ ██║██║ ╚═╝ ██║           ",
    "            ╚══════╝╚═╝  ╚═╝╚══════╝   ╚═╝     ╚═══╝  ╚═╝╚═╝     ╚═╝           ",
  }, "\n")
  local pad = string.rep(" ", 22)
  local new_section = function(name, action, section)
    return { name = name, action = action, section = pad .. section }
  end

  local starter = require("mini.starter")
  --stylua: ignore
  local config = {
    evaluate_single = true,
    header = logo,
    items = {
      new_section("Find file",       "Telescope find_files",                                   "Telescope"),
      new_section("Recent files",    "Telescope oldfiles",                                     "Telescope"),
      new_section("Grep text",       "Telescope live_grep",                                    "Telescope"),
      new_section("Config",          "lua require('lazyvim.util').telescope.config_files()()", "Config"),
      new_section("Extras",          "LazyExtras",                                             "Config"),
      new_section("Lazy",            "Lazy",                                                   "Config"),
      new_section("New file",        "ene | startinsert",                                      "Built-in"),
      new_section("Quit",            "qa",                                                     "Built-in"),
      new_section("Session restore", [[lua require("persistence").load()]],                    "Session"),
    },
    content_hooks = {
      starter.gen_hook.adding_bullet(pad .. "░ ", false),
      starter.gen_hook.aligning("center", "center"),
    },
  }
  return config
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "echasnovski/mini.starter",
  version = false, -- wait till new 0.7.0 release to put it back on semver
  event = "VimEnter",
  opts = function()
    local logo = table.concat({
      "            ██╗      █████╗ ███████╗██╗   ██╗██╗   ██╗██╗███╗   ███╗          Z",
      "            ██║     ██╔══██╗╚══███╔╝╚██╗ ██╔╝██║   ██║██║████╗ ████║      Z    ",
      "            ██║     ███████║  ███╔╝  ╚████╔╝ ██║   ██║██║██╔████╔██║   z       ",
      "            ██║     ██╔══██║ ███╔╝    ╚██╔╝  ╚██╗ ██╔╝██║██║╚██╔╝██║ z         ",
      "            ███████╗██║  ██║███████╗   ██║    ╚████╔╝ ██║██║ ╚═╝ ██║           ",
      "            ╚══════╝╚═╝  ╚═╝╚══════╝   ╚═╝     ╚═══╝  ╚═╝╚═╝     ╚═╝           ",
    }, "\n")
    local pad = string.rep(" ", 22)
    local new_section = function(name, action, section)
      return { name = name, action = action, section = pad .. section }
    end

    local starter = require("mini.starter")
    --stylua: ignore
    local config = {
      evaluate_single = true,
      header = logo,
      items = {
        new_section("Find file",       "Telescope find_files",                                   "Telescope"),
        new_section("Recent files",    "Telescope oldfiles",                                     "Telescope"),
        new_section("Grep text",       "Telescope live_grep",                                    "Telescope"),
        new_section("Config",          "lua require('lazyvim.util').telescope.config_files()()", "Config"),
        new_section("Extras",          "LazyExtras",                                             "Config"),
        new_section("Lazy",            "Lazy",                                                   "Config"),
        new_section("New file",        "ene | startinsert",                                      "Built-in"),
        new_section("Quit",            "qa",                                                     "Built-in"),
        new_section("Session restore", [[lua require("persistence").load()]],                    "Session"),
      },
      content_hooks = {
        starter.gen_hook.adding_bullet(pad .. "░ ", false),
        starter.gen_hook.aligning("center", "center"),
      },
    }
    return config
  end,
  config = function(_, config)
    -- close Lazy and re-open when starter is ready
    if vim.o.filetype == "lazy" then
      vim.cmd.close()
      vim.api.nvim_create_autocmd("User", {
        pattern = "MiniStarterOpened",
        callback = function()
          require("lazy").show()
        end,
      })
    end

    local starter = require("mini.starter")
    starter.setup(config)

    vim.api.nvim_create_autocmd("User", {
      pattern = "LazyVimStarted",
      callback = function(ev)
        local stats = require("lazy").stats()
        local ms = (math.floor(stats.startuptime * 100 + 0.5) / 100)
        local pad_footer = string.rep(" ", 8)
        starter.config.footer = pad_footer .. "⚡ Neovim loaded " .. stats.count .. " plugins in " .. ms .. "ms"
        -- INFO: based on @echasnovski's recommendation (thanks a lot!!!)
        if vim.bo[ev.buf].filetype == "starter" then
          pcall(starter.refresh)
        end
      end,
    })
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
