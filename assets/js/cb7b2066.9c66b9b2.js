"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[3729],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),o=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=o(e.components);return a.createElement(p.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=o(t),d=r,f=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return t?a.createElement(f,i(i({ref:n},s),{},{components:t})):a.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u[c]="string"==typeof e?e:r,i[1]=u;for(var o=2;o<l;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),r=t(6010);const l="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>N});var a=t(7462),r=t(7294),l=t(6010),i=t(2466),u=t(6550),p=t(1980),o=t(7392),s=t(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??c(t);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,u.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,p._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=m(e),[i,u]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[p,o]=f({queryString:t,groupId:a}),[c,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,s.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),k=(()=>{const e=p??c;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&u(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),o(e),b(e)}),[o,b,l]),tabValues:l}}var k=t(2389);const g="tabList__CuJ",h="tabItem_LNqP";function y(e){let{className:n,block:t,selectedValue:u,selectValue:p,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const n=e.currentTarget,t=s.indexOf(n),a=o[t].value;a!==u&&(c(n),p(a))},d=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},o.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===n?0:-1,"aria-selected":u===n,key:n,ref:e=>s.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.Z)("tabs__item",h,i?.className,{"tabs__item--active":u===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function T(e){const n=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(y,(0,a.Z)({},e,n)),r.createElement(v,(0,a.Z)({},e,n)))}function N(e){const n=(0,k.Z)();return r.createElement(T,(0,a.Z)({key:String(n)},e))}},3222:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>u,metadata:()=>o,toc:()=>c});var a=t(7462),r=(t(7294),t(3905)),l=t(4866),i=t(5162);const u={},p="Luasnip",o={unversionedId:"extras/coding/luasnip",id:"extras/coding/luasnip",title:"Luasnip",description:"You can enable the extra with the :LazyExtras command.",source:"@site/docs/extras/coding/luasnip.md",sourceDirName:"extras/coding",slug:"/extras/coding/luasnip",permalink:"/extras/coding/luasnip",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/main/docs/extras/coding/luasnip.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Blink",permalink:"/extras/coding/blink"},next:{title:"Mini-comment",permalink:"/extras/coding/mini-comment"}},s={},c=[{value:"LuaSnip",id:"luasnip-1",level:2},{value:"friendly-snippets",id:"friendly-snippets",level:2},{value:"LuaSnip",id:"luasnip-2",level:2},{value:"cmp_luasnip",id:"cmp_luasnip",level:2},{value:"blink.compat",id:"blinkcompat",level:2},{value:"cmp_luasnip",id:"cmp_luasnip-1",level:2},{value:"nvim-cmp <em>(optional)</em>",id:"nvim-cmp-optional",level:2},{value:"blink.cmp <em>(optional)</em>",id:"blinkcmp-optional",level:2}],m={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"luasnip"},(0,r.kt)("inlineCode",{parentName:"h1"},"Luasnip")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can enable the extra with the ",(0,r.kt)("inlineCode",{parentName:"p"},":LazyExtras")," command.\nPlugins marked as optional will only be configured if they are installed.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Alternatively, you can add it to your ",(0,r.kt)("code",null,"lazy.nvim")," imports"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua" {4}',title:'"lua/config/lazy.lua"',"{4}":!0},'require("lazy").setup({\n  spec = {\n    { "LazyVim/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.coding.luasnip" },\n    { import = "plugins" },\n  },\n})\n'))),(0,r.kt)("p",null,"Below you can find a list of included plugins and their default settings."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You don't need to copy the default settings to your config.\nThey are only shown here for reference.")),(0,r.kt)("h2",{id:"luasnip-1"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/L3MON4D3/LuaSnip"},"LuaSnip")),(0,r.kt)("p",null," add luasnip"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  history = true,\n  delete_check_events = "TextChanged",\n}\n'))),(0,r.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "L3MON4D3/LuaSnip",\n  lazy = true,\n  build = (not LazyVim.is_win())\n      and "echo \'NOTE: jsregexp is optional, so not a big deal if it fails to build\'; make install_jsregexp"\n    or nil,\n  dependencies = {\n    {\n      "rafamadriz/friendly-snippets",\n      config = function()\n        require("luasnip.loaders.from_vscode").lazy_load()\n      end,\n    },\n  },\n  opts = {\n    history = true,\n    delete_check_events = "TextChanged",\n  },\n}\n')))),(0,r.kt)("h2",{id:"friendly-snippets"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/rafamadriz/friendly-snippets"},"friendly-snippets")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {}\n"))),(0,r.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "rafamadriz/friendly-snippets",\n  config = function()\n    require("luasnip.loaders.from_vscode").lazy_load()\n  end,\n}\n')))),(0,r.kt)("h2",{id:"luasnip-2"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/L3MON4D3/LuaSnip"},"LuaSnip")),(0,r.kt)("p",null," add snippet_forward action"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function()\n  LazyVim.cmp.actions.snippet_forward = function()\n    if require("luasnip").jumpable(1) then\n      require("luasnip").jump(1)\n      return true\n    end\n  end\nend\n'))),(0,r.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "L3MON4D3/LuaSnip",\n  opts = function()\n    LazyVim.cmp.actions.snippet_forward = function()\n      if require("luasnip").jumpable(1) then\n        require("luasnip").jump(1)\n        return true\n      end\n    end\n  end,\n}\n')))),(0,r.kt)("h2",{id:"cmp_luasnip"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/saadparwaiz1/cmp_luasnip"},"cmp_luasnip")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,r.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{ "saadparwaiz1/cmp_luasnip" }\n')))),(0,r.kt)("h2",{id:"blinkcompat"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/saghen/blink.compat"},"blink.compat")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = { impersonate_nvim_cmp = true }\n"))),(0,r.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{ "saghen/blink.compat", opts = { impersonate_nvim_cmp = true } }\n')))),(0,r.kt)("h2",{id:"cmp_luasnip-1"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/saadparwaiz1/cmp_luasnip"},"cmp_luasnip")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,r.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{ "saadparwaiz1/cmp_luasnip" }\n')))),(0,r.kt)("h2",{id:"nvim-cmp-optional"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/hrsh7th/nvim-cmp"},"nvim-cmp")," ",(0,r.kt)("em",{parentName:"h2"},"(optional)")),(0,r.kt)("p",null," nvim-cmp integration"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = function(_, opts)\n  opts.snippet = {\n    expand = function(args)\n      require("luasnip").lsp_expand(args.body)\n    end,\n  }\n  table.insert(opts.sources, { name = "luasnip" })\nend\n'))),(0,r.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-cmp",\n  optional = true,\n  dependencies = { "saadparwaiz1/cmp_luasnip" },\n  opts = function(_, opts)\n    opts.snippet = {\n      expand = function(args)\n        require("luasnip").lsp_expand(args.body)\n      end,\n    }\n    table.insert(opts.sources, { name = "luasnip" })\n  end,\n  -- stylua: ignore\n  keys = {\n    { "<tab>", function() require("luasnip").jump(1) end, mode = "s" },\n    { "<s-tab>", function() require("luasnip").jump(-1) end, mode = { "i", "s" } },\n  },\n}\n')))),(0,r.kt)("h2",{id:"blinkcmp-optional"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/saghen/blink.cmp"},"blink.cmp")," ",(0,r.kt)("em",{parentName:"h2"},"(optional)")),(0,r.kt)("p",null," blink.cmp integration"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'opts = {\n  sources = { compat = { "luasnip" } },\n  snippets = {\n    expand = function(snippet)\n      require("luasnip").lsp_expand(snippet)\n    end,\n    active = function(filter)\n      if filter and filter.direction then\n        return require("luasnip").jumpable(filter.direction)\n      end\n      return require("luasnip").in_snippet()\n    end,\n    jump = function(direction)\n      require("luasnip").jump(direction)\n    end,\n  },\n}\n'))),(0,r.kt)(i.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "saghen/blink.cmp",\n  optional = true,\n  dependencies = {\n    { "saghen/blink.compat", opts = { impersonate_nvim_cmp = true } },\n    { "saadparwaiz1/cmp_luasnip" },\n  },\n  opts = {\n    sources = { compat = { "luasnip" } },\n    snippets = {\n      expand = function(snippet)\n        require("luasnip").lsp_expand(snippet)\n      end,\n      active = function(filter)\n        if filter and filter.direction then\n          return require("luasnip").jumpable(filter.direction)\n        end\n        return require("luasnip").in_snippet()\n      end,\n      jump = function(direction)\n        require("luasnip").jump(direction)\n      end,\n    },\n  },\n}\n')))))}d.isMDXComponent=!0}}]);