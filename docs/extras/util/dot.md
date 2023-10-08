# `util.dot`

<!-- plugins:start -->

To use this, add it to your **lazy.nvim** imports:

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.util.dot" },
    { import = "plugins" },
  },
})
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)

 add some stuff to treesitter


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  local function add(lang)
    if type(opts.ensure_installed) ~= "table" then
      table.insert(opts.ensure_installed, lang)
    end
  end

  vim.filetype.add({
    extension = { rasi = "rasi" },
    pattern = {
      [".*/waybar/config"] = "jsonc",
      [".*/mako/config"] = "dosini",
      [".*/kitty/*.conf"] = "bash",
    },
  })

  add("git_config")

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
      if type(opts.ensure_installed) ~= "table" then
        table.insert(opts.ensure_installed, lang)
      end
    end

    vim.filetype.add({
      extension = { rasi = "rasi" },
      pattern = {
        [".*/waybar/config"] = "jsonc",
        [".*/mako/config"] = "dosini",
        [".*/kitty/*.conf"] = "bash",
      },
    })

    add("git_config")

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
