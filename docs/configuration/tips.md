---
sidebar_position: 7
---

# Tips

## Navigating around multiple buffers

- Use `H` and `L` if the buffer you want to go to is visually close to where you are
- Otherwise, if the buffer is open, use `<leader>,`
- For other files, use `<leader><space>`
- Close buffers you no longer need with `<leader>bd`
- `<leader>ss` to quickly jump to a function in the buffer you're on
- `<c-o>`, `<c-i>` and `gd` to navigate the code
- You can pin buffers with `<leader>bp` and delete all non pinned buffers with `<leader>bP`
- Add `TODO`s in files you want to work on in future but don't need now and delete their buffers, git will track them

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
