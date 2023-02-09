---
sidebar_position: 6
---

# Tips

## Disable autoformat for some buffers

If you want to disable autoformat for a certain buffer, then
set `vim.b.autoformat = false` for that buffer.

```lua title=lua/config/autocmds.lua
-- Disable autoformat for lua files
vim.api.nvim_create_autocmd({ "FileType" }, {
  pattern = { "lua" },
  callback = function()
    vim.b.autoformat = false
  end,
})
```

If you change your mind you can do `<leader>uf` to enable autoformat
anyway for that buffer.
