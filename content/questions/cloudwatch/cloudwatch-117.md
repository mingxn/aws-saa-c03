---
title: "A company stores its application logs in an Amazon CloudWatc..."
draft: false
categories:
  - CloudWatch
  - Monitoring
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company stores its application logs in an Amazon CloudWatch Logs log group. A new policy requires the company to store all application logs in Amazon OpenSearch Service (Amazon Elasticsearch Service) in near-real time. Which solution will fulfill this requirement with the LEAST operational overhead?"
options:
  A: "Configure a CloudWatch Logs subscription to stream the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service)."
  B: "Create an AWS Lambda function. Use the log group to invoke the function to write the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service)."
  C: "Create an Amazon Kinesis Data Firehose delivery stream. Configure the log group as the delivery streams sources. Configure Amazon OpenSearch Service (Amazon Elasticsearch Service) as the delivery stream's destination."
  D: "Install and configure Amazon Kinesis Agent on each application server to deliver the logs to Amazon Kinesis Data Streams. Configure Kinesis Data Streams to deliver the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service)."
answer: ""
explanation: ""
tags:
  - cloudwatch
  - monitoring
---

<!-- Question data is in frontmatter -->
