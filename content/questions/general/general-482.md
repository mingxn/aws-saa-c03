---
title: "A company containerized a Windows job that runs on .NET 6 Fr..."
draft: false
categories:
  - General
domain: "Design Cost-Optimized Architectures"
difficulty: "medium"
question: "A company containerized a Windows job that runs on .NET 6 Framework under a Windows container. The company wants to run this job in the AWS Cloud. The job runs every 10 minutes. The job’s runtime varies between 1 minute and 3 minutes. Which solution will fulfill these requirements MOST cost-effectively?"
options:
  A: "Create an AWS Lambda function based on the container image of the job. Configure Amazon EventBridge to invoke the function every 10 minutes."
  B: "Use AWS Batch to create a job that uses AWS Fargate resources. Configure the job scheduling to run every 10 minutes."
  C: "Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate to run the job. Create a scheduled task based on the container image of the job to run every 10 minutes."
  D: "Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate to run the job. Create a standalone task based on the container image of the job. Use Windows task scheduler to run the job every 10 minutes."
answer: ""
explanation: ""
tags:
  - general
---

<!-- Question data is in frontmatter -->
