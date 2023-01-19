"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[897],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>g});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),o=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=o(t),d=i,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||r;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:i,l[1]=s;for(var o=2;o<r;o++)l[o]=t[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),i=t(6010);const r="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,l),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(7462),i=t(7294),r=t(6010),l=t(2389),s=t(7392),p=t(7094),o=t(2466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){const{lazy:n,block:t,defaultValue:l,values:m,groupId:d,className:g}=e,h=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??h.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),b=(0,s.l)(f,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===l?l:l??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,p.U)(),[T,x]=(0,i.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:_}=(0,o.o5)();if(null!=d){const e=v[d];null!=e&&e!==T&&f.some((n=>n.value===e))&&x(e)}const Z=e=>{const n=e.currentTarget,t=N.indexOf(n),a=f[t].value;a!==T&&(_(n),x(a),null!=d&&y(d,String(a)))},O=e=>{let n=null;switch(e.key){case"Enter":Z(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}n?.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},g)},f.map((e=>{let{value:n,label:t,attributes:l}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>N.push(e),onKeyDown:O,onClick:Z},l,{className:(0,r.Z)("tabs__item",c,l?.className,{"tabs__item--active":T===n})}),t??n)}))),n?(0,i.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function d(e){const n=(0,l.Z)();return i.createElement(m,(0,a.Z)({key:String(n)},e))}},5293:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(7462),i=(t(7294),t(3905)),r=t(5488),l=t(5162);const s={},p="Coding",o={unversionedId:"plugins/coding",id:"plugins/coding",title:"Coding",description:"LuaSnip",source:"@site/docs/plugins/coding.md",sourceDirName:"plugins",slug:"/plugins/coding",permalink:"/plugins/coding",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/plugins/coding.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udce6 Plugins",permalink:"/plugins/"},next:{title:"Colorscheme",permalink:"/plugins/colorscheme"}},u={},c=[{value:"LuaSnip",id:"luasnip",level:2},{value:"friendly-snippets",id:"friendly-snippets",level:2},{value:"nvim-cmp",id:"nvim-cmp",level:2},{value:"cmp-nvim-lsp",id:"cmp-nvim-lsp",level:2},{value:"cmp-buffer",id:"cmp-buffer",level:2},{value:"cmp-path",id:"cmp-path",level:2},{value:"cmp_luasnip",id:"cmp_luasnip",level:2},{value:"mini.pairs",id:"minipairs",level:2},{value:"mini.surround",id:"minisurround",level:2},{value:"nvim-ts-context-commentstring",id:"nvim-ts-context-commentstring",level:2},{value:"mini.comment",id:"minicomment",level:2},{value:"mini.ai",id:"miniai",level:2},{value:"nvim-treesitter-textobjects",id:"nvim-treesitter-textobjects",level:2}],m={toc:c};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"coding"},"Coding"),(0,i.kt)("h2",{id:"luasnip"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/L3MON4D3/LuaSnip"},"LuaSnip")),(0,i.kt)("p",null," snippets"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  history = true,\n  delete_check_events = "TextChanged",\n}\n'))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "L3MON4D3/LuaSnip",\n  dependencies = {\n    "rafamadriz/friendly-snippets",\n    config = function()\n      require("luasnip.loaders.from_vscode").lazy_load()\n    end,\n  },\n  opts = {\n    history = true,\n    delete_check_events = "TextChanged",\n  },\n  -- stylua: ignore\n  keys = {\n    {\n      "<tab>",\n      function()\n        return require("luasnip").jumpable(1) and "<Plug>luasnip-jump-next" or "<tab>"\n      end,\n      expr = true, silent = true, mode = "i",\n    },\n    { "<tab>", function() require("luasnip").jump(1) end, mode = "s" },\n    { "<s-tab>", function() require("luasnip").jump(-1) end, mode = { "i", "s" } },\n  },\n}\n')))),(0,i.kt)("h2",{id:"friendly-snippets"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/rafamadriz/friendly-snippets"},"friendly-snippets")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "rafamadriz/friendly-snippets",\n  config = function()\n    require("luasnip.loaders.from_vscode").lazy_load()\n  end,\n}\n')))),(0,i.kt)("h2",{id:"nvim-cmp"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/nvim-cmp"},"nvim-cmp")),(0,i.kt)("p",null," auto completion"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local cmp = require("cmp")\n  return {\n    completion = {\n      completeopt = "menu,menuone,noinsert",\n    },\n    snippet = {\n      expand = function(args)\n        require("luasnip").lsp_expand(args.body)\n      end,\n    },\n    mapping = cmp.mapping.preset.insert({\n      ["<C-b>"] = cmp.mapping.scroll_docs(-4),\n      ["<C-f>"] = cmp.mapping.scroll_docs(4),\n      ["<C-Space>"] = cmp.mapping.complete(),\n      ["<C-e>"] = cmp.mapping.abort(),\n      ["<CR>"] = cmp.mapping.confirm({ select = true }), -- Accept currently selected item. Set `select` to `false` to only confirm explicitly selected items.\n    }),\n    sources = cmp.config.sources({\n      { name = "nvim_lsp" },\n      { name = "luasnip" },\n      { name = "buffer" },\n      { name = "path" },\n    }),\n    formatting = {\n      format = function(_, item)\n        local icons = require("lazyvim.config").icons.kinds\n        if icons[item.kind] then\n          item.kind = icons[item.kind] .. item.kind\n        end\n        return item\n      end,\n    },\n    experimental = {\n      ghost_text = {\n        hl_group = "LspCodeLens",\n      },\n    },\n  }\nend\n'))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "hrsh7th/nvim-cmp",\n  version = false, -- last release is way too old\n  event = "InsertEnter",\n  dependencies = {\n    "hrsh7th/cmp-nvim-lsp",\n    "hrsh7th/cmp-buffer",\n    "hrsh7th/cmp-path",\n    "saadparwaiz1/cmp_luasnip",\n  },\n  opts = function()\n    local cmp = require("cmp")\n    return {\n      completion = {\n        completeopt = "menu,menuone,noinsert",\n      },\n      snippet = {\n        expand = function(args)\n          require("luasnip").lsp_expand(args.body)\n        end,\n      },\n      mapping = cmp.mapping.preset.insert({\n        ["<C-b>"] = cmp.mapping.scroll_docs(-4),\n        ["<C-f>"] = cmp.mapping.scroll_docs(4),\n        ["<C-Space>"] = cmp.mapping.complete(),\n        ["<C-e>"] = cmp.mapping.abort(),\n        ["<CR>"] = cmp.mapping.confirm({ select = true }), -- Accept currently selected item. Set `select` to `false` to only confirm explicitly selected items.\n      }),\n      sources = cmp.config.sources({\n        { name = "nvim_lsp" },\n        { name = "luasnip" },\n        { name = "buffer" },\n        { name = "path" },\n      }),\n      formatting = {\n        format = function(_, item)\n          local icons = require("lazyvim.config").icons.kinds\n          if icons[item.kind] then\n            item.kind = icons[item.kind] .. item.kind\n          end\n          return item\n        end,\n      },\n      experimental = {\n        ghost_text = {\n          hl_group = "LspCodeLens",\n        },\n      },\n    }\n  end,\n}\n')))),(0,i.kt)("h2",{id:"cmp-nvim-lsp"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/cmp-nvim-lsp"},"cmp-nvim-lsp")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "hrsh7th/cmp-nvim-lsp",\n  "hrsh7th/cmp-buffer",\n  "hrsh7th/cmp-path",\n  "saadparwaiz1/cmp_luasnip",\n}\n')))),(0,i.kt)("h2",{id:"cmp-buffer"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/cmp-buffer"},"cmp-buffer")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'"hrsh7th/cmp-buffer"\n')))),(0,i.kt)("h2",{id:"cmp-path"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/cmp-path"},"cmp-path")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'"hrsh7th/cmp-path"\n')))),(0,i.kt)("h2",{id:"cmp_luasnip"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/saadparwaiz1/cmp_luasnip"},"cmp_luasnip")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'"saadparwaiz1/cmp_luasnip"\n')))),(0,i.kt)("h2",{id:"minipairs"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.pairs"},"mini.pairs")),(0,i.kt)("p",null," auto pairs"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.pairs",\n  event = "VeryLazy",\n  config = function(_, opts)\n    require("mini.pairs").setup(opts)\n  end,\n}\n')))),(0,i.kt)("h2",{id:"minisurround"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.surround"},"mini.surround")),(0,i.kt)("p",null," surround"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  mappings = {\n    add = "gza", -- Add surrounding in Normal and Visual modes\n    delete = "gzd", -- Delete surrounding\n    find = "gzf", -- Find surrounding (to the right)\n    find_left = "gzF", -- Find surrounding (to the left)\n    highlight = "gzh", -- Highlight surrounding\n    replace = "gzr", -- Replace surrounding\n    update_n_lines = "gzn", -- Update `n_lines`\n  },\n}\n'))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.surround",\n  keys = function(plugin, keys)\n    -- Populate the keys based on the user\'s options\n    local opts = require("lazy.core.plugin").values(plugin, "opts", false)\n    local mappings = {\n      { opts.mappings.add, desc = "Add surrounding", mode = { "n", "v" } },\n      { opts.mappings.delete, desc = "Delete surrounding" },\n      { opts.mappings.find, desc = "Find right surrounding" },\n      { opts.mappings.find_left, desc = "Find left surrounding" },\n      { opts.mappings.highlight, desc = "Highlight surrounding" },\n      { opts.mappings.replace, desc = "Replace surrounding" },\n      { opts.mappings.update_n_lines, desc = "Update `MiniSurround.config.n_lines`" },\n    }\n    return vim.list_extend(mappings, keys)\n  end,\n  opts = {\n    mappings = {\n      add = "gza", -- Add surrounding in Normal and Visual modes\n      delete = "gzd", -- Delete surrounding\n      find = "gzf", -- Find surrounding (to the right)\n      find_left = "gzF", -- Find surrounding (to the left)\n      highlight = "gzh", -- Highlight surrounding\n      replace = "gzr", -- Replace surrounding\n      update_n_lines = "gzn", -- Update `n_lines`\n    },\n  },\n  config = function(_, opts)\n    -- use gz mappings instead of s to prevent conflict with leap\n    require("mini.surround").setup(opts)\n  end,\n}\n')))),(0,i.kt)("h2",{id:"nvim-ts-context-commentstring"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/JoosepAlviste/nvim-ts-context-commentstring"},"nvim-ts-context-commentstring")),(0,i.kt)("p",null," comments"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{ "JoosepAlviste/nvim-ts-context-commentstring", lazy = true }\n')))),(0,i.kt)("h2",{id:"minicomment"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.comment"},"mini.comment")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  hooks = {\n    pre = function()\n      require("ts_context_commentstring.internal").update_commentstring({})\n    end,\n  },\n}\n'))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.comment",\n  event = "VeryLazy",\n  opts = {\n    hooks = {\n      pre = function()\n        require("ts_context_commentstring.internal").update_commentstring({})\n      end,\n    },\n  },\n  config = function(_, opts)\n    require("mini.comment").setup(opts)\n  end,\n}\n')))),(0,i.kt)("h2",{id:"miniai"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/echasnovski/mini.ai"},"mini.ai")),(0,i.kt)("p",null," better text-objects"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local ai = require("mini.ai")\n  return {\n    n_lines = 500,\n    custom_textobjects = {\n      o = ai.gen_spec.treesitter({\n        a = { "@block.outer", "@conditional.outer", "@loop.outer" },\n        i = { "@block.inner", "@conditional.inner", "@loop.inner" },\n      }, {}),\n      f = ai.gen_spec.treesitter({ a = "@function.outer", i = "@function.inner" }, {}),\n      c = ai.gen_spec.treesitter({ a = "@class.outer", i = "@class.inner" }, {}),\n    },\n  }\nend\n'))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.ai",\n  keys = {\n    { "a", mode = { "x", "o" } },\n    { "i", mode = { "x", "o" } },\n  },\n  dependencies = {\n    {\n      "nvim-treesitter/nvim-treesitter-textobjects",\n      init = function()\n        -- no need to load the plugin, since we only need its queries\n        require("lazy.core.loader").disable_rtp_plugin("nvim-treesitter-textobjects")\n      end,\n    },\n  },\n  opts = function()\n    local ai = require("mini.ai")\n    return {\n      n_lines = 500,\n      custom_textobjects = {\n        o = ai.gen_spec.treesitter({\n          a = { "@block.outer", "@conditional.outer", "@loop.outer" },\n          i = { "@block.inner", "@conditional.inner", "@loop.inner" },\n        }, {}),\n        f = ai.gen_spec.treesitter({ a = "@function.outer", i = "@function.inner" }, {}),\n        c = ai.gen_spec.treesitter({ a = "@class.outer", i = "@class.inner" }, {}),\n      },\n    }\n  end,\n  config = function(_, opts)\n    local ai = require("mini.ai")\n    ai.setup(opts)\n  end,\n}\n')))),(0,i.kt)("h2",{id:"nvim-treesitter-textobjects"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/nvim-treesitter/nvim-treesitter-textobjects"},"nvim-treesitter-textobjects")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,i.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-treesitter/nvim-treesitter-textobjects",\n  init = function()\n    -- no need to load the plugin, since we only need its queries\n    require("lazy.core.loader").disable_rtp_plugin("nvim-treesitter-textobjects")\n  end,\n}\n')))))}d.isMDXComponent=!0}}]);