---
title: "A company runs an online marketplace web application on AWS...."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company runs an online marketplace web application on AWS. The application serves hundreds of thousands of users during peak hours. The company needs a scalable, near-real-time solution to share the details of millions of financial transactions with several other internal applications. Transactions also need to be processed to remove sensitive data before being stored in a document database for low-latency retrieval. What should a solutions architect recommend to fulfill these requirements?"
options:
  A: "Store the transactions data into Amazon DynamoDB. Set up a rule in DynamoDB to remove sensitive data from every transaction upon write. Use DynamoDB Streams to share the transactions data with other applications."
  B: "Stream the transactions data into Amazon Kinesis Data Firehose to store data in Amazon DynamoDB and Amazon S3. Use AWS Lambda integration with Kinesis Data Firehose to remove sensitive data. Other applications can consume the data stored in Amazon S3."
  C: "Stream the transactions data into Amazon Kinesis Data Streams. Use AWS Lambda integration to remove sensitive data from every transaction and then store the transactions data in Amazon DynamoDB. Other applications can consume the transactions data off the Kinesis data stream."
  D: "Store the batched transactions data in Amazon S3 as files. Use AWS Lambda to process every file and remove sensitive data before updating the files in Amazon S3. The Lambda function then stores the data in Amazon DynamoDB. Other applications can consume transaction files stored in Amazon S3."
answer: "C"
explanation: "1. Real-time Data Stream: To share millions of financial transactions with other apps, you need to be able to ingest data in real-time, which is made possible by Amazon Kinesis Data Streams.  2. Data Transformation: You can cleanse and eliminate sensitive data from transactions before storing them in Amazon DynamoDB by utilizing AWS Lambda with Kinesis Data Streams. This takes care of the requirement to handle sensitive data with care. 3. Scalability: DynamoDB and Amazon Kinesis are both extremely scalable technologies that can manage enormous data volumes and adjust to the workload. To host a static website on Amazon S3, you would first need to create an S3 bucket. Then, you would need to upload the website files to the bucket. Once the files are uploaded, you can configure the bucket to serve as a website."
tags:
  - general
---

<!-- Question data is in frontmatter -->
