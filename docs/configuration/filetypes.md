---
sidebar_position: 8
---

# File Types

Custom file types can be managed in a `$XDG_CONFIG_HOME/nvim/filetype.lua` file.
When the file exists, LazyVim will source it at startup.

## Example

```lua title=filetype.lua
vim.filetype.add({
  extension = {
    tfstate = "json",
    terraformrc = "hcl",
  },
  filename = {
    ["Jenkinsfile"] = "groovy",
    ["terraform.rc"] = "hcl",
  },
  pattern = {
    [".*tfstate.backup"] = "json",
  }
})
```
