"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[251],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50158:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],i={title:"GCS \u6587\u4ef6\u7cfb\u7edf",keywords:["hudi","hive","google cloud","storage","spark","presto","\u5b58\u50a8"],summary:"\u5728\u672c\u9875\u4e2d\uff0c\u6211\u4eec\u63a2\u8ba8\u5982\u4f55\u5728 Google Cloud Storage \u4e2d\u914d\u7f6e Hudi\u3002",last_modified_at:new Date("2019-12-30T19:59:57.000Z"),language:"cn"},c=void 0,u={unversionedId:"gcs_hoodie",id:"gcs_hoodie",title:"GCS \u6587\u4ef6\u7cfb\u7edf",description:"\u5bf9\u4e8e\u5b58\u50a8\u5728 GCS \u4e0a\u7684 Hudi \uff0c \u533a\u57df Bucket \u63d0\u4f9b\u4e86\u5e26\u6709\u5f3a\u4e00\u81f4\u6027\u7684 DFS API \u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/gcs_hoodie.md",sourceDirName:".",slug:"/gcs_hoodie",permalink:"/cn/docs/next/gcs_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/gcs_hoodie.md",tags:[],version:"current",frontMatter:{title:"GCS \u6587\u4ef6\u7cfb\u7edf",keywords:["hudi","hive","google cloud","storage","spark","presto","\u5b58\u50a8"],summary:"\u5728\u672c\u9875\u4e2d\uff0c\u6211\u4eec\u63a2\u8ba8\u5982\u4f55\u5728 Google Cloud Storage \u4e2d\u914d\u7f6e Hudi\u3002",last_modified_at:"2019-12-30T19:59:57.000Z",language:"cn"},sidebar:"docs",previous:{title:"S3 \u6587\u4ef6\u7cfb\u7edf",permalink:"/cn/docs/next/s3_hoodie"},next:{title:"OSS Filesystem",permalink:"/cn/docs/next/oss_hoodie"}},p=[{value:"GCS \u914d\u7f6e",id:"gcs-\u914d\u7f6e",children:[{value:"GCS \u51ed\u8bc1",id:"gcs-\u51ed\u8bc1",children:[],level:3},{value:"GCS \u5e93",id:"gcs-\u5e93",children:[],level:3}],level:2}],s={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5b58\u50a8\u5728 GCS \u4e0a\u7684 Hudi \uff0c ",(0,a.kt)("strong",{parentName:"p"},"\u533a\u57df")," Bucket \u63d0\u4f9b\u4e86\u5e26\u6709\u5f3a\u4e00\u81f4\u6027\u7684 DFS API \u3002"),(0,a.kt)("h2",{id:"gcs-\u914d\u7f6e"},"GCS \u914d\u7f6e"),(0,a.kt)("p",null,"Hudi \u7684 GCS \u9002\u914d\u9700\u8981\u4e24\u9879\u914d\u7f6e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e3a Hudi \u6dfb\u52a0 GCS \u51ed\u8bc1"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u9700\u8981\u7684 jar \u5305\u6dfb\u52a0\u5230\u7c7b\u8def\u5f84")),(0,a.kt)("h3",{id:"gcs-\u51ed\u8bc1"},"GCS \u51ed\u8bc1"),(0,a.kt)("p",null,"\u5728\u4f60\u7684 core-site.xml \u6587\u4ef6\u4e2d\u6dfb\u52a0\u5fc5\u8981\u7684\u914d\u7f6e\uff0cHudi \u5c06\u4ece\u90a3\u91cc\u83b7\u53d6\u8fd9\u4e9b\u914d\u7f6e\u3002 \u7528\u4f60\u7684 GCS \u5206\u533a\u540d\u79f0\u66ff\u6362\u6389 ",(0,a.kt)("inlineCode",{parentName:"p"},"fs.defaultFS")," \uff0c\u4ee5\u4fbf Hudi \u80fd\u591f\u5728 Bucket \u4e2d\u8bfb\u53d6/\u5199\u5165\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  <property>\n    <name>fs.defaultFS</name>\n    <value>gs://hudi-bucket</value>\n  </property>\n\n  <property>\n    <name>fs.gs.impl</name>\n    <value>com.google.cloud.hadoop.fs.gcs.GoogleHadoopFileSystem</value>\n    <description>The FileSystem for gs: (GCS) uris.</description>\n  </property>\n\n  <property>\n    <name>fs.AbstractFileSystem.gs.impl</name>\n    <value>com.google.cloud.hadoop.fs.gcs.GoogleHadoopFS</value>\n    <description>The AbstractFileSystem for gs: (GCS) uris.</description>\n  </property>\n\n  <property>\n    <name>fs.gs.project.id</name>\n    <value>GCS_PROJECT_ID</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.enable</name>\n    <value>true</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.email</name>\n    <value>GCS_SERVICE_ACCOUNT_EMAIL</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.keyfile</name>\n    <value>GCS_SERVICE_ACCOUNT_KEYFILE</value>\n  </property>\n")),(0,a.kt)("h3",{id:"gcs-\u5e93"},"GCS \u5e93"),(0,a.kt)("p",null,"\u5c06 GCS Hadoop \u5e93\u6dfb\u52a0\u5230\u6211\u4eec\u7684\u7c7b\u8def\u5f84"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"com.google.cloud.bigdataoss:gcs-connector:1.6.0-hadoop2")))}d.isMDXComponent=!0}}]);