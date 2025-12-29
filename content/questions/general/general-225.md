---
title: "A media company collects and analyzes user activity data on ..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A media company collects and analyzes user activity data on premises. The company wants to migrate this capability to AWS. The user activity data store will continue to grow and will be petabytes in size. The company needs to build a highly available data ingestion solution that facilitates on-demand analytics of existing data and new data with SQL. Which solution will fulfill these requirements with the LEAST operational overhead?"
options:
  A: "Send activity data to an Amazon Kinesis data stream. Configure the stream to deliver the data to an Amazon S3 bucket."
  B: "Send activity data to an Amazon Kinesis Data Firehose delivery stream. Configure the stream to deliver the data to an Amazon Redshift cluster."
  C: "Place activity data in an Amazon S3 bucket. Configure Amazon S3 to run an AWS Lambda function on the data as the data arrives in the S3 bucket."
  D: "Create an ingestion service on Amazon EC2 instances that are spread across multiple Availability Zones. Configure the service to forward data to an Amazon RDS Multi-AZ database."
answer: "B"
explanation: "Amazon Kinesis Data Firehose: It is a fully managed service that simplifies the delivery of streaming data to destinations such as Amazon S3, Amazon Redshift, or Amazon Elasticsearch Service. It handles the scaling, buffering, and delivery of data.  Amazon Redshift: It is a fully managed, petabyte-scale data warehouse service. It is optimized for high-performance analysis using standard SQL queries.  Least Operational Overhead: Kinesis Data Firehose takes care of many operational aspects, including scaling and buffering, reducing the operational overhead on your part. Configuring it to deliver data to Amazon Redshift provides a streamlined and managed solution."
tags:
  - general
---

<!-- Question data is in frontmatter -->
