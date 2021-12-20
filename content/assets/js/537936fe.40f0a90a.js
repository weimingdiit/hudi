"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[5087],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return m}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),u=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),c=u(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(h,i(i({ref:e},s),{},{components:a})):n.createElement(h,i({ref:e},s))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=c;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},68872:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],p={title:"Exporter",keywords:["hudi","snapshotexporter","export"],toc:!0},l=void 0,u={unversionedId:"snapshot_exporter",id:"version-0.10.0/snapshot_exporter",title:"Exporter",description:"Introduction",source:"@site/versioned_docs/version-0.10.0/snapshot_exporter.md",sourceDirName:".",slug:"/snapshot_exporter",permalink:"/docs/snapshot_exporter",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.0/snapshot_exporter.md",tags:[],version:"0.10.0",frontMatter:{title:"Exporter",keywords:["hudi","snapshotexporter","export"],toc:!0},sidebar:"version-0.10.0/docs",previous:{title:"File Sizing",permalink:"/docs/file_sizing"},next:{title:"Data Quality",permalink:"/docs/precommit_validator"}},s=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Arguments",id:"arguments",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Copy a Hudi dataset",id:"copy-a-hudi-dataset",children:[],level:3},{value:"Export to json or parquet dataset",id:"export-to-json-or-parquet-dataset",children:[],level:3},{value:"Re-partitioning",id:"re-partitioning",children:[],level:3},{value:"Custom Re-partitioning",id:"custom-re-partitioning",children:[],level:3}],level:2}],d={toc:s};function c(t){var e=t.components,a=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"HoodieSnapshotExporter allows you to copy data from one location to another for backups or other purposes.\nYou can write data as Hudi, Json, Orc, or Parquet file formats. In addition to copying data, you can also repartition data\nwith a provided field or implement custom repartitioning by extending a class shown in detail below."),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("p",null,"HoodieSnapshotExporter accepts a reference to a source path and a destination path. The utility will issue a\nquery, perform any repartitioning if required and will write the data as Hudi, parquet, or json format."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Argument"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"),(0,o.kt)("th",{parentName:"tr",align:null},"Note"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--source-base-path"),(0,o.kt)("td",{parentName:"tr",align:null},"Base path for the source Hudi dataset to be snapshotted"),(0,o.kt)("td",{parentName:"tr",align:null},"required"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--target-output-path"),(0,o.kt)("td",{parentName:"tr",align:null},"Output path for storing a particular snapshot"),(0,o.kt)("td",{parentName:"tr",align:null},"required"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--output-format"),(0,o.kt)("td",{parentName:"tr",align:null},"Output format for the exported dataset; accept these values: json,parquet,hudi"),(0,o.kt)("td",{parentName:"tr",align:null},"required"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--output-partition-field"),(0,o.kt)("td",{parentName:"tr",align:null},"A field to be used by Spark repartitioning"),(0,o.kt)("td",{parentName:"tr",align:null},"optional"),(0,o.kt)("td",{parentName:"tr",align:null},'Ignored when "Hudi" or when --output-partitioner is specified.The output dataset\'s default partition field will inherent from the source Hudi dataset.')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"--output-partitioner"),(0,o.kt)("td",{parentName:"tr",align:null},"A class to facilitate custom repartitioning"),(0,o.kt)("td",{parentName:"tr",align:null},"optional"),(0,o.kt)("td",{parentName:"tr",align:null},'Ignored when using output-format "Hudi"')))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"copy-a-hudi-dataset"},"Copy a Hudi dataset"),(0,o.kt)("p",null,"Exporter scans the source dataset and then makes a copy of it to the target output path."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'spark-submit \\\n  --jars "packaging/hudi-spark-bundle/target/hudi-spark-bundle_2.11-0.6.0-SNAPSHOT.jar" \\\n  --deploy-mode "client" \\\n  --class "org.apache.hudi.utilities.HoodieSnapshotExporter" \\\n      packaging/hudi-utilities-bundle/target/hudi-utilities-bundle_2.11-0.6.0-SNAPSHOT.jar \\\n  --source-base-path "/tmp/" \\\n  --target-output-path "/tmp/exported/hudi/" \\\n  --output-format "hudi"\n')),(0,o.kt)("h3",{id:"export-to-json-or-parquet-dataset"},"Export to json or parquet dataset"),(0,o.kt)("p",null,'The Exporter can also convert the source dataset into other formats. Currently only "json" and "parquet" are supported.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'spark-submit \\\n  --jars "packaging/hudi-spark-bundle/target/hudi-spark-bundle_2.11-0.6.0-SNAPSHOT.jar" \\\n  --deploy-mode "client" \\\n  --class "org.apache.hudi.utilities.HoodieSnapshotExporter" \\\n      packaging/hudi-utilities-bundle/target/hudi-utilities-bundle_2.11-0.6.0-SNAPSHOT.jar \\\n  --source-base-path "/tmp/" \\\n  --target-output-path "/tmp/exported/json/" \\\n  --output-format "json"  # or "parquet"\n')),(0,o.kt)("h3",{id:"re-partitioning"},"Re-partitioning"),(0,o.kt)("p",null,"When exporting to a different format, the Exporter takes the ",(0,o.kt)("inlineCode",{parentName:"p"},"--output-partition-field")," parameter to do some custom re-partitioning.\nNote: All ",(0,o.kt)("inlineCode",{parentName:"p"},"_hoodie_*")," metadata fields will be stripped during export, so make sure to use an existing non-metadata field as the output partitions."),(0,o.kt)("p",null,"By default, if no partitioning parameters are given, the output dataset will have no partition."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'spark-submit \\\n  --jars "packaging/hudi-spark-bundle/target/hudi-spark-bundle_2.11-0.6.0-SNAPSHOT.jar" \\\n  --deploy-mode "client" \\\n  --class "org.apache.hudi.utilities.HoodieSnapshotExporter" \\\n      packaging/hudi-utilities-bundle/target/hudi-utilities-bundle_2.11-0.6.0-SNAPSHOT.jar \\  \n  --source-base-path "/tmp/" \\\n  --target-output-path "/tmp/exported/json/" \\\n  --output-format "json" \\\n  --output-partition-field "symbol"  # assume the source dataset contains a field `symbol`\n')),(0,o.kt)("p",null,"The output directory will look like this"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"`_SUCCESS symbol=AMRS symbol=AYX symbol=CDMO symbol=CRC symbol=DRNA ...`\n")),(0,o.kt)("h3",{id:"custom-re-partitioning"},"Custom Re-partitioning"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--output-partitioner")," parameter takes in a fully-qualified name of a class that implements ",(0,o.kt)("inlineCode",{parentName:"p"},"HoodieSnapshotExporter.Partitioner"),".\nThis parameter takes higher precedence than ",(0,o.kt)("inlineCode",{parentName:"p"},"--output-partition-field"),", which will be ignored if this is provided."),(0,o.kt)("p",null,"An example implementation is shown below:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"MyPartitioner.java")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.foo.bar;\npublic class MyPartitioner implements HoodieSnapshotExporter.Partitioner {\n\n  private static final String PARTITION_NAME = "date";\n \n  @Override\n  public DataFrameWriter<Row> partition(Dataset<Row> source) {\n    // use the current hoodie partition path as the output partition\n    return source\n        .withColumnRenamed(HoodieRecord.PARTITION_PATH_METADATA_FIELD, PARTITION_NAME)\n        .repartition(new Column(PARTITION_NAME))\n        .write()\n        .partitionBy(PARTITION_NAME);\n  }\n}\n')),(0,o.kt)("p",null,"After putting this class in ",(0,o.kt)("inlineCode",{parentName:"p"},"my-custom.jar"),", which is then placed on the job classpath, the submit command will look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'spark-submit \\\n  --jars "packaging/hudi-spark-bundle/target/hudi-spark-bundle_2.11-0.6.0-SNAPSHOT.jar,my-custom.jar" \\\n  --deploy-mode "client" \\\n  --class "org.apache.hudi.utilities.HoodieSnapshotExporter" \\\n      packaging/hudi-utilities-bundle/target/hudi-utilities-bundle_2.11-0.6.0-SNAPSHOT.jar \\\n  --source-base-path "/tmp/" \\\n  --target-output-path "/tmp/exported/json/" \\\n  --output-format "json" \\\n  --output-partitioner "com.foo.bar.MyPartitioner"\n')))}c.isMDXComponent=!0}}]);