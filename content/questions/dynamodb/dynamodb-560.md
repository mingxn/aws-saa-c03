---
title: "A company's website handles millions of requests each day, a..."
draft: false
categories:
  - DynamoDB
  - Database
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company's website handles millions of requests each day, and the number of requests continues to increase. A solutions architect needs to improve the response time of the web application. The solutions architect determines that the application needs to decrease latency when retrieving product details from the Amazon DynamoDB table. Which solution will fulfill these requirements with the LEAST amount of operational overhead?"
options:
  A: "Set up a DynamoDB Accelerator (DAX) cluster. Route all read requests through DAX."
  B: "Set up Amazon ElastiCache for Redis between the DynamoDB table and the web application. Route all read requests through Redis."
  C: "Set up Amazon ElastiCache for Memcached between the DynamoDB table and the web application. Route all read requests through Memcached."
  D: "Set up Amazon DynamoDB Streams on the table, and have AWS Lambda read from the table and populate Amazon ElastiCache. Route all read requests through ElastiCache."
answer: ""
explanation: ""
tags:
  - dynamodb
  - database
---

<!-- Question data is in frontmatter -->
