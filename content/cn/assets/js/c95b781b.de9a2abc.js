"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[9810],{86280:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"0.8.0","label":"0.8.0","banner":"unmaintained","badge":true,"className":"docs-version-0.8.0","isLast":false,"docsSidebars":{"version-0.8.0/docs":[{"type":"link","label":"\u6982\u5ff5","href":"/cn/docs/0.8.0/overview","docId":"overview"},{"collapsed":false,"type":"category","label":"Quick Start","items":[{"type":"link","label":"Spark Guide","href":"/cn/docs/0.8.0/quick-start-guide","docId":"quick-start-guide"},{"type":"link","label":"Flink Guide","href":"/cn/docs/0.8.0/flink-quick-start-guide","docId":"flink-quick-start-guide"}],"collapsible":true},{"type":"link","label":"\u4f7f\u7528\u6848\u4f8b","href":"/cn/docs/0.8.0/use_cases","docId":"use_cases"},{"type":"link","label":"\u5199\u5165 Hudi \u6570\u636e\u96c6","href":"/cn/docs/0.8.0/writing_data","docId":"writing_data"},{"type":"link","label":"Concurrency Control","href":"/cn/docs/0.8.0/concurrency_control","docId":"concurrency_control"},{"type":"link","label":"\u67e5\u8be2 Hudi \u6570\u636e\u96c6","href":"/cn/docs/0.8.0/querying_data","docId":"querying_data"},{"type":"link","label":"\u914d\u7f6e","href":"/cn/docs/0.8.0/configurations","docId":"configurations"},{"type":"link","label":"\u6027\u80fd","href":"/cn/docs/0.8.0/performance","docId":"performance"},{"type":"link","label":"\u7ba1\u7406 Hudi Pipelines","href":"/cn/docs/0.8.0/deployment","docId":"deployment"},{"collapsed":true,"type":"category","label":"Storage Configurations","items":[{"type":"link","label":"\u4e91\u50a8\u5b58","href":"/cn/docs/0.8.0/cloud","docId":"cloud"},{"type":"link","label":"S3 Filesystem","href":"/cn/docs/0.8.0/s3_hoodie","docId":"s3_hoodie"},{"type":"link","label":"GCS Filesystem","href":"/cn/docs/0.8.0/gcs_hoodie","docId":"gcs_hoodie"},{"type":"link","label":"OSS Filesystem","href":"/cn/docs/0.8.0/oss_hoodie","docId":"oss_hoodie"},{"type":"link","label":"Azure \u6587\u4ef6\u7cfb\u7edf","href":"/cn/docs/0.8.0/azure_hoodie","docId":"azure_hoodie"},{"type":"link","label":"COS Filesystem","href":"/cn/docs/0.8.0/cos_hoodie","docId":"cos_hoodie"},{"type":"link","label":"IBM Cloud Object Storage Filesystem","href":"/cn/docs/0.8.0/ibm_cos_hoodie","docId":"ibm_cos_hoodie"}],"collapsible":true},{"collapsed":true,"type":"category","label":"Resources","items":[{"type":"link","label":"Docker Demo","href":"/cn/docs/0.8.0/docker_demo","docId":"docker_demo"},{"type":"link","label":"Metrics","href":"/cn/docs/0.8.0/metrics","docId":"metrics"},{"type":"link","label":"Privacy Policy","href":"/cn/docs/0.8.0/privacy","docId":"privacy"}],"collapsible":true}]},"docs":{"azure_hoodie":{"id":"azure_hoodie","title":"Azure \u6587\u4ef6\u7cfb\u7edf","description":"\u5728\u672c\u9875\u4e2d\uff0c\u6211\u4eec\u89e3\u91ca\u5982\u4f55\u5728 Microsoft Azure \u4e0a\u4f7f\u7528 Hudi \u3002","sidebar":"version-0.8.0/docs"},"cloud":{"id":"cloud","title":"\u4e91\u50a8\u5b58","description":"\u4e0e\u4e91\u5b58\u50a8\u8fde\u63a5","sidebar":"version-0.8.0/docs"},"comparison":{"id":"comparison","title":"\u5bf9\u6bd4","description":"Apache Hudi\u586b\u8865\u4e86\u5728DFS\u4e0a\u5904\u7406\u6570\u636e\u7684\u5de8\u5927\u7a7a\u767d\uff0c\u5e76\u53ef\u4ee5\u548c\u8fd9\u4e9b\u6280\u672f\u5f88\u597d\u5730\u5171\u5b58\u3002\u7136\u800c\uff0c"},"concepts":{"id":"concepts","title":"Concepts","description":"Apache Hudi (pronounced \u201cHudi\u201d) provides the following streaming primitives over hadoop compatible storages"},"concurrency_control":{"id":"concurrency_control","title":"Concurrency Control","description":"In this section, we will cover Hudi\'s concurrency model and describe ways to ingest data into a Hudi Table from multiple writers; using the DeltaStreamer tool as well as","sidebar":"version-0.8.0/docs"},"configurations":{"id":"configurations","title":"\u914d\u7f6e","description":"\u8be5\u9875\u9762\u4ecb\u7ecd\u4e86\u51e0\u79cd\u914d\u7f6e\u5199\u5165\u6216\u8bfb\u53d6Hudi\u6570\u636e\u96c6\u7684\u4f5c\u4e1a\u7684\u65b9\u6cd5\u3002","sidebar":"version-0.8.0/docs"},"cos_hoodie":{"id":"cos_hoodie","title":"COS Filesystem","description":"\u8fd9\u4e2a\u9875\u9762\u63cf\u8ff0\u4e86\u5982\u4f55\u8ba9\u4f60\u7684Hudi spark\u4efb\u52a1\u4f7f\u7528Tencent Cloud COS\u5b58\u50a8\u3002","sidebar":"version-0.8.0/docs"},"deployment":{"id":"deployment","title":"\u7ba1\u7406 Hudi Pipelines","description":"\u7ba1\u7406\u5458/\u8fd0\u7ef4\u4eba\u5458\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u4e86\u89e3Hudi\u6570\u636e\u96c6/\u7ba1\u9053","sidebar":"version-0.8.0/docs"},"docker_demo":{"id":"docker_demo","title":"Docker Demo","description":"A Demo using docker containers","sidebar":"version-0.8.0/docs"},"flink-quick-start-guide":{"id":"flink-quick-start-guide","title":"Flink Guide","description":"This guide provides a quick peek at Hudi\'s capabilities using flink SQL client. Using flink SQL, we will walk through","sidebar":"version-0.8.0/docs"},"gcs_hoodie":{"id":"gcs_hoodie","title":"GCS Filesystem","description":"For Hudi storage on GCS, regional buckets provide an DFS API with strong consistency.","sidebar":"version-0.8.0/docs"},"ibm_cos_hoodie":{"id":"ibm_cos_hoodie","title":"IBM Cloud Object Storage Filesystem","description":"In this page, we explain how to get your Hudi spark job to store into IBM Cloud Object Storage.","sidebar":"version-0.8.0/docs"},"metrics":{"id":"metrics","title":"Metrics","description":"In this section, we will introduce the MetricsReporter and HoodieMetrics in Hudi. You can view the metrics-related configurations here.","sidebar":"version-0.8.0/docs"},"migration_guide":{"id":"migration_guide","title":"Migration Guide","description":"Hudi maintains metadata such as commit timeline and indexes to manage a dataset. The commit timelines helps to understand the actions happening on a dataset as well as the current state of a dataset. Indexes are used by Hudi to maintain a record key to file id mapping to efficiently locate a record. At the moment, Hudi supports writing only parquet columnar formats."},"oss_hoodie":{"id":"oss_hoodie","title":"OSS Filesystem","description":"\u8fd9\u4e2a\u9875\u9762\u63cf\u8ff0\u4e86\u5982\u4f55\u8ba9\u4f60\u7684Hudi spark\u4efb\u52a1\u4f7f\u7528Aliyun OSS\u5b58\u50a8\u3002","sidebar":"version-0.8.0/docs"},"overview":{"id":"overview","title":"\u6982\u5ff5","description":"Apache Hudi(\u53d1\u97f3\u4e3a\u201cHudi\u201d)\u5728DFS\u7684\u6570\u636e\u96c6\u4e0a\u63d0\u4f9b\u4ee5\u4e0b\u6d41\u539f\u8bed","sidebar":"version-0.8.0/docs"},"performance":{"id":"performance","title":"\u6027\u80fd","description":"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u4e00\u4e9b\u6709\u5173Hudi\u63d2\u5165\u66f4\u65b0\u3001\u589e\u91cf\u63d0\u53d6\u7684\u5b9e\u9645\u6027\u80fd\u6570\u636e\uff0c\u5e76\u5c06\u5176\u4e0e\u5b9e\u73b0\u8fd9\u4e9b\u4efb\u52a1\u7684\u5176\u5b83\u4f20\u7edf\u5de5\u5177\u8fdb\u884c\u6bd4\u8f83\u3002","sidebar":"version-0.8.0/docs"},"powered_by":{"id":"powered_by","title":"\u6f14\u8bb2 & Hudi \u7528\u6237","description":"\u5df2\u4f7f\u7528"},"privacy":{"id":"privacy","title":"Privacy Policy","description":"Information about your use of this website is collected using server access logs and a tracking cookie.","sidebar":"version-0.8.0/docs"},"querying_data":{"id":"querying_data","title":"\u67e5\u8be2 Hudi \u6570\u636e\u96c6","description":"\u4ece\u6982\u5ff5\u4e0a\u8bb2\uff0cHudi\u7269\u7406\u5b58\u50a8\u4e00\u6b21\u6570\u636e\u5230DFS\u4e0a\uff0c\u540c\u65f6\u5728\u5176\u4e0a\u63d0\u4f9b\u4e09\u4e2a\u903b\u8f91\u89c6\u56fe\uff0c\u5982\u4e4b\u524d\u6240\u8ff0\u3002","sidebar":"version-0.8.0/docs"},"quick-start-guide":{"id":"quick-start-guide","title":"Spark Guide","description":"This guide provides a quick peek at Hudi\'s capabilities using spark-shell. Using Spark datasources, we will walk through","sidebar":"version-0.8.0/docs"},"s3_hoodie":{"id":"s3_hoodie","title":"S3 Filesystem","description":"In this page, we explain how to get your Hudi spark job to store into AWS S3.","sidebar":"version-0.8.0/docs"},"structure":{"id":"structure","title":"Structure","description":"Hudi (pronounced \u201cHoodie\u201d) ingests & manages storage of large analytical tables over DFS (HDFS or cloud stores) and provides three types of queries."},"use_cases":{"id":"use_cases","title":"\u4f7f\u7528\u6848\u4f8b","description":"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u4f7f\u7528Hudi\u7684\u793a\u4f8b\uff0c\u8bf4\u660e\u4e86\u52a0\u5feb\u5904\u7406\u901f\u5ea6\u548c\u63d0\u9ad8\u6548\u7387\u7684\u597d\u5904","sidebar":"version-0.8.0/docs"},"writing_data":{"id":"writing_data","title":"\u5199\u5165 Hudi \u6570\u636e\u96c6","description":"\u8fd9\u4e00\u8282\u6211\u4eec\u5c06\u4ecb\u7ecd\u4f7f\u7528DeltaStreamer\u5de5\u5177\u4ece\u5916\u90e8\u6e90\u751a\u81f3\u5176\u4ed6Hudi\u6570\u636e\u96c6\u6444\u53d6\u65b0\u66f4\u6539\u7684\u65b9\u6cd5\uff0c","sidebar":"version-0.8.0/docs"}}}')}}]);