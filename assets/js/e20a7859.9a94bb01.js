"use strict";(self.webpackChunkfury_site=self.webpackChunkfury_site||[]).push([[1186],{8126:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>c,contentTitle:()=>s,default:()=>j,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var t=n(5893),r=n(1151);const i={title:"Type Mapping of Xlang Serialization",sidebar_position:3,id:"xlang_type_mapping"},s=void 0,l={id:"guide/xlang_type_mapping",title:"Type Mapping of Xlang Serialization",description:"Note:",source:"@site/docs/guide/xlang_type_mapping.md",sourceDirName:"guide",slug:"/guide/xlang_type_mapping",permalink:"/docs/guide/xlang_type_mapping",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Type Mapping of Xlang Serialization",sidebar_position:3,id:"xlang_type_mapping"},sidebar:"guideSidebar",previous:{title:"Xlang Serialization Guide",permalink:"/docs/guide/xlang_object_graph_guide"},next:{title:"Scala Serialization Guide",permalink:"/docs/guide/scala_guide"}},c={},h=[{value:"Type info(not implemented currently)",id:"type-infonot-implemented-currently",level:2},{value:"Type annotation",id:"type-annotation",level:2},{value:"Type wrapper",id:"type-wrapper",level:2}];function x(e){const d={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.p,{children:"Note:"}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsxs)(d.li,{children:["For type definition, see ",(0,t.jsx)(d.a,{href:"/docs/specification/fury_xlang_serialization_spec#type-systems",children:"Type Systems in Spec"})]}),"\n",(0,t.jsxs)(d.li,{children:[(0,t.jsx)(d.code,{children:"int16_t[n]/vector<T>"})," indicates ",(0,t.jsx)(d.code,{children:"int16_t[n]/vector<int16_t>"})]}),"\n",(0,t.jsx)(d.li,{children:"The cross-language serialization is not stable, do not use it in your production environment."}),"\n"]}),"\n",(0,t.jsxs)(d.table,{children:[(0,t.jsx)(d.thead,{children:(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.th,{children:"Fury Type"}),(0,t.jsx)(d.th,{children:"Fury Type ID"}),(0,t.jsx)(d.th,{children:"Java"}),(0,t.jsx)(d.th,{children:"Python"}),(0,t.jsx)(d.th,{children:"Javascript"}),(0,t.jsx)(d.th,{children:"C++"}),(0,t.jsx)(d.th,{children:"Golang"}),(0,t.jsx)(d.th,{children:"Rust"})]})}),(0,t.jsxs)(d.tbody,{children:[(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"bool"}),(0,t.jsx)(d.td,{children:"1"}),(0,t.jsx)(d.td,{children:"bool/Boolean"}),(0,t.jsx)(d.td,{children:"bool"}),(0,t.jsx)(d.td,{children:"Boolean"}),(0,t.jsx)(d.td,{children:"bool"}),(0,t.jsx)(d.td,{children:"bool"}),(0,t.jsx)(d.td,{children:"bool"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"int8"}),(0,t.jsx)(d.td,{children:"2"}),(0,t.jsx)(d.td,{children:"byte/Byte"}),(0,t.jsx)(d.td,{children:"int/pyfury.Int8"}),(0,t.jsx)(d.td,{children:"Type.int8()"}),(0,t.jsx)(d.td,{children:"int8_t"}),(0,t.jsx)(d.td,{children:"int8"}),(0,t.jsx)(d.td,{children:"i8"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"int16"}),(0,t.jsx)(d.td,{children:"3"}),(0,t.jsx)(d.td,{children:"short/Short"}),(0,t.jsx)(d.td,{children:"int/pyfury.Int16"}),(0,t.jsx)(d.td,{children:"Type.int16()"}),(0,t.jsx)(d.td,{children:"int16_t"}),(0,t.jsx)(d.td,{children:"int16"}),(0,t.jsx)(d.td,{children:"i6"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"int32"}),(0,t.jsx)(d.td,{children:"4"}),(0,t.jsx)(d.td,{children:"int/Integer"}),(0,t.jsx)(d.td,{children:"int/pyfury.Int32"}),(0,t.jsx)(d.td,{children:"Type.int32()"}),(0,t.jsx)(d.td,{children:"int32_t"}),(0,t.jsx)(d.td,{children:"int32"}),(0,t.jsx)(d.td,{children:"i32"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"var_int32"}),(0,t.jsx)(d.td,{children:"5"}),(0,t.jsx)(d.td,{children:"int/Integer"}),(0,t.jsx)(d.td,{children:"int/pyfury.VarInt32"}),(0,t.jsx)(d.td,{children:"Type.varint32()"}),(0,t.jsx)(d.td,{children:"fury::varint32_t"}),(0,t.jsx)(d.td,{children:"fury.varint32"}),(0,t.jsx)(d.td,{children:"fury::varint32"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"int64"}),(0,t.jsx)(d.td,{children:"6"}),(0,t.jsx)(d.td,{children:"long/Long"}),(0,t.jsx)(d.td,{children:"int/pyfury.Int64"}),(0,t.jsx)(d.td,{children:"Type.int64()"}),(0,t.jsx)(d.td,{children:"int64_t"}),(0,t.jsx)(d.td,{children:"int64"}),(0,t.jsx)(d.td,{children:"i64"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"var_int64"}),(0,t.jsx)(d.td,{children:"7"}),(0,t.jsx)(d.td,{children:"long/Long"}),(0,t.jsx)(d.td,{children:"int/pyfury.VarInt64"}),(0,t.jsx)(d.td,{children:"Type.varint64()"}),(0,t.jsx)(d.td,{children:"fury::varint64_t"}),(0,t.jsx)(d.td,{children:"fury.varint64"}),(0,t.jsx)(d.td,{children:"fury::varint64"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"sli_int64"}),(0,t.jsx)(d.td,{children:"8"}),(0,t.jsx)(d.td,{children:"long/Long"}),(0,t.jsx)(d.td,{children:"int/pyfury.SliInt64"}),(0,t.jsx)(d.td,{children:"Type.sliint64()"}),(0,t.jsx)(d.td,{children:"fury::sliint64_t"}),(0,t.jsx)(d.td,{children:"fury.sliint64"}),(0,t.jsx)(d.td,{children:"fury::sliint64"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"float16"}),(0,t.jsx)(d.td,{children:"9"}),(0,t.jsx)(d.td,{children:"float/Float"}),(0,t.jsx)(d.td,{children:"float/pyfury.Float16"}),(0,t.jsx)(d.td,{children:"Type.float16()"}),(0,t.jsx)(d.td,{children:"fury::float16_t"}),(0,t.jsx)(d.td,{children:"fury.float16"}),(0,t.jsx)(d.td,{children:"fury::f16"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"float32"}),(0,t.jsx)(d.td,{children:"10"}),(0,t.jsx)(d.td,{children:"float/Float"}),(0,t.jsx)(d.td,{children:"float/pyfury.Float32"}),(0,t.jsx)(d.td,{children:"Type.float32()"}),(0,t.jsx)(d.td,{children:"float"}),(0,t.jsx)(d.td,{children:"float32"}),(0,t.jsx)(d.td,{children:"f32"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"float64"}),(0,t.jsx)(d.td,{children:"11"}),(0,t.jsx)(d.td,{children:"double/Double"}),(0,t.jsx)(d.td,{children:"float/pyfury.Float64"}),(0,t.jsx)(d.td,{children:"Type.float64()"}),(0,t.jsx)(d.td,{children:"double"}),(0,t.jsx)(d.td,{children:"float64"}),(0,t.jsx)(d.td,{children:"f64"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"string"}),(0,t.jsx)(d.td,{children:"12"}),(0,t.jsx)(d.td,{children:"String"}),(0,t.jsx)(d.td,{children:"str"}),(0,t.jsx)(d.td,{children:"String"}),(0,t.jsx)(d.td,{children:"string"}),(0,t.jsx)(d.td,{children:"string"}),(0,t.jsx)(d.td,{children:"String/str"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"enum"}),(0,t.jsx)(d.td,{children:"13"}),(0,t.jsx)(d.td,{children:"Enum subclasses"}),(0,t.jsx)(d.td,{children:"enum subclasses"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"enum"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"enum"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"list"}),(0,t.jsx)(d.td,{children:"14"}),(0,t.jsx)(d.td,{children:"List/Collection"}),(0,t.jsx)(d.td,{children:"list/tuple"}),(0,t.jsx)(d.td,{children:"array"}),(0,t.jsx)(d.td,{children:"vector"}),(0,t.jsx)(d.td,{children:"slice"}),(0,t.jsx)(d.td,{children:"Vec"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"set"}),(0,t.jsx)(d.td,{children:"15"}),(0,t.jsx)(d.td,{children:"Set"}),(0,t.jsx)(d.td,{children:"set"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"set"}),(0,t.jsx)(d.td,{children:"fury.Set"}),(0,t.jsx)(d.td,{children:"Set"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"map"}),(0,t.jsx)(d.td,{children:"16"}),(0,t.jsx)(d.td,{children:"Map"}),(0,t.jsx)(d.td,{children:"dict"}),(0,t.jsx)(d.td,{children:"Map"}),(0,t.jsx)(d.td,{children:"unordered_map"}),(0,t.jsx)(d.td,{children:"map"}),(0,t.jsx)(d.td,{children:"HashMap"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"duration"}),(0,t.jsx)(d.td,{children:"17"}),(0,t.jsx)(d.td,{children:"Duration"}),(0,t.jsx)(d.td,{children:"timedelta"}),(0,t.jsx)(d.td,{children:"Number"}),(0,t.jsx)(d.td,{children:"duration"}),(0,t.jsx)(d.td,{children:"Duration"}),(0,t.jsx)(d.td,{children:"Duration"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"timestamp"}),(0,t.jsx)(d.td,{children:"18"}),(0,t.jsx)(d.td,{children:"Instant"}),(0,t.jsx)(d.td,{children:"datetime"}),(0,t.jsx)(d.td,{children:"Number"}),(0,t.jsx)(d.td,{children:"std::chrono::nanoseconds"}),(0,t.jsx)(d.td,{children:"Time"}),(0,t.jsx)(d.td,{children:"DateTime"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"decimal"}),(0,t.jsx)(d.td,{children:"19"}),(0,t.jsx)(d.td,{children:"BigDecimal"}),(0,t.jsx)(d.td,{children:"Decimal"}),(0,t.jsx)(d.td,{children:"bigint"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"/"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"binary"}),(0,t.jsx)(d.td,{children:"20"}),(0,t.jsx)(d.td,{children:"byte[]"}),(0,t.jsx)(d.td,{children:"bytes"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"uint8_t[n]/vector<T>"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"[n]uint8/[]T"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"Vec<uint8_t>"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"array"}),(0,t.jsx)(d.td,{children:"21"}),(0,t.jsx)(d.td,{children:"array"}),(0,t.jsx)(d.td,{children:"np.ndarray"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"array/slice"}),(0,t.jsx)(d.td,{children:"Vec"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"bool_array"}),(0,t.jsx)(d.td,{children:"22"}),(0,t.jsx)(d.td,{children:"bool[]"}),(0,t.jsx)(d.td,{children:"ndarray(np.bool_)"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"bool[n]"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"[n]bool/[]T"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"Vec<bool>"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"int8_array"}),(0,t.jsx)(d.td,{children:"23"}),(0,t.jsx)(d.td,{children:"byte[]"}),(0,t.jsx)(d.td,{children:"ndarray(int8)"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"int8_t[n]/vector<T>"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"[n]int8/[]T"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"Vec<i18>"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"int16_array"}),(0,t.jsx)(d.td,{children:"24"}),(0,t.jsx)(d.td,{children:"short[]"}),(0,t.jsx)(d.td,{children:"ndarray(int16)"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"int16_t[n]/vector<T>"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"[n]int16/[]T"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"Vec<i16>"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"int32_array"}),(0,t.jsx)(d.td,{children:"25"}),(0,t.jsx)(d.td,{children:"int[]"}),(0,t.jsx)(d.td,{children:"ndarray(int32)"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"int32_t[n]/vector<T>"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"[n]int32/[]T"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"Vec<i32>"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"int64_array"}),(0,t.jsx)(d.td,{children:"26"}),(0,t.jsx)(d.td,{children:"long[]"}),(0,t.jsx)(d.td,{children:"ndarray(int64)"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"int64_t[n]/vector<T>"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"[n]int64/[]T"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"Vec<i64>"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"float16_array"}),(0,t.jsx)(d.td,{children:"27"}),(0,t.jsx)(d.td,{children:"float[]"}),(0,t.jsx)(d.td,{children:"ndarray(float16)"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"fury::float16_t[n]/vector<T>"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"[n]float16/[]T"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"Vec<fury::f16>"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"float32_array"}),(0,t.jsx)(d.td,{children:"28"}),(0,t.jsx)(d.td,{children:"float[]"}),(0,t.jsx)(d.td,{children:"ndarray(float32)"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"float[n]/vector<T>"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"[n]float32/[]T"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"Vec<f32>"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"float64_array"}),(0,t.jsx)(d.td,{children:"29"}),(0,t.jsx)(d.td,{children:"double[]"}),(0,t.jsx)(d.td,{children:"ndarray(float64)"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"double[n]/vector<T>"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"[n]float64/[]T"})}),(0,t.jsx)(d.td,{children:(0,t.jsx)(d.code,{children:"Vec<f64>"})})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"tensor"}),(0,t.jsx)(d.td,{children:"30"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"/"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"sparse tensor"}),(0,t.jsx)(d.td,{children:"31"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"/"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"arrow record batch"}),(0,t.jsx)(d.td,{children:"32"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"/"})]}),(0,t.jsxs)(d.tr,{children:[(0,t.jsx)(d.td,{children:"arrow table"}),(0,t.jsx)(d.td,{children:"33"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"/"}),(0,t.jsx)(d.td,{children:"/"})]})]})]}),"\n",(0,t.jsx)(d.h2,{id:"type-infonot-implemented-currently",children:"Type info(not implemented currently)"}),"\n",(0,t.jsx)(d.p,{children:"Due to differences between type systems of languages, those types can't be mapped one-to-one between languages."}),"\n",(0,t.jsxs)(d.p,{children:["If the user notices that one type on a language corresponds to multiple types in Fury type systems, for example, ",(0,t.jsx)(d.code,{children:"long"}),"\nin java has type ",(0,t.jsx)(d.code,{children:"int64/varint64/sliint64"}),", it means the language lacks some types, and the user must provide extra type\ninfo when using Fury."]}),"\n",(0,t.jsx)(d.h2,{id:"type-annotation",children:"Type annotation"}),"\n",(0,t.jsx)(d.p,{children:"If the type is a field of another class, users can provide meta hints for fields of a type, or for the whole type.\nSuch information can be provided in other languages too:"}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsx)(d.li,{children:"java: use annotation."}),"\n",(0,t.jsx)(d.li,{children:"cpp: use macro and template."}),"\n",(0,t.jsx)(d.li,{children:"golang: use struct tag."}),"\n",(0,t.jsx)(d.li,{children:"python: use typehint."}),"\n",(0,t.jsx)(d.li,{children:"rust: use macro."}),"\n"]}),"\n",(0,t.jsx)(d.p,{children:"Here is en example:"}),"\n",(0,t.jsxs)(d.ul,{children:["\n",(0,t.jsxs)(d.li,{children:["\n",(0,t.jsx)(d.p,{children:"Java:"}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-java",children:"class Foo {\n  @Int32Type(varint = true)\n  int f1;\n  List<@Int32Type(varint = true) Integer> f2;\n}\n"})}),"\n"]}),"\n",(0,t.jsxs)(d.li,{children:["\n",(0,t.jsx)(d.p,{children:"Python:"}),"\n",(0,t.jsx)(d.pre,{children:(0,t.jsx)(d.code,{className:"language-python",children:"class Foo:\n    f1: Int32Type(varint=True)\n    f2: List[Int32Type(varint=True)]\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(d.h2,{id:"type-wrapper",children:"Type wrapper"}),"\n",(0,t.jsx)(d.p,{children:"If the type is not a field of a class, the user must wrap this type with a Fury type to pass the extra type info."}),"\n",(0,t.jsxs)(d.p,{children:["For example, suppose Fury Java provide a ",(0,t.jsx)(d.code,{children:"VarInt64"})," type, when a user invoke ",(0,t.jsx)(d.code,{children:"fury.serialize(long_value)"}),", he need to\ninvoke like ",(0,t.jsx)(d.code,{children:"fury.serialize(new VarInt64(long_value))"}),"."]})]})}function j(e={}){const{wrapper:d}={...(0,r.a)(),...e.components};return d?(0,t.jsx)(d,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},1151:(e,d,n)=>{n.d(d,{Z:()=>l,a:()=>s});var t=n(7294);const r={},i=t.createContext(r);function s(e){const d=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function l(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:d},e.children)}}}]);