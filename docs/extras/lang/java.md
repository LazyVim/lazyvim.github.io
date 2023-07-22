# `lang.java`

<!-- plugins:start -->

To use this, add it to your **lazy.nvim** imports:

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.lang.java" },
    { import = "plugins" },
  },
})
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)

 Add java to treesitter.


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  if type(opts.ensure_installed) == "table" then
    vim.list_extend(opts.ensure_installed, { "java" })
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
      vim.list_extend(opts.ensure_installed, { "java" })
    end
  end,
}
```

</TabItem>

</Tabs>

## [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)

 Set up lsp with mfussenegger/nvim-jdtls instead of nvim-lspconfig.


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  -- make sure mason installs the server
  servers = {
    jdtls = {
      -- stylua: ignore
      keys = {
        { "<leader>co", function() require("jdtls").organize_imports() end, desc = "Organize Imports", },
        { "<leader>cR", function() require("jdtls").rename_file() end, desc = "Rename File", },
        { "<leader>cxv", function() require("jdtls").extract_variable() end, desc = "Extract Variable", },
        { "<leader>cxv", function() require("jdtls").extract_variable({ visual = true }) end, mode = "v", desc = "Extract Variable", },
        { "<leader>cxc", function() require("jdtls").extract_constant() end, desc = "Extract Constant", },
        { "<leader>cxc", function() require("jdtls").extract_constant({ visual = true }) end, mode = "v", desc = "Extract Constant", },
        { "<leader>cxm", function() require("jdtls").extract_method({ visual = true }) end, mode = "v", desc = "Extract Method", },
      },
    },
  },
  setup = {
    -- Override the default jdtls server startup to use nvim-jdtls.
    jdtls = function()
      -- The lspconfig configuration for jdtls contains two useful items:
      -- 1. The list of filetypes on which to match.
      -- 2. Custom method for finding the root for a java project.
      local lsp_config = require("lspconfig.server_configurations.jdtls").default_config
      local find_java_project_root = lsp_config.root_dir
      local filetypes = lsp_config.filetypes

      -- Attach jdtls for the proper filetypes (i.e. java).
      -- Existing server will be reused if the root_dir matches.
      vim.api.nvim_create_autocmd("FileType", {
        group = vim.api.nvim_create_augroup("MyJdtls", { clear = true }),
        pattern = filetypes,
        callback = function()
          local fname = vim.api.nvim_buf_get_name(0)
          local root_dir = find_java_project_root(fname)
          local project_name = root_dir and vim.fs.basename(root_dir)
          local cmd = { "jdtls" }
          if project_name then
            local jdtls_cache_dir = vim.fs.joinpath(vim.fn.stdpath("cache"), "jdtls", project_name)
            vim.list_extend(cmd, {
              "-configuration",
              vim.fs.joinpath(jdtls_cache_dir, "config"),
              "-data",
              vim.fs.joinpath(jdtls_cache_dir, "workspace"),
            })
          end
          require("jdtls").start_or_attach({
            cmd = cmd,
            root_dir = root_dir,
          })
          require("which-key").register({ c = { x = { name = "Extract" } } }, { prefix = "<leader>" })
        end,
      })

      return true -- avoid duplicate servers
    end,
  },
}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "neovim/nvim-lspconfig",
  dependencies = { "folke/which-key.nvim", "mfussenegger/nvim-jdtls" },
  opts = {
    -- make sure mason installs the server
    servers = {
      jdtls = {
        -- stylua: ignore
        keys = {
          { "<leader>co", function() require("jdtls").organize_imports() end, desc = "Organize Imports", },
          { "<leader>cR", function() require("jdtls").rename_file() end, desc = "Rename File", },
          { "<leader>cxv", function() require("jdtls").extract_variable() end, desc = "Extract Variable", },
          { "<leader>cxv", function() require("jdtls").extract_variable({ visual = true }) end, mode = "v", desc = "Extract Variable", },
          { "<leader>cxc", function() require("jdtls").extract_constant() end, desc = "Extract Constant", },
          { "<leader>cxc", function() require("jdtls").extract_constant({ visual = true }) end, mode = "v", desc = "Extract Constant", },
          { "<leader>cxm", function() require("jdtls").extract_method({ visual = true }) end, mode = "v", desc = "Extract Method", },
        },
      },
    },
    setup = {
      -- Override the default jdtls server startup to use nvim-jdtls.
      jdtls = function()
        -- The lspconfig configuration for jdtls contains two useful items:
        -- 1. The list of filetypes on which to match.
        -- 2. Custom method for finding the root for a java project.
        local lsp_config = require("lspconfig.server_configurations.jdtls").default_config
        local find_java_project_root = lsp_config.root_dir
        local filetypes = lsp_config.filetypes

        -- Attach jdtls for the proper filetypes (i.e. java).
        -- Existing server will be reused if the root_dir matches.
        vim.api.nvim_create_autocmd("FileType", {
          group = vim.api.nvim_create_augroup("MyJdtls", { clear = true }),
          pattern = filetypes,
          callback = function()
            local fname = vim.api.nvim_buf_get_name(0)
            local root_dir = find_java_project_root(fname)
            local project_name = root_dir and vim.fs.basename(root_dir)
            local cmd = { "jdtls" }
            if project_name then
              local jdtls_cache_dir = vim.fs.joinpath(vim.fn.stdpath("cache"), "jdtls", project_name)
              vim.list_extend(cmd, {
                "-configuration",
                vim.fs.joinpath(jdtls_cache_dir, "config"),
                "-data",
                vim.fs.joinpath(jdtls_cache_dir, "workspace"),
              })
            end
            require("jdtls").start_or_attach({
              cmd = cmd,
              root_dir = root_dir,
            })
            require("which-key").register({ c = { x = { name = "Extract" } } }, { prefix = "<leader>" })
          end,
        })

        return true -- avoid duplicate servers
      end,
    },
  },
}
```

</TabItem>

</Tabs>

## [which-key.nvim](https://github.com/folke/which-key.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{ "folke/which-key.nvim", "mfussenegger/nvim-jdtls" }
```

</TabItem>

</Tabs>

## [nvim-jdtls](https://github.com/mfussenegger/nvim-jdtls)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
"mfussenegger/nvim-jdtls"
```

</TabItem>

</Tabs>

<!-- plugins:end -->
