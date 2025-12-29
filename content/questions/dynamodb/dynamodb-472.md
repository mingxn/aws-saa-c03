---
title: "A company has a mobile chat application with a data store ba..."
draft: false
categories:
  - DynamoDB
  - Database
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company has a mobile chat application with a data store based in Amazon DynamoDB. Users would like new messages to be read with as little latency as possible. A solutions architect needs to design an optimal solution that requires minimal application changes. Which method should the solutions architect select?"
options:
  A: "Configure Amazon DynamoDB Accelerator (DAX) for the new messages table. Update the code to use the DAX endpoint."
  B: "Add DynamoDB read replicas to handle the increased read load. Update the application to point to the read endpoint for the read replicas."
  C: "Double the number of read capacity units for the new messages table in DynamoDB. Continue to use the existing DynamoDB endpoint."
  D: "Add an Amazon ElastiCache for Redis cache to the application stack. Update the application to point to the Redis cache endpoint instead of DynamoDB."
answer: "A"
explanation: "Amazon DynamoDB Accelerator (DAX) is an in-memory caching service for DynamoDB that helps improve the read performance of DynamoDB tables.A company hosts a website on Amazon EC2 instances behind an Application Load Balancer (ALB). The website serves static content. Website traffic is increasing, and the company is concerned about a potential increase in cost."
tags:
  - dynamodb
  - database
---

<!-- Question data is in frontmatter -->
