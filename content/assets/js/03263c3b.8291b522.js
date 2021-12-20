"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[1682],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=s(r),h=o,d=f["".concat(u,".").concat(h)]||f[h]||p[h]||a;return r?n.createElement(d,c(c({ref:t},l),{},{components:r})):n.createElement(d,c({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2920:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return l},toc:function(){return p},default:function(){return h}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],i={title:"Lakehouse Concurrency Control: Are we too optimistic?",excerpt:"Vinoth Chandar, Creator of Apache Hudi, dives into concurrency control mechanisms",author:"vinoth",category:"blog"},u=void 0,s={permalink:"/blog/2021/12/16/lakehouse-concurrency-control-are-we-too-optimistic",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-12-16-lakehouse-concurrency-control-are-we-too-optimistic.md",source:"@site/blog/2021-12-16-lakehouse-concurrency-control-are-we-too-optimistic.md",title:"Lakehouse Concurrency Control: Are we too optimistic?",description:"Transactions on data lakes are now considered a key characteristic of a Lakehouse these days. But what has actually been accomplished so far? What are the current approaches? How do they fare in real-world scenarios? These questions are the focus of this blog.",date:"2021-12-16T00:00:00.000Z",formattedDate:"December 16, 2021",tags:[],readingTime:7.54,truncated:!0,authors:[{name:"vinoth"}],nextItem:{title:"Building an ExaByte-level Data Lake Using Apache Hudi at ByteDance",permalink:"/blog/2021/09/01/building-eb-level-data-lake-using-hudi-at-bytedance"}},l={authorsImageUrls:[void 0]},p=[],f={toc:p};function h(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Transactions on data lakes are now considered a key characteristic of a Lakehouse these days. But what has actually been accomplished so far? What are the current approaches? How do they fare in real-world scenarios? These questions are the focus of this blog."))}h.isMDXComponent=!0}}]);