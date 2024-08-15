"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[3493],{743:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var t=o(5893),n=o(1151);const r={id:"introduction",title:"Introduction",sidebar_position:1},a=void 0,s={id:"introduction/introduction",title:"Introduction",description:"Fury is a blazing fast multi-language serialization framework powered by jit(just-in-time compilation) and zero-copy.",source:"@site/docs/introduction/introduction.md",sourceDirName:"introduction",slug:"/introduction/",permalink:"/zh-CN/docs/introduction/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"Introduction",sidebar_position:1},sidebar:"introductionSidebar",next:{title:"Benchmark",permalink:"/zh-CN/docs/introduction/benchmark"}},l={},c=[{value:"Protocols",id:"protocols",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Schema Compatibility",id:"schema-compatibility",level:3},{value:"Binary Compatibility",id:"binary-compatibility",level:3},{value:"Security",id:"security",level:2},{value:"RoadMap",id:"roadmap",level:2},{value:"How to Contribute",id:"how-to-contribute",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"Fury is a blazing fast multi-language serialization framework powered by jit(just-in-time compilation) and zero-copy."}),"\n",(0,t.jsx)(i.h2,{id:"protocols",children:"Protocols"}),"\n",(0,t.jsx)(i.p,{children:"Different scenarios have different serialization requirements. Fury designed and implemented\nmultiple binary protocols for those requirements:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Cross-language object graph protocol:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Cross-language serialize any object automatically, no need for IDL definition, schema compilation and object to/from protocol\nconversion."}),"\n",(0,t.jsx)(i.li,{children:"Support shared reference and circular reference, no duplicate data or recursion error."}),"\n",(0,t.jsx)(i.li,{children:"Support object polymorphism."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"Native java/python object graph protocol: highly-optimized based on type system of the language."}),"\n",(0,t.jsx)(i.li,{children:"Row format protocol: a cache-friendly binary random access format, supports skipping serialization and partial serialization,\nand can convert to column-format automatically."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"New protocols can be added easily based on fury existing buffer, encoding, meta, codegen and other capabilities. All of those share same codebase, and the optimization for one protocol\ncan be reused by another protocol."}),"\n",(0,t.jsx)(i.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsx)(i.h3,{id:"schema-compatibility",children:"Schema Compatibility"}),"\n",(0,t.jsx)(i.p,{children:"Fury java object graph serialization support class schema forward/backward compatibility. The serialization peer and deserialization peer can add/delete fields independently."}),"\n",(0,t.jsxs)(i.p,{children:["We plan to add support cross-language serialization after ",(0,t.jsx)(i.a,{href:"https://github.com/apache/fury/issues/203",children:"meta compression"})," are finished."]}),"\n",(0,t.jsx)(i.h3,{id:"binary-compatibility",children:"Binary Compatibility"}),"\n",(0,t.jsxs)(i.p,{children:["We are still improving our protocols, binary compatibility are not ensured between fury releases for now. Please ",(0,t.jsx)(i.code,{children:"shade"})," fury if you will upgrade fury in the future."]}),"\n",(0,t.jsx)(i.p,{children:"Binary compatibility will be ensured before fury 1.0."}),"\n",(0,t.jsx)(i.h2,{id:"security",children:"Security"}),"\n",(0,t.jsx)(i.p,{children:"Static serialization such as row format are secure by nature. But dynamic object graph serialization supports deserialize unregistered types, which can introduce security risks."}),"\n",(0,t.jsxs)(i.p,{children:["For example, the deserialization may invoke ",(0,t.jsx)(i.code,{children:"init"})," constructor or ",(0,t.jsx)(i.code,{children:"equals"}),"/",(0,t.jsx)(i.code,{children:"hashCode"})," method, if the method body contains malicious code, the system will be at risks."]}),"\n",(0,t.jsx)(i.p,{children:"Fury provides a class registration mode option and enabled by default for this protocol, which allows deserializing trusted registered types or built-in types only for security."}),"\n",(0,t.jsxs)(i.p,{children:["Fury provides a class registration option and enabled by default for such protocols, which allows only deserializing trusted registered types or built-in types. ",(0,t.jsx)(i.strong,{children:"Do not disable class registration or class registration checks unless you can ensure your environment is indeed secure"}),". We are not responsible for security if you disabled the class registration option."]}),"\n",(0,t.jsx)(i.h2,{id:"roadmap",children:"RoadMap"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Meta compression, auto meta sharing and cross-language schema compatibility."}),"\n",(0,t.jsx)(i.li,{children:"AOT Framework for c++/golang to generate code statically."}),"\n",(0,t.jsx)(i.li,{children:"C++/Rust object graph serialization support"}),"\n",(0,t.jsx)(i.li,{children:"Golang/Rust/NodeJS row format support"}),"\n",(0,t.jsx)(i.li,{children:"ProtoBuffer compatibility support"}),"\n",(0,t.jsx)(i.li,{children:"Protocols for features and knowledge graph serialization"}),"\n",(0,t.jsx)(i.li,{children:"Continuously improve our serialization infrastructure for any new protocols"}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"how-to-contribute",children:"How to Contribute"}),"\n",(0,t.jsxs)(i.p,{children:["Please read the ",(0,t.jsx)(i.a,{href:"https://github.com/apache/fury/blob/main/CONTRIBUTING.md",children:"CONTRIBUTING"})," guide for instructions on how to contribute."]})]})}function u(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,i,o)=>{o.d(i,{Z:()=>s,a:()=>a});var t=o(7294);const n={},r=t.createContext(n);function a(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);