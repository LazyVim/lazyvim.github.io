# Dot Files

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
    { import = "lazyvim.plugins.extras.util.dot" },
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

## [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  servers = {
    bashls = {},
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "neovim/nvim-lspconfig",
  opts = {
    servers = {
      bashls = {},
    },
  },
}
```

</TabItem>

</Tabs>

## [mason.nvim](https://github.com/williamboman/mason.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  vim.list_extend(opts.ensure_installed or {}, {
    "shfmt",
    "shellcheck",
  })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "williamboman/mason.nvim",
  opts = function(_, opts)
    vim.list_extend(opts.ensure_installed or {}, {
      "shfmt",
      "shellcheck",
    })
  end,
}
```

</TabItem>

</Tabs>

## [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)

 add some stuff to treesitter


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  local function add(lang)
    if type(opts.ensure_installed) == "table" then
      table.insert(opts.ensure_installed, lang)
    end
  end

  vim.filetype.add({
    extension = { rasi = "rasi", rofi = "rasi", wofi = "rasi" },
    filename = {
      [".env"] = "dotenv",
      ["vifmrc"] = "vim",
    },
    pattern = {
      [".*/waybar/config"] = "jsonc",
      [".*/mako/config"] = "dosini",
      [".*/kitty/*.conf"] = "bash",
      [".*/hypr/.*%.conf"] = "hyprlang",
      ["%.env%.[%w_.-]+"] = "dotenv",
    },
  })

  add("git_config")

  if have("hypr") then
    add("hyprlang")
  end

  if have("fish") then
    add("fish")
  end

  if have("rofi") or have("wofi") then
    add("rasi")
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-treesitter/nvim-treesitter",
  opts = function(_, opts)
    local function add(lang)
      if type(opts.ensure_installed) == "table" then
        table.insert(opts.ensure_installed, lang)
      end
    end

    vim.filetype.add({
      extension = { rasi = "rasi", rofi = "rasi", wofi = "rasi" },
      filename = {
        [".env"] = "dotenv",
        ["vifmrc"] = "vim",
      },
      pattern = {
        [".*/waybar/config"] = "jsonc",
        [".*/mako/config"] = "dosini",
        [".*/kitty/*.conf"] = "bash",
        [".*/hypr/.*%.conf"] = "hyprlang",
        ["%.env%.[%w_.-]+"] = "dotenv",
      },
    })

    add("git_config")

    if have("hypr") then
      add("hyprlang")
    end

    if have("fish") then
      add("fish")
    end

    if have("rofi") or have("wofi") then
      add("rasi")
    end
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
