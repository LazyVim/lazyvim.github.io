"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[4747],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>x});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),s=a(6550),i=a(1980),u=a(7392),c=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,u]=h({queryString:a,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=i??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var f=a(2389);const y="tabList__CuJ",v="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(d(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",v,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function x(e){const t=(0,f.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},4175:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),l=a(5162);const s={},i="Alpha",u={unversionedId:"extras/ui/alpha",id:"extras/ui/alpha",title:"Alpha",description:"You can enable the extra with the :LazyExtras command.",source:"@site/docs/extras/ui/alpha.md",sourceDirName:"extras/ui",slug:"/extras/ui/alpha",permalink:"/extras/ui/alpha",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/main/docs/extras/ui/alpha.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Neotest",permalink:"/extras/test/core"},next:{title:"Dashboard-nvim",permalink:"/extras/ui/dashboard-nvim"}},c={},d=[{value:"snacks.nvim",id:"snacksnvim",level:2},{value:"alpha-nvim",id:"alpha-nvim",level:2}],p={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"alpha"},"Alpha"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can enable the extra with the ",(0,r.kt)("inlineCode",{parentName:"p"},":LazyExtras")," command.\nPlugins marked as optional will only be configured if they are installed.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Alternatively, you can add it to your ",(0,r.kt)("code",null,"lazy.nvim")," imports"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua" {4}',title:'"lua/config/lazy.lua"',"{4}":!0},'require("lazy").setup({\n  spec = {\n    { "LazyVim/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.ui.alpha" },\n    { import = "plugins" },\n  },\n})\n'))),(0,r.kt)("p",null,"Below you can find a list of included plugins and their default settings."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You don't need to copy the default settings to your config.\nThey are only shown here for reference.")),(0,r.kt)("h2",{id:"snacksnvim"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/folke/snacks.nvim"},"snacks.nvim")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = { dashboard = { enabled = false } }\n"))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{ "folke/snacks.nvim", opts = { dashboard = { enabled = false } } }\n')))),(0,r.kt)("h2",{id:"alpha-nvim"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/goolord/alpha-nvim"},"alpha-nvim")),(0,r.kt)("p",null,' Dashboard. This runs when neovim starts, and is what displays\nthe "LAZYVIM" banner.'),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  local dashboard = require("alpha.themes.dashboard")\n  local logo = [[\n       \u2588\u2588\u2557      \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557          Z\n       \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2550\u2550\u2588\u2588\u2588\u2554\u255d\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551      Z    \n       \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551  \u2588\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551   z       \n       \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551 \u2588\u2588\u2588\u2554\u255d    \u255a\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551\u2588\u2588\u2551\u255a\u2588\u2588\u2554\u255d\u2588\u2588\u2551 z         \n       \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2588\u2588\u2551    \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551\u2588\u2588\u2551 \u255a\u2550\u255d \u2588\u2588\u2551\n       \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u255d     \u255a\u2550\u2550\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d     \u255a\u2550\u255d\n  ]]\n\n  dashboard.section.header.val = vim.split(logo, "\\n")\n  -- stylua: ignore\n  dashboard.section.buttons.val = {\n    dashboard.button("f", "\uf002 " .. " Find file",       "<cmd> lua LazyVim.pick()() <cr>"),\n    dashboard.button("n", "\uf15b " .. " New file",        [[<cmd> ene <BAR> startinsert <cr>]]),\n    dashboard.button("r", "\uf0c5 " .. " Recent files",    [[<cmd> lua LazyVim.pick("oldfiles")() <cr>]]),\n    dashboard.button("g", "\uf022 " .. " Find text",       [[<cmd> lua LazyVim.pick("live_grep")() <cr>]]),\n    dashboard.button("c", "\uf423 " .. " Config",          "<cmd> lua LazyVim.pick.config_files()() <cr>"),\n    dashboard.button("s", "\ue348 " .. " Restore Session", [[<cmd> lua require("persistence").load() <cr>]]),\n    dashboard.button("x", "\uea8c " .. " Lazy Extras",     "<cmd> LazyExtras <cr>"),\n    dashboard.button("l", "\udb81\udcb2 " .. " Lazy",            "<cmd> Lazy <cr>"),\n    dashboard.button("q", "\uf426 " .. " Quit",            "<cmd> qa <cr>"),\n  }\n  for _, button in ipairs(dashboard.section.buttons.val) do\n    button.opts.hl = "AlphaButtons"\n    button.opts.hl_shortcut = "AlphaShortcut"\n  end\n  dashboard.section.header.opts.hl = "AlphaHeader"\n  dashboard.section.buttons.opts.hl = "AlphaButtons"\n  dashboard.section.footer.opts.hl = "AlphaFooter"\n  dashboard.opts.layout[1].val = 8\n  return dashboard\nend\n'))),(0,r.kt)(l.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "goolord/alpha-nvim",\n  event = "VimEnter",\n  enabled = true,\n  init = false,\n  opts = function()\n    local dashboard = require("alpha.themes.dashboard")\n    local logo = [[\n         \u2588\u2588\u2557      \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557          Z\n         \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2550\u2550\u2588\u2588\u2588\u2554\u255d\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551      Z    \n         \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551  \u2588\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551   z       \n         \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551 \u2588\u2588\u2588\u2554\u255d    \u255a\u2588\u2588\u2554\u255d  \u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2551\u2588\u2588\u2551\u255a\u2588\u2588\u2554\u255d\u2588\u2588\u2551 z         \n         \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557   \u2588\u2588\u2551    \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551\u2588\u2588\u2551 \u255a\u2550\u255d \u2588\u2588\u2551\n         \u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d   \u255a\u2550\u255d     \u255a\u2550\u2550\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u255d     \u255a\u2550\u255d\n    ]]\n\n    dashboard.section.header.val = vim.split(logo, "\\n")\n    -- stylua: ignore\n    dashboard.section.buttons.val = {\n      dashboard.button("f", "\uf002 " .. " Find file",       "<cmd> lua LazyVim.pick()() <cr>"),\n      dashboard.button("n", "\uf15b " .. " New file",        [[<cmd> ene <BAR> startinsert <cr>]]),\n      dashboard.button("r", "\uf0c5 " .. " Recent files",    [[<cmd> lua LazyVim.pick("oldfiles")() <cr>]]),\n      dashboard.button("g", "\uf022 " .. " Find text",       [[<cmd> lua LazyVim.pick("live_grep")() <cr>]]),\n      dashboard.button("c", "\uf423 " .. " Config",          "<cmd> lua LazyVim.pick.config_files()() <cr>"),\n      dashboard.button("s", "\ue348 " .. " Restore Session", [[<cmd> lua require("persistence").load() <cr>]]),\n      dashboard.button("x", "\uea8c " .. " Lazy Extras",     "<cmd> LazyExtras <cr>"),\n      dashboard.button("l", "\udb81\udcb2 " .. " Lazy",            "<cmd> Lazy <cr>"),\n      dashboard.button("q", "\uf426 " .. " Quit",            "<cmd> qa <cr>"),\n    }\n    for _, button in ipairs(dashboard.section.buttons.val) do\n      button.opts.hl = "AlphaButtons"\n      button.opts.hl_shortcut = "AlphaShortcut"\n    end\n    dashboard.section.header.opts.hl = "AlphaHeader"\n    dashboard.section.buttons.opts.hl = "AlphaButtons"\n    dashboard.section.footer.opts.hl = "AlphaFooter"\n    dashboard.opts.layout[1].val = 8\n    return dashboard\n  end,\n  config = function(_, dashboard)\n    -- close Lazy and re-open when the dashboard is ready\n    if vim.o.filetype == "lazy" then\n      vim.cmd.close()\n      vim.api.nvim_create_autocmd("User", {\n        once = true,\n        pattern = "AlphaReady",\n        callback = function()\n          require("lazy").show()\n        end,\n      })\n    end\n\n    require("alpha").setup(dashboard.opts)\n\n    vim.api.nvim_create_autocmd("User", {\n      once = true,\n      pattern = "LazyVimStarted",\n      callback = function()\n        local stats = require("lazy").stats()\n        local ms = (math.floor(stats.startuptime * 100 + 0.5) / 100)\n        dashboard.section.footer.val = "\u26a1 Neovim loaded "\n          .. stats.loaded\n          .. "/"\n          .. stats.count\n          .. " plugins in "\n          .. ms\n          .. "ms"\n        pcall(vim.cmd.AlphaRedraw)\n      end,\n    })\n  end,\n}\n')))))}m.isMDXComponent=!0}}]);