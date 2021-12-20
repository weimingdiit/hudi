"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[7666],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75399:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Ingest multiple tables using Hudi",excerpt:"Ingesting multiple tables using Hudi at a single go is now possible. This blog gives a detailed explanation of how to achieve the same using `HoodieMultiTableDeltaStreamer.java`",author:"pratyakshsharma",category:"blog"},s=void 0,u={permalink:"/cn/blog/2020/08/22/ingest-multiple-tables-using-hudi",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2020-08-22-ingest-multiple-tables-using-hudi.md",source:"@site/blog/2020-08-22-ingest-multiple-tables-using-hudi.md",title:"Ingest multiple tables using Hudi",description:"When building a change data capture pipeline for already existing or newly created relational databases, one of the most common problems that one faces is simplifying the onboarding process for multiple tables. Ingesting multiple tables to Hudi dataset at a single go is now possible using HoodieMultiTableDeltaStreamer class which is a wrapper on top of the more popular HoodieDeltaStreamer class. Currently HoodieMultiTableDeltaStreamer supports COPY_ON_WRITE storage type only and the ingestion is done in a sequential way.",date:"2020-08-22T00:00:00.000Z",formattedDate:"August 22, 2020",tags:[],readingTime:2.67,truncated:!0,authors:[{name:"pratyakshsharma"}],prevItem:{title:"How nClouds Helps Accelerate Data Delivery with Apache Hudi on Amazon EMR",permalink:"/cn/blog/2020/10/06/cdc-solution-using-hudi-by-nclouds"},nextItem:{title:"Async Compaction Deployment Models",permalink:"/cn/blog/2020/08/21/async-compaction-deployment-model"}},p={authorsImageUrls:[void 0]},c=[],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When building a change data capture pipeline for already existing or newly created relational databases, one of the most common problems that one faces is simplifying the onboarding process for multiple tables. Ingesting multiple tables to Hudi dataset at a single go is now possible using ",(0,o.kt)("inlineCode",{parentName:"p"},"HoodieMultiTableDeltaStreamer")," class which is a wrapper on top of the more popular ",(0,o.kt)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer")," class. Currently ",(0,o.kt)("inlineCode",{parentName:"p"},"HoodieMultiTableDeltaStreamer")," supports ",(0,o.kt)("strong",{parentName:"p"},"COPY_ON_WRITE")," storage type only and the ingestion is done in a ",(0,o.kt)("strong",{parentName:"p"},"sequential")," way."))}d.isMDXComponent=!0}}]);