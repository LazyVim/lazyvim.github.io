# `Lazyrc`

<!-- plugins:start -->

:::caution
You should not enable this Extra from `:LazyExtras`
:::

<details>
<summary>You should add it to your <code>lazy.nvim</code> imports as the last import.
  This is a special case for this Extra and this should be the only one added as the
  very last import after your <code>import = "plugins"</code></summary>

```lua title="lua/config/lazy.lua" {4}
require("lazy").setup({
  spec = {
    { "LazyVim/LazyVim", import = "lazyvim.plugins" },
    { import = "plugins" },
    { import = "lazyvim.plugins.extras.lazyrc" },
  },
})
```

</details>

Below you can find a list of included plugins and their default settings.

:::caution
You don't need to copy the default settings to your config.
They are only shown here for reference.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- plugins:end -->
