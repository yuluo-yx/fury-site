"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[5863],{2861:(i,e,a)=>{a.r(e),a.d(e,{assets:()=>h,contentTitle:()=>r,default:()=>o,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var l=a(5893),t=a(1151);const n={slug:"fury_0_3_0_release",title:"Fury v0.3.0 released",authors:["chaokunyang"],tags:["fury"]},r="Fury v0.3.0 released",s={permalink:"/zh-cn/blog/fury_0_3_0_release",editUrl:"https://github.com/apache/fury-site/tree/main/i18n/zh-cn/docusaurus-plugin-content-blog/2023-11-04-fury_0_3_0_release.md",source:"@site/i18n/zh-cn/docusaurus-plugin-content-blog/2023-11-04-fury_0_3_0_release.md",title:"Fury v0.3.0 released",description:"This release was made before Fury joined the Apache Incubator and thus it's a non-ASF release.",date:"2023-11-04T00:00:00.000Z",formattedDate:"2023\u5e7411\u67084\u65e5",tags:[{label:"fury",permalink:"/zh-cn/blog/tags/fury"}],readingTime:4.125,hasTruncateMarker:!0,authors:[{name:"Shawn Yang",title:"Apache Fury PPMC Member",url:"https://github.com/chaokunyang",imageURL:"https://github.com/chaokunyang.png",key:"chaokunyang"}],frontMatter:{slug:"fury_0_3_0_release",title:"Fury v0.3.0 released",authors:["chaokunyang"],tags:["fury"]},unlisted:!1,prevItem:{title:"Fury v0.3.1 released",permalink:"/zh-cn/blog/fury_0_3_1_release"},nextItem:{title:"Fury v0.2.1 released",permalink:"/zh-cn/blog/fury_0_2_1_release"}},h={authorsImageUrls:[void 0]},u=[{value:"Scala Serialization Guide",id:"scala-serialization-guide",level:2},{value:"Highlight",id:"highlight",level:2},{value:"BugFix",id:"bugfix",level:2},{value:"What&#39;s Changed",id:"whats-changed",level:2},{value:"New Contributors",id:"new-contributors",level:2}];function c(i){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...i.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.admonition,{type:"info",children:(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"This release was made before Fury joined the Apache Incubator and thus it's a non-ASF release."})})}),"\n",(0,l.jsxs)(e.p,{children:["I'm pleased to announce the 0.3.0 release of the Fury. With this release, fury supports all scala 2/3 objects serializaiton now, including: ",(0,l.jsx)(e.strong,{children:"case/pojo/object/option/tuple/collecton/enum and other types"}),". case/pojo/object are tightly integrated with fury JIT. Fury will generate highly-optimized serializer by generate serialize code at runtime to speed up serializaiton. The serialization for those objects will be extremely fast."]}),"\n",(0,l.jsxs)(e.p,{children:["Author: ",(0,l.jsx)(e.a,{href:"https://github.com/chaokunyang",children:"chaokunyang"})]}),"\n",(0,l.jsxs)(e.p,{children:["I'm pleased to announce the 0.3.0 release of the Fury. With this release, fury supports all scala 2/3 objects serializaiton now, including: ",(0,l.jsx)(e.strong,{children:"case/pojo/object/option/tuple/collecton/enum and other types"}),". case/pojo/object are tightly integrated with fury JIT. Fury will generate highly-optimized serializer by generate serialize code at runtime to speed up serializaiton. The serialization for those objects will be extremely fast."]}),"\n",(0,l.jsx)(e.p,{children:"For a long time, scala serialization is always tricky, only reliable way is JDK serialization. But it\u2019s too slow, and the serialized size is too large. Although we have frameworks such as chill, but the support for scala types are limited, and the performance is limited too.Now with fury scala, you can serialize any scala objects you want and get extremly fast performance. Please try it out and let us know if you have any issues."}),"\n",(0,l.jsx)(e.h2,{id:"scala-serialization-guide",children:"Scala Serialization Guide"}),"\n",(0,l.jsx)(e.p,{children:"Install dependecy:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sbt",children:'libraryDependencies += "org.furyio" % "fury-core" % "0.3.0"\n'})}),"\n",(0,l.jsx)(e.p,{children:"Creating fury:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-scala",children:"val fury = Fury.builder()\n .withScalaOptimizationEnabled(true) \n .requireClassRegistration(false)\n .withRefTracking(true)\n .build()\n"})}),"\n",(0,l.jsx)(e.p,{children:"Serialize case objects:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-scala",children:'case class Person(github: String, age: Int, id: Long)\nval p = Person("https://github.com/chaokunyang", 18, 1)\nprintln(fury.deserialize(fury.serialize(p)))\nprintln(fury.deserializeJavaObject(fury.serializeJavaObject(p)))\n'})}),"\n",(0,l.jsx)(e.p,{children:"Serialize singleton objects:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-scala",children:"object singleton {\n}\nval o1 = fury.deserialize(fury.serialize(singleton)) \nval o2 = fury.deserialize(fury.serialize(singleton)) \nprintln(o1 == o2)\n"})}),"\n",(0,l.jsx)(e.p,{children:"Serialize collection objects:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-scala",children:'val seq = Seq(1,2)\nval list = List("a", "b") val map = Map("a" -> 1, "b" -> 2)\nprintln(fury.deserialize(fury.serialize(seq)))\nprintln(fury.deserialize(fury.serialize(list)))\nprintln(fury.deserialize(fury.serialize(map)))\n'})}),"\n",(0,l.jsx)(e.p,{children:"Serialize enum:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-scala",children:"enum Color { case Red, Green, Blue }\nprintln(fury.deserialize(fury.serialize(Color.Green)))\n"})}),"\n",(0,l.jsx)(e.h2,{id:"highlight",children:"Highlight"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["[Scala] Support scala serialization: ",(0,l.jsx)(e.code,{children:"case/object/tuple/string/collection/enum/basic"})," all supported"]}),"\n",(0,l.jsxs)(e.li,{children:["[Scala] Add ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/blob/main/docs/guide/scala_guide.md",children:"scala user documentation"})]}),"\n",(0,l.jsx)(e.li,{children:"[Scala] add optimized scala singleton object serializer"}),"\n",(0,l.jsxs)(e.li,{children:["[Java] Make ",(0,l.jsx)(e.code,{children:"java.io.Externalizable"})," compatible with Java ",(0,l.jsx)(e.code,{children:"writeReplace/readResolve"})," API"]}),"\n",(0,l.jsxs)(e.li,{children:["[Java] Integrate fury with dubbo ",(0,l.jsx)(e.a,{href:"https://github.com/apache/dubbo-spi-extensions/pull/226",children:"https://github.com/apache/dubbo-spi-extensions/pull/226"})]}),"\n",(0,l.jsx)(e.li,{children:"[Java] support bytes string serialization for jdk8 with JDK17 runtime"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"bugfix",children:"BugFix"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["[Java] Allow for ",(0,l.jsx)(e.code,{children:"InputStream"})," not reading entire length"]}),"\n",(0,l.jsxs)(e.li,{children:["[Java] Use ",(0,l.jsx)(e.code,{children:"ReflectionUtils.getCtrHandle()"})," for non-public constructor in ",(0,l.jsx)(e.code,{children:"ExternalizableSerializer"})]}),"\n",(0,l.jsx)(e.li,{children:"[Java] fix jdk compatible serialization for inheritance"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"whats-changed",children:"What's Changed"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["[Impove][Doc] Improve README by @caicancai in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1011",children:"https://github.com/alipay/fury/pull/1011"})]}),"\n",(0,l.jsxs)(e.li,{children:["[Java] rename wrong ascii naming to latin by @chaokunyang in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1013",children:"https://github.com/alipay/fury/pull/1013"})]}),"\n",(0,l.jsxs)(e.li,{children:["[Doc] Update go install doc by @chaokunyang in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1015",children:"https://github.com/alipay/fury/pull/1015"})]}),"\n",(0,l.jsxs)(e.li,{children:["fix(grammatical): correct typos and improve grammar by @iamahens in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1018",children:"https://github.com/alipay/fury/pull/1018"})]}),"\n",(0,l.jsxs)(e.li,{children:["[Improve][Doc] Improve README by @caicancai in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1020",children:"https://github.com/alipay/fury/pull/1020"})]}),"\n",(0,l.jsxs)(e.li,{children:["[Improve][Doc] add environment requirement by @caicancai in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1022",children:"https://github.com/alipay/fury/pull/1022"})]}),"\n",(0,l.jsxs)(e.li,{children:["chore(docs): fixed typos by @Smoothieewastaken in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1023",children:"https://github.com/alipay/fury/pull/1023"})]}),"\n",(0,l.jsxs)(e.li,{children:["bugfix: read buffer error when object contain binary field by @wangweipeng2 in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1026",children:"https://github.com/alipay/fury/pull/1026"})]}),"\n",(0,l.jsxs)(e.li,{children:["[Doc] Optimize class registration doc by @chaokunyang in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1027",children:"https://github.com/alipay/fury/pull/1027"})]}),"\n",(0,l.jsxs)(e.li,{children:["[Java] fix jdk compatible serialization for inheritance by @chaokunyang in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1030",children:"https://github.com/alipay/fury/pull/1030"})]}),"\n",(0,l.jsxs)(e.li,{children:["[Doc] add scala user doc by @chaokunyang in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1028",children:"https://github.com/alipay/fury/pull/1028"})]}),"\n",(0,l.jsxs)(e.li,{children:["[Doc] refine scala doc by @chaokunyang in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1031",children:"https://github.com/alipay/fury/pull/1031"})]}),"\n",(0,l.jsxs)(e.li,{children:["Update README.md - fix grammatrical errors in README. by @ayushrakesh in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1037",children:"https://github.com/alipay/fury/pull/1037"})]}),"\n",(0,l.jsxs)(e.li,{children:["[Java] Support local static class jit by @chaokunyang in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1036",children:"https://github.com/alipay/fury/pull/1036"})]}),"\n",(0,l.jsxs)(e.li,{children:["[Java] support bytes string serialization for jdk8 by @chaokunyang in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1039",children:"https://github.com/alipay/fury/pull/1039"})]}),"\n",(0,l.jsxs)(e.li,{children:["[Java] set timeout to JITContextTest by @chaokunyang in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1040",children:"https://github.com/alipay/fury/pull/1040"})]}),"\n",(0,l.jsxs)(e.li,{children:["[Java] fix string builder serialization for jdk8 with jdk17 runtime by @chaokunyang in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1042",children:"https://github.com/alipay/fury/pull/1042"})]}),"\n",(0,l.jsxs)(e.li,{children:["[Doc] add auto code reviewers by @chaokunyang in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1043",children:"https://github.com/alipay/fury/pull/1043"})]}),"\n",(0,l.jsxs)(e.li,{children:["[Java] Allow for ",(0,l.jsx)(e.code,{children:"InputStream"})," not reading entire length by @knutwannheden in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1034",children:"https://github.com/alipay/fury/pull/1034"})]}),"\n",(0,l.jsxs)(e.li,{children:["[Java] Use ",(0,l.jsx)(e.code,{children:"ReflectionUtils.getCtrHandle()"})," in ",(0,l.jsx)(e.code,{children:"ExternalizableSerializer"})," by @knutwannheden in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1044",children:"https://github.com/alipay/fury/pull/1044"})]}),"\n",(0,l.jsxs)(e.li,{children:["[Improve] make maven-spotless-plugin version as a parameter by @caicancai in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1046",children:"https://github.com/alipay/fury/pull/1046"})]}),"\n",(0,l.jsxs)(e.li,{children:["Update README.md by @Shivam250702 in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1047",children:"https://github.com/alipay/fury/pull/1047"})]}),"\n",(0,l.jsxs)(e.li,{children:["[Java] support writeReplace/readResolve for Externalizable by @chaokunyang in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1048",children:"https://github.com/alipay/fury/pull/1048"})]}),"\n",(0,l.jsxs)(e.li,{children:["Update README.md by @Spyrosigma in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1051",children:"https://github.com/alipay/fury/pull/1051"})]}),"\n",(0,l.jsxs)(e.li,{children:["Grammatical error in CODE_OF_CONDUCT.md by @HimanshuMahto in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1050",children:"https://github.com/alipay/fury/pull/1050"})]}),"\n",(0,l.jsxs)(e.li,{children:["Update scala link title README.md by @chaokunyang in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1052",children:"https://github.com/alipay/fury/pull/1052"})]}),"\n",(0,l.jsxs)(e.li,{children:["[Doc] add scala readme and refine document by @chaokunyang in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1041",children:"https://github.com/alipay/fury/pull/1041"})]}),"\n",(0,l.jsxs)(e.li,{children:["[Java] populate StackOverflowError with enable ref tracking message by @chaokunyang in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1049",children:"https://github.com/alipay/fury/pull/1049"})]}),"\n",(0,l.jsxs)(e.li,{children:["[Scala] Setup scala project by @chaokunyang in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1054",children:"https://github.com/alipay/fury/pull/1054"})]}),"\n",(0,l.jsxs)(e.li,{children:["[Scala] add scala singleton object serializer by @chaokunyang in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1053",children:"https://github.com/alipay/fury/pull/1053"})]}),"\n",(0,l.jsxs)(e.li,{children:["Updated README.md by @vidhijain27 in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1056",children:"https://github.com/alipay/fury/pull/1056"})]}),"\n",(0,l.jsxs)(e.li,{children:["[Scala] add scala tuple serialization tests  by @chaokunyang in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1059",children:"https://github.com/alipay/fury/pull/1059"})]}),"\n",(0,l.jsxs)(e.li,{children:["Empty ListExpression#genCode will throw npe by @farmerworking in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1063",children:"https://github.com/alipay/fury/pull/1063"})]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"new-contributors",children:"New Contributors"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["@iamahens made their first contribution in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1018",children:"https://github.com/alipay/fury/pull/1018"})]}),"\n",(0,l.jsxs)(e.li,{children:["@Smoothieewastaken made their first contribution in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1023",children:"https://github.com/alipay/fury/pull/1023"})]}),"\n",(0,l.jsxs)(e.li,{children:["@ayushrakesh made their first contribution in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1037",children:"https://github.com/alipay/fury/pull/1037"})]}),"\n",(0,l.jsxs)(e.li,{children:["@knutwannheden made their first contribution in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1034",children:"https://github.com/alipay/fury/pull/1034"})]}),"\n",(0,l.jsxs)(e.li,{children:["@Shivam250702 made their first contribution in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1047",children:"https://github.com/alipay/fury/pull/1047"})]}),"\n",(0,l.jsxs)(e.li,{children:["@Spyrosigma made their first contribution in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1051",children:"https://github.com/alipay/fury/pull/1051"})]}),"\n",(0,l.jsxs)(e.li,{children:["@HimanshuMahto made their first contribution in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1050",children:"https://github.com/alipay/fury/pull/1050"})]}),"\n",(0,l.jsxs)(e.li,{children:["@vidhijain27 made their first contribution in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1056",children:"https://github.com/alipay/fury/pull/1056"})]}),"\n",(0,l.jsxs)(e.li,{children:["@farmerworking made their first contribution in ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/pull/1063",children:"https://github.com/alipay/fury/pull/1063"})]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"Full Changelog"}),": ",(0,l.jsx)(e.a,{href:"https://github.com/alipay/fury/compare/v0.2.1...v0.3.0",children:"https://github.com/alipay/fury/compare/v0.2.1...v0.3.0"})]})]})}function o(i={}){const{wrapper:e}={...(0,t.a)(),...i.components};return e?(0,l.jsx)(e,{...i,children:(0,l.jsx)(c,{...i})}):c(i)}},1151:(i,e,a)=>{a.d(e,{Z:()=>s,a:()=>r});var l=a(7294);const t={},n=l.createContext(t);function r(i){const e=l.useContext(n);return l.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function s(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(t):i.components||t:r(i.components),l.createElement(n.Provider,{value:e},i.children)}}}]);