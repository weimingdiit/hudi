"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[6489],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(a),m=i,h=s["".concat(u,".").concat(m)]||s[m]||p[m]||o;return a?r.createElement(h,n(n({ref:t},d),{},{components:a})):r.createElement(h,n({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,n=new Array(o);n[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,n[1]=l;for(var c=2;c<o;c++)n[c]=a[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},23507:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var r=a(87462),i=a(63366),o=(a(67294),a(3905)),n=["components"],l={title:"Data Quality",keywords:["hudi","quality","expectations","pre-commit validator"]},u=void 0,c={unversionedId:"precommit_validator",id:"precommit_validator",title:"Data Quality",description:"Apache Hudi has what are called Pre-Commit Validators that allow you to validate that your data meets certain data quality",source:"@site/docs/precommit_validator.md",sourceDirName:".",slug:"/precommit_validator",permalink:"/cn/docs/next/precommit_validator",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/precommit_validator.md",tags:[],version:"current",frontMatter:{title:"Data Quality",keywords:["hudi","quality","expectations","pre-commit validator"]},sidebar:"docs",previous:{title:"Exporter",permalink:"/cn/docs/next/snapshot_exporter"},next:{title:"\u914d\u7f6e",permalink:"/cn/docs/next/configurations"}},d=[{value:"SQL Query Single Result",id:"sql-query-single-result",children:[],level:2},{value:"SQL Query Equality",id:"sql-query-equality",children:[],level:2},{value:"SQL Query Inequality",id:"sql-query-inequality",children:[],level:2},{value:"Extend Custom Validator",id:"extend-custom-validator",children:[],level:2}],p={toc:d};function s(e){var t=e.components,a=(0,i.Z)(e,n);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apache Hudi has what are called ",(0,o.kt)("strong",{parentName:"p"},"Pre-Commit Validators")," that allow you to validate that your data meets certain data quality\nexpectations as you are writing with DeltaStreamer or Spark Datasource writers."),(0,o.kt)("p",null,"To configure pre-commit validators, use this setting ",(0,o.kt)("inlineCode",{parentName:"p"},"hoodie.precommit.validators=<comma separated list of validator class names>"),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'spark.write.format("hudi")\n    .option("hoodie.precommit.validators", "org.apache.hudi.client.validator.SqlQueryEqualityPreCommitValidator")\n')),(0,o.kt)("p",null,"Today you can use any of these validators and even have the flexibility to extend your own:"),(0,o.kt)("h2",{id:"sql-query-single-result"},"SQL Query Single Result"),(0,o.kt)("p",null,"Can be used to validate that a query on the table results in a specific value."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/client/validator/SqlQuerySingleResultPreCommitValidator.java"},"org.apache.hudi.client.validator.SqlQuerySingleResultPreCommitValidator"))),(0,o.kt)("p",null,"Multiple queries separated by ';' delimiter are supported.Expected result is included as part of query separated by '#'. Example query: ",(0,o.kt)("inlineCode",{parentName:"p"},"query1#result1;query2#result2")),(0,o.kt)("p",null,'Example, "expect exactly 0 null rows":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import org.apache.hudi.config.HoodiePreCommitValidatorConfig._\n\ndf.write.format("hudi").mode(Overwrite).\n  option(TABLE_NAME, tableName).\n  option("hoodie.precommit.validators", "org.apache.hudi.client.validator.SqlQuerySingleResultPreCommitValidator").\n  option("hoodie.precommit.validators.single.value.sql.queries", "select count(*) from <TABLE_NAME> where col=null#0").\n  save(basePath)\n')),(0,o.kt)("h2",{id:"sql-query-equality"},"SQL Query Equality"),(0,o.kt)("p",null,"Can be used to validate for equality of rows before and after the commit."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/client/validator/SqlQueryEqualityPreCommitValidator.java"},"org.apache.hudi.client.validator.SqlQueryEqualityPreCommitValidator"))),(0,o.kt)("p",null,'Example, "expect no change of null rows with this commit":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import org.apache.hudi.config.HoodiePreCommitValidatorConfig._\n\ndf.write.format("hudi").mode(Overwrite).\n  option(TABLE_NAME, tableName).\n  option("hoodie.precommit.validators", "org.apache.hudi.client.validator.SqlQueryEqualityPreCommitValidator").\n  option("hoodie.precommit.validators.equality.sql.queries", "select count(*) from <TABLE_NAME> where col=null").\n  save(basePath)\n')),(0,o.kt)("h2",{id:"sql-query-inequality"},"SQL Query Inequality"),(0,o.kt)("p",null,"Can be used to validate for inequality of rows before and after the commit."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/client/validator/SqlQueryInequalityPreCommitValidator.java"},"org.apache.hudi.client.validator.SqlQueryInequalityPreCommitValidator"))),(0,o.kt)("p",null,'Example, "expect there must be a change of null rows with this commit":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import org.apache.hudi.config.HoodiePreCommitValidatorConfig._\n\ndf.write.format("hudi").mode(Overwrite).\n  option(TABLE_NAME, tableName).\n  option("hoodie.precommit.validators", "org.apache.hudi.client.validator.SqlQueryEqualityPreCommitValidator").\n  option("hoodie.precommit.validators.inequality.sql.queries", "select count(*) from <TABLE_NAME> where col=null").\n  save(basePath)\n')),(0,o.kt)("h2",{id:"extend-custom-validator"},"Extend Custom Validator"),(0,o.kt)("p",null,"Users can also provide their own implementations by extending the abstract class ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/client/validator/SparkPreCommitValidator.java"},"SparkPreCommitValidator"),"\nand overriding this method"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"void validateRecordsBeforeAndAfter(Dataset<Row> before, \n                                   Dataset<Row> after, \n                                   Set<String> partitionsAffected)\n")))}s.isMDXComponent=!0}}]);