"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7610],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>m,mdx:()=>x,useMDXComponents:()=>s,withMDXComponents:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){return function(t){var n=s(t.components);return r.createElement(e,o({},t,{components:n}))}},s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||f[m]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function x(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},48273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"bxl_getting_started",title:"Getting Started"},i=void 0,l={unversionedId:"developers/bxl_getting_started",id:"developers/bxl_getting_started",title:"Getting Started",description:"Writing a BXL",source:"@site/../docs/developers/bxl_getting_started.md",sourceDirName:"developers",slug:"/developers/bxl_getting_started",permalink:"/docs/developers/bxl_getting_started",draft:!1,tags:[],version:"current",frontMatter:{id:"bxl_getting_started",title:"Getting Started"},sidebar:"manualSidebar",previous:{title:"Why BXL",permalink:"/docs/developers/bxl"},next:{title:"Common How-Tos",permalink:"/docs/developers/bxl_how_tos"}},p={},c=[{value:"Writing a BXL",id:"writing-a-bxl",level:2},{value:"Running a BXL",id:"running-a-bxl",level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h2",{id:"writing-a-bxl"},"Writing a BXL"),(0,a.mdx)("p",null,"To create a BXL, first, create a script somewhere in the repository ending in ",(0,a.mdx)("inlineCode",{parentName:"p"},".bxl"),". (Note that you can define a single bxl per file, or multiple BXLs per file like in Starlark rules)."),(0,a.mdx)("p",null,"In it, define a BXL function as follows:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'def _your_implementation(ctx):\n    # ...\n    pass\n\nyour_function_name = bxl(\n    impl = _your_implementation,\n    cli_args = {\n        # cli args that you want to receive from the command line\n        "bool_arg": cli_args.bool(),\n        "list_type": cli_args.list(cli_args.int()),\n        "optional": cli_args.option(cli_args.string()),\n        "target": cli_args.target_label(),\n    },\n)\n')),(0,a.mdx)("p",null,"This exposes ",(0,a.mdx)("inlineCode",{parentName:"p"},"your_function_name")," as a function, with whatever arguments you defined it, so that on the command line you can invoke:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},"buck2 bxl //myscript.bxl:your_function_name -- --bool_arg true --list_type 1 --list_type 2 --target //foo:bar`\n")),(0,a.mdx)("p",null,"You can also add helpdocs to the cli args and get them to show up in cli via ",(0,a.mdx)("inlineCode",{parentName:"p"},"--help"),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python"},'def _your_implementation(ctx):\n    # ...\n    pass\n\nyour_function_name = bxl(\n    impl = _your_implementation,\n    cli_args = {\n        "my_bool": cli_args.bool(True, "this will be printed as part of `--help`")\n    },\n)\n')),(0,a.mdx)("p",null,"The implementation function takes a single context as parameter (see the documentation for ",(0,a.mdx)("inlineCode",{parentName:"p"},"BxlContext"),"). Using it, you'll be able to access functions that enable you to perform queries, analysis, builds, and even create your own actions within BXL to build artifacts as part of a BXL function."),(0,a.mdx)("p",null,"The primary method to return information from BXL is to either print them, or build some artifact (for details, see the ",(0,a.mdx)("inlineCode",{parentName:"p"},"OutputStream")," documentation, available as part of ",(0,a.mdx)("inlineCode",{parentName:"p"},"ctx.output"),").\nAt high level, ",(0,a.mdx)("inlineCode",{parentName:"p"},"ctx.output.print(..)")," prints results to stdout, and ",(0,a.mdx)("inlineCode",{parentName:"p"},"ctx.output.ensure(artifact)")," marks artifacts as to be materialized into buck-out by the end of the BXL\nfunction, returning an object that lets you print the output path via ",(0,a.mdx)("inlineCode",{parentName:"p"},"ctx.output.print(ensured)"),"."),(0,a.mdx)("h2",{id:"running-a-bxl"},"Running a BXL"),(0,a.mdx)("p",null,"To run a BXL function, invoke the buck2 command:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},"buck2 bxl <bxl function> -- <function args>\n")),(0,a.mdx)("p",null," Where ",(0,a.mdx)("inlineCode",{parentName:"p"},"<bxl function>")," is of the form ",(0,a.mdx)("inlineCode",{parentName:"p"},"<cell path to function>:<function name>"),", and ",(0,a.mdx)("inlineCode",{parentName:"p"},"<function args>")," are the arguments that the function accepts from the command line."),(0,a.mdx)("p",null,"The documentation for a BXL function can be seen by running:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"}," buck2 bxl <bxl function> -- --help`\n")),(0,a.mdx)("p",null," Note that this is different from ",(0,a.mdx)("inlineCode",{parentName:"p"},"buck2 bxl --help"),", which generates the help for the buck2 command instead of the function."))}s.isMDXComponent=!0}}]);