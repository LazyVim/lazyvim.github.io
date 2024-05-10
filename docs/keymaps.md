---
sidebar_position: 3
---

# ⌨️ Keymaps

**LazyVim** uses [which-key.nvim](https://github.com/folke/which-key.nvim) to help you remember your
keymaps. Just press any key like `<space>` and you'll see a popup with all
possible keymaps starting with `<space>`.

![image](https://user-images.githubusercontent.com/292349/211862473-1ff5ee7a-3bb9-4782-a9f6-014f0e5d4474.png)

- default `<leader>` is `<space>`
- default `<localleader>` is `\`

<!-- keymaps:start -->

## General

| Key                                               | Description                           | Mode                       |
| ------------------------------------------------- | ------------------------------------- | -------------------------- |
| <code>&lt;C-h&gt;</code>                          | Go to Left Window                     | **n**, **t**               |
| <code>&lt;C-j&gt;</code>                          | Go to Lower Window                    | **n**, **t**               |
| <code>&lt;C-k&gt;</code>                          | Go to Upper Window                    | **n**, **t**               |
| <code>&lt;C-l&gt;</code>                          | Go to Right Window                    | **n**, **t**               |
| <code>&lt;C-Up&gt;</code>                         | Increase Window Height                | **n**                      |
| <code>&lt;C-Down&gt;</code>                       | Decrease Window Height                | **n**                      |
| <code>&lt;C-Left&gt;</code>                       | Decrease Window Width                 | **n**                      |
| <code>&lt;C-Right&gt;</code>                      | Increase Window Width                 | **n**                      |
| <code>&lt;A-j&gt;</code>                          | Move Down                             | **n**, **i**, **v**        |
| <code>&lt;A-k&gt;</code>                          | Move Up                               | **n**, **i**, **v**        |
| <code>&lt;S-h&gt;</code>                          | Prev Buffer                           | **n**                      |
| <code>&lt;S-l&gt;</code>                          | Next Buffer                           | **n**                      |
| <code>[b</code>                                   | Prev Buffer                           | **n**                      |
| <code>]b</code>                                   | Next Buffer                           | **n**                      |
| <code>&lt;leader&gt;bb</code>                     | Switch to Other Buffer                | **n**                      |
| <code>&lt;leader&gt;`</code>                      | Switch to Other Buffer                | **n**                      |
| <code>&lt;esc&gt;</code>                          | Escape and Clear hlsearch             | **i**, **n**               |
| <code>&lt;leader&gt;ur</code>                     | Redraw / Clear hlsearch / Diff Update | **n**                      |
| <code>n</code>                                    | Next Search Result                    | **n**, **x**, **o**        |
| <code>N</code>                                    | Prev Search Result                    | **n**, **x**, **o**        |
| <code>&lt;C-s&gt;</code>                          | Save File                             | **i**, **x**, **n**, **s** |
| <code>&lt;leader&gt;K</code>                      | Keywordprg                            | **n**                      |
| <code>&lt;leader&gt;l</code>                      | Lazy                                  | **n**                      |
| <code>&lt;leader&gt;fn</code>                     | New File                              | **n**                      |
| <code>&lt;leader&gt;xl</code>                     | Location List                         | **n**                      |
| <code>&lt;leader&gt;xq</code>                     | Quickfix List                         | **n**                      |
| <code>[q</code>                                   | Previous Quickfix                     | **n**                      |
| <code>]q</code>                                   | Next Quickfix                         | **n**                      |
| <code>&lt;leader&gt;cf</code>                     | Format                                | **n**, **v**               |
| <code>&lt;leader&gt;cd</code>                     | Line Diagnostics                      | **n**                      |
| <code>]d</code>                                   | Next Diagnostic                       | **n**                      |
| <code>[d</code>                                   | Prev Diagnostic                       | **n**                      |
| <code>]e</code>                                   | Next Error                            | **n**                      |
| <code>[e</code>                                   | Prev Error                            | **n**                      |
| <code>]w</code>                                   | Next Warning                          | **n**                      |
| <code>[w</code>                                   | Prev Warning                          | **n**                      |
| <code>&lt;leader&gt;uf</code>                     | Toggle Auto Format (Global)           | **n**                      |
| <code>&lt;leader&gt;uF</code>                     | Toggle Auto Format (Buffer)           | **n**                      |
| <code>&lt;leader&gt;us</code>                     | Toggle Spelling                       | **n**                      |
| <code>&lt;leader&gt;uw</code>                     | Toggle Word Wrap                      | **n**                      |
| <code>&lt;leader&gt;uL</code>                     | Toggle Relative Line Numbers          | **n**                      |
| <code>&lt;leader&gt;ul</code>                     | Toggle Line Numbers                   | **n**                      |
| <code>&lt;leader&gt;ud</code>                     | Toggle Diagnostics                    | **n**                      |
| <code>&lt;leader&gt;uc</code>                     | Toggle Conceal                        | **n**                      |
| <code>&lt;leader&gt;uh</code>                     | Toggle Inlay Hints                    | **n**                      |
| <code>&lt;leader&gt;uT</code>                     | Toggle Treesitter Highlight           | **n**                      |
| <code>&lt;leader&gt;ub</code>                     | Toggle Background                     | **n**                      |
| <code>&lt;leader&gt;gg</code>                     | Lazygit (Root Dir)                    | **n**                      |
| <code>&lt;leader&gt;gG</code>                     | Lazygit (cwd)                         | **n**                      |
| <code>&lt;leader&gt;gb</code>                     | Git Blame Line                        | **n**                      |
| <code>&lt;leader&gt;gf</code>                     | Lazygit Current File History          | **n**                      |
| <code>&lt;leader&gt;qq</code>                     | Quit All                              | **n**                      |
| <code>&lt;leader&gt;ui</code>                     | Inspect Pos                           | **n**                      |
| <code>&lt;leader&gt;L</code>                      | LazyVim Changelog                     | **n**                      |
| <code>&lt;leader&gt;ft</code>                     | Terminal (Root Dir)                   | **n**                      |
| <code>&lt;leader&gt;fT</code>                     | Terminal (cwd)                        | **n**                      |
| <code>&lt;c-/&gt;</code>                          | Terminal (Root Dir)                   | **n**                      |
| <code>&lt;c-\_&gt;</code>                         | which_key_ignore                      | **n**, **t**               |
| <code>&lt;esc&gt;&lt;esc&gt;</code>               | Enter Normal Mode                     | **t**                      |
| <code>&lt;C-/&gt;</code>                          | Hide Terminal                         | **t**                      |
| <code>&lt;leader&gt;ww</code>                     | Other Window                          | **n**                      |
| <code>&lt;leader&gt;wd</code>                     | Delete Window                         | **n**                      |
| <code>&lt;leader&gt;w-</code>                     | Split Window Below                    | **n**                      |
| <code>&lt;leader&gt;w&vert;</code>                | Split Window Right                    | **n**                      |
| <code>&lt;leader&gt;-</code>                      | Split Window Below                    | **n**                      |
| <code>&lt;leader&gt;&vert;</code>                 | Split Window Right                    | **n**                      |
| <code>&lt;leader&gt;&lt;tab&gt;l</code>           | Last Tab                              | **n**                      |
| <code>&lt;leader&gt;&lt;tab&gt;f</code>           | First Tab                             | **n**                      |
| <code>&lt;leader&gt;&lt;tab&gt;&lt;tab&gt;</code> | New Tab                               | **n**                      |
| <code>&lt;leader&gt;&lt;tab&gt;]</code>           | Next Tab                              | **n**                      |
| <code>&lt;leader&gt;&lt;tab&gt;d</code>           | Close Tab                             | **n**                      |
| <code>&lt;leader&gt;&lt;tab&gt;[</code>           | Previous Tab                          | **n**                      |

## LSP

| Key                           | Description                | Mode         |
| ----------------------------- | -------------------------- | ------------ |
| <code>&lt;leader&gt;cl</code> | Lsp Info                   | **n**        |
| <code>gd</code>               | Goto Definition            | **n**        |
| <code>gr</code>               | References                 | **n**        |
| <code>gD</code>               | Goto Declaration           | **n**        |
| <code>gI</code>               | Goto Implementation        | **n**        |
| <code>gy</code>               | Goto T[y]pe Definition     | **n**        |
| <code>K</code>                | Hover                      | **n**        |
| <code>gK</code>               | Signature Help             | **n**        |
| <code>&lt;c-k&gt;</code>      | Signature Help             | **i**        |
| <code>&lt;leader&gt;ca</code> | Code Action                | **n**, **v** |
| <code>&lt;leader&gt;cc</code> | Run Codelens               | **n**, **v** |
| <code>&lt;leader&gt;cC</code> | Refresh & Display Codelens | **n**        |
| <code>&lt;leader&gt;cA</code> | Source Action              | **n**        |
| <code>&lt;leader&gt;cr</code> | Rename                     | **n**        |

## [bufferline.nvim](https://github.com/akinsho/bufferline.nvim.git)

| Key                           | Description                 | Mode  |
| ----------------------------- | --------------------------- | ----- |
| <code>&lt;leader&gt;bl</code> | Delete Buffers to the Left  | **n** |
| <code>&lt;leader&gt;bo</code> | Delete Other Buffers        | **n** |
| <code>&lt;leader&gt;bp</code> | Toggle Pin                  | **n** |
| <code>&lt;leader&gt;bP</code> | Delete Non-Pinned Buffers   | **n** |
| <code>&lt;leader&gt;br</code> | Delete Buffers to the Right | **n** |
| <code>[b</code>               | Prev Buffer                 | **n** |
| <code>]b</code>               | Next Buffer                 | **n** |
| <code>&lt;S-h&gt;</code>      | Prev Buffer                 | **n** |
| <code>&lt;S-l&gt;</code>      | Next Buffer                 | **n** |

## [conform.nvim](https://github.com/stevearc/conform.nvim.git)

| Key                           | Description           | Mode         |
| ----------------------------- | --------------------- | ------------ |
| <code>&lt;leader&gt;cF</code> | Format Injected Langs | **n**, **v** |

## [flash.nvim](https://github.com/folke/flash.nvim.git)

| Key                      | Description         | Mode                |
| ------------------------ | ------------------- | ------------------- |
| <code>&lt;c-s&gt;</code> | Toggle Flash Search | **c**               |
| <code>r</code>           | Remote Flash        | **o**               |
| <code>R</code>           | Treesitter Search   | **o**, **x**        |
| <code>s</code>           | Flash               | **n**, **o**, **x** |
| <code>S</code>           | Flash Treesitter    | **n**, **o**, **x** |

## [mason.nvim](https://github.com/williamboman/mason.nvim.git)

| Key                           | Description | Mode  |
| ----------------------------- | ----------- | ----- |
| <code>&lt;leader&gt;cm</code> | Mason       | **n** |

## [mini.bufremove](https://github.com/echasnovski/mini.bufremove.git)

| Key                           | Description           | Mode  |
| ----------------------------- | --------------------- | ----- |
| <code>&lt;leader&gt;bd</code> | Delete Buffer         | **n** |
| <code>&lt;leader&gt;bD</code> | Delete Buffer (Force) | **n** |

## [mini.pairs](https://github.com/echasnovski/mini.pairs.git)

| Key                           | Description       | Mode  |
| ----------------------------- | ----------------- | ----- |
| <code>&lt;leader&gt;up</code> | Toggle Auto Pairs | **n** |

## [mini.surround](https://github.com/echasnovski/mini.surround.git)

| Key              | Description                          | Mode         |
| ---------------- | ------------------------------------ | ------------ |
| <code>gsa</code> | Add Surrounding                      | **n**, **v** |
| <code>gsd</code> | Delete Surrounding                   | **n**        |
| <code>gsf</code> | Find Right Surrounding               | **n**        |
| <code>gsF</code> | Find Left Surrounding                | **n**        |
| <code>gsh</code> | Highlight Surrounding                | **n**        |
| <code>gsn</code> | Update `MiniSurround.config.n_lines` | **n**        |
| <code>gsr</code> | Replace Surrounding                  | **n**        |

## [neo-tree.nvim](https://github.com/nvim-neo-tree/neo-tree.nvim.git)

| Key                           | Description                 | Mode  |
| ----------------------------- | --------------------------- | ----- |
| <code>&lt;leader&gt;be</code> | Buffer Explorer             | **n** |
| <code>&lt;leader&gt;e</code>  | Explorer NeoTree (Root Dir) | **n** |
| <code>&lt;leader&gt;E</code>  | Explorer NeoTree (cwd)      | **n** |
| <code>&lt;leader&gt;fe</code> | Explorer NeoTree (Root Dir) | **n** |
| <code>&lt;leader&gt;fE</code> | Explorer NeoTree (cwd)      | **n** |
| <code>&lt;leader&gt;ge</code> | Git Explorer                | **n** |

## [noice.nvim](https://github.com/folke/noice.nvim.git)

| Key                            | Description        | Mode                |
| ------------------------------ | ------------------ | ------------------- |
| <code>&lt;c-b&gt;</code>       | Scroll Backward    | **n**, **i**, **s** |
| <code>&lt;c-f&gt;</code>       | Scroll Forward     | **n**, **i**, **s** |
| <code>&lt;leader&gt;sna</code> | Noice All          | **n**               |
| <code>&lt;leader&gt;snd</code> | Dismiss All        | **n**               |
| <code>&lt;leader&gt;snh</code> | Noice History      | **n**               |
| <code>&lt;leader&gt;snl</code> | Noice Last Message | **n**               |
| <code>&lt;S-Enter&gt;</code>   | Redirect Cmdline   | **c**               |

## [nvim-notify](https://github.com/rcarriga/nvim-notify.git)

| Key                           | Description               | Mode  |
| ----------------------------- | ------------------------- | ----- |
| <code>&lt;leader&gt;un</code> | Dismiss All Notifications | **n** |

## [nvim-spectre](https://github.com/nvim-pack/nvim-spectre.git)

| Key                           | Description                | Mode  |
| ----------------------------- | -------------------------- | ----- |
| <code>&lt;leader&gt;sr</code> | Replace in Files (Spectre) | **n** |

## [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter.git)

| Key                          | Description         | Mode  |
| ---------------------------- | ------------------- | ----- |
| <code>&lt;bs&gt;</code>      | Decrement Selection | **x** |
| <code>&lt;c-space&gt;</code> | Increment Selection | **n** |

## [nvim-treesitter-context](https://github.com/nvim-treesitter/nvim-treesitter-context.git)

| Key                           | Description               | Mode  |
| ----------------------------- | ------------------------- | ----- |
| <code>&lt;leader&gt;ut</code> | Toggle Treesitter Context | **n** |

## [persistence.nvim](https://github.com/folke/persistence.nvim.git)

| Key                           | Description                | Mode  |
| ----------------------------- | -------------------------- | ----- |
| <code>&lt;leader&gt;qd</code> | Don't Save Current Session | **n** |
| <code>&lt;leader&gt;ql</code> | Restore Last Session       | **n** |
| <code>&lt;leader&gt;qs</code> | Restore Session            | **n** |

## [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git)

| Key                                      | Description              | Mode  |
| ---------------------------------------- | ------------------------ | ----- |
| <code>&lt;leader&gt;&lt;space&gt;</code> | Find Files (Root Dir)    | **n** |
| <code>&lt;leader&gt;,</code>             | Switch Buffer            | **n** |
| <code>&lt;leader&gt;/</code>             | Grep (Root Dir)          | **n** |
| <code>&lt;leader&gt;:</code>             | Command History          | **n** |
| <code>&lt;leader&gt;fb</code>            | Buffers                  | **n** |
| <code>&lt;leader&gt;fc</code>            | Find Config File         | **n** |
| <code>&lt;leader&gt;ff</code>            | Find Files (Root Dir)    | **n** |
| <code>&lt;leader&gt;fF</code>            | Find Files (cwd)         | **n** |
| <code>&lt;leader&gt;fg</code>            | Find Files (git-files)   | **n** |
| <code>&lt;leader&gt;fr</code>            | Recent                   | **n** |
| <code>&lt;leader&gt;fR</code>            | Recent (cwd)             | **n** |
| <code>&lt;leader&gt;gc</code>            | Commits                  | **n** |
| <code>&lt;leader&gt;gs</code>            | Status                   | **n** |
| <code>&lt;leader&gt;s"</code>            | Registers                | **n** |
| <code>&lt;leader&gt;sa</code>            | Auto Commands            | **n** |
| <code>&lt;leader&gt;sb</code>            | Buffer                   | **n** |
| <code>&lt;leader&gt;sc</code>            | Command History          | **n** |
| <code>&lt;leader&gt;sC</code>            | Commands                 | **n** |
| <code>&lt;leader&gt;sd</code>            | Document Diagnostics     | **n** |
| <code>&lt;leader&gt;sD</code>            | Workspace Diagnostics    | **n** |
| <code>&lt;leader&gt;sg</code>            | Grep (Root Dir)          | **n** |
| <code>&lt;leader&gt;sG</code>            | Grep (cwd)               | **n** |
| <code>&lt;leader&gt;sh</code>            | Help Pages               | **n** |
| <code>&lt;leader&gt;sH</code>            | Search Highlight Groups  | **n** |
| <code>&lt;leader&gt;sk</code>            | Key Maps                 | **n** |
| <code>&lt;leader&gt;sm</code>            | Jump to Mark             | **n** |
| <code>&lt;leader&gt;sM</code>            | Man Pages                | **n** |
| <code>&lt;leader&gt;so</code>            | Options                  | **n** |
| <code>&lt;leader&gt;sR</code>            | Resume                   | **n** |
| <code>&lt;leader&gt;ss</code>            | Goto Symbol              | **n** |
| <code>&lt;leader&gt;sS</code>            | Goto Symbol (Workspace)  | **n** |
| <code>&lt;leader&gt;sw</code>            | Word (Root Dir)          | **n** |
| <code>&lt;leader&gt;sW</code>            | Word (cwd)               | **n** |
| <code>&lt;leader&gt;sw</code>            | Selection (Root Dir)     | **v** |
| <code>&lt;leader&gt;sW</code>            | Selection (cwd)          | **v** |
| <code>&lt;leader&gt;uC</code>            | Colorscheme with Preview | **n** |

## [todo-comments.nvim](https://github.com/folke/todo-comments.nvim.git)

| Key                           | Description              | Mode  |
| ----------------------------- | ------------------------ | ----- |
| <code>&lt;leader&gt;st</code> | Todo                     | **n** |
| <code>&lt;leader&gt;sT</code> | Todo/Fix/Fixme           | **n** |
| <code>&lt;leader&gt;xt</code> | Todo (Trouble)           | **n** |
| <code>&lt;leader&gt;xT</code> | Todo/Fix/Fixme (Trouble) | **n** |
| <code>[t</code>               | Previous Todo Comment    | **n** |
| <code>]t</code>               | Next Todo Comment        | **n** |

## [trouble.nvim](https://github.com/folke/trouble.nvim.git)

| Key                           | Description                     | Mode  |
| ----------------------------- | ------------------------------- | ----- |
| <code>&lt;leader&gt;xL</code> | Location List (Trouble)         | **n** |
| <code>&lt;leader&gt;xQ</code> | Quickfix List (Trouble)         | **n** |
| <code>&lt;leader&gt;xx</code> | Document Diagnostics (Trouble)  | **n** |
| <code>&lt;leader&gt;xX</code> | Workspace Diagnostics (Trouble) | **n** |
| <code>[q</code>               | Previous Trouble/Quickfix Item  | **n** |
| <code>]q</code>               | Next Trouble/Quickfix Item      | **n** |

## [vim-illuminate](https://github.com/RRethy/vim-illuminate.git)

| Key             | Description    | Mode  |
| --------------- | -------------- | ----- |
| <code>[[</code> | Prev Reference | **n** |
| <code>]]</code> | Next Reference | **n** |

## [yanky.nvim](https://github.com/gbprod/yanky.nvim.git)

Part of [lazyvim.plugins.extras.coding.yanky](/extras/coding/yanky)

| Key                          | Description                           | Mode         |
| ---------------------------- | ------------------------------------- | ------------ |
| <code>&lt;leader&gt;p</code> | Open Yank History                     | **n**        |
| <code>&lt;p</code>           | Put and Indent Left                   | **n**        |
| <code>&lt;P</code>           | Put Before and Indent Left            | **n**        |
| <code>=p</code>              | Put After Applying a Filter           | **n**        |
| <code>=P</code>              | Put Before Applying a Filter          | **n**        |
| <code>&gt;p</code>           | Put and Indent Right                  | **n**        |
| <code>&gt;P</code>           | Put Before and Indent Right           | **n**        |
| <code>[p</code>              | Put Indented Before Cursor (Linewise) | **n**        |
| <code>[P</code>              | Put Indented Before Cursor (Linewise) | **n**        |
| <code>[y</code>              | Cycle Forward Through Yank History    | **n**        |
| <code>]p</code>              | Put Indented After Cursor (Linewise)  | **n**        |
| <code>]P</code>              | Put Indented After Cursor (Linewise)  | **n**        |
| <code>]y</code>              | Cycle Backward Through Yank History   | **n**        |
| <code>gp</code>              | Put Yanked Text After Selection       | **n**, **x** |
| <code>gP</code>              | Put Yanked Text Before Selection      | **n**, **x** |
| <code>p</code>               | Put Yanked Text After Cursor          | **n**, **x** |
| <code>P</code>               | Put Yanked Text Before Cursor         | **n**, **x** |
| <code>y</code>               | Yank Text                             | **n**, **x** |

## [nvim-dap](https://github.com/mfussenegger/nvim-dap.git)

Part of [lazyvim.plugins.extras.dap.core](/extras/dap/core)

| Key                           | Description             | Mode  |
| ----------------------------- | ----------------------- | ----- |
| <code>&lt;leader&gt;da</code> | Run with Args           | **n** |
| <code>&lt;leader&gt;db</code> | Toggle Breakpoint       | **n** |
| <code>&lt;leader&gt;dB</code> | Breakpoint Condition    | **n** |
| <code>&lt;leader&gt;dc</code> | Continue                | **n** |
| <code>&lt;leader&gt;dC</code> | Run to Cursor           | **n** |
| <code>&lt;leader&gt;dg</code> | Go to Line (No Execute) | **n** |
| <code>&lt;leader&gt;di</code> | Step Into               | **n** |
| <code>&lt;leader&gt;dj</code> | Down                    | **n** |
| <code>&lt;leader&gt;dk</code> | Up                      | **n** |
| <code>&lt;leader&gt;dl</code> | Run Last                | **n** |
| <code>&lt;leader&gt;do</code> | Step Out                | **n** |
| <code>&lt;leader&gt;dO</code> | Step Over               | **n** |
| <code>&lt;leader&gt;dp</code> | Pause                   | **n** |
| <code>&lt;leader&gt;dr</code> | Toggle REPL             | **n** |
| <code>&lt;leader&gt;ds</code> | Session                 | **n** |
| <code>&lt;leader&gt;dt</code> | Terminate               | **n** |
| <code>&lt;leader&gt;dw</code> | Widgets                 | **n** |

## [nvim-dap-ui](https://github.com/rcarriga/nvim-dap-ui.git)

Part of [lazyvim.plugins.extras.dap.core](/extras/dap/core)

| Key                           | Description | Mode         |
| ----------------------------- | ----------- | ------------ |
| <code>&lt;leader&gt;de</code> | Eval        | **n**, **v** |
| <code>&lt;leader&gt;du</code> | Dap UI      | **n**        |

## [aerial.nvim](https://github.com/stevearc/aerial.nvim.git)

Part of [lazyvim.plugins.extras.editor.aerial](/extras/editor/aerial)

| Key                           | Description      | Mode  |
| ----------------------------- | ---------------- | ----- |
| <code>&lt;leader&gt;cs</code> | Aerial (Symbols) | **n** |

## [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim.git)

Part of [lazyvim.plugins.extras.editor.aerial](/extras/editor/aerial)

| Key                           | Description          | Mode  |
| ----------------------------- | -------------------- | ----- |
| <code>&lt;leader&gt;ss</code> | Goto Symbol (Aerial) | **n** |

## [dial.nvim](https://github.com/monaqa/dial.nvim.git)

Part of [lazyvim.plugins.extras.editor.dial](/extras/editor/dial)

| Key                       | Description | Mode         |
| ------------------------- | ----------- | ------------ |
| <code>&lt;C-a&gt;</code>  | Increment   | **n**, **v** |
| <code>&lt;C-x&gt;</code>  | Decrement   | **n**, **v** |
| <code>g&lt;C-a&gt;</code> | Increment   | **n**, **v** |
| <code>g&lt;C-x&gt;</code> | Decrement   | **n**, **v** |

## [harpoon](https://github.com/ThePrimeagen/harpoon.git)

Part of [lazyvim.plugins.extras.editor.harpoon2](/extras/editor/harpoon2)

| Key                          | Description        | Mode  |
| ---------------------------- | ------------------ | ----- |
| <code>&lt;leader&gt;1</code> | Harpoon to File 1  | **n** |
| <code>&lt;leader&gt;2</code> | Harpoon to File 2  | **n** |
| <code>&lt;leader&gt;3</code> | Harpoon to File 3  | **n** |
| <code>&lt;leader&gt;4</code> | Harpoon to File 4  | **n** |
| <code>&lt;leader&gt;5</code> | Harpoon to File 5  | **n** |
| <code>&lt;leader&gt;h</code> | Harpoon Quick Menu | **n** |
| <code>&lt;leader&gt;H</code> | Harpoon File       | **n** |

## [flit.nvim](https://github.com/ggandor/flit.nvim.git)

Part of [lazyvim.plugins.extras.editor.leap](/extras/editor/leap)

| Key            | Description | Mode                |
| -------------- | ----------- | ------------------- |
| <code>f</code> | f           | **n**, **o**, **x** |
| <code>F</code> | F           | **n**, **o**, **x** |
| <code>t</code> | t           | **n**, **o**, **x** |
| <code>T</code> | T           | **n**, **o**, **x** |

## [leap.nvim](https://github.com/ggandor/leap.nvim.git)

Part of [lazyvim.plugins.extras.editor.leap](/extras/editor/leap)

| Key             | Description       | Mode                |
| --------------- | ----------------- | ------------------- |
| <code>gs</code> | Leap from Windows | **n**, **o**, **x** |
| <code>s</code>  | Leap Forward to   | **n**, **o**, **x** |
| <code>S</code>  | Leap Backward to  | **n**, **o**, **x** |

## [mini.diff](https://github.com/echasnovski/mini.diff.git)

Part of [lazyvim.plugins.extras.editor.mini-diff](/extras/editor/mini-diff)

| Key                           | Description              | Mode  |
| ----------------------------- | ------------------------ | ----- |
| <code>&lt;leader&gt;go</code> | Toggle mini.diff overlay | **n** |

## [mini.files](https://github.com/echasnovski/mini.files.git)

Part of [lazyvim.plugins.extras.editor.mini-files](/extras/editor/mini-files)

| Key                           | Description                                 | Mode  |
| ----------------------------- | ------------------------------------------- | ----- |
| <code>&lt;leader&gt;fm</code> | Open mini.files (Directory of Current File) | **n** |
| <code>&lt;leader&gt;fM</code> | Open mini.files (cwd)                       | **n** |

## [outline.nvim](https://github.com/hedyhli/outline.nvim.git)

Part of [lazyvim.plugins.extras.editor.outline](/extras/editor/outline)

| Key                           | Description    | Mode  |
| ----------------------------- | -------------- | ----- |
| <code>&lt;leader&gt;cs</code> | Toggle Outline | **n** |

## [trouble.nvim](https://github.com/folke/trouble.nvim.git)

Part of [lazyvim.plugins.extras.editor.trouble-v3](/extras/editor/trouble-v3)

| Key                           | Description                              | Mode  |
| ----------------------------- | ---------------------------------------- | ----- |
| <code>&lt;leader&gt;cs</code> | Symbols (Trouble)                        | **n** |
| <code>&lt;leader&gt;cS</code> | LSP references/definitions/... (Trouble) | **n** |
| <code>&lt;leader&gt;xL</code> | Location List (Trouble)                  | **n** |
| <code>&lt;leader&gt;xQ</code> | Quickfix List (Trouble)                  | **n** |
| <code>&lt;leader&gt;xx</code> | Diagnostics (Trouble)                    | **n** |
| <code>&lt;leader&gt;xX</code> | Buffer Diagnostics (Trouble)             | **n** |
| <code>[q</code>               | Previous Trouble/Quickfix Item           | **n** |

## [markdown-preview.nvim](https://github.com/iamcco/markdown-preview.nvim.git)

Part of [lazyvim.plugins.extras.lang.markdown](/extras/lang/markdown)

| Key                           | Description      | Mode  |
| ----------------------------- | ---------------- | ----- |
| <code>&lt;leader&gt;cp</code> | Markdown Preview | **n** |

## [nvim-dap-python](https://github.com/mfussenegger/nvim-dap-python.git)

Part of [lazyvim.plugins.extras.lang.python](/extras/lang/python)

| Key                            | Description  | Mode  |
| ------------------------------ | ------------ | ----- |
| <code>&lt;leader&gt;dPc</code> | Debug Class  | **n** |
| <code>&lt;leader&gt;dPt</code> | Debug Method | **n** |

## [venv-selector.nvim](https://github.com/linux-cultist/venv-selector.nvim.git)

Part of [lazyvim.plugins.extras.lang.python](/extras/lang/python)

| Key                           | Description       | Mode  |
| ----------------------------- | ----------------- | ----- |
| <code>&lt;leader&gt;cv</code> | Select VirtualEnv | **n** |

## [neotest](https://github.com/nvim-neotest/neotest.git)

Part of [lazyvim.plugins.extras.test.core](/extras/test/core)

| Key                           | Description         | Mode  |
| ----------------------------- | ------------------- | ----- |
| <code>&lt;leader&gt;tl</code> | Run Last            | **n** |
| <code>&lt;leader&gt;to</code> | Show Output         | **n** |
| <code>&lt;leader&gt;tO</code> | Toggle Output Panel | **n** |
| <code>&lt;leader&gt;tr</code> | Run Nearest         | **n** |
| <code>&lt;leader&gt;ts</code> | Toggle Summary      | **n** |
| <code>&lt;leader&gt;tS</code> | Stop                | **n** |
| <code>&lt;leader&gt;tt</code> | Run File            | **n** |
| <code>&lt;leader&gt;tT</code> | Run All Test Files  | **n** |

## [nvim-dap](https://github.com/mfussenegger/nvim-dap.git)

Part of [lazyvim.plugins.extras.test.core](/extras/test/core)

| Key                           | Description   | Mode  |
| ----------------------------- | ------------- | ----- |
| <code>&lt;leader&gt;td</code> | Debug Nearest | **n** |

## [edgy.nvim](https://github.com/folke/edgy.nvim.git)

Part of [lazyvim.plugins.extras.ui.edgy](/extras/ui/edgy)

| Key                           | Description        | Mode  |
| ----------------------------- | ------------------ | ----- |
| <code>&lt;leader&gt;ue</code> | Edgy Toggle        | **n** |
| <code>&lt;leader&gt;uE</code> | Edgy Select Window | **n** |

## [mason.nvim](https://github.com/williamboman/mason.nvim.git)

Part of [lazyvim.plugins.extras.util.gitui](/extras/util/gitui)

| Key                           | Description      | Mode  |
| ----------------------------- | ---------------- | ----- |
| <code>&lt;leader&gt;gg</code> | GitUi (Root Dir) | **n** |
| <code>&lt;leader&gt;gG</code> | GitUi (cwd)      | **n** |

## [project.nvim](https://github.com/ahmedkhalf/project.nvim.git)

Part of [lazyvim.plugins.extras.util.project](/extras/util/project)

| Key                           | Description | Mode  |
| ----------------------------- | ----------- | ----- |
| <code>&lt;leader&gt;fp</code> | Projects    | **n** |

## [xcodebuild.nvim](https://github.com/wojciech-kulik/xcodebuild.nvim)

Part of [lazyvim.plugins.extras.lang.swift](/extras/lang/swift)

| Key                           | Description                 | Mode  |
| ----------------------------- | --------------------------- | ----- |
| <code>&lt;leader&gt;xl</code> | Toggle Xcodebuild Logs      | **n** |
| <code>&lt;leader&gt;xb</code> | Build Project               | **n** |
| <code>&lt;leader&gt;xr</code> | Build & Run Project         | **n** |
| <code>&lt;leader&gt;xt</code> | Run Tests                   | **n** |
| <code>&lt;leader&gt;xT</code> | Run This Test Class         | **n** |
| <code>&lt;leader&gt;X</code>  | Show All Xcodebuild Actions | **n** |
| <code>&lt;leader&gt;xd</code> | Select Device               | **n** |
| <code>&lt;leader&gt;xp</code> | Select Test Plan            | **n** |
| <code>&lt;leader&gt;xc</code> | Toggle Code Coverage        | **n** |
| <code>&lt;leader&gt;xC</code> | Toggle Code Coverage Report | **n** |
| <code>&lt;leader&gt;xq</code> | Show QuickFix List          | **n** |

<!-- keymaps:end -->
