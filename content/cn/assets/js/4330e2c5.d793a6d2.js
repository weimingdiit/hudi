"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[2865],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,p=d["".concat(l,".").concat(m)]||d[m]||h[m]||i;return a?r.createElement(p,o(o({ref:t},u),{},{components:a})):r.createElement(p,o({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6108:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return h},default:function(){return m}});var r=a(87462),n=a(63366),i=(a(67294),a(3905)),o=["components"],s={title:"Schema evolution with DeltaStreamer using KafkaSource",excerpt:"Evolve schema used in Kafkasource of DeltaStreamer to keep data up to date with business",author:"sbernauer",category:"blog"},l=void 0,c={permalink:"/cn/blog/2021/08/16/kafka-custom-deserializer",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-08-16-kafka-custom-deserializer.md",source:"@site/blog/2021-08-16-kafka-custom-deserializer.md",title:"Schema evolution with DeltaStreamer using KafkaSource",description:"The schema used for data exchange between services can change rapidly with new business requirements.",date:"2021-08-16T00:00:00.000Z",formattedDate:"August 16, 2021",tags:[],readingTime:3.155,truncated:!0,authors:[{name:"sbernauer"}],prevItem:{title:"Adding support for Virtual Keys in Hudi",permalink:"/cn/blog/2021/08/18/virtual-keys"},nextItem:{title:"Apache Hudi - The Data Lake Platform",permalink:"/cn/blog/2021/07/21/streaming-data-lake-platform"}},u={authorsImageUrls:[void 0]},h=[{value:"What do we want to achieve?",id:"what-do-we-want-to-achieve",children:[],level:2},{value:"What is the problem?",id:"what-is-the-problem",children:[],level:2},{value:"Solution",id:"solution",children:[],level:2},{value:"Configurations",id:"configurations",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],d={toc:h};function m(e){var t=e.components,s=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The schema used for data exchange between services can change rapidly with new business requirements.\nApache Hudi is often used in combination with kafka as a event stream where all events are transmitted according to a record schema.\nIn our case a Confluent schema registry is used to maintain the schema and as schema evolves, newer versions are updated in the schema registry."),(0,i.kt)("h2",{id:"what-do-we-want-to-achieve"},"What do we want to achieve?"),(0,i.kt)("p",null,"We have multiple instances of DeltaStreamer running, consuming many topics with different schemas ingesting to multiple Hudi tables. Deltastreamer is a utility in Hudi to assist in ingesting data from multiple sources like DFS, kafka, etc into Hudi. If interested, you can read more about DeltaStreamer tool ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/docs/writing_data#deltastreamer"},"here"),"\nIdeally every topic should be able to evolve the schema to match new business requirements. Producers start producing data with a new schema version and the DeltaStreamer picks up the new schema and ingests the data with the new schema. For this to work, we run our DeltaStreamer instances with the latest schema version available from the Schema Registry to ensure that we always use the freshest schema with all attributes.\nA prerequisites is that all the mentioned Schema evolutions must be ",(0,i.kt)("inlineCode",{parentName:"p"},"BACKWARD_TRANSITIVE")," compatible (see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/schema-registry/avro.html"},"Schema Evolution and Compatibility of Avro Schema changes"),". This ensures that every record in the kafka topic can always be read using the latest schema."),(0,i.kt)("h2",{id:"what-is-the-problem"},"What is the problem?"),(0,i.kt)("p",null,"The normal operation looks like this. Multiple (or a single) producers write records to the kafka topic.\nIn regular flow of events, all records are in the same schema v1 and is in sync with schema registry.\n",(0,i.kt)("img",{alt:"Normal operation",src:a(53854).Z}),(0,i.kt)("br",null),"\nThings get complicated when a producer switches to a new Writer-Schema v2 (in this case ",(0,i.kt)("inlineCode",{parentName:"p"},"Producer A"),"). ",(0,i.kt)("inlineCode",{parentName:"p"},"Producer B")," remains on Schema v1. E.g. an attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"myattribute")," was added to the schema, resulting in schema version v2.\nDeltastreamer is capable of handling such schema evolution, if all incoming records were evolved and serialized with evolved schema. But the complication is that, some records are serialized with schema version v1 and some are serialized with schema version v2."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Schema evolution",src:a(15071).Z}),(0,i.kt)("br",null),"\nThe default deserializer used by Hudi ",(0,i.kt)("inlineCode",{parentName:"p"},"io.confluent.kafka.serializers.KafkaAvroDeserializer")," uses the schema that the record was serialized with for deserialization. This causes Hudi to get records with multiple different schema from the kafka client. E.g. Event #13 has the new attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"myattribute"),", Event #14 does not have the new attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"myattribute"),". This makes things complicated and error-prone for Hudi."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Confluent Deserializer",src:a(82747).Z}),(0,i.kt)("br",null)),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("p",null,"Hudi added a new custom Deserializer ",(0,i.kt)("inlineCode",{parentName:"p"},"KafkaAvroSchemaDeserializer")," to solve this problem of different producers producing records in different schema versions, but to use the latest schema from schema registry to deserialize all the records.",(0,i.kt)("br",null),"\nAs first step the Deserializer gets the latest schema from the Hudi SchemaProvider. The SchemaProvider can get the schema for example from a Confluent Schema-Registry or a file.\nThe Deserializer then reads the records from the topic using the schema the record was written with. As next step it will convert all the records to the latest schema from the SchemaProvider, in our case the latest schema. As a result, the kafka client will return all records with a unified schema i.e. the latest schema as per schema registry. Hudi does not need to handle different schemas inside a single batch."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"KafkaAvroSchemaDeserializer",src:a(96848).Z}),(0,i.kt)("br",null)),(0,i.kt)("h2",{id:"configurations"},"Configurations"),(0,i.kt)("p",null,"As of upcoming release 0.9.0, normal Confluent Deserializer is used by default. One has to explicitly set KafkaAvroSchemaDeserializer as below,\nin order to ensure smooth schema evolution with different producers producing records in different versions."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"hoodie.deltastreamer.source.kafka.value.deserializer.class=org.apache.hudi.utilities.deser.KafkaAvroSchemaDeserializer")),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Hope this blog helps in ingesting data from kafka into Hudi using Deltastreamer tool catering to different schema evolution\nneeds. Hudi has a very active development community and we look forward for more contributions.\nPlease check out ",(0,i.kt)("a",{parentName:"p",href:"https://hudi.apache.org/contribute/get-involved"},"this")," link to start contributing."))}m.isMDXComponent=!0},96848:function(e,t,a){t.Z=a.p+"assets/images/KafkaAvroSchemaDeserializer-7077d39b24f01312dbefecdc9cfb937a.png"},82747:function(e,t,a){t.Z=a.p+"assets/images/confluent_deserializer-acede4110283a5d72af7029f3c4a98a6.png"},53854:function(e,t,a){t.Z=a.p+"assets/images/normal_operation-5bf358ee14c1ee57978939d66f0ccc3e.png"},15071:function(e,t,a){t.Z=a.p+"assets/images/schema_evolution-b6cbf3c7c40814a0d8fcbd9f9176ea72.png"}}]);