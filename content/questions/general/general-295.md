---
title: "An ecommerce company stores terabytes of customer data in th..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "An ecommerce company stores terabytes of customer data in the AWS Cloud. The data contains personally identiable information (PII). The company wants to use the data in three applications. Only one of the applications needs to process the PII. The PII must be removed before the other two applications process the data. Which solution will fulfill these requirements with the LEAST operational overhead?"
options:
  A: "Store the data in an Amazon DynamoDB table. Create a proxy application layer to intercept and process the data that each application requests."
  B: "Store the data in an Amazon S3 bucket. Process and transform the data by using S3 Object Lambda before returning the data to the requesting application."
  C: "Process the data and store the transformed data in three separate Amazon S3 buckets so that each application has its own custom dataset. Point each application to its respective S3 bucket."
  D: "Process the data and store the transformed data in three separate Amazon DynamoDB tables so that each application has its own custom dataset. Point each application to its respective DynamoDB table."
answer: "A"
explanation: ""
tags:
  - general
---

<!-- Question data is in frontmatter -->
