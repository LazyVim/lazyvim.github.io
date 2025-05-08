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
        enable_inlay_hints = true,
        enable_argument_placeholders = false,
        enable_build_on_save = false,
        enable_snippets = false,
        warn_style = true,
        highlight_global_var_declarations = false,
        semantic_tokens = "full", -- full, partial, ???
        inlay_hints_show_variable_type_hints = true,
        inlay_hints_show_struct_literal_field_type = false,
        inlay_hints_show_parameter_name = false,
        inlay_hints_show_builtin = false,
        inlay_hints_exclude_single_argument = false,
        inlay_hints_hide_redundant_param_names = false,
        inlay_hints_hide_redundant_param_names_last_token = false,
        force_autofix = true,
        prefer_ast_check_as_child_process = true,
        completion_label_details = true,
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
