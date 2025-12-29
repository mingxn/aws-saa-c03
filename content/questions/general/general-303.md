---
title: "A company is launching a new application deployed on an Amaz..."
draft: false
categories:
  - General
domain: "Design Cost-Optimized Architectures"
difficulty: "medium"
question: "A company is launching a new application deployed on an Amazon Elastic Container Service (Amazon ECS) cluster and is using the Fargate launch type for ECS tasks. The company is monitoring CPU and memory usage because it is expecting high traffic to the application upon its launch. However, the company wants to reduce costs when utilization decreases. What should a solutions architect recommend?"
options:
  A: "Use Amazon EC2 Auto Scaling to scale at certain periods based on previous traffic patterns."
  B: "Use an AWS Lambda function to scale Amazon ECS based on metric breaches that trigger an Amazon CloudWatch alarm."
  C: "Use Amazon EC2 Auto Scaling with simple scaling policies to scale when ECS metric breaches trigger an Amazon CloudWatch alarm."
  D: "Use AWS Application Auto Scaling with target trafficking policies to scale when ECS metric breaches trigger an Amazon CloudWatch alarm."
answer: "D"
explanation: "AWS Application Auto Scaling is a service that can automatically adjust the number of running ECS tasks or services based on specified CloudWatch metrics. Target trafficking policies allow you to set a target value for a specific metric, and AWS Application Auto Scaling automatically adjusts the desired task count to maintain the target. By using target trafficking policies, you can ensure that the ECS cluster scales up or down based on the application's demand while maintaining a balance between cost efficiency and performance."
tags:
  - general
---

<!-- Question data is in frontmatter -->
