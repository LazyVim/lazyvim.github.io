# Rust

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
    { import = "lazyvim.plugins.extras.lang.rust" },
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

## [nvim-cmp](https://github.com/hrsh7th/nvim-cmp)

 Extend auto completion


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  opts.sources = opts.sources or {}
  table.insert(opts.sources, { name = "crates" })
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "hrsh7th/nvim-cmp",
  dependencies = {
    {
      "Saecki/crates.nvim",
      event = { "BufRead Cargo.toml" },
      opts = {
        src = {
          cmp = { enabled = true },
        },
      },
    },
  },
  ---@param opts cmp.ConfigSchema
  opts = function(_, opts)
    opts.sources = opts.sources or {}
    table.insert(opts.sources, { name = "crates" })
  end,
}
```

</TabItem>

</Tabs>

## [crates.nvim](https://github.com/Saecki/crates.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  src = {
    cmp = { enabled = true },
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "Saecki/crates.nvim",
  event = { "BufRead Cargo.toml" },
  opts = {
    src = {
      cmp = { enabled = true },
    },
  },
}
```

</TabItem>

</Tabs>

## [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)

 Add Rust & related to treesitter


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  if type(opts.ensure_installed) == "table" then
    vim.list_extend(opts.ensure_installed, { "ron", "rust", "toml" })
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-treesitter/nvim-treesitter",
  opts = function(_, opts)
    if type(opts.ensure_installed) == "table" then
      vim.list_extend(opts.ensure_installed, { "ron", "rust", "toml" })
    end
  end,
}
```

</TabItem>

</Tabs>

## [rust-tools.nvim](https://github.com/simrat39/rust-tools.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function()
  local ok, mason_registry = pcall(require, "mason-registry")
  local adapter ---@type any
  if ok then
    -- rust tools configuration for debugging support
    local codelldb = mason_registry.get_package("codelldb")
    local extension_path = codelldb:get_install_path() .. "/extension/"
    local codelldb_path = extension_path .. "adapter/codelldb"
    local liblldb_path = ""
    if vim.loop.os_uname().sysname:find("Windows") then
      liblldb_path = extension_path .. "lldb\\bin\\liblldb.dll"
    elseif vim.fn.has("mac") == 1 then
      liblldb_path = extension_path .. "lldb/lib/liblldb.dylib"
    else
      liblldb_path = extension_path .. "lldb/lib/liblldb.so"
    end
    adapter = require("rust-tools.dap").get_codelldb_adapter(codelldb_path, liblldb_path)
  end
  return {
    dap = {
      adapter = adapter,
    },
    tools = {
      on_initialized = function()
        vim.cmd([[
              augroup RustLSP
                autocmd CursorHold                      *.rs silent! lua vim.lsp.buf.document_highlight()
                autocmd CursorMoved,InsertEnter         *.rs silent! lua vim.lsp.buf.clear_references()
                autocmd BufEnter,CursorHold,InsertLeave *.rs silent! lua vim.lsp.codelens.refresh()
              augroup END
            ]])
      end,
    },
  }
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "simrat39/rust-tools.nvim",
  lazy = true,
  opts = function()
    local ok, mason_registry = pcall(require, "mason-registry")
    local adapter ---@type any
    if ok then
      -- rust tools configuration for debugging support
      local codelldb = mason_registry.get_package("codelldb")
      local extension_path = codelldb:get_install_path() .. "/extension/"
      local codelldb_path = extension_path .. "adapter/codelldb"
      local liblldb_path = ""
      if vim.loop.os_uname().sysname:find("Windows") then
        liblldb_path = extension_path .. "lldb\\bin\\liblldb.dll"
      elseif vim.fn.has("mac") == 1 then
        liblldb_path = extension_path .. "lldb/lib/liblldb.dylib"
      else
        liblldb_path = extension_path .. "lldb/lib/liblldb.so"
      end
      adapter = require("rust-tools.dap").get_codelldb_adapter(codelldb_path, liblldb_path)
    end
    return {
      dap = {
        adapter = adapter,
      },
      tools = {
        on_initialized = function()
          vim.cmd([[
                augroup RustLSP
                  autocmd CursorHold                      *.rs silent! lua vim.lsp.buf.document_highlight()
                  autocmd CursorMoved,InsertEnter         *.rs silent! lua vim.lsp.buf.clear_references()
                  autocmd BufEnter,CursorHold,InsertLeave *.rs silent! lua vim.lsp.codelens.refresh()
                augroup END
              ]])
        end,
      },
    }
  end,
  config = function() end,
}
```

</TabItem>

</Tabs>

## [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)

 Correctly setup lspconfig for Rust 🚀


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  servers = {
    -- Ensure mason installs the server
    rust_analyzer = {
      keys = {
        { "K", "<cmd>RustHoverActions<cr>", desc = "Hover Actions (Rust)" },
        { "<leader>cR", "<cmd>RustCodeAction<cr>", desc = "Code Action (Rust)" },
        { "<leader>dr", "<cmd>RustDebuggables<cr>", desc = "Run Debuggables (Rust)" },
      },
      settings = {
        ["rust-analyzer"] = {
          cargo = {
            allFeatures = true,
            loadOutDirsFromCheck = true,
            runBuildScripts = true,
          },
          -- Add clippy lints for Rust.
          checkOnSave = {
            allFeatures = true,
            command = "clippy",
            extraArgs = { "--no-deps" },
          },
          procMacro = {
            enable = true,
            ignored = {
              ["async-trait"] = { "async_trait" },
              ["napi-derive"] = { "napi" },
              ["async-recursion"] = { "async_recursion" },
            },
          },
        },
      },
    },
    taplo = {
      keys = {
        {
          "K",
          function()
            if vim.fn.expand("%:t") == "Cargo.toml" and require("crates").popup_available() then
              require("crates").show_popup()
            else
              vim.lsp.buf.hover()
            end
          end,
          desc = "Show Crate Documentation",
        },
      },
    },
  },
  setup = {
    rust_analyzer = function(_, opts)
      local rust_tools_opts = require("lazyvim.util").opts("rust-tools.nvim")
      require("rust-tools").setup(vim.tbl_deep_extend("force", rust_tools_opts or {}, { server = opts }))
      return true
    end,
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
      -- Ensure mason installs the server
      rust_analyzer = {
        keys = {
          { "K", "<cmd>RustHoverActions<cr>", desc = "Hover Actions (Rust)" },
          { "<leader>cR", "<cmd>RustCodeAction<cr>", desc = "Code Action (Rust)" },
          { "<leader>dr", "<cmd>RustDebuggables<cr>", desc = "Run Debuggables (Rust)" },
        },
        settings = {
          ["rust-analyzer"] = {
            cargo = {
              allFeatures = true,
              loadOutDirsFromCheck = true,
              runBuildScripts = true,
            },
            -- Add clippy lints for Rust.
            checkOnSave = {
              allFeatures = true,
              command = "clippy",
              extraArgs = { "--no-deps" },
            },
            procMacro = {
              enable = true,
              ignored = {
                ["async-trait"] = { "async_trait" },
                ["napi-derive"] = { "napi" },
                ["async-recursion"] = { "async_recursion" },
              },
            },
          },
        },
      },
      taplo = {
        keys = {
          {
            "K",
            function()
              if vim.fn.expand("%:t") == "Cargo.toml" and require("crates").popup_available() then
                require("crates").show_popup()
              else
                vim.lsp.buf.hover()
              end
            end,
            desc = "Show Crate Documentation",
          },
        },
      },
    },
    setup = {
      rust_analyzer = function(_, opts)
        local rust_tools_opts = require("lazyvim.util").opts("rust-tools.nvim")
        require("rust-tools").setup(vim.tbl_deep_extend("force", rust_tools_opts or {}, { server = opts }))
        return true
      end,
    },
  },
}
```

</TabItem>

</Tabs>

## [neotest-rust](https://github.com/rouge8/neotest-rust)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "rouge8/neotest-rust",
}
```

</TabItem>

</Tabs>

## [mason.nvim](https://github.com/williamboman/mason.nvim) _(optional)_

 Ensure Rust debugger is installed


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  if type(opts.ensure_installed) == "table" then
    vim.list_extend(opts.ensure_installed, { "codelldb" })
  end
end
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "williamboman/mason.nvim",
  optional = true,
  opts = function(_, opts)
    if type(opts.ensure_installed) == "table" then
      vim.list_extend(opts.ensure_installed, { "codelldb" })
    end
  end,
}
```

</TabItem>

</Tabs>

## [neotest](https://github.com/nvim-neotest/neotest) _(optional)_

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  adapters = {
    ["neotest-rust"] = {},
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-neotest/neotest",
  optional = true,
  dependencies = {
    "rouge8/neotest-rust",
  },
  opts = {
    adapters = {
      ["neotest-rust"] = {},
    },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
