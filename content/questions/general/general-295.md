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
answer: "B"
explanation: "S3 Object Lambda allows you to add custom code to process and transform data as it is requested by applications, without having to modify the original data stored in S3. By using S3 Object Lambda, you can process and remove the personally identifiable information (PII) on-the-fly before returning the data to the applications. This approach minimizes operational overhead because you don't need to create separate storage (buckets or tables) for each application, and you can apply the PII removal logic dynamically as the data is requested."
tags:
  - general
---

<!-- Question data is in frontmatter -->
