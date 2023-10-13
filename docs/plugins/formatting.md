# Formatting

**LazyVim** uses `conform.nvim` for formatting.

To make configuration easier, we added some extra options to `conform.nvim`:

- `opts.format`: extra options passed to `require("conform").format(options)`
- `opts.formatters`: instead of just adding new formatters, you can also override the default options for any formatter
- `opts.formatters[NAME].extra_args`: extra arguments passed to the formatter command.
  If you want to fully override the `args`, just use `args` instead of `extra_args`.

:::caution
Don't override `plugin.config` directly, since this **will** break LazyVim formatting.
:::

<!-- plugins:start -->

<!-- plugins:end -->
