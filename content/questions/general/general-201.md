---
title: "A company is developing a marketing communications service t..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company is developing a marketing communications service that targets mobile app users. The company needs to send conrmation messages with Short Message Service (SMS) to its users. The users must be able to reply to the SMS messages. The company must store the responses for a year for analysis. What should a solutions architect do to fulfill these requirements?"
options:
  A: "Create an Amazon Connect contact ow to send the SMS messages. Use AWS Lambda to process the responses."
  B: "Build an Amazon Pinpoint journey. Configure Amazon Pinpoint to send events to an Amazon Kinesis data stream for analysis and archiving."
  C: "Use Amazon Simple Queue Service (Amazon SQS) to distribute the SMS messages. Use AWS Lambda to process the responses."
  D: "Create an Amazon Simple Notification Service (Amazon SNS) FIFO topic. Subscribe an Amazon Kinesis data stream to the SNS topic for analysis and archiving."
answer: "B"
explanation: "Amazon Pinpoint is a fully managed service for sending messages to mobile app users. With Amazon Pinpoint journeys, you can create multi-step campaigns to engage with users. By configuring Amazon Pinpoint to send events to an Amazon Kinesis data stream, you can capture the responses for further analysis and archiving. This solution provides a comprehensive approach to managing SMS messages and their responses in a scalable and efficient manner."
tags:
  - general
---

<!-- Question data is in frontmatter -->
