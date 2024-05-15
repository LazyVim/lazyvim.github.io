# Swift

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
    { import = "lazyvim.plugins.extras.lang.swift" },
    { import = "plugins" },
  },
})
```

</details>

## Prerequisites

Some dependencies are not **yet** available in Mason and will need to be installed manually.

- [SwiftLint](https://github.com/realm/SwiftLint) - Swift linter
- [SwiftFormat](https://github.com/nicklockwood/SwiftFormat) - Swift formatter
- [xcode-build-server](https://github.com/SolaWing/xcode-build-server) - Integrates sourcekit-lsp (generic swift LSP) with xcodebuild via build server protocol
- [xcbeautify](https://github.com/cpisciotta/xcbeautify) - Makes xcodebuild output pretty

## Included plugins

Below you can find a list of included plugins and their default settings.

:::caution
You don't need to copy the default settings to your config.
They are only shown here for reference.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)

Add syntax highlighting for Swift

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = function(_, opts)
  opts.ensure_installed = opts.ensure_installed or {}
  vim.list_extend(opts.ensure_installed, { "swift" })
end
```

</TabItem>

<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-treesitter/nvim-treesitter",
  opts = function(_, opts)
    opts.ensure_installed = opts.ensure_installed or {}
    vim.list_extend(opts.ensure_installed, { "swift" })
  end,
}
```

</TabItem>

</Tabs>

### [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)

Configure LSP for Swift

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  servers = {
    sourcekit = {
      root_dir = function(filename, _)
        local util = require("lspconfig.util")
        return util.root_pattern("buildServer.json")(filename)
          or util.root_pattern("*.xcodeproj", "*.xcworkspace")(filename)
          or util.find_git_ancestor(filename)
          or util.root_pattern("Package.swift")(filename)
      end,
    },
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
      source_kit = {
        root_dir = function(filename, _)
          local util = require("lspconfig.util")
          return util.root_pattern("buildServer.json")(filename)
            or util.root_pattern("*.xcodeproj", "*.xcworkspace")(filename)
            or util.find_git_ancestor(filename)
            or util.root_pattern("Package.swift")(filename)
        end,
      },
    },
  },
}
```

</TabItem>

</Tabs>

### [nvim-lint](https://github.com/mfussenegger/nvim-lint)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  linters_by_ft = {}
    swift = { "swiftlint" },
  },
}
```

</TabItem>

<TabItem value="code" label="Full Spec">

```lua
{
  "mfussenegger/nvim-lint",
  optional = true,
  opts = {
    linters_by_ft = {
      swift = { "swiftlint" },
    },
  },
}
```

</TabItem>

</Tabs>

### [conform.nvim](https://github.com/stevearc/conform.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  formatters_by_ft = {
    swift = { "swiftformat" },
  },
}
```

</TabItem>

<TabItem value="code" label="Full Spec">

```lua
{
  "stevearc/conform.nvim",
  optional = true,
  opts = {
    formatters_by_ft = {
      swift = { "swiftformat" },
    },
  },
}
```

</TabItem>

</Tabs>

### [xcodebuild.nvim](https://github.com/wojciech-kulik/xcodebuild.nvim)

Build, run, test, view logs for XCode Projects

<Tabs>

<TabItem value="code" label="Full Spec">

```lua
{
  "wojciech-kulik/xcodebuild.nvim",
  dependencies = {
    "nvim-telescope/telescope.nvim",
    "MunifTanjim/nui.nvim",
  },
  config = function()
    require("xcodebuild").setup({
      code_coverage = {
        enabled = true,
      },
    })

    vim.keymap.set("n", "<leader>xl", "<cmd>XcodebuildToggleLogs<cr>", { desc = "Toggle Xcodebuild Logs" })
    vim.keymap.set("n", "<leader>xb", "<cmd>XcodebuildBuild<cr>", { desc = "Build Project" })
    vim.keymap.set("n", "<leader>xr", "<cmd>XcodebuildBuildRun<cr>", { desc = "Build & Run Project" })
    vim.keymap.set("n", "<leader>xt", "<cmd>XcodebuildTest<cr>", { desc = "Run Tests" })
    vim.keymap.set("n", "<leader>xT", "<cmd>XcodebuildTestClass<cr>", { desc = "Run This Test Class" })
    vim.keymap.set("n", "<leader>X", "<cmd>XcodebuildPicker<cr>", { desc = "Show All Xcodebuild Actions" })
    vim.keymap.set("n", "<leader>xd", "<cmd>XcodebuildSelectDevice<cr>", { desc = "Select Device" })
    vim.keymap.set("n", "<leader>xp", "<cmd>XcodebuildSelectTestPlan<cr>", { desc = "Select Test Plan" })
    vim.keymap.set("n", "<leader>xc", "<cmd>XcodebuildToggleCodeCoverage<cr>", { desc = "Toggle Code Coverage" })
    vim.keymap.set(
      "n",
      "<leader>xC",
      "<cmd>XcodebuildShowCodeCoverageReport<cr>",
      { desc = "Show Code Coverage Report" }
    )
    vim.keymap.set("n", "<leader>xq", "<cmd>Telescope quickfix<cr>", { desc = "Show QuickFix List" })
  end,
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
