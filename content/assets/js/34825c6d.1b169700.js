"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[6348],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return t?i.createElement(m,r(r({ref:n},u),{},{components:t})):i.createElement(m,r({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},26600:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var i=t(87462),a=t(63366),o=(t(67294),t(3905)),r=["components"],l={title:"Cleaning",toc:!0},s=void 0,c={unversionedId:"hoodie_cleaner",id:"version-0.10.0/hoodie_cleaner",title:"Cleaning",description:"Hoodie Cleaner is a utility that helps you reclaim space and keep your storage costs in check. Apache Hudi provides",source:"@site/versioned_docs/version-0.10.0/hoodie_cleaner.md",sourceDirName:".",slug:"/hoodie_cleaner",permalink:"/docs/hoodie_cleaner",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.0/hoodie_cleaner.md",tags:[],version:"0.10.0",frontMatter:{title:"Cleaning",toc:!0},sidebar:"version-0.10.0/docs",previous:{title:"Clustering",permalink:"/docs/clustering"},next:{title:"Transformers",permalink:"/docs/transforms"}},u=[{value:"Cleaning Retention Policies",id:"cleaning-retention-policies",children:[],level:3},{value:"Configurations",id:"configurations",children:[],level:3},{value:"Run Independently",id:"run-independently",children:[],level:3},{value:"Run Asynchronously",id:"run-asynchronously",children:[],level:3},{value:"CLI",id:"cli",children:[],level:3}],p={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hoodie Cleaner is a utility that helps you reclaim space and keep your storage costs in check. Apache Hudi provides\nsnapshot isolation between writers and readers by managing multiple files with MVCC concurrency. These file versions\nprovide history and enable time travel and rollbacks, but it is important to manage how much history you keep to balance your costs."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/configurations/#hoodiecleanautomatic"},"Automatic Hudi cleaning")," is enabled by default. Cleaning is invoked immediately after\neach commit, to delete older file slices. It's recommended to leave this enabled to ensure metadata and data storage growth is bounded. "),(0,o.kt)("h3",{id:"cleaning-retention-policies"},"Cleaning Retention Policies"),(0,o.kt)("p",null,"When cleaning old files, you should be careful not to remove files that are being actively used by long running queries.\nHudi cleaner currently supports the below cleaning policies to keep a certain number of commits or file versions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"KEEP_LATEST_COMMITS"),": This is the default policy. This is a temporal cleaning policy that ensures the effect of\nhaving lookback into all the changes that happened in the last X commits. Suppose a writer is ingesting data\ninto a Hudi dataset every 30 minutes and the longest running query can take 5 hours to finish, then the user should\nretain atleast the last 10 commits. With such a configuration, we ensure that the oldest version of a file is kept on\ndisk for at least 5 hours, thereby preventing the longest running query from failing at any point in time. Incremental cleaning is also possible using this policy."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"KEEP_LATEST_FILE_VERSIONS"),": This policy has the effect of keeping N number of file versions irrespective of time.\nThis policy is useful when it is known how many MAX versions of the file does one want to keep at any given time.\nTo achieve the same behaviour as before of preventing long running queries from failing, one should do their calculations\nbased on data patterns. Alternatively, this policy is also useful if a user just wants to maintain 1 latest version of the file.")),(0,o.kt)("h3",{id:"configurations"},"Configurations"),(0,o.kt)("p",null,"For details about all possible configurations and their default values see the ",(0,o.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations#Compaction-Configs"},"configuration docs"),"."),(0,o.kt)("h3",{id:"run-independently"},"Run Independently"),(0,o.kt)("p",null,"Hoodie Cleaner can be run as a separate process or along with your data ingestion. In case you want to run it along with\ningesting data, configs are available which enable you to run it ",(0,o.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations#hoodiecleanasync"},"synchronously or asynchronously"),"."),(0,o.kt)("p",null,"You can use this command for running the cleaner independently:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"[hoodie]$ spark-submit --class org.apache.hudi.utilities.HoodieCleaner \\\n  --props s3:///temp/hudi-ingestion-config/kafka-source.properties \\\n  --target-base-path s3:///temp/hudi \\\n  --spark-master yarn-cluster\n")),(0,o.kt)("h3",{id:"run-asynchronously"},"Run Asynchronously"),(0,o.kt)("p",null,"In case you wish to run the cleaner service asynchronously with writing, please configure the below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"hoodie.clean.automatic=true\nhoodie.clean.async=true\n")),(0,o.kt)("h3",{id:"cli"},"CLI"),(0,o.kt)("p",null,"You can also use ",(0,o.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/deployment#cli"},"Hudi CLI")," to run Hoodie Cleaner."),(0,o.kt)("p",null,"CLI provides the below commands for cleaner service:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cleans show")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clean showpartitions")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cleans run"))),(0,o.kt)("p",null,"You can find more details and the relevant code for these commands in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-cli/src/main/java/org/apache/hudi/cli/commands/CleansCommand.java"},(0,o.kt)("inlineCode",{parentName:"a"},"org.apache.hudi.cli.commands.CleansCommand"))," class."))}d.isMDXComponent=!0}}]);