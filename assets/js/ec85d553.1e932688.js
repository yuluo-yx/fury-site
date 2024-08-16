"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[5298],{2752:(i,l,a)=>{a.r(l),a.d(l,{assets:()=>h,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var e=a(5893),t=a(1151);const n={slug:"fury_0_3_1_release",title:"Fury v0.3.1 released",authors:["chaokunyang"],tags:["fury"]},r="Fury v0.3.1 released",s={permalink:"/blog/fury_0_3_1_release",editUrl:"https://github.com/apache/fury-site/tree/main/i18n/en-us/docusaurus-plugin-content-blog/2023-11-21-fury_0_3_1_release.md",source:"@site/i18n/en-us/docusaurus-plugin-content-blog/2023-11-21-fury_0_3_1_release.md",title:"Fury v0.3.1 released",description:"This release was made before Fury joined the Apache Incubator and thus it's a non-ASF release.",date:"2023-11-21T00:00:00.000Z",formattedDate:"November 21, 2023",tags:[{label:"fury",permalink:"/blog/tags/fury"}],readingTime:2.805,hasTruncateMarker:!0,authors:[{name:"Shawn Yang",title:"Apache Fury PPMC Member",url:"https://github.com/chaokunyang",imageURL:"https://github.com/chaokunyang.png",key:"chaokunyang"}],frontMatter:{slug:"fury_0_3_1_release",title:"Fury v0.3.1 released",authors:["chaokunyang"],tags:["fury"]},unlisted:!1,prevItem:{title:"Fury 0.4.0 Released",permalink:"/blog/fury_0_4_0_release"},nextItem:{title:"Fury v0.3.0 released",permalink:"/blog/fury_0_3_0_release"}},h={authorsImageUrls:[void 0]},u=[{value:"Highlight",id:"highlight",level:2},{value:"What&#39;s Changed",id:"whats-changed",level:2},{value:"New Contributors",id:"new-contributors",level:2}];function o(i){const l={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...i.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(l.admonition,{type:"info",children:(0,e.jsx)(l.p,{children:(0,e.jsx)(l.strong,{children:"This release was made before Fury joined the Apache Incubator and thus it's a non-ASF release."})})}),"\n",(0,e.jsx)(l.p,{children:"I'm pleased to announce the 0.3.1 release of the Fury. With this release, fury supports python 3.11&3.12, droped python 3.6 support.\nMultiple scala serialization JIT optimization are included, and java serialization compatibility is improved too."}),"\n",(0,e.jsxs)(l.p,{children:["Author: ",(0,e.jsx)(l.a,{href:"https://github.com/chaokunyang",children:"chaokunyang"})]}),"\n",(0,e.jsx)(l.p,{children:"I'm pleased to announce the 0.3.1 release of the Fury. With this release, fury supports python 3.11&3.12, droped python 3.6 support.\nMultiple scala serialization JIT optimization are included, and java serialization compatibility is improved too."}),"\n",(0,e.jsx)(l.h2,{id:"highlight",children:"Highlight"}),"\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsx)(l.li,{children:"Support python 3.11 and 3.12, drop python 3.6 support"}),"\n",(0,e.jsx)(l.li,{children:"Refactor collection serialization framework to support writeReplace JIT"}),"\n",(0,e.jsx)(l.li,{children:"Integrate scala collection with fury java collection framework"}),"\n",(0,e.jsx)(l.li,{children:"Support scala collection jit serialization"}),"\n",(0,e.jsx)(l.li,{children:"Support shim dispatcher to resolve compatibility problems for common used classes"}),"\n",(0,e.jsx)(l.li,{children:"Use lastest arrow 14 version for row format in Java and Python"}),"\n"]}),"\n",(0,e.jsx)(l.h2,{id:"whats-changed",children:"What's Changed"}),"\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsxs)(l.li,{children:["[Doc] add scala sbt install doc by @chaokunyang in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1066",children:"https://github.com/alipay/fury/pull/1066"})]}),"\n",(0,e.jsxs)(l.li,{children:["[Doc] Update scala_guide.md by @chaokunyang in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1067",children:"https://github.com/alipay/fury/pull/1067"})]}),"\n",(0,e.jsxs)(l.li,{children:["[Doc] Add scala 2/3 support doc by @chaokunyang in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1068",children:"https://github.com/alipay/fury/pull/1068"})]}),"\n",(0,e.jsxs)(l.li,{children:["[Java]  Refactor collection serialization framework to support writeReplace JIT by @chaokunyang in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1062",children:"https://github.com/alipay/fury/pull/1062"})]}),"\n",(0,e.jsxs)(l.li,{children:["[Java] Refine collection package by @chaokunyang in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1070",children:"https://github.com/alipay/fury/pull/1070"})]}),"\n",(0,e.jsxs)(l.li,{children:["[Java] merge map/collection into collection package  by @chaokunyang in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1072",children:"https://github.com/alipay/fury/pull/1072"})]}),"\n",(0,e.jsxs)(l.li,{children:["[Scala] integrate scala collection with fury java collection framework by @chaokunyang in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1073",children:"https://github.com/alipay/fury/pull/1073"})]}),"\n",(0,e.jsxs)(l.li,{children:["remove unused part of build.sbt by @pjfanning in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1074",children:"https://github.com/alipay/fury/pull/1074"})]}),"\n",(0,e.jsxs)(l.li,{children:["[Scala] get build to work with Scala 3 by @pjfanning in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1075",children:"https://github.com/alipay/fury/pull/1075"})]}),"\n",(0,e.jsxs)(l.li,{children:["[Scala] support scala collection jit serialization by @chaokunyang in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1077",children:"https://github.com/alipay/fury/pull/1077"})]}),"\n",(0,e.jsxs)(l.li,{children:["[Doc] add apache license section to readme by @caicancai in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1080",children:"https://github.com/alipay/fury/pull/1080"})]}),"\n",(0,e.jsxs)(l.li,{children:["[Java] add option to disable class check warnings by @chaokunyang in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1084",children:"https://github.com/alipay/fury/pull/1084"})]}),"\n",(0,e.jsxs)(l.li,{children:["[Java] Fix collection serialization NPE when all elements are null by @chaokunyang in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1086",children:"https://github.com/alipay/fury/pull/1086"})]}),"\n",(0,e.jsxs)(l.li,{children:["[Java] FuryPooledObjectFactory getFury refactor, remove redundant recursive call by @mof-dev-3 in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1088",children:"https://github.com/alipay/fury/pull/1088"})]}),"\n",(0,e.jsxs)(l.li,{children:["[Rust] add rust-version by @wangweipeng2 in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1091",children:"https://github.com/alipay/fury/pull/1091"})]}),"\n",(0,e.jsxs)(l.li,{children:["[DOC] add javascript sample by @wangweipeng2 in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1095",children:"https://github.com/alipay/fury/pull/1095"})]}),"\n",(0,e.jsxs)(l.li,{children:["Make sure the c++ standard is set to 17 by @PragmaTwice in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1093",children:"https://github.com/alipay/fury/pull/1093"})]}),"\n",(0,e.jsxs)(l.li,{children:["Fix undefined behavior due to use of uninitialized field in Buffer by @PragmaTwice in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1092",children:"https://github.com/alipay/fury/pull/1092"})]}),"\n",(0,e.jsxs)(l.li,{children:["[Rust] merge derive and make it sample by @wangweipeng2 in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1098",children:"https://github.com/alipay/fury/pull/1098"})]}),"\n",(0,e.jsxs)(l.li,{children:["[DOC] add rust sample by @wangweipeng2 in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1100",children:"https://github.com/alipay/fury/pull/1100"})]}),"\n",(0,e.jsxs)(l.li,{children:["Simplify endian utility functions and ",(0,e.jsx)(l.code,{children:"IsOneOf"})," by @PragmaTwice in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1096",children:"https://github.com/alipay/fury/pull/1096"})]}),"\n",(0,e.jsxs)(l.li,{children:["[Java] throw error if nested fury serialize happen in serialization  by @chaokunyang in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1103",children:"https://github.com/alipay/fury/pull/1103"})]}),"\n",(0,e.jsxs)(l.li,{children:["[C++] remove useless FromXXXEndian by @chaokunyang in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1105",children:"https://github.com/alipay/fury/pull/1105"})]}),"\n",(0,e.jsxs)(l.li,{children:["[Rust ] Remove the magic numbers by @wangweipeng2 in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1107",children:"https://github.com/alipay/fury/pull/1107"})]}),"\n",(0,e.jsxs)(l.li,{children:["[Rust] chore: add rust doc by @wangweipeng2 in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1109",children:"https://github.com/alipay/fury/pull/1109"})]}),"\n",(0,e.jsxs)(l.li,{children:["[JavaScript] Fill in readme by @wangweipeng2 in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1110",children:"https://github.com/alipay/fury/pull/1110"})]}),"\n",(0,e.jsxs)(l.li,{children:["chore: check xlang flag by @wangweipeng2 in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1112",children:"https://github.com/alipay/fury/pull/1112"})]}),"\n",(0,e.jsxs)(l.li,{children:["[Java] Remove guava part1 by @chaokunyang in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1114",children:"https://github.com/alipay/fury/pull/1114"})]}),"\n",(0,e.jsxs)(l.li,{children:["[Rust] Correct language flag by @wangweipeng2 in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1120",children:"https://github.com/alipay/fury/pull/1120"})]}),"\n",(0,e.jsxs)(l.li,{children:["[Java] DateTimeUtils minor refactor, reuse floorDiv to calculate floorMod by @mof-dev-3 in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1122",children:"https://github.com/alipay/fury/pull/1122"})]}),"\n",(0,e.jsxs)(l.li,{children:["[Python] Support python3.11/12 by @chaokunyang in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1064",children:"https://github.com/alipay/fury/pull/1064"})]}),"\n",(0,e.jsxs)(l.li,{children:["[java] support shim dispatcher to resolve compatibility problems for common used classes by @xiguashu in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1123",children:"https://github.com/alipay/fury/pull/1123"})]}),"\n"]}),"\n",(0,e.jsx)(l.h2,{id:"new-contributors",children:"New Contributors"}),"\n",(0,e.jsxs)(l.ul,{children:["\n",(0,e.jsxs)(l.li,{children:["@pjfanning made their first contribution in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1074",children:"https://github.com/alipay/fury/pull/1074"})]}),"\n",(0,e.jsxs)(l.li,{children:["@mof-dev-3 made their first contribution in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1088",children:"https://github.com/alipay/fury/pull/1088"})]}),"\n",(0,e.jsxs)(l.li,{children:["@PragmaTwice made their first contribution in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1093",children:"https://github.com/alipay/fury/pull/1093"})]}),"\n",(0,e.jsxs)(l.li,{children:["@xiguashu made their first contribution in ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/pull/1123",children:"https://github.com/alipay/fury/pull/1123"})]}),"\n"]}),"\n",(0,e.jsxs)(l.p,{children:[(0,e.jsx)(l.strong,{children:"Full Changelog"}),": ",(0,e.jsx)(l.a,{href:"https://github.com/alipay/fury/compare/v0.3.0...v0.3.1",children:"https://github.com/alipay/fury/compare/v0.3.0...v0.3.1"})]})]})}function p(i={}){const{wrapper:l}={...(0,t.a)(),...i.components};return l?(0,e.jsx)(l,{...i,children:(0,e.jsx)(o,{...i})}):o(i)}},1151:(i,l,a)=>{a.d(l,{Z:()=>s,a:()=>r});var e=a(7294);const t={},n=e.createContext(t);function r(i){const l=e.useContext(n);return e.useMemo((function(){return"function"==typeof i?i(l):{...l,...i}}),[l,i])}function s(i){let l;return l=i.disableParentContext?"function"==typeof i.components?i.components(t):i.components||t:r(i.components),e.createElement(n.Provider,{value:l},i.children)}}}]);