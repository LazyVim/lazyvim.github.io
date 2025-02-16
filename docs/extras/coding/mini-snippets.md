# `Mini-snippets`

<!-- plugins:start -->

:::info
You can enable the extra with the `:LazyExtras` command.
Plugins marked as optional will only be configured if they are installed.
:::

### Options

Additional options for this extra can be configured in your [lua/config/options.lua](/configuration/general#options) file:

```lua title="lua/config/options.lua"
-- Set to `false` to prevent "non-lsp snippets"" from appearing inside completion windows
-- Motivation: Less clutter in completion windows and a more direct usage of snippits
vim.g.lazyvim_mini_snippets_in_completion = true

-- NOTE: Please also read:
-- https://github.com/echasnovski/mini.nvim/blob/main/readmes/mini-snippets.md#expand
-- :h MiniSnippets-session

-- Example override for your own config:
--[[
return {
{
"echasnovski/mini.snippets",
opts = function(_, opts)
-- By default, for opts.snippets, the extra for mini.snippets only adds gen_loader.from_lang()
-- This provides a sensible quickstart, integrating with friendly-snippets
-- and your own language-specific snippets
--
-- In order to change opts.snippets, replace the entire table inside your own opts

local snippets, config_path = require("mini.snippets"), vim.fn.stdpath("config")

opts.snippets = { -- override opts.snippets provided by extra...
-- Load custom file with global snippets first (order matters)
snippets.gen_loader.from_file(config_path .. "/snippets/global.json"),

-- Load snippets based on current language by reading files from
-- "snippets/" subdirectories from 'runtimepath' directories.
snippets.gen_loader.from_lang(), -- this is the default in the extra...
}
end,
},
}
--]]
```

Below you can find a list of included plugins and their default settings.

:::caution
You don't need to copy the default settings to your config.
They are only shown here for reference.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [mini.snippets](https://github.com/echasnovski/mini.snippets)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  ---@diagnostic disable-next-line: duplicate-set-field
  LazyVim.cmp.actions.snippet_stop = function() end -- by design, <esc> should not stop the session!
  ---@diagnostic disable-next-line: duplicate-set-field
  LazyVim.cmp.actions.snippet_forward = function()
    return jump("next")
  end

  local mini_snippets = require("mini.snippets")
  return {
    snippets = { mini_snippets.gen_loader.from_lang() },

    -- Following the behavior of vim.snippets,
    -- the intended usage of <esc> is to be able to temporarily exit into normal mode for quick edits.
    --
    -- If you'd rather stop the snippet on <esc>, activate the line below in your own config:
    -- mappings = { stop = "<esc>" }, -- <c-c> by default, see :h MiniSnippets-session

    expand = {
      select = function(snippets, insert)
        -- Close completion window on snippet select - vim.ui.select
        -- Needed to remove virtual text for fzf-lua and telescope, but not for mini.pick...
        local select = expand_select_override or MiniSnippets.default_select
        select(snippets, insert)
      end,
    },
  }
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "echasnovski/mini.snippets",
  event = "InsertEnter", -- don't depend on other plugins to load...
  dependencies = "rafamadriz/friendly-snippets",
  opts = function()
    ---@diagnostic disable-next-line: duplicate-set-field
    LazyVim.cmp.actions.snippet_stop = function() end -- by design, <esc> should not stop the session!
    ---@diagnostic disable-next-line: duplicate-set-field
    LazyVim.cmp.actions.snippet_forward = function()
      return jump("next")
    end

    local mini_snippets = require("mini.snippets")
    return {
      snippets = { mini_snippets.gen_loader.from_lang() },

      -- Following the behavior of vim.snippets,
      -- the intended usage of <esc> is to be able to temporarily exit into normal mode for quick edits.
      --
      -- If you'd rather stop the snippet on <esc>, activate the line below in your own config:
      -- mappings = { stop = "<esc>" }, -- <c-c> by default, see :h MiniSnippets-session

      expand = {
        select = function(snippets, insert)
          -- Close completion window on snippet select - vim.ui.select
          -- Needed to remove virtual text for fzf-lua and telescope, but not for mini.pick...
          local select = expand_select_override or MiniSnippets.default_select
          select(snippets, insert)
        end,
      },
    }
  end,
}
```

</TabItem>

</Tabs>

## [cmp-mini-snippets](https://github.com/abeldekat/cmp-mini-snippets)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "abeldekat/cmp-mini-snippets" }
```

</TabItem>

</Tabs>

## [nvim-cmp](https://github.com/hrsh7th/nvim-cmp) _(optional)_

 nvim-cmp integration


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  local cmp = require("cmp")
  local cmp_config = require("cmp.config")

  opts.snippet = {
    expand = function(args)
      expand_from_lsp(args.body)
      cmp.resubscribe({ "TextChangedI", "TextChangedP" })
      cmp_config.set_onetime({ sources = {} })
    end,
  }

  if include_in_completion then
    table.insert(opts.sources, { name = "mini_snippets" })
  else
    expand_select_override = function(snippets, insert)
      -- stylua: ignore
      if cmp.visible() then cmp.close() end
      MiniSnippets.default_select(snippets, insert)
    end
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "hrsh7th/nvim-cmp",
  optional = true,
  dependencies = include_in_completion and { "abeldekat/cmp-mini-snippets" } or nil,
  opts = function(_, opts)
    local cmp = require("cmp")
    local cmp_config = require("cmp.config")

    opts.snippet = {
      expand = function(args)
        expand_from_lsp(args.body)
        cmp.resubscribe({ "TextChangedI", "TextChangedP" })
        cmp_config.set_onetime({ sources = {} })
      end,
    }

    if include_in_completion then
      table.insert(opts.sources, { name = "mini_snippets" })
    else
      expand_select_override = function(snippets, insert)
        -- stylua: ignore
        if cmp.visible() then cmp.close() end
        MiniSnippets.default_select(snippets, insert)
      end
    end
  end,
  -- stylua: ignore
  -- counterpart to <tab> defined in cmp.mappings
  keys = include_in_completion and { { "<s-tab>", function() jump("prev") end, mode = "i" } } or nil,
}
```

</TabItem>

</Tabs>

## [blink.cmp](https://github.com/saghen/blink.cmp) _(optional)_

 blink.cmp integration


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  -- Return early
  if include_in_completion then
    opts.snippets = { preset = "mini_snippets" }
    return
  end

  -- Standalone --
  local blink = require("blink.cmp")
  expand_select_override = function(snippets, insert)
    -- Schedule, otherwise blink's virtual text is not removed on vim.ui.select
    blink.cancel()
    vim.schedule(function()
      MiniSnippets.default_select(snippets, insert)
    end)
  end
  --
  -- Blink performs a require on blink.cmp.sources.snippets.default
  -- By removing the source, that default engine will not be used
  opts.sources.default = vim.tbl_filter(function(source)
    return source ~= "snippets"
  end, opts.sources.default)
  opts.snippets = { -- need to repeat blink's preset here
    expand = function(snippet)
      expand_from_lsp(snippet)
      blink.resubscribe()
    end,
    active = function()
      return MiniSnippets.session.get(false) ~= nil
    end,
    jump = function(direction)
      jump(direction == -1 and "prev" or "next")
    end,
  }
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "saghen/blink.cmp",
  optional = true,
  opts = function(_, opts)
    -- Return early
    if include_in_completion then
      opts.snippets = { preset = "mini_snippets" }
      return
    end

    -- Standalone --
    local blink = require("blink.cmp")
    expand_select_override = function(snippets, insert)
      -- Schedule, otherwise blink's virtual text is not removed on vim.ui.select
      blink.cancel()
      vim.schedule(function()
        MiniSnippets.default_select(snippets, insert)
      end)
    end
    --
    -- Blink performs a require on blink.cmp.sources.snippets.default
    -- By removing the source, that default engine will not be used
    opts.sources.default = vim.tbl_filter(function(source)
      return source ~= "snippets"
    end, opts.sources.default)
    opts.snippets = { -- need to repeat blink's preset here
      expand = function(snippet)
        expand_from_lsp(snippet)
        blink.resubscribe()
      end,
      active = function()
        return MiniSnippets.session.get(false) ~= nil
      end,
      jump = function(direction)
        jump(direction == -1 and "prev" or "next")
      end,
    }
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
