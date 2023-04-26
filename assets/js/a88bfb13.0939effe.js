"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8698],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>d,MDXProvider:()=>m,mdx:()=>g,useMDXComponents:()=>u,withMDXComponents:()=>p});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){return function(t){var n=u(t.components);return a.createElement(e,o({},t,{components:n}))}},u=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,c=p["".concat(r,".").concat(m)]||p[m]||f[m]||o;return n?a.createElement(c,l(l({ref:t},d),{},{components:n})):a.createElement(c,l({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},36509:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const o={id:"configurations",title:"Configurations"},r=void 0,l={unversionedId:"rule_authors/configurations",id:"rule_authors/configurations",title:"Configurations",description:"This page mostly focuses on how configurations and related features are implemented.",source:"@site/../docs/rule_authors/configurations.md",sourceDirName:"rule_authors",slug:"/rule_authors/configurations",permalink:"/docs/rule_authors/configurations",draft:!1,tags:[],version:"current",frontMatter:{id:"configurations",title:"Configurations"},sidebar:"manualSidebar",previous:{title:"Transitive Sets",permalink:"/docs/rule_authors/transitive_sets"},next:{title:"Configuration Transitions",permalink:"/docs/rule_authors/configuration_transitions"}},s={},d=[{value:"Context",id:"context",level:2},{value:"Selectable attributes",id:"selectable-attributes",level:2},{value:"Selectable resolution",id:"selectable-resolution",level:2},{value:"Target Platform Resolution",id:"target-platform-resolution",level:2},{value:"Configuration propagation",id:"configuration-propagation",level:2},{value:"Transitions",id:"transitions",level:2},{value:"<code>ConfigurationInfo</code>, <code>platform()</code> analysis, and more",id:"configurationinfo-platform-analysis-and-more",level:2},{value:"Configurations and output paths",id:"configurations-and-output-paths",level:2},{value:"Target platform compatibility",id:"target-platform-compatibility",level:2},{value:"Buck v1 compatibility",id:"buck-v1-compatibility",level:3},{value:"Incompatible target skipping",id:"incompatible-target-skipping",level:2},{value:"Execution platforms",id:"execution-platforms",level:2},{value:"Execution deps",id:"execution-deps",level:2},{value:"Toolchain deps",id:"toolchain-deps",level:2},{value:"Running non-execution deps",id:"running-non-execution-deps",level:2},{value:"Execution platform resolution",id:"execution-platform-resolution",level:2},{value:"Execution groups",id:"execution-groups",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,i.mdx)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"This page mostly focuses on how configurations and related features are implemented."),(0,i.mdx)("h2",{id:"context"},"Context"),(0,i.mdx)("p",null,"Buck configurations provide an API to express the different ways in which projects and targets can be built."),(0,i.mdx)("p",null,"A configuration consists of a set of constraints and config settings (values from buckconfig). These are determined by a base platform that sets the initial values and then a series of transitions that may change them."),(0,i.mdx)("p",null,"The common way that users are exposed to configurations is in ",(0,i.mdx)("inlineCode",{parentName:"p"},"select()")," invocations where the resolution is based on the configuration."),(0,i.mdx)("p",null,"A build may involve many configurations. A particular target label (",(0,i.mdx)("inlineCode",{parentName:"p"},"//:foo"),") may end up with multiple instances in the configured graph with different configurations."),(0,i.mdx)("h2",{id:"selectable-attributes"},"Selectable attributes"),(0,i.mdx)("p",null,"Almost all rule attributes can be set to a ",(0,i.mdx)("inlineCode",{parentName:"p"},"select()")," value; such an attribute is 'selectable'. These attributes' final resolved values will depend on the configuration."),(0,i.mdx)("p",null,"There are some attributes that cannot use a ",(0,i.mdx)("inlineCode",{parentName:"p"},"select()"),"; such attributes are termed 'not selectable'. Examples include attributes that buck needs to read from the unconfigured node (such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"name")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"default_target_platform"),") and attributes that are used by ",(0,i.mdx)("inlineCode",{parentName:"p"},"platform()")," rules and their dependencies (see below)."),(0,i.mdx)("h2",{id:"selectable-resolution"},"Selectable resolution"),(0,i.mdx)("p",null,"Resolving selectable attributes is pretty straightforward, it happens when constructing the 'configured target node'. At that point, the full configuration is available so Buck can lookup whether each constraint in the select is satisfied or not."),(0,i.mdx)("p",null,"If multiple conditions of the select() match, then the select will be resolved to the 'most refined' of the conditions that match. A set of constraints (as in\na ",(0,i.mdx)("inlineCode",{parentName:"p"},"config_setting"),") is said to 'refine' another if it is a superset of that other's constraints. The 'most refined' of a set is then the condition that refines all the others. If there is no 'most refined' condition of the matching ones, it is an error."),(0,i.mdx)("h2",{id:"target-platform-resolution"},"Target Platform Resolution"),(0,i.mdx)("p",null,"In the event that targets are provided on the command line, or when there is no indication of what configuration the target will be built in, configurations are determined by performing 'target platform resolution' on the unconfigured target labels."),(0,i.mdx)("p",null,"The target platform resolution for a target ",(0,i.mdx)("inlineCode",{parentName:"p"},"//:foo")," works as follows:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Look up (unconfigured) target node for ",(0,i.mdx)("inlineCode",{parentName:"li"},"//:foo"),"."),(0,i.mdx)("li",{parentName:"ol"},"If the command has a ",(0,i.mdx)("inlineCode",{parentName:"li"},"--target-platforms")," flag, use that."),(0,i.mdx)("li",{parentName:"ol"},"If there's a ",(0,i.mdx)("inlineCode",{parentName:"li"},"default_target_platform")," attribute, use that."),(0,i.mdx)("li",{parentName:"ol"},"Else, use the cell's default platform.")),(0,i.mdx)("p",null,"This is performed independently for any targets that need a platform. Since this resolution is done without a configuration, it means that the ",(0,i.mdx)("inlineCode",{parentName:"p"},"default_target_platform")," attribute ",(0,i.mdx)("strong",{parentName:"p"},"is not selectable"),"."),(0,i.mdx)("p",null,"This target platform will form the initial configuration for the node."),(0,i.mdx)("h2",{id:"configuration-propagation"},"Configuration propagation"),(0,i.mdx)("p",null,"Once the top-level nodes have been configured via the target platform resolution, the configuration is propagated to dependencies (possibly altered by transitions)."),(0,i.mdx)("admonition",{type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"The target platform resolution is not applied to all nodes in the graph.")),(0,i.mdx)("h2",{id:"transitions"},"Transitions"),(0,i.mdx)("p",null,"A transition transforms a configuration by adding or changing constraint values and config settings or by setting an entirely new underlying target platform."),(0,i.mdx)("p",null,"For more details, see ",(0,i.mdx)("a",{parentName:"p",href:"/docs/rule_authors/configuration_transitions"},"Configuration transitions"),"."),(0,i.mdx)("h2",{id:"configurationinfo-platform-analysis-and-more"},(0,i.mdx)("inlineCode",{parentName:"h2"},"ConfigurationInfo"),", ",(0,i.mdx)("inlineCode",{parentName:"h2"},"platform()")," analysis, and more"),(0,i.mdx)("p",null,"The definition of a platform (either execution or target) is done with a ",(0,i.mdx)("inlineCode",{parentName:"p"},"platform")," rule instance. The configuration is actually part of the analysis result of the platform target (the ",(0,i.mdx)("inlineCode",{parentName:"p"},"ConfigurationInfo")," provider instance). This is convenient from\nan implementation standpoint, but it leads to a situation where some nodes are analyzed with an 'unbound' Configuration."),(0,i.mdx)("p",null,"All the rule types involved in defining a platform may be analyzed with an unbound configuration (",(0,i.mdx)("inlineCode",{parentName:"p"},"platform()"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"config_setting()"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"constraint_setting()"),", and so on). These are sometimes called 'configuration rules'. This means that all the attributes of these rules are not selectable."),(0,i.mdx)("p",null,"Configurations also reference a few other provider instances such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"ConstraintSettingInfo"),". All of these end up being potentially produced in a context with an unbound configuration."),(0,i.mdx)("p",null,"Using analysis for this also means that 'configuration' and 'analysis' are not distinct phases within a build (although they are still distinct for a node and are still conceptually useful)."),(0,i.mdx)("h2",{id:"configurations-and-output-paths"},"Configurations and output paths"),(0,i.mdx)("p",null,"Since a target may appear within a build in multiple different configurations, output paths cannot be derived based on just targets (as multiple actions would map to the same outputs). For this reason, the target and the configuration are encoded into output paths. The configuration is currently represented as a hash of its values (a 'hashed buck-out')."),(0,i.mdx)("h2",{id:"target-platform-compatibility"},"Target platform compatibility"),(0,i.mdx)("p",null,"All (non-configuration) rules support a ",(0,i.mdx)("inlineCode",{parentName:"p"},"target_compatible_with")," attribute. In addition, the rule itself can define ",(0,i.mdx)("inlineCode",{parentName:"p"},"target_compatible_with")," constraints that affect all instances. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"target_compatible_with")," attribute is a list of constraints/config settings and it ",(0,i.mdx)("strong",{parentName:"p"},"is selectable"),"."),(0,i.mdx)("p",null,"Target platform compatibility is transitive, all ",(0,i.mdx)("em",{parentName:"p"},"dependents")," of an incompatible target are incompatible. In other words, a node is compatible if and only if the node itself and all of its transitive dependencies are compatible."),(0,i.mdx)("p",null,"In buck, this is implemented by graph configuration returning either a configured target node or an indicator that the node is incompatible with the target platform."),(0,i.mdx)("h3",{id:"buck-v1-compatibility"},"Buck v1 compatibility"),(0,i.mdx)("p",null,"Buck2 also supports the Buck v1 legacy ",(0,i.mdx)("inlineCode",{parentName:"p"},"compatible_with")," field on nodes but it has different behavior."),(0,i.mdx)("p",null,"In summary:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"compatible_with"),": List of constraints, where ",(0,i.mdx)("em",{parentName:"li"},"any")," of them must match the configuration to be compatible."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"target_compatible_with"),": List of constraints, where ",(0,i.mdx)("em",{parentName:"li"},"all")," of them must match the configuration to be compatible.")),(0,i.mdx)("h2",{id:"incompatible-target-skipping"},"Incompatible target skipping"),(0,i.mdx)("p",null,"In a build-like command where a non-literal target pattern is provided (for example, ",(0,i.mdx)("inlineCode",{parentName:"p"},"buck build //:")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"buck build //foo/..."),"), the target pattern will be resolved to a set of unconfigured targets. Those targets will then go through ",(0,i.mdx)("a",{parentName:"p",href:"#target-platform-resolution"},"target platform resolution"),". If any of those targets resolve to a platform where they are incompatible, building them will be skipped. Users generally expect and prefer this behavior to needing to explicitly specify only the targets that can build in their current context."),(0,i.mdx)("p",null,"If an explicitly specified literal is incompatible, it is an error."),(0,i.mdx)("p",null,"The implementation checks compatibility when looking up the analysis results for configured nodes requested (in the non-ignored flow, it uses\nthat analysis result to lookup the default outputs and build them)."),(0,i.mdx)("h2",{id:"execution-platforms"},"Execution platforms"),(0,i.mdx)("p",null,"Execution platforms/configurations are used to represent the platforms where build execution happens. These are defined in a similar manner to target platforms.\nThese may or may not be what one would logically consider different 'platforms'. For example, there could be multiple different execution platforms that all execute things similarly on the local machine."),(0,i.mdx)("p",null,"A build configures a fixed list of one or more execution platforms."),(0,i.mdx)("h2",{id:"execution-deps"},"Execution deps"),(0,i.mdx)("p",null,"Some target deps are 'execution deps'. These are the dependencies of the target that should be built for the execution platform. For example, a compiler or other build tool would be an execution dep. This includes all exe macro deps (for example, ",(0,i.mdx)("inlineCode",{parentName:"p"},"$(exe //:tool)"),") and includes all ",(0,i.mdx)("inlineCode",{parentName:"p"},"attrs.exec_dep()")," deps."),(0,i.mdx)("h2",{id:"toolchain-deps"},"Toolchain deps"),(0,i.mdx)("p",null,"In addition to ",(0,i.mdx)("inlineCode",{parentName:"p"},"attrs.exec_dep()"),", there are ",(0,i.mdx)("inlineCode",{parentName:"p"},"attrs.toolchain_dep()"),", which are similar but differ in an important way. These nodes don't select their execution platform, but instead have it forced on them by whatever includes them; hence, it must be recorded in the configured target label. The execution platform resolution sees through them."),(0,i.mdx)("p",null,"In other words, ",(0,i.mdx)("inlineCode",{parentName:"p"},"attrs.toolchain_dep()")," is like a mix of ",(0,i.mdx)("inlineCode",{parentName:"p"},"attrs.dep()")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"attrs.exec_dep()"),": it inherits target platform like ",(0,i.mdx)("inlineCode",{parentName:"p"},"attrs.dep()")," (so any\n",(0,i.mdx)("inlineCode",{parentName:"p"},"select()"),"s on the target of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"attrs.toolchain_dep()")," will evaluate as if they were on the target containing the ",(0,i.mdx)("inlineCode",{parentName:"p"},"attrs.toolchain_dep()")," - the target\nplatform gets inherited as normal) and any ",(0,i.mdx)("inlineCode",{parentName:"p"},"attrs.exec_dep()"),"s of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"attrs.toolchain_dep()")," target become ",(0,i.mdx)("inlineCode",{parentName:"p"},"attrs.exec_deps()")," on the dependent of\ntarget the ",(0,i.mdx)("inlineCode",{parentName:"p"},"attrs.toolchain_dep()")," (they get passed up the dep tree, so participate in exec platform resolution)."),(0,i.mdx)("p",null,"This is illustrated in the following example:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},'target(\n    name = "A",\n    toolchain = attrs.toolchain_dep(default = ":B"),\n)\ntarget(\n    name = "B",\n    tool = attrs.exec_dep(default = ":C")\n)\n')),(0,i.mdx)("p",null,"The above means that ",(0,i.mdx)("inlineCode",{parentName:"p"},":C")," will be an execution dependency of ",(0,i.mdx)("inlineCode",{parentName:"p"},":A")," and any ",(0,i.mdx)("inlineCode",{parentName:"p"},"select()"),"s defined in ",(0,i.mdx)("inlineCode",{parentName:"p"},":B")," would be evaluated against the same target platform as ",(0,i.mdx)("inlineCode",{parentName:"p"},":A")," (as target platform gets inherited by ",(0,i.mdx)("inlineCode",{parentName:"p"},"attrs.toolchain_dep()"),"s)."),(0,i.mdx)("h2",{id:"running-non-execution-deps"},"Running non-execution deps"),(0,i.mdx)("p",null,"If you have a binary that you want to run, but it isn't a build tool, then you should use ",(0,i.mdx)("inlineCode",{parentName:"p"},"$(exe_target //:binary)")," rather than ",(0,i.mdx)("inlineCode",{parentName:"p"},"$(exe //:binary)"),". That will run the same binary that you'd get from ",(0,i.mdx)("inlineCode",{parentName:"p"},"buck2 build"),", rather than one that is built for the execution platform."),(0,i.mdx)("h2",{id:"execution-platform-resolution"},"Execution platform resolution"),(0,i.mdx)("p",null,"During analysis, unlike target platform resolution, every configured node undergoes execution platform resolution independently (see exception below). This\nmeans that even for a specific target platform, different nodes in the graph can be built on different execution platforms."),(0,i.mdx)("p",null,"This works roughly as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"next: for platform in execution_platforms:\n    if exec_compatible_with(target, platform):\n        for dep in target.execution_deps():\n            if !target_compatible_with(dep, platform):\n              continue next\n        return platform\nreturn err\n")),(0,i.mdx)("p",null,"One important note here is that until the execution platform has been resolved, ",(0,i.mdx)("strong",{parentName:"p"},"the configuration for execution deps is not known"),". Only after\nexecution platform has been resolved can the execution deps be configured (also, analysis for them can only be performed at that point)."),(0,i.mdx)("p",null,"For the normal use case, a particular configured target node performs execution platform resolution a single time. The execution platform ",(0,i.mdx)("strong",{parentName:"p"},"is not")," encoded in output paths."),(0,i.mdx)("p",null,"Regarding target compatibility, imagine the following pseudo-code for the ",(0,i.mdx)("inlineCode",{parentName:"p"},"target_compatible_with()")," function above:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-python"},"def target_compatible_with(target, cfg):\n    for constraint in target.target_compatible_with:\n        if not satisfied(constraint, cfg):\n            return False\n\n    if len(target.compatible_with) > 0:\n        found_satisfied_constraint = False\n        for constraint in target.compatible_with:\n            if satisfied(constraint, cfg):\n                found_satisfied_constraint = True\n                break\n        if not found_satisfied_constraint:\n            return False\n\n    for (dep, dep_cfg) in direct_deps(target):\n        # NB: recursive call\n        if not target_compatible_with(dep, dep_cfg):\n            return False\n\n    return True\n")),(0,i.mdx)("h2",{id:"execution-groups"},"Execution groups"),(0,i.mdx)("p",null,"Execution groups are a future feature that will allow a rule to perform execution platform resolution multiple times and then specify in which of the resolved\nplatforms each action runs in."))}u.isMDXComponent=!0}}]);