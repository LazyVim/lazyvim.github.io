---
sidebar_position: 3
---

# ⌨️ Keymaps

**LazyVim** uses [which-key.nvim](https://github.com/folke/which-key.nvim) to help you remember your
keymaps. Just press any key like `<space>` and you'll see a popup with all
possible keymaps starting with `<space>`.

![image](https://user-images.githubusercontent.com/292349/211862473-1ff5ee7a-3bb9-4782-a9f6-014f0e5d4474.png)

<!-- keymaps:start -->

## General

| Key | Description | Mode |
| --- | --- | --- |
| ``<C-h>`` | Go to left window | **n** |
| ``<C-j>`` | Go to lower window | **n** |
| ``<C-k>`` | Go to upper window | **n** |
| ``<C-l>`` | Go to right window | **n** |
| ``<C-Up>`` | Increase window height | **n** |
| ``<C-Down>`` | Decrease window height | **n** |
| ``<C-Left>`` | Decrease window width | **n** |
| ``<C-Right>`` | Increase window width | **n** |
| ``<A-j>`` | Move down | **n**, **v**, **i** |
| ``<A-k>`` | Move up | **n**, **v**, **i** |
| ``<S-h>`` | Prev buffer | **n** |
| ``<S-l>`` | Next buffer | **n** |
| ``[b`` | Prev buffer | **n** |
| ``]b`` | Next buffer | **n** |
| ``<leader>bb`` | Switch to Other Buffer | **n** |
| ``<leader>` `` | Switch to Other Buffer | **n** |
| ``<esc>`` | Escape and clear hlsearch | **i**, **n** |
| ``<leader>ur`` | Redraw / clear hlsearch / diff update | **n** |
| ``n`` | Next search result | **n**, **x**, **o** |
| ``N`` | Prev search result | **n**, **x**, **o** |
| ``<C-s>`` | Save file | **i**, **v**, **n**, **s** |
| ``<leader>l`` | Lazy | **n** |
| ``<leader>fn`` | New File | **n** |
| ``<leader>xl`` | Open Location List | **n** |
| ``<leader>xq`` | Open Quickfix List | **n** |
| ``<leader>uf`` | Toggle format on Save | **n** |
| ``<leader>us`` | Toggle Spelling | **n** |
| ``<leader>uw`` | Toggle Word Wrap | **n** |
| ``<leader>ul`` | Toggle Line Numbers | **n** |
| ``<leader>ud`` | Toggle Diagnostics | **n** |
| ``<leader>uc`` | Toggle Conceal | **n** |
| ``<leader>gg`` | Lazygit (root dir) | **n** |
| ``<leader>gG`` | Lazygit (cwd) | **n** |
| ``<leader>qq`` | Quit all | **n** |
| ``<leader>ui`` | Inspect Pos | **n** |
| ``<leader>ft`` | Terminal (root dir) | **n** |
| ``<leader>fT`` | Terminal (cwd) | **n** |
| ``<esc><esc>`` | Enter Normal Mode | **t** |
| ``<leader>ww`` | Other window | **n** |
| ``<leader>wd`` | Delete window | **n** |
| ``<leader>w-`` | Split window below | **n** |
| ``<leader>w\|`` | Split window right | **n** |
| ``<leader>-`` | Split window below | **n** |
| ``<leader>\|`` | Split window right | **n** |
| ``<leader><tab>l`` | Last Tab | **n** |
| ``<leader><tab>f`` | First Tab | **n** |
| ``<leader><tab><tab>`` | New Tab | **n** |
| ``<leader><tab>]`` | Next Tab | **n** |
| ``<leader><tab>d`` | Close Tab | **n** |
| ``<leader><tab>[`` | Previous Tab | **n** |

## LSP

| Key | Description | Mode |
| --- | --- | --- |
| ``<leader>cd`` | Line Diagnostics | **n** |
| ``<leader>cl`` | Lsp Info | **n** |
| ``gd`` | Goto Definition | **n** |
| ``gr`` | References | **n** |
| ``gD`` | Goto Declaration | **n** |
| ``gI`` | Goto Implementation | **n** |
| ``gt`` | Goto Type Definition | **n** |
| ``K`` | Hover | **n** |
| ``gK`` | Signature Help | **n** |
| ``<c-k>`` | Signature Help | **i** |
| ``]d`` | Next Diagnostic | **n** |
| ``[d`` | Prev Diagnostic | **n** |
| ``]e`` | Next Error | **n** |
| ``[e`` | Prev Error | **n** |
| ``]w`` | Next Warning | **n** |
| ``[w`` | Prev Warning | **n** |
| ``<leader>ca`` | Code Action | **n**, **v** |
| ``<leader>cf`` | Format Document | **n** |
| ``<leader>cf`` | Format Range | **v** |
| ``<leader>cr`` | Rename | **n** |

## Plugins

| Key | Description | Mode |
| --- | --- | --- |
| ``<leader>cm`` | [mason.nvim](https://github.com/williamboman/mason.nvim.git) Mason | **n** |
| ``<leader>bd`` | [mini.bufremove](https://github.com/echasnovski/mini.bufremove.git) Delete Buffer | **n** |
| ``<leader>bD`` | [mini.bufremove](https://github.com/echasnovski/mini.bufremove.git) Delete Buffer (Force) | **n** |
| ``gza`` | [mini.surround](https://github.com/echasnovski/mini.surround.git) Add surrounding | **n**, **v** |
| ``gzd`` | [mini.surround](https://github.com/echasnovski/mini.surround.git) Delete surrounding | **n** |
| ``gzf`` | [mini.surround](https://github.com/echasnovski/mini.surround.git) Find right surrounding | **n** |
| ``gzF`` | [mini.surround](https://github.com/echasnovski/mini.surround.git) Find left surrounding | **n** |
| ``gzh`` | [mini.surround](https://github.com/echasnovski/mini.surround.git) Highlight surrounding | **n** |
| ``gzr`` | [mini.surround](https://github.com/echasnovski/mini.surround.git) Replace surrounding | **n** |
| ``gzn`` | [mini.surround](https://github.com/echasnovski/mini.surround.git) Update `MiniSurround.config.n_lines` | **n** |
| ``<leader>fe`` | [neo-tree.nvim](https://github.com/nvim-neo-tree/neo-tree.nvim.git) Explorer NeoTree (root dir) | **n** |
| ``<leader>fE`` | [neo-tree.nvim](https://github.com/nvim-neo-tree/neo-tree.nvim.git) Explorer NeoTree (cwd) | **n** |
| ``<leader>e`` | [neo-tree.nvim](https://github.com/nvim-neo-tree/neo-tree.nvim.git) Explorer NeoTree (root dir) | **n** |
| ``<leader>E`` | [neo-tree.nvim](https://github.com/nvim-neo-tree/neo-tree.nvim.git) Explorer NeoTree (cwd) | **n** |
| ``<S-Enter>`` | [noice.nvim](https://github.com/folke/noice.nvim.git) Redirect Cmdline | **c** |
| ``<leader>snl`` | [noice.nvim](https://github.com/folke/noice.nvim.git) Noice Last Message | **n** |
| ``<leader>snh`` | [noice.nvim](https://github.com/folke/noice.nvim.git) Noice History | **n** |
| ``<leader>sna`` | [noice.nvim](https://github.com/folke/noice.nvim.git) Noice All | **n** |
| ``<c-f>`` | [noice.nvim](https://github.com/folke/noice.nvim.git) Scroll forward | **n** |
| ``<c-b>`` | [noice.nvim](https://github.com/folke/noice.nvim.git) Scroll backward | **n** |
| ``<leader>un`` | [nvim-notify](https://github.com/rcarriga/nvim-notify.git) Delete all Notifications | **n** |
| ``<leader>sr`` | [nvim-spectre](https://github.com/windwp/nvim-spectre.git) Replace in files (Spectre) | **n** |
| ``<c-space>`` | [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter.git) Increment selection | **n** |
| ``<bs>`` | [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter.git) Schrink selection | **x** |
| ``<leader>qs`` | [persistence.nvim](https://github.com/folke/persistence.nvim.git) Restore Session | **n** |
| ``<leader>ql`` | [persistence.nvim](https://github.com/folke/persistence.nvim.git) Restore Last Session | **n** |
| ``<leader>qd`` | [persistence.nvim](https://github.com/folke/persistence.nvim.git) Don't Save Current Session | **n** |
| ``<leader>,`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) Switch Buffer | **n** |
| ``<leader>/`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) Find in Files (Grep) | **n** |
| ``<leader>:`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) Command History | **n** |
| ``<leader><space>`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) Find Files (root dir) | **n** |
| ``<leader>fb`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) Buffers | **n** |
| ``<leader>ff`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) Find Files (root dir) | **n** |
| ``<leader>fF`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) Find Files (cwd) | **n** |
| ``<leader>fr`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) Recent | **n** |
| ``<leader>gc`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) commits | **n** |
| ``<leader>gs`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) status | **n** |
| ``<leader>sa`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) Auto Commands | **n** |
| ``<leader>sb`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) Buffer | **n** |
| ``<leader>sc`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) Command History | **n** |
| ``<leader>sC`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) Commands | **n** |
| ``<leader>sd`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) Diagnostics | **n** |
| ``<leader>sg`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) Grep (root dir) | **n** |
| ``<leader>sG`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) Grep (cwd) | **n** |
| ``<leader>sh`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) Help Pages | **n** |
| ``<leader>sH`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) Search Highlight Groups | **n** |
| ``<leader>sk`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) Key Maps | **n** |
| ``<leader>sM`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) Man Pages | **n** |
| ``<leader>sm`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) Jump to Mark | **n** |
| ``<leader>so`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) Options | **n** |
| ``<leader>sw`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) Word (root dir) | **n** |
| ``<leader>sW`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) Word (cwd) | **n** |
| ``<leader>uC`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) Colorscheme with preview | **n** |
| ``<leader>ss`` | [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git) Goto Symbol | **n** |
| ``]t`` | [todo-comments.nvim](https://github.com/folke/todo-comments.nvim.git) Next todo comment | **n** |
| ``[t`` | [todo-comments.nvim](https://github.com/folke/todo-comments.nvim.git) Previous todo comment | **n** |
| ``<leader>xt`` | [todo-comments.nvim](https://github.com/folke/todo-comments.nvim.git) Todo (Trouble) | **n** |
| ``<leader>xT`` | [todo-comments.nvim](https://github.com/folke/todo-comments.nvim.git) Todo/Fix/Fixme (Trouble) | **n** |
| ``<leader>st`` | [todo-comments.nvim](https://github.com/folke/todo-comments.nvim.git) Todo | **n** |
| ``<leader>xx`` | [trouble.nvim](https://github.com/folke/trouble.nvim.git) Document Diagnostics (Trouble) | **n** |
| ``<leader>xX`` | [trouble.nvim](https://github.com/folke/trouble.nvim.git) Workspace Diagnostics (Trouble) | **n** |
| ``]]`` | [vim-illuminate](https://github.com/RRethy/vim-illuminate.git) Next Reference | **n** |
| ``[[`` | [vim-illuminate](https://github.com/RRethy/vim-illuminate.git) Prev Reference | **n** |

<!-- keymaps:end -->
