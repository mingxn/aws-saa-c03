---
title: "A company has an ecommerce checkout workow that writes an or..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company has an ecommerce checkout workow that writes an order to a database and calls a service to process the payment. Users are experiencing timeouts during the checkout process. When users resubmit the checkout form, multiple unique orders are created for the same desired transaction. How should a solutions architect refactor this workow to prevent the creation of multiple orders?"
options:
  A: "Configure the web application to send an order message to Amazon Kinesis Data Firehose. Set the payment service to retrieve the message from Kinesis Data Firehose and process the order."
  B: "Create a rule in AWS CloudTrail to invoke an AWS Lambda function based on the logged application path request. Use Lambda to query the database, call the payment service, and pass in the order information."
  C: "Store the order in the database. Send a message that includes the order number to Amazon Simple Notification Service (Amazon SNS). Set the payment service to poll Amazon SNS, retrieve the message, and process the order."
  D: "Store the order in the database. Send a message that includes the order number to an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Set the payment service to retrieve the message and process the order. Delete the message from the queue."
answer: "D"
explanation: "Storing the order in the database first ensures that the order information is saved, even if the payment processing is delayed or fails. Sending a message to an SQS FIFO queue with the order number ensures that the processing is idempotent. If the same order number is sent multiple times, SQS guarantees that the messages are processed in order and only once."
tags:
  - general
---

<!-- Question data is in frontmatter -->
