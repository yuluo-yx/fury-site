"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[2901],{2477:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>o,frontMatter:()=>h,metadata:()=>l,toc:()=>c});var r=i(5893),a=i(1151);const h={slug:"fury_0_6_0_release",title:"Fury 0.6.0 Released",authors:["chaokunyang"],tags:["fury"]},n=void 0,l={permalink:"/zh-CN/blog/fury_0_6_0_release",source:"@site/blog/2024-07-23-fury_0_6_0_release.md",title:"Fury 0.6.0 Released",description:"The Apache Fury team is pleased to announce the 0.6.0 release. This is a major release that includes 35 PR from 12 distinct contributors. See the Install Page to learn how to get the libraries for your platform.",date:"2024-07-23T00:00:00.000Z",formattedDate:"2024\u5e747\u670823\u65e5",tags:[{label:"fury",permalink:"/zh-CN/blog/tags/fury"}],readingTime:4.265,hasTruncateMarker:!1,authors:[{name:"Shawn Yang",title:"Apache Fury PPMC Member",url:"https://github.com/chaokunyang",imageURL:"https://github.com/chaokunyang.png",key:"chaokunyang"}],frontMatter:{slug:"fury_0_6_0_release",title:"Fury 0.6.0 Released",authors:["chaokunyang"],tags:["fury"]},unlisted:!1,prevItem:{title:"Fury v0.7.0 Released",permalink:"/zh-CN/blog/fury_0_7_0_release"},nextItem:{title:"Fury 0.5.1 Released",permalink:"/zh-CN/blog/fury_0_5_1_release"}},s={authorsImageUrls:[void 0]},c=[{value:"High light",id:"high-light",level:2},{value:"Serialize data",id:"serialize-data",level:3},{value:"Result",id:"result",level:3},{value:"Feature",id:"feature",level:2},{value:"Bug Fix",id:"bug-fix",level:2},{value:"Others",id:"others",level:2},{value:"New Contributors",id:"new-contributors",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The Apache Fury team is pleased to announce the 0.6.0 release. This is a major release that includes ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/compare/v0.5.1...v0.6.0",children:"35 PR"})," from 12 distinct contributors. See the ",(0,r.jsx)(t.a,{href:"https://fury.apache.org/docs/start/install",children:"Install"})," Page to learn how to get the libraries for your platform."]}),"\n",(0,r.jsx)(t.h2,{id:"high-light",children:"High light"}),"\n",(0,r.jsxs)(t.p,{children:["In this release, we introduced a scoped meta share mode for schema evolution in java and enabled it by default when ",(0,r.jsx)(t.code,{children:"CompatibleMode"})," is set to ",(0,r.jsx)(t.code,{children:"Compatible"}),":"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["This mode is ",(0,r.jsx)(t.strong,{children:"50%"})," faster than previous KV compatible mode, and only ",(0,r.jsx)(t.strong,{children:"1/6"})," size of serialized payload than before."]}),"\n",(0,r.jsxs)(t.li,{children:["It's ",(0,r.jsx)(t.strong,{children:"4x"})," faster than protobuf, less than ",(0,r.jsx)(t.strong,{children:"1/2"})," serialized size of protobuf for complex object."]}),"\n"]}),"\n",(0,r.jsxs)("p",{children:[(0,r.jsx)("img",{width:"44%",alt:"Perfomance",src:"/img/20240723/perf.png"}),(0,r.jsx)("img",{width:"44%",alt:"Size",src:"/img/20240723/size.png"})]}),"\n",(0,r.jsx)(t.p,{children:"Protobuf/JSON will write message fields meta and values in a KV layout, so when serializzing a list of message, they will have two issues:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Write meta multiple times even those message are the same type."}),"\n",(0,r.jsx)(t.li,{children:"KV layout is dispersive, which is not friendly for compression."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"The meta share mode will write  field name&type meta of a struct only once for multiple objects of same type, which will save space and improve performance comparedto protobuf."}),"\n",(0,r.jsx)(t.p,{children:"With meta share, we can write field name&type meta of a struct only once for multiple objects of same type, which will save space and improve performance comparedto protobuf. And we can also encode the meta into binary in advance, and use one memory copy to write it which will be much faster."}),"\n",(0,r.jsx)(t.h3,{id:"serialize-data",children:"Serialize data"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"  public static class NumericStruct {\n    public int f1;\n    public int f2;\n    public int f3;\n    public int f4;\n    public int f5;\n    public int f6;\n    public int f7;\n    public int f8;\n\n    public static NumericStruct build() {\n      NumericStruct struct = new NumericStruct();\n      struct.f1 = 1;\n      struct.f2 = 2;\n      struct.f3 = 3;\n      struct.f4 = 4;\n      struct.f5 = 5;\n      struct.f6 = 6;\n      struct.f7 = 7;\n      struct.f8 = 8;\n      return struct;\n    }\n  }\n\n  public static class NumericStructList {\n    public List<NumericStruct> list;\n\n    public static NumericStructList build() {\n      NumericStructList structList = new NumericStructList();\n      structList.list = new ArrayList<>(1000);\n      for (int i = 0; i < 1000; i++) {\n        structList.list.add(NumericStruct.build());\n      }\n      return structList;\n    }\n"})}),"\n",(0,r.jsx)(t.h3,{id:"result",children:"Result"}),"\n",(0,r.jsx)(t.p,{children:"Performance:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Benchmark                       Mode  Cnt      Score      Error  Units\nfury_deserialize                thrpt   30  49667.900 \xb1 3004.061  ops/s\nfury_kv_compatible_deserialize  thrpt   30  33014.595 \xb1 3716.199  ops/s\nfury_kv_compatible_serialize    thrpt   30  23915.260 \xb1 3968.119  ops/s\nfury_serialize                  thrpt   30  63146.826 \xb1 2930.505  ops/s\nprotobuf_deserialize            thrpt   30  14156.610 \xb1  685.272  ops/s\nprotobuf_serialize              thrpt   30  10060.293 \xb1  706.064  ops/s\n"})}),"\n",(0,r.jsx)(t.p,{children:"Size:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Lib"}),(0,r.jsx)(t.th,{children:"Serialized Payload Size"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fury"}),(0,r.jsx)(t.td,{children:"8077"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"furystrict"}),(0,r.jsx)(t.td,{children:"8009"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"furykv"}),(0,r.jsx)(t.td,{children:"48028"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"protobuf"}),(0,r.jsx)(t.td,{children:"18000"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"feature",children:"Feature"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["feat(java): support nonexistent class deserialization in meta share mode by @chaokunyang in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1646",children:"https://github.com/apache/fury/pull/1646"})]}),"\n",(0,r.jsxs)(t.li,{children:["feat(java): scoped meta share mode for type forward/backward compaibility by @chaokunyang in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1660",children:"https://github.com/apache/fury/pull/1660"})]}),"\n",(0,r.jsxs)(t.li,{children:["feat(java): support meta compression by Deflater by @chaokunyang in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1663",children:"https://github.com/apache/fury/pull/1663"})]}),"\n",(0,r.jsxs)(t.li,{children:["perf(java): Add ClassInfo ClassBytes generation conditions. by @LiangliangSui in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1667",children:"https://github.com/apache/fury/pull/1667"})]}),"\n",(0,r.jsxs)(t.li,{children:["feat(javascript): use TextDecoder to decode buffer by @bytemain in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1699",children:"https://github.com/apache/fury/pull/1699"})]}),"\n",(0,r.jsxs)(t.li,{children:["feat(Python): meta string encoding algorithm in Python by @pandalee99 in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1702",children:"https://github.com/apache/fury/pull/1702"})]}),"\n",(0,r.jsxs)(t.li,{children:["feat(C++): String detection is performed using SIMD techniques by @pandalee99 in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1720",children:"https://github.com/apache/fury/pull/1720"})]}),"\n",(0,r.jsxs)(t.li,{children:["feat(C++): The use of SIMD accelerated to implement and optimize utf16 utf8 by @pandalee99 in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1732",children:"https://github.com/apache/fury/pull/1732"})]}),"\n",(0,r.jsxs)(t.li,{children:["feat(java): enable scoped meta share for compatible mode by default by @chaokunyang in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1733",children:"https://github.com/apache/fury/pull/1733"})]}),"\n",(0,r.jsxs)(t.li,{children:["perf(java): optimize scoped meta share mode perf by @chaokunyang in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1734",children:"https://github.com/apache/fury/pull/1734"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"bug-fix",children:"Bug Fix"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["chore(doc): fix example by @wangjie-fourth in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1657",children:"https://github.com/apache/fury/pull/1657"})]}),"\n",(0,r.jsxs)(t.li,{children:["fix(java): fix scala object type codegen by @chaokunyang in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1659",children:"https://github.com/apache/fury/pull/1659"})]}),"\n",(0,r.jsxs)(t.li,{children:["fix(java): Fix header offset issue in MetaStringBytes hashcode by @LiangliangSui in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1668",children:"https://github.com/apache/fury/pull/1668"})]}),"\n",(0,r.jsxs)(t.li,{children:["fix(java): return fury to pooled which get from by @MrChang0 in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1697",children:"https://github.com/apache/fury/pull/1697"})]}),"\n",(0,r.jsxs)(t.li,{children:["fix(doc): codestyle version in python by @pandalee99 in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1706",children:"https://github.com/apache/fury/pull/1706"})]}),"\n",(0,r.jsxs)(t.li,{children:["fix(java): fix nested map serialization codegen by @chaokunyang in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1713",children:"https://github.com/apache/fury/pull/1713"})]}),"\n",(0,r.jsxs)(t.li,{children:["fix(java): fix fastjson object serialization by @chaokunyang in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1717",children:"https://github.com/apache/fury/pull/1717"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"others",children:"Others"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["chore: Add IssueNavigationLink and icon for IDEA by @lvshaokang in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1665",children:"https://github.com/apache/fury/pull/1665"})]}),"\n",(0,r.jsxs)(t.li,{children:["chore(rust): resolve deprecate warnings by @waynexia in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1662",children:"https://github.com/apache/fury/pull/1662"})]}),"\n",(0,r.jsxs)(t.li,{children:["chore(doc): fix doc example code by @wangjie-fourth in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1666",children:"https://github.com/apache/fury/pull/1666"})]}),"\n",(0,r.jsxs)(t.li,{children:["chore(rust): Setup rustfmt and toolchain for rust by @Xuanwo in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1677",children:"https://github.com/apache/fury/pull/1677"})]}),"\n",(0,r.jsxs)(t.li,{children:["chore(rust): Make rust clippy happy by @Xuanwo in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1678",children:"https://github.com/apache/fury/pull/1678"})]}),"\n",(0,r.jsxs)(t.li,{children:["chore(doc): add incubating DISCLAIMER by @chaokunyang in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1681",children:"https://github.com/apache/fury/pull/1681"})]}),"\n",(0,r.jsxs)(t.li,{children:["chore(java): Update github URL in IntelliJ vcs.xml by @pjfanning in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1689",children:"https://github.com/apache/fury/pull/1689"})]}),"\n",(0,r.jsxs)(t.li,{children:["ci: fix ci error by @LiangliangSui in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1691",children:"https://github.com/apache/fury/pull/1691"})]}),"\n",(0,r.jsxs)(t.li,{children:["docs: fix badge x by @vesense in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1694",children:"https://github.com/apache/fury/pull/1694"})]}),"\n",(0,r.jsxs)(t.li,{children:["chore(doc): fix compiler error by @wangjie-fourth in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1698",children:"https://github.com/apache/fury/pull/1698"})]}),"\n",(0,r.jsxs)(t.li,{children:["refactor(java): move latin language checker method from string serializer to string util by @anagh07 in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1708",children:"https://github.com/apache/fury/pull/1708"})]}),"\n",(0,r.jsxs)(t.li,{children:["chore(doc): the more complete readme is in python by @pandalee99 in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1709",children:"https://github.com/apache/fury/pull/1709"})]}),"\n",(0,r.jsxs)(t.li,{children:["build: update scala build by @pjfanning in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1725",children:"https://github.com/apache/fury/pull/1725"})]}),"\n",(0,r.jsxs)(t.li,{children:["build: publish jars for fury-scala by @pjfanning in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1729",children:"https://github.com/apache/fury/pull/1729"})]}),"\n",(0,r.jsxs)(t.li,{children:["chore(java): merge reflect.Types into TypeRef by @chaokunyang in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1731",children:"https://github.com/apache/fury/pull/1731"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"new-contributors",children:"New Contributors"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["@wangjie-fourth made their first contribution in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1657",children:"https://github.com/apache/fury/pull/1657"})]}),"\n",(0,r.jsxs)(t.li,{children:["@lvshaokang made their first contribution in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1665",children:"https://github.com/apache/fury/pull/1665"})]}),"\n",(0,r.jsxs)(t.li,{children:["@waynexia made their first contribution in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1662",children:"https://github.com/apache/fury/pull/1662"})]}),"\n",(0,r.jsxs)(t.li,{children:["@Xuanwo made their first contribution in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1677",children:"https://github.com/apache/fury/pull/1677"})]}),"\n",(0,r.jsxs)(t.li,{children:["@anagh07 made their first contribution in ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/pull/1708",children:"https://github.com/apache/fury/pull/1708"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Full Changelog"}),": ",(0,r.jsx)(t.a,{href:"https://github.com/apache/fury/compare/v0.5.1...v0.6.0",children:"https://github.com/apache/fury/compare/v0.5.1...v0.6.0"})]})]})}function o(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>n});var r=i(7294);const a={},h=r.createContext(a);function n(e){const t=r.useContext(h);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),r.createElement(h.Provider,{value:t},e.children)}}}]);