# `Dial`

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
    { import = "lazyvim.plugins.extras.editor.dial" },
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

## [dial.nvim](https://github.com/monaqa/dial.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  local augend = require("dial.augend")

  local logical_alias = augend.constant.new({
    elements = { "&&", "||" },
    word = false,
    cyclic = true,
  })

  local ordinal_numbers = augend.constant.new({
    -- elements through which we cycle. When we increment, we go down
    -- On decrement we go up
    elements = {
      "first",
      "second",
      "third",
      "fourth",
      "fifth",
      "sixth",
      "seventh",
      "eighth",
      "ninth",
      "tenth",
    },
    -- if true, it only matches strings with word boundary. firstDate wouldn't work for example
    word = false,
    -- do we cycle back and forth (tenth to first on increment, first to tenth on decrement).
    -- Otherwise nothing will happen when there are no further values
    cyclic = true,
  })

  local weekdays = augend.constant.new({
    elements = {
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    },
    word = true,
    cyclic = true,
  })

  local months = augend.constant.new({
    elements = {
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    },
    word = true,
    cyclic = true,
  })

  local capitalized_boolean = augend.constant.new({
    elements = {
      "True",
      "False",
    },
    word = true,
    cyclic = true,
  })

  return {
    dials_by_ft = {
      css = "css",
      javascript = "typescript",
      javascriptreact = "typescript",
      json = "json",
      lua = "lua",
      markdown = "markdown",
      python = "python",
      sass = "css",
      scss = "css",
      typescript = "typescript",
      typescriptreact = "typescript",
      yaml = "yaml",
    },
    groups = {
      default = {
        augend.integer.alias.decimal, -- nonnegative decimal number (0, 1, 2, 3, ...)
        augend.integer.alias.hex, -- nonnegative hex number  (0x01, 0x1a1f, etc.)
        augend.date.alias["%Y/%m/%d"], -- date (2022/02/19, etc.)
      },
      typescript = {
        augend.integer.alias.decimal, -- nonnegative and negative decimal number
        augend.constant.alias.bool, -- boolean value (true <-> false)
        logical_alias,
        augend.constant.new({ elements = { "let", "const" } }),
        ordinal_numbers,
        weekdays,
        months,
      },
      yaml = {
        augend.integer.alias.decimal, -- nonnegative and negative decimal number
        augend.constant.alias.bool, -- boolean value (true <-> false)
        ordinal_numbers,
      },
      css = {
        augend.integer.alias.decimal, -- nonnegative and negative decimal number
        augend.hexcolor.new({
          case = "lower",
        }),
        augend.hexcolor.new({
          case = "upper",
        }),
      },
      markdown = {
        augend.misc.alias.markdown_header,
        ordinal_numbers,
        weekdays,
        months,
      },
      json = {
        augend.integer.alias.decimal, -- nonnegative and negative decimal number
        augend.semver.alias.semver, -- versioning (v1.1.2)
      },
      lua = {
        augend.integer.alias.decimal, -- nonnegative and negative decimal number
        augend.constant.alias.bool, -- boolean value (true <-> false)
        augend.constant.new({
          elements = { "and", "or" },
          word = true, -- if false, "sand" is incremented into "sor", "doctor" into "doctand", etc.
          cyclic = true, -- "or" is incremented into "and".
        }),
        ordinal_numbers,
        weekdays,
        months,
      },
      python = {
        augend.integer.alias.decimal, -- nonnegative and negative decimal number
        capitalized_boolean,
        logical_alias,
        ordinal_numbers,
        weekdays,
        months,
      },
    },
  }
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "monaqa/dial.nvim",
  recommended = true,
  desc = "Increment and decrement numbers, dates, and more",
  -- stylua: ignore
  keys = {
    { "<C-a>", function() return M.dial(true) end, expr = true, desc = "Increment", mode = {"n", "v"} },
    { "<C-x>", function() return M.dial(false) end, expr = true, desc = "Decrement", mode = {"n", "v"} },
    { "g<C-a>", function() return M.dial(true, true) end, expr = true, desc = "Increment", mode = {"n", "v"} },
    { "g<C-x>", function() return M.dial(false, true) end, expr = true, desc = "Decrement", mode = {"n", "v"} },
  },
  opts = function()
    local augend = require("dial.augend")

    local logical_alias = augend.constant.new({
      elements = { "&&", "||" },
      word = false,
      cyclic = true,
    })

    local ordinal_numbers = augend.constant.new({
      -- elements through which we cycle. When we increment, we go down
      -- On decrement we go up
      elements = {
        "first",
        "second",
        "third",
        "fourth",
        "fifth",
        "sixth",
        "seventh",
        "eighth",
        "ninth",
        "tenth",
      },
      -- if true, it only matches strings with word boundary. firstDate wouldn't work for example
      word = false,
      -- do we cycle back and forth (tenth to first on increment, first to tenth on decrement).
      -- Otherwise nothing will happen when there are no further values
      cyclic = true,
    })

    local weekdays = augend.constant.new({
      elements = {
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      },
      word = true,
      cyclic = true,
    })

    local months = augend.constant.new({
      elements = {
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      },
      word = true,
      cyclic = true,
    })

    local capitalized_boolean = augend.constant.new({
      elements = {
        "True",
        "False",
      },
      word = true,
      cyclic = true,
    })

    return {
      dials_by_ft = {
        css = "css",
        javascript = "typescript",
        javascriptreact = "typescript",
        json = "json",
        lua = "lua",
        markdown = "markdown",
        python = "python",
        sass = "css",
        scss = "css",
        typescript = "typescript",
        typescriptreact = "typescript",
        yaml = "yaml",
      },
      groups = {
        default = {
          augend.integer.alias.decimal, -- nonnegative decimal number (0, 1, 2, 3, ...)
          augend.integer.alias.hex, -- nonnegative hex number  (0x01, 0x1a1f, etc.)
          augend.date.alias["%Y/%m/%d"], -- date (2022/02/19, etc.)
        },
        typescript = {
          augend.integer.alias.decimal, -- nonnegative and negative decimal number
          augend.constant.alias.bool, -- boolean value (true <-> false)
          logical_alias,
          augend.constant.new({ elements = { "let", "const" } }),
          ordinal_numbers,
          weekdays,
          months,
        },
        yaml = {
          augend.integer.alias.decimal, -- nonnegative and negative decimal number
          augend.constant.alias.bool, -- boolean value (true <-> false)
          ordinal_numbers,
        },
        css = {
          augend.integer.alias.decimal, -- nonnegative and negative decimal number
          augend.hexcolor.new({
            case = "lower",
          }),
          augend.hexcolor.new({
            case = "upper",
          }),
        },
        markdown = {
          augend.misc.alias.markdown_header,
          ordinal_numbers,
          weekdays,
          months,
        },
        json = {
          augend.integer.alias.decimal, -- nonnegative and negative decimal number
          augend.semver.alias.semver, -- versioning (v1.1.2)
        },
        lua = {
          augend.integer.alias.decimal, -- nonnegative and negative decimal number
          augend.constant.alias.bool, -- boolean value (true <-> false)
          augend.constant.new({
            elements = { "and", "or" },
            word = true, -- if false, "sand" is incremented into "sor", "doctor" into "doctand", etc.
            cyclic = true, -- "or" is incremented into "and".
          }),
          ordinal_numbers,
          weekdays,
          months,
        },
        python = {
          augend.integer.alias.decimal, -- nonnegative and negative decimal number
          capitalized_boolean,
          logical_alias,
          ordinal_numbers,
          weekdays,
          months,
        },
      },
    }
  end,
  config = function(_, opts)
    require("dial.config").augends:register_group(opts.groups)
    vim.g.dials_by_ft = opts.dials_by_ft
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
