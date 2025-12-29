---
title: "A company hosts its web applications in the AWS Cloud. The c..."
draft: false
categories:
  - General
domain: "Design Secure Architectures"
difficulty: "medium"
question: "A company hosts its web applications in the AWS Cloud. The company configures Elastic Load Balancers to use certificates that are imported into AWS certificate Manager (ACM). The company's security team must be notied 30 days before the expiration of each certificate. What should a solutions architect recommend to fulfill this requirement?"
options:
  A: "Add a rule in ACM to publish a custom message to an Amazon Simple Notification Service (Amazon SNS) topic every day, beginning 30 days before any certificate will expire."
  B: "Create an AWS Cong rule that checks for certificates that will expire within 30 days. Configure Amazon EventBridge (Amazon CloudWatch Events) to invoke a custom alert by way of Amazon Simple Notification Service (Amazon SNS) when AWS Cong reports a noncompliant resource."
  C: "Use AWS Trusted Advisor to check for certificates that will expire within 30 days. Create an Amazon CloudWatch alarm that is based on Trusted Advisor metrics for check status changes. Configure the alarm to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS)."
  D: "Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect any certificates that will expire within 30 days. Configure the rule to invoke an AWS Lambda function. Configure the Lambda function to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS)."
answer: ""
explanation: ""
tags:
  - general
---

<!-- Question data is in frontmatter -->
