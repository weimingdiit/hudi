"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[3548],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(a),u=n,m=h["".concat(l,".").concat(u)]||h[u]||c[u]||i;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},20625:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],s={version:"0.5.0",title:"Talks & Powered By",keywords:["hudi","talks","presentation"],last_modified_at:new Date("2019-12-31T19:59:57.000Z")},l=void 0,p={unversionedId:"powered_by",id:"version-0.5.0/powered_by",title:"Talks & Powered By",description:"Adoption",source:"@site/versioned_docs/version-0.5.0/powered_by.md",sourceDirName:".",slug:"/powered_by",permalink:"/docs/0.5.0/powered_by",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.5.0/powered_by.md",tags:[],version:"0.5.0",frontMatter:{version:"0.5.0",title:"Talks & Powered By",keywords:["hudi","talks","presentation"],last_modified_at:"2019-12-31T19:59:57.000Z"}},d=[{value:"Adoption",id:"adoption",children:[{value:"Uber",id:"uber",children:[],level:3},{value:"Amazon Web Services",id:"amazon-web-services",children:[],level:3},{value:"EMIS Health",id:"emis-health",children:[],level:3},{value:"Yields.io",id:"yieldsio",children:[],level:3},{value:"Yotpo",id:"yotpo",children:[],level:3},{value:"Tathastu.ai",id:"tathastuai",children:[],level:3}],level:2},{value:"Talks &amp; Presentations",id:"talks--presentations",children:[],level:2},{value:"Articles",id:"articles",children:[],level:2}],c={toc:d};function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"adoption"},"Adoption"),(0,i.kt)("h3",{id:"uber"},"Uber"),(0,i.kt)("p",null,"Apache Hudi was originally developed at ",(0,i.kt)("a",{parentName:"p",href:"https://uber.com"},"Uber"),", to achieve ",(0,i.kt)("a",{parentName:"p",href:"http://www.slideshare.net/vinothchandar/hadoop-strata-talk-uber-your-hadoop-has-arrived/32"},"low latency database ingestion, with high efficiency"),".\nIt has been in production since Aug 2016, powering the massive ",(0,i.kt)("a",{parentName:"p",href:"https://eng.uber.com/uber-big-data-platform/"},"100PB data lake"),", including highly business critical tables like core trips,riders,partners. It also\npowers several incremental Hive ETL pipelines and being currently integrated into Uber's data dispersal system."),(0,i.kt)("h3",{id:"amazon-web-services"},"Amazon Web Services"),(0,i.kt)("p",null,"Amazon Web Services is the World's leading cloud services provider. Apache Hudi is ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/emr/features/hudi/"},"pre-installed")," with the AWS Elastic Map Reduce\noffering, providing means for AWS users to perform record-level updates/deletes and manage storage efficiently."),(0,i.kt)("h3",{id:"emis-health"},"EMIS Health"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.emishealth.com/"},"EMIS Health")," is the largest provider of Primary Care IT software in the UK with datasets including more than 500Bn healthcare records. HUDI is used to manage their analytics dataset in production and keeping them up-to-date with their upstream source. Presto is being used to query the data written in HUDI format."),(0,i.kt)("h3",{id:"yieldsio"},"Yields.io"),(0,i.kt)("p",null,"Yields.io is the first FinTech platform that uses AI for automated model validation and real-time monitoring on an enterprise-wide scale. Their data lake is managed by Hudi. They are also actively building their infrastructure for incremental, cross language/platform machine learning using Hudi."),(0,i.kt)("h3",{id:"yotpo"},"Yotpo"),(0,i.kt)("p",null,"Using Hudi at Yotpo for several usages. Firstly, integrated Hudi as a writer in their open source ETL framework ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/YotpoLtd/metorikku"},"https://github.com/YotpoLtd/metorikku")," and using as an output writer for a CDC pipeline, with events that are being generated from a database binlog streams to Kafka and then are written to S3. "),(0,i.kt)("h3",{id:"tathastuai"},"Tathastu.ai"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.tathastu.ai"},"Tathastu.ai")," offers the largest AI/ML playground of consumer data for data scientists, AI experts and technologists to build upon. They have built a CDC pipeline using Apache Hudi and Debezium. Data from Hudi datasets is being queried using Hive, Presto and Spark."),(0,i.kt)("h2",{id:"talks--presentations"},"Talks & Presentations"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://conferences.oreilly.com/strata/strata-ca/public/schedule/detail/56511"},'"Hoodie: Incremental processing on Hadoop at Uber"')," -  By Vinoth Chandar & Prasanna Rajaperumal\nMar 2017, Strata + Hadoop World, San Jose, CA")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"http://www.dataengconf.com/hoodie-an-open-source-incremental-processing-framework-from-uber"},'"Hoodie: An Open Source Incremental Processing Framework From Uber"')," - By Vinoth Chandar.\nApr 2017, DataEngConf, San Francisco, CA ",(0,i.kt)("a",{parentName:"p",href:"https://www.slideshare.net/vinothchandar/hoodie-dataengconf-2017"},"Slides")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=7Wudjc-v7CA"},"Video"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://spark-summit.org/2017/events/incremental-processing-on-large-analytical-datasets/"},'"Incremental Processing on Large Analytical Datasets"')," - By Prasanna Rajaperumal\nJune 2017, Spark Summit 2017, San Francisco, CA. ",(0,i.kt)("a",{parentName:"p",href:"https://www.slideshare.net/databricks/incremental-processing-on-large-analytical-datasets-with-prasanna-rajaperumal-and-vinoth-chandar"},"Slides")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=3HS0lQX-cgo&feature=youtu.be"},"Video"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://conferences.oreilly.com/strata/strata-ny/public/schedule/detail/70937"},'"Hudi: Unifying storage and serving for batch and near-real-time analytics"')," - By Nishith Agarwal & Balaji Vardarajan\nSeptember 2018, Strata Data Conference, New York, NY")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://databricks.com/session/hudi-near-real-time-spark-pipelines-at-petabyte-scale"},'"Hudi: Large-Scale, Near Real-Time Pipelines at Uber"')," - By Vinoth Chandar & Nishith Agarwal\nOctober 2018, Spark+AI Summit Europe, London, UK")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=1w3IpavhSWA"},'"Powering Uber\'s global network analytics pipelines in real-time with Apache Hudi"')," - By Ethan Guo & Nishith Agarwal, April 2019, Data Council SF19, San Francisco, CA.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.slideshare.net/ChesterChen/sf-big-analytics-20190612-building-highly-efficient-data-lakes-using-apache-hudi"},'"Building highly efficient data lakes using Apache Hudi (Incubating)"')," - By Vinoth Chandar\nJune 2019, SF Big Analytics Meetup, San Mateo, CA")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1FHhsvh70ZP6xXlHdVsAI0g__B_6Mpto5KQFlZ0b8-mM"},'"Apache Hudi (Incubating) - The Past, Present and Future Of Efficient Data Lake Architectures"')," - By Vinoth Chandar & Balaji Varadarajan\nSeptember 2019, ApacheCon NA 19, Las Vegas, NV, USA")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.portal.reinvent.awsevents.com/connect/sessionDetail.ww?SESSION_ID=98662&csrftkn=YS67-AG7B-QIAV-ZZBK-E6TT-MD4Q-1HEP-747P"},'"Insert, upsert, and delete data in Amazon S3 using Amazon EMR"')," - By Paul Codding & Vinoth Chandar\nDecember 2019, AWS re:Invent 2019, Las Vegas, NV, USA",(0,i.kt)("br",{parentName:"p"}),"\n","")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.slideshare.net/SyedKather/building-robust-cdc-pipeline-with-apache-hudi-and-debezium"},'"Building Robust CDC Pipeline With Apache Hudi And Debezium"')," - By Pratyaksh, Purushotham, Syed and Shaik December 2019, Hadoop Summit Bangalore, India"))),(0,i.kt)("h2",{id:"articles"},"Articles"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://www.oreilly.com/ideas/ubers-case-for-incremental-processing-on-hadoop"},'"The Case for incremental processing on Hadoop"')," - O'reilly Ideas article by Vinoth Chandar"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://eng.uber.com/hoodie/"},'"Hoodie: Uber Engineering\'s Incremental Processing Framework on Hadoop"')," - Engineering Blog By Prasanna Rajaperumal")))}h.isMDXComponent=!0}}]);