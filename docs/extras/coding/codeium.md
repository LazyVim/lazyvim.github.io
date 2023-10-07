# `coding.codeium`

<!-- plugins:start -->

To use this, add it to your **lazy.nvim** imports:

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "lazyvim.plugins.extras.coding.codeium" },
    { import = "plugins" },
  },
})
```

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## [codeium.nvim](https://github.com/Exafunction/codeium.nvim)

 codeium


<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = {}
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "Exafunction/codeium.nvim",
  cmd = "Codeium",
  build = ":Codeium Auth",
  opts = {},
}
```

</TabItem>

</Tabs>

## [codeium.nvim](https://github.com/Exafunction/codeium.nvim)

<Tabs>

<TabItem value="opts" label="Options">

```lua
opts = nil
```

</TabItem>


<TabItem value="code" label="Full Spec">

```lua
{
  "Exafunction/codeium.nvim",
}
```

</TabItem>

</Tabs>

<!-- plugins:end -->
