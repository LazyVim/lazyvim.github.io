# DAP Neovim Lua Adapter

<!-- plugins:start -->

:::info
You can enable the extra with the `:LazyExtras` command.
Plugins marked as optional will only be configured if they are installed.
:::

Below you can find a list of included plugins and their default settings.

:::caution
You don't need to copy the default settings to your config.
They are only shown here for reference.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [nvim-dap](https://github.com/mfussenegger/nvim-dap)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "mfussenegger/nvim-dap",
  dependencies = {
    {
      "jbyuki/one-small-step-for-vimkind",
      -- stylua: ignore
      config = function()
        local dap = require("dap")
        dap.adapters.nlua = function(callback, conf)
          local adapter = {
            type = "server",
            host = conf.host or "127.0.0.1",
            port = conf.port or 8086,
          }
          if conf.start_neovim then
            local dap_run = dap.run
            dap.run = function(c)
              adapter.port = c.port
              adapter.host = c.host
            end
            require("osv").run_this()
            dap.run = dap_run
          end
          callback(adapter)
        end
        dap.configurations.lua = {
          {
            type = "nlua",
            request = "attach",
            name = "Run this file",
            start_neovim = {},
          },
          {
            type = "nlua",
            request = "attach",
            name = "Attach to running Neovim instance (port = 8086)",
            port = 8086,
          },
        }
      end,
    },
  },
}
```

</TabItem>

</Tabs>

## [one-small-step-for-vimkind](https://github.com/jbyuki/one-small-step-for-vimkind)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "jbyuki/one-small-step-for-vimkind",
  -- stylua: ignore
  config = function()
    local dap = require("dap")
    dap.adapters.nlua = function(callback, conf)
      local adapter = {
        type = "server",
        host = conf.host or "127.0.0.1",
        port = conf.port or 8086,
      }
      if conf.start_neovim then
        local dap_run = dap.run
        dap.run = function(c)
          adapter.port = c.port
          adapter.host = c.host
        end
        require("osv").run_this()
        dap.run = dap_run
      end
      callback(adapter)
    end
    dap.configurations.lua = {
      {
        type = "nlua",
        request = "attach",
        name = "Run this file",
        start_neovim = {},
      },
      {
        type = "nlua",
        request = "attach",
        name = "Attach to running Neovim instance (port = 8086)",
        port = 8086,
      },
    }
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
