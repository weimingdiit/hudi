"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[6834],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=i,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41175:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={title:"Flink Guide",toc:!0,last_modified_at:new Date("2020-08-12T07:19:57.000Z")},s=void 0,u={unversionedId:"flink-quick-start-guide",id:"version-0.10.0/flink-quick-start-guide",title:"Flink Guide",description:"This guide provides a document at Hudi's capabilities using Flink SQL. We can feel the unique charm of Flink stream computing engine on Hudi.",source:"@site/versioned_docs/version-0.10.0/flink-quick-start-guide.md",sourceDirName:".",slug:"/flink-quick-start-guide",permalink:"/docs/flink-quick-start-guide",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.0/flink-quick-start-guide.md",tags:[],version:"0.10.0",frontMatter:{title:"Flink Guide",toc:!0,last_modified_at:"2020-08-12T07:19:57.000Z"},sidebar:"version-0.10.0/docs",previous:{title:"Spark Guide",permalink:"/docs/quick-start-guide"},next:{title:"Docker Demo",permalink:"/docs/docker_demo"}},d=[{value:"Quick Start",id:"quick-start",children:[{value:"Setup",id:"setup",children:[{value:"Step.1 download Flink jar",id:"step1-download-flink-jar",children:[],level:4},{value:"Step.2 start Flink cluster",id:"step2-start-flink-cluster",children:[],level:4},{value:"Step.3 start Flink SQL client",id:"step3-start-flink-sql-client",children:[],level:4}],level:3},{value:"Insert Data",id:"insert-data",children:[],level:3},{value:"Query Data",id:"query-data",children:[],level:3},{value:"Update Data",id:"update-data",children:[],level:3},{value:"Streaming Query",id:"streaming-query",children:[],level:3},{value:"Delete Data",id:"deletes",children:[],level:3}],level:2},{value:"Where To Go From Here?",id:"where-to-go-from-here",children:[],level:2}],p={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide provides a document at Hudi's capabilities using Flink SQL. We can feel the unique charm of Flink stream computing engine on Hudi.\nReading this guide, you can quickly start using Flink to write to(read from) Hudi, have a deeper understanding of configuration and optimization:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Quick Start")," : Read ",(0,r.kt)("a",{parentName:"li",href:"#quick-start"},"Quick Start")," to get started quickly Flink sql client to write to(read from) Hudi."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Configuration")," : For ",(0,r.kt)("a",{parentName:"li",href:"#flink-configuration"},"Flink Configuration"),", sets up through ",(0,r.kt)("inlineCode",{parentName:"li"},"$FLINK_HOME/conf/flink-conf.yaml"),". For per job configuration, sets up through ",(0,r.kt)("a",{parentName:"li",href:"#table-option"},"Table Option"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Writing Data")," : Flink supports different writing data use cases, such as ",(0,r.kt)("a",{parentName:"li",href:"#bulk-insert"},"Bulk Insert"),", ",(0,r.kt)("a",{parentName:"li",href:"#index-bootstrap"},"Index Bootstrap"),", ",(0,r.kt)("a",{parentName:"li",href:"#changelog-mode"},"Changelog Mode"),", ",(0,r.kt)("a",{parentName:"li",href:"#insert-mode"},"Insert Mode"),"  and ",(0,r.kt)("a",{parentName:"li",href:"#offline-compaction"},"Offline Compaction"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Querying Data")," : Flink supports different querying data use cases, such as ",(0,r.kt)("a",{parentName:"li",href:"#hive-query"},"Hive Query"),", ",(0,r.kt)("a",{parentName:"li",href:"#presto-query"},"Presto Query"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Optimization")," : For write/read tasks, this guide gives some optimization suggestions, such as ",(0,r.kt)("a",{parentName:"li",href:"#memory-optimization"},"Memory Optimization")," and ",(0,r.kt)("a",{parentName:"li",href:"#write-rate-limit"},"Write Rate Limit"),".")),(0,r.kt)("h2",{id:"quick-start"},"Quick Start"),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("p",null,"We use the ",(0,r.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.13/docs/dev/table/sqlclient/"},"Flink Sql Client")," because it's a good\nquick start tool for SQL users."),(0,r.kt)("h4",{id:"step1-download-flink-jar"},"Step.1 download Flink jar"),(0,r.kt)("p",null,"Hudi works with Flink-1.13.x version. You can follow instructions ",(0,r.kt)("a",{parentName:"p",href:"https://flink.apache.org/downloads"},"here")," for setting up Flink.\nThe hudi-flink-bundle jar is archived with scala 2.11, so it\u2019s recommended to use flink 1.13.x bundled with scala 2.11."),(0,r.kt)("h4",{id:"step2-start-flink-cluster"},"Step.2 start Flink cluster"),(0,r.kt)("p",null,"Start a standalone Flink cluster within hadoop environment.\nBefore you start up the cluster, we suggest to config the cluster as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"in ",(0,r.kt)("inlineCode",{parentName:"li"},"$FLINK_HOME/conf/flink-conf.yaml"),", add config option ",(0,r.kt)("inlineCode",{parentName:"li"},"taskmanager.numberOfTaskSlots: 4")),(0,r.kt)("li",{parentName:"ul"},"in ",(0,r.kt)("inlineCode",{parentName:"li"},"$FLINK_HOME/conf/flink-conf.yaml"),", ",(0,r.kt)("a",{parentName:"li",href:"#flink-configuration"},"add other global configurations according to the characteristics of your task")),(0,r.kt)("li",{parentName:"ul"},"in ",(0,r.kt)("inlineCode",{parentName:"li"},"$FLINK_HOME/conf/workers"),", add item ",(0,r.kt)("inlineCode",{parentName:"li"},"localhost")," as 4 lines so that there are 4 workers on the local cluster")),(0,r.kt)("p",null,"Now starts the cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# HADOOP_HOME is your hadoop root directory after unpack the binary package.\nexport HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`\n\n# Start the Flink standalone cluster\n./bin/start-cluster.sh\n")),(0,r.kt)("h4",{id:"step3-start-flink-sql-client"},"Step.3 start Flink SQL client"),(0,r.kt)("p",null,"Hudi has a prepared bundle jar for Flink, which should be loaded in the Flink SQL Client when it starts up.\nYou can build the jar manually under path ",(0,r.kt)("inlineCode",{parentName:"p"},"hudi-source-dir/packaging/hudi-flink-bundle"),", or download it from the\n",(0,r.kt)("a",{parentName:"p",href:"https://repo.maven.apache.org/maven2/org/apache/hudi/hudi-flink-bundle_2.11/"},"Apache Official Repository"),"."),(0,r.kt)("p",null,"Now starts the SQL CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# HADOOP_HOME is your hadoop root directory after unpack the binary package.\nexport HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`\n\n./bin/sql-client.sh embedded -j .../hudi-flink-bundle_2.1?-*.*.*.jar shell\n")),(0,r.kt)("div",{className:"notice--info"},(0,r.kt)("h4",null,"Please note the following: "),(0,r.kt)("ul",null,(0,r.kt)("li",null,"We suggest hadoop 2.9.x+ version because some of the object storage has filesystem implementation only after that"),(0,r.kt)("li",null,"The flink-parquet and flink-avro formats are already packaged into the hudi-flink-bundle jar"))),(0,r.kt)("p",null,"Setup table name, base path and operate using SQL for this guide.\nThe SQL CLI only executes the SQL line by line."),(0,r.kt)("h3",{id:"insert-data"},"Insert Data"),(0,r.kt)("p",null,"Creates a Flink Hudi table first and insert data into the Hudi table using SQL ",(0,r.kt)("inlineCode",{parentName:"p"},"VALUES")," as below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- sets up the result mode to tableau to show the results directly in the CLI\nset execution.result-mode=tableau;\n\nCREATE TABLE t1(\n  uuid VARCHAR(20) PRIMARY KEY NOT ENFORCED,\n  name VARCHAR(10),\n  age INT,\n  ts TIMESTAMP(3),\n  `partition` VARCHAR(20)\n)\nPARTITIONED BY (`partition`)\nWITH (\n  'connector' = 'hudi',\n  'path' = '${path}',\n  'table.type' = 'MERGE_ON_READ' -- this creates a MERGE_ON_READ table, by default is COPY_ON_WRITE\n);\n\n-- insert data using values\nINSERT INTO t1 VALUES\n  ('id1','Danny',23,TIMESTAMP '1970-01-01 00:00:01','par1'),\n  ('id2','Stephen',33,TIMESTAMP '1970-01-01 00:00:02','par1'),\n  ('id3','Julian',53,TIMESTAMP '1970-01-01 00:00:03','par2'),\n  ('id4','Fabian',31,TIMESTAMP '1970-01-01 00:00:04','par2'),\n  ('id5','Sophia',18,TIMESTAMP '1970-01-01 00:00:05','par3'),\n  ('id6','Emma',20,TIMESTAMP '1970-01-01 00:00:06','par3'),\n  ('id7','Bob',44,TIMESTAMP '1970-01-01 00:00:07','par4'),\n  ('id8','Han',56,TIMESTAMP '1970-01-01 00:00:08','par4');\n")),(0,r.kt)("h3",{id:"query-data"},"Query Data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- query from the Hudi table\nselect * from t1;\n")),(0,r.kt)("p",null,"This query provides snapshot querying of the ingested data.\nRefer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts#table-types--queries"},"Table types and queries")," for more info on all table types and query types supported."),(0,r.kt)("h3",{id:"update-data"},"Update Data"),(0,r.kt)("p",null,"This is similar to inserting new data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- this would update the record with key 'id1'\ninsert into t1 values\n  ('id1','Danny',27,TIMESTAMP '1970-01-01 00:00:01','par1');\n")),(0,r.kt)("p",null,"Notice that the save mode is now ",(0,r.kt)("inlineCode",{parentName:"p"},"Append"),". In general, always use append mode unless you are trying to create the table for the first time.\n",(0,r.kt)("a",{parentName:"p",href:"#query-data"},"Querying")," the data again will now show updated records. Each write operation generates a new ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts"},"commit"),"\ndenoted by the timestamp. Look for changes in ",(0,r.kt)("inlineCode",{parentName:"p"},"_hoodie_commit_time"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"age")," fields for the same ",(0,r.kt)("inlineCode",{parentName:"p"},"_hoodie_record_key"),"s in previous commit."),(0,r.kt)("h3",{id:"streaming-query"},"Streaming Query"),(0,r.kt)("p",null,"Hudi Flink also provides capability to obtain a stream of records that changed since given commit timestamp.\nThis can be achieved using Hudi's streaming querying and providing a start time from which changes need to be streamed.\nWe do not need to specify endTime, if we want all changes after the given commit (as is the common case). "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t1(\n  uuid VARCHAR(20) PRIMARY KEY NOT ENFORCED,\n  name VARCHAR(10),\n  age INT,\n  ts TIMESTAMP(3),\n  `partition` VARCHAR(20)\n)\nPARTITIONED BY (`partition`)\nWITH (\n  'connector' = 'hudi',\n  'path' = '${path}',\n  'table.type' = 'MERGE_ON_READ',\n  'read.streaming.enabled' = 'true',  -- this option enable the streaming read\n  'read.start-commit' = '20210316134557' -- specifies the start commit instant time\n  'read.streaming.check-interval' = '4' -- specifies the check interval for finding new source commits, default 60s.\n);\n\n-- Then query the table in stream mode\nselect * from t1;\n")),(0,r.kt)("p",null,"This will give all changes that happened after the ",(0,r.kt)("inlineCode",{parentName:"p"},"read.streaming.start-commit")," commit. The unique thing about this\nfeature is that it now lets you author streaming pipelines on streaming or batch data source."),(0,r.kt)("h3",{id:"deletes"},"Delete Data"),(0,r.kt)("p",null,"When consuming data in streaming query, Hudi Flink source can also accepts the change logs from the underneath data source,\nit can then applies the UPDATE and DELETE by per-row level. You can then sync a NEAR-REAL-TIME snapshot on Hudi for all kinds\nof RDBMS."),(0,r.kt)("h2",{id:"where-to-go-from-here"},"Where To Go From Here?"),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/flink_configuration"},"Flink Setup")," how-to page for deeper dive into configuration settings. "),(0,r.kt)("p",null,"If you are relatively new to Apache Hudi, it is important to be familiar with a few core concepts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/timeline"},"Hudi Timeline")," \u2013 How Hudi manages transactions and other table services"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/file_layouts"},"Hudi File Layout")," - How the files are laid out on storage"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/table_types"},"Hudi Table Types")," \u2013 ",(0,r.kt)("inlineCode",{parentName:"li"},"COPY_ON_WRITE")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"MERGE_ON_READ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/table_types#query-types"},"Hudi Query Types")," \u2013 Snapshot Queries, Incremental Queries, Read-Optimized Queries")),(0,r.kt)("p",null,'See more in the "Concepts" section of the docs.'),(0,r.kt)("p",null,"Take a look at recent ",(0,r.kt)("a",{parentName:"p",href:"/blog"},"blog posts")," that go in depth on certain topics or use cases."),(0,r.kt)("p",null,"Hudi tables can be queried from query engines like Hive, Spark, Flink, Presto and much more. We have put together a\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=VhNgUsxdrD0"},"demo video")," that show cases all of this on a docker based setup with all\ndependent systems running locally. We recommend you replicate the same setup and run the demo yourself, by following\nsteps ",(0,r.kt)("a",{parentName:"p",href:"/docs/docker_demo"},"here")," to get a taste for it. Also, if you are looking for ways to migrate your existing data\nto Hudi, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/migration_guide"},"migration guide"),"."))}c.isMDXComponent=!0}}]);