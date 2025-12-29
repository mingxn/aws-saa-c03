---
title: "A company previously migrated its data warehouse solution to..."
draft: false
categories:
  - General
domain: "Design Cost-Optimized Architectures"
difficulty: "medium"
question: "A company previously migrated its data warehouse solution to AWS. The company also has an AWS Direct Connect connection. Corporate oce users query the data warehouse using a visualization tool. The average size of a query returned by the data warehouse is 50 MB and each webpage sent by the visualization tool is approximately 500 KB. Result sets returned by the data warehouse are not cached. Which solution provides the LOWEST data transfer egress cost for the company?"
options:
  A: "Host the visualization tool on premises and query the data warehouse directly over the internet."
  B: "Host the visualization tool in the same AWS Region as the data warehouse. Access it over the internet."
  C: "Host the visualization tool on premises and query the data warehouse directly over a Direct Connect connection at a location in the same AWS Region."
  D: "Host the visualization tool in the same AWS Region as the data warehouse and access it over a Direct Connect connection at a location in the same Region."
answer: "D"
explanation: "Hosting the visualization tool in the same AWS Region as the data warehouse and accessing it over a Direct Connect connection within the same Region minimizes data transfer costs. Since the data warehouse and the visualization tool are in the same Region, the data transfer between them doesn't incur the usual costs associated with data leaving the AWS network."
tags:
  - general
---

<!-- Question data is in frontmatter -->
