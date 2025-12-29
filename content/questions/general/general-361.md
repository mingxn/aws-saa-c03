---
title: "A company hosts a multiplayer gaming application on AWS. The..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company hosts a multiplayer gaming application on AWS. The company wants the application to read data with sub-millisecond latency and run one-time queries on historical data. Which solution will fulfill these requirements with the LEAST operational overhead?"
options:
  A: "Use Amazon RDS for data that is frequently accessed. Run a periodic custom script to export the data to an Amazon S3 bucket."
  B: "Store the data directly in an Amazon S3 bucket. Implement an S3 Lifecycle policy to move older data to S3 Glacier Deep Archive for long- term storage. Run one-time queries on the data in Amazon S3 by using Amazon Athena."
  C: "Use Amazon DynamoDB with DynamoDB Accelerator (DAX) for data that is frequently accessed. Export the data to an Amazon S3 bucket by using DynamoDB table export. Run one-time queries on the data in Amazon S3 by using Amazon Athena."
  D: "Use Amazon DynamoDB for data that is frequently accessed. Turn on streaming to Amazon Kinesis Data Streams. Use Amazon Kinesis Data Firehose to read the data from Kinesis Data Streams. Store the records in an Amazon S3 bucket."
answer: "C"
explanation: "Amazon DynamoDB with DynamoDB Accelerator (DAX):  DynamoDB is a highly scalable and low-latency NoSQL database, suitable for frequently accessed data. DynamoDB Accelerator (DAX) is a caching layer that provides sub-millisecond read latencies for DynamoDB. Export Data to Amazon S3:  Use DynamoDB table export to periodically export historical data to an Amazon S3 bucket. This allows you to store historical data in a cost-effective manner while still benefiting from DynamoDB for frequently accessed data. Amazon Athena for One-time Queries:  Amazon Athena allows you to run SQL queries directly on data stored in Amazon S3. By using Athena, you can perform one-time queries on the historical data without the need to manage a separate database."
tags:
  - general
---

<!-- Question data is in frontmatter -->
