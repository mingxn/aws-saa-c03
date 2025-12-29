---
title: "A company is preparing to deploy a new serverless workload. ..."
draft: false
categories:
  - Lambda
  - Compute
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company is preparing to deploy a new serverless workload. A solutions architect must use the principle of least privilege to configure permissions that will be used to run an AWS Lambda function. An Amazon EventBridge (Amazon CloudWatch Events) rule will invoke the function. Which solution fulfills these requirements?"
options:
  A: "Add an execution role to the function with lambda:InvokeFunction as the action and * as the principal."
  B: "Add an execution role to the function with lambda:InvokeFunction as the action and Service: lambda.amazonaws.com as the principal."
  C: "Add a resource-based policy to the function with lambda:* as the action and Service: events.amazonaws.com as the principal."
  D: "Add a resource-based policy to the function with lambda:InvokeFunction as the action and Service: events.amazonaws.com as the principal."
answer: ""
explanation: ""
tags:
  - lambda
  - compute
---

<!-- Question data is in frontmatter -->
