---
title: "A company has an application that ingests incoming messages...."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company has an application that ingests incoming messages. Dozens of other applications and microservices then quickly consume these messages. The number of messages varies drastically and sometimes increases suddenly to 100,000 each second. The company wants to decouple the solution and increase scalability. Which solution fulfills these requirements?"
options:
  A: "Persist the messages to Amazon Kinesis Data Analytics. Configure the consumer applications to read and process the messages."
  B: "Deploy the ingestion application on Amazon EC2 instances in an Auto Scaling group to scale the number of EC2 instances based on CPU metrics."
  C: "Write the messages to Amazon Kinesis Data Streams with a single shard. Use an AWS Lambda function to preprocess messages and store them in Amazon DynamoDB. Configure the consumer applications to read from DynamoDB to process the messages."
  D: "Publish the messages to an Amazon Simple Notification Service (Amazon SNS) topic with multiple Amazon Simple Queue Service (Amazon SOS) subscriptions. Configure the consumer applications to process the messages from the queues."
answer: "D"
explanation: "A good practice is to also add message attributes when publishing to SNS. Each SQS subscription can have a filter policy that matches only the messages it cares about, so that only relevant messages are delivered to each SQS queue, and consumers only see/process what they need.  an SQS queue can handle a maximum of 3,000 messages per second. However, you can request higher throughput by contacting AWS Support. AWS can increase the message throughput for your queue beyond the default limits in increments of 300 messages per second, up to a maximum of 10,000 messages per second.  It's important to note that the maximum number of messages per second that a queue can handle is not the same as the maximum number of requests per second that the SQS API can handle. The SQS API is designed to handle a high volume of requests per second, so it can be used to send messages to your queue at a rate that exceeds the maximum message throughput of the queue."
tags:
  - general
---

<!-- Question data is in frontmatter -->
