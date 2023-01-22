# LSP

<!-- plugins:start -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)

 lspconfig


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  -- options for vim.diagnostic.config()
  diagnostics = {
    underline = true,
    update_in_insert = false,
    virtual_text = { spacing = 4, prefix = "●" },
    severity_sort = true,
  },
  -- Automatically format on save
  autoformat = true,
  -- options for vim.lsp.buf.format
  -- `bufnr` and `filter` is handled by the LazyVim formatter,
  -- but can be also overriden when specified
  format = {
    formatting_options = nil,
    timeout_ms = nil,
  },
  -- LSP Server Settings
  ---@type lspconfig.options
  servers = {
    jsonls = {},
    sumneko_lua = {
      -- mason = false, -- set to false if you don't want this server to be installed with mason
      settings = {
        Lua = {
          workspace = {
            checkThirdParty = false,
          },
          completion = {
            callSnippet = "Replace",
          },
        },
      },
    },
  },
  -- you can do any additional lsp server setup here
  -- return true if you don't want this server to be setup with lspconfig
  ---@type table<string, fun(server:string, opts:_.lspconfig.options):boolean?>
  setup = {
    -- example to setup with typescript.nvim
    -- tsserver = function(_, opts)
    --   require("typescript").setup({ server = opts })
    --   return true
    -- end,
    -- Specify * to use this function as a fallback for any server
    -- ["*"] = function(server, opts) end,
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "neovim/nvim-lspconfig",
  event = "BufReadPre",
  dependencies = {
    { "folke/neoconf.nvim", cmd = "Neoconf", config = true },
    { "folke/neodev.nvim", opts = { experimental = { pathStrict = true } } },
    "mason.nvim",
    "williamboman/mason-lspconfig.nvim",
    "hrsh7th/cmp-nvim-lsp",
  },
  ---@class PluginLspOpts
  opts = {
    -- options for vim.diagnostic.config()
    diagnostics = {
      underline = true,
      update_in_insert = false,
      virtual_text = { spacing = 4, prefix = "●" },
      severity_sort = true,
    },
    -- Automatically format on save
    autoformat = true,
    -- options for vim.lsp.buf.format
    -- `bufnr` and `filter` is handled by the LazyVim formatter,
    -- but can be also overriden when specified
    format = {
      formatting_options = nil,
      timeout_ms = nil,
    },
    -- LSP Server Settings
    ---@type lspconfig.options
    servers = {
      jsonls = {},
      sumneko_lua = {
        -- mason = false, -- set to false if you don't want this server to be installed with mason
        settings = {
          Lua = {
            workspace = {
              checkThirdParty = false,
            },
            completion = {
              callSnippet = "Replace",
            },
          },
        },
      },
    },
    -- you can do any additional lsp server setup here
    -- return true if you don't want this server to be setup with lspconfig
    ---@type table<string, fun(server:string, opts:_.lspconfig.options):boolean?>
    setup = {
      -- example to setup with typescript.nvim
      -- tsserver = function(_, opts)
      --   require("typescript").setup({ server = opts })
      --   return true
      -- end,
      -- Specify * to use this function as a fallback for any server
      -- ["*"] = function(server, opts) end,
    },
  },
  ---@param opts PluginLspOpts
  config = function(plugin, opts)
    if plugin.servers then
      require("lazyvim.util").deprecate("lspconfig.servers", "lspconfig.opts.servers")
    end
    if plugin.setup_server then
      require("lazyvim.util").deprecate("lspconfig.setup_server", "lspconfig.opts.setup[SERVER]")
    end

    -- setup autoformat
    require("lazyvim.plugins.lsp.format").autoformat = opts.autoformat
    -- setup formatting and keymaps
    require("lazyvim.util").on_attach(function(client, buffer)
      require("lazyvim.plugins.lsp.format").on_attach(client, buffer)
      require("lazyvim.plugins.lsp.keymaps").on_attach(client, buffer)
    end)

    -- diagnostics
    for name, icon in pairs(require("lazyvim.config").icons.diagnostics) do
      name = "DiagnosticSign" .. name
      vim.fn.sign_define(name, { text = icon, texthl = name, numhl = "" })
    end
    vim.diagnostic.config(opts.diagnostics)

    local servers = opts.servers
    local capabilities = require("cmp_nvim_lsp").default_capabilities(vim.lsp.protocol.make_client_capabilities())

    local function setup(server)
      local server_opts = servers[server] or {}
      server_opts.capabilities = capabilities
      if opts.setup[server] then
        if opts.setup[server](server, server_opts) then
          return
        end
      elseif opts.setup["*"] then
        if opts.setup["*"](server, server_opts) then
          return
        end
      end
      require("lspconfig")[server].setup(server_opts)
    end

    local mlsp = require("mason-lspconfig")
    local available = mlsp.get_available_servers()

    local ensure_installed = {} ---@type string[]
    for server, server_opts in pairs(servers) do
      if server_opts then
        server_opts = server_opts == true and {} or server_opts
        -- run manual setup if mason=false or if this is a server that cannot be installed with mason-lspconfig
        if server_opts.mason == false or not vim.tbl_contains(available, server) then
          setup(server)
        else
          ensure_installed[#ensure_installed + 1] = server
        end
      end
    end

    require("mason-lspconfig").setup({ ensure_installed = ensure_installed })
    require("mason-lspconfig").setup_handlers({ setup })
  end,
}
```

</TabItem>

</Tabs>

## [neoconf.nvim](https://github.com/folke/neoconf.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "folke/neoconf.nvim", cmd = "Neoconf", config = true }
```

</TabItem>

</Tabs>

## [neodev.nvim](https://github.com/folke/neodev.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { experimental = { pathStrict = true } }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "folke/neodev.nvim", opts = { experimental = { pathStrict = true } } }
```

</TabItem>

</Tabs>

## [mason-lspconfig.nvim](https://github.com/williamboman/mason-lspconfig.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
"williamboman/mason-lspconfig.nvim"
```

</TabItem>

</Tabs>

## [cmp-nvim-lsp](https://github.com/hrsh7th/cmp-nvim-lsp)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
"hrsh7th/cmp-nvim-lsp"
```

</TabItem>

</Tabs>

## [null-ls.nvim](https://github.com/jose-elias-alvarez/null-ls.nvim)

 formatters


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  local nls = require("null-ls")
  return {
    sources = {
      -- nls.builtins.formatting.prettierd,
      nls.builtins.formatting.stylua,
      nls.builtins.diagnostics.flake8,
    },
  }
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "jose-elias-alvarez/null-ls.nvim",
  event = "BufReadPre",
  dependencies = { "mason.nvim" },
  opts = function()
    local nls = require("null-ls")
    return {
      sources = {
        -- nls.builtins.formatting.prettierd,
        nls.builtins.formatting.stylua,
        nls.builtins.diagnostics.flake8,
      },
    }
  end,
}
```

</TabItem>

</Tabs>

## [mason.nvim](https://github.com/williamboman/mason.nvim)

 cmdline tools and lsp servers


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  ensure_installed = {
    "stylua",
    "shellcheck",
    "shfmt",
    "flake8",
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{

  "williamboman/mason.nvim",
  cmd = "Mason",
  keys = { { "<leader>cm", "<cmd>Mason<cr>", desc = "Mason" } },
  opts = {
    ensure_installed = {
      "stylua",
      "shellcheck",
      "shfmt",
      "flake8",
    },
  },
  ---@param opts MasonSettings | {ensure_installed: string[]}
  config = function(plugin, opts)
    if plugin.ensure_installed then
      require("lazyvim.util").deprecate("treesitter.ensure_installed", "treesitter.opts.ensure_installed")
    end
    require("mason").setup(opts)
    local mr = require("mason-registry")
    for _, tool in ipairs(opts.ensure_installed) do
      local p = mr.get_package(tool)
      if not p:is_installed() then
        p:install()
      end
    end
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
