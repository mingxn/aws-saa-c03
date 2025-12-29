---
title: "A solutions architect is designing a new API using Amazon AP..."
draft: false
categories:
  - API Gateway
  - Networking
domain: "Design Cost-Optimized Architectures"
difficulty: "medium"
question: "A solutions architect is designing a new API using Amazon API Gateway that will receive requests from users. The volume of requests is highly variable; several hours can pass without receiving a single request. The data processing will take place asynchronously, but should be completed within a few seconds after a request is made. Which compute service should the solutions architect have the API invoke to deliver the requirements at the lowest cost?"
options:
  A: "An AWS Glue job"
  B: "An AWS Lambda function"
  C: "A containerized service hosted in Amazon Elastic Kubernetes Service (Amazon EKS)"
  D: "A containerized service hosted in Amazon ECS with Amazon EC2"
answer: "B"
explanation: "AWS Lambda supports asynchronous invocation, which is suitable for scenarios where data processing can take place independently of the API request and complete within a few seconds. This aligns with the requirement of processing data asynchronously."
tags:
  - api gateway
  - networking
---

<!-- Question data is in frontmatter -->
