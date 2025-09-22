# `Zig`

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

## [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = { ensure_installed = { "zig" } }
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "nvim-treesitter/nvim-treesitter",
  opts = { ensure_installed = { "zig" } },
}
```

</TabItem>

</Tabs>

## [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {
  servers = {
    zls = {},
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
      zls = {
        settings = {
          zls = {
            enable_snippets = true,  -- Enables snippet completions when the client supports them
            enable_argument_placeholders = true,  -- Enables function argument placeholder completions
            completion_label_details = true,  -- Shows function signature in completion results
            enable_build_on_save = nil,  -- Enables build-on-save diagnostics if a 'check' step is present
            build_on_save_args = {},  -- Arguments to pass when running build-on-save
            semantic_tokens = "full",  -- Level of semantic tokens (none, partial, full)
            inlay_hints_show_variable_type_hints = true,  -- Enables inlay hints for variable types
            inlay_hints_show_struct_literal_field_type = true,  -- Enables inlay hints for struct and union literal fields
            inlay_hints_show_parameter_name = true,  -- Enables inlay hints for parameter names
            inlay_hints_show_builtin = true,  -- Enables inlay hints for builtin functions
            inlay_hints_exclude_single_argument = true,  -- Disables inlay hints for single argument calls
            inlay_hints_hide_redundant_param_names = false,  -- Does not hide redundant parameter names
            inlay_hints_hide_redundant_param_names_last_token = false,  -- Does not hide redundant param names in complex expressions
            force_autofix = false,  -- Does not force auto-fix for unsupported editors
            warn_style = false,  -- Disables warnings for style guideline mismatches
            highlight_global_var_declarations = false,  -- Does not highlight global variable declarations
            skip_std_references = false,  -- Includes standard library references in searches
            prefer_ast_check_as_child_process = true,  -- Uses 'zig ast-check' as a child process if preferred
            builtin_path = nil,  -- Path to 'builtin' module if overridden
            zig_lib_path = nil,  -- Custom Zig library path if specified
            zig_exe_path = nil,  -- Path to the Zig executable if specified
            build_runner_path = nil,  -- Custom build runner path
            global_cache_path = nil,  -- Path for Zig's cache directory
          },
        },
      },
    },
  },
}
```

</TabItem>

</Tabs>

## [neotest-zig](https://github.com/lawrence-laz/neotest-zig)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "lawrence-laz/neotest-zig",
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
    ["neotest-zig"] = {},
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
    "lawrence-laz/neotest-zig",
  },
  opts = {
    adapters = {
      ["neotest-zig"] = {},
    },
  },
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
