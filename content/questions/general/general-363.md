---
title: "A company is building a game system that needs to send uniqu..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company is building a game system that needs to send unique events to separate leaderboard, matchmaking, and authentication services concurrently. The company needs an AWS event-driven system that guarantees the order of the events. Which solution will fulfill these requirements?"
options:
  A: "Amazon EventBridge event bus"
  B: "Amazon Simple Notification Service (Amazon SNS) FIFO topics"
  C: "Amazon Simple Notification Service (Amazon SNS) standard topics"
  D: "Amazon Simple Queue Service (Amazon SQS) FIFO queues"
answer: "B"
explanation: "SNS FIFO also can send events or messages cocurrently to many subscribers while maintaining the order it receives. SNS fanout pattern is set in standard SNS which is commonly used to fan out events to large number of subscribers and usually for duplicated messages."
tags:
  - general
---

<!-- Question data is in frontmatter -->
