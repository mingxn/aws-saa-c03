---
title: "A company has a data ingestion workow that consists of the f..."
draft: false
categories:
  - Lambda
  - Compute
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company has a data ingestion workow that consists of the following: • An Amazon Simple Notification Service (Amazon SNS) topic for notifications about new data deliveries • An AWS Lambda function to process the data and record metadata The company observes that the ingestion workow fails occasionally because of network connectivity issues. When such a failure occurs, the Lambda function does not ingest the corresponding data unless the company manually reruns the job. Which combination of actions should a solutions architect take to ensure that the Lambda function ingests all data in the future? (Choose two.)"
options:
  A: "Deploy the Lambda function in multiple Availability Zones."
  B: "Create an Amazon Simple Queue Service (Amazon SQS) queue, and subscribe it to the SNS topic."
  C: "Increase the CPU and memory that are allocated to the Lambda function."
  D: "Increase provisioned throughput for the Lambda function. E. Modify the Lambda function to read from an Amazon Simple Queue Service (Amazon SQS) queue."
answer: "B"
explanation: "E. Modify the Lambda function to read from an Amazon Simple Queue Service (Amazon SQS) queue.  B. Create an Amazon Simple Queue Service (Amazon SQS) queue, and subscribe it to the SNS topic. This will decouple the ingestion workflow and provide a buffer to temporarily store the data in case of network connectivity issues.  E. Modify the Lambda function to read from an Amazon Simple Queue Service (Amazon SQS) queue. This will allow the Lambda function to process the data from the SQS queue at its own pace, decoupling the data ingestion from the data delivery and providing more flexibility and fault tolerance."
tags:
  - lambda
  - compute
---

<!-- Question data is in frontmatter -->
