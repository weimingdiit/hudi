"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[8100],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,y=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52667:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return p},toc:function(){return s},default:function(){return f}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],u={title:"Apache Hudi Key Generators",excerpt:"Different key generators available with Apache Hudi",author:"shivnarayan",category:"blog"},c=void 0,l={permalink:"/blog/2021/02/13/hudi-key-generators",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-02-13-hudi-key-generators.md",source:"@site/blog/2021-02-13-hudi-key-generators.md",title:"Apache Hudi Key Generators",description:"Every record in Hudi is uniquely identified by a primary key, which is a pair of record key and partition path where",date:"2021-02-13T00:00:00.000Z",formattedDate:"February 13, 2021",tags:[],readingTime:5.58,truncated:!0,authors:[{name:"shivnarayan"}],prevItem:{title:"Streaming Responsibly - How Apache Hudi maintains optimum sized files",permalink:"/blog/2021/03/01/hudi-file-sizing"},nextItem:{title:"Optimize Data lake layout using Clustering in Apache Hudi",permalink:"/blog/2021/01/27/hudi-clustering-intro"}},p={authorsImageUrls:[void 0]},s=[],d={toc:s};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Every record in Hudi is uniquely identified by a primary key, which is a pair of record key and partition path where\nthe record belongs to. Using primary keys, Hudi can impose a) partition level uniqueness integrity constraint\nb) enable fast updates and deletes on records. One should choose the partitioning scheme wisely as it could be a\ndetermining factor for your ingestion and query latency."))}f.isMDXComponent=!0}}]);