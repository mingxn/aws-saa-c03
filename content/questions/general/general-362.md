---
title: "A company uses a payment processing system that requires mes..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company uses a payment processing system that requires messages for a particular payment ID to be received in the same order that they were sent. Otherwise, the payments might be processed incorrectly. Which actions should a solutions architect take to fulfill this requirement? (Choose two.)"
options:
  A: "Write the messages to an Amazon DynamoDB table with the payment ID as the partition key."
  B: "Write the messages to an Amazon Kinesis data stream with the payment ID as the partition key."
  C: "Write the messages to an Amazon ElastiCache for Memcached cluster with the payment ID as the key."
  D: "Write the messages to an Amazon Simple Queue Service (Amazon SQS) queue. Set the message attribute to use the payment ID. E. Write the messages to an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Set the message group to use the payment ID."
answer: "B"
explanation: "E. Write the messages to an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Set the message group to use the payment ID.  Amazon Kinesis data streams can be used with partition keys to ensure that messages with the same partition key are processed in order. In this case, using the payment ID as the partition key will help maintain the order of messages.  SQS FIFO queues ensure that messages are processed in the order they are received. By using message groups and setting the payment ID as the message group, you can guarantee that messages for the same payment ID will be processed sequentially."
tags:
  - general
---

<!-- Question data is in frontmatter -->
