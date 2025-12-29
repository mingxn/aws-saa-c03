---
title: "A company wants to create an application to store employee d..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company wants to create an application to store employee data in a hierarchical structured relationship. The company needs a minimum-latency response to high-traffic queries for the employee data and must protect any sensitive data. The company also needs to receive monthly email messages if any financial information is present in the employee data. Which combination of steps should a solutions architect take to fulfill these requirements? (Choose two.)"
options:
  A: "Use Amazon Redshift to store the employee data in hierarchies. Unload the data to Amazon S3 every month."
  B: "Use Amazon DynamoDB to store the employee data in hierarchies. Export the data to Amazon S3 every month."
  C: "Configure Amazon Macie for the AWS account. Integrate Macie with Amazon EventBridge to send monthly events to AWS Lambda."
  D: "Use Amazon Athena to analyze the employee data in Amazon S3. Integrate Athena with Amazon QuickSight to publish analysis dashboards and share the dashboards with users. E. Configure Amazon Macie for the AWS account. Integrate Macie with Amazon EventBridge to send monthly notifications through an Amazon Simple Notification Service (Amazon SNS) subscription."
answer: "B"
explanation: "E. Configure Amazon Macie for the AWS account. Integrate Macie with Amazon EventBridge to send monthly notifications through an Amazon Simple Notification Service (Amazon SNS) subscription.  Amazon DynamoDB is a highly scalable, low-latency NoSQL database that can efficiently store hierarchical data. Exporting the data to Amazon S3 every month allows further analysis and integration with other AWS services.  Amazon Macie is a security service that automatically discovers, classifies, and protects sensitive data. Integrating Macie with EventBridge allows you to set up monthly events and send notifications through Amazon SNS if financial information is detected."
tags:
  - general
---

<!-- Question data is in frontmatter -->
