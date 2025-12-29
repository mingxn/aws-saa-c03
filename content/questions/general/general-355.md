---
title: "A company is migrating an old application to AWS. The applic..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company is migrating an old application to AWS. The application runs a batch job every hour and is CPU intensive. The batch job takes 15 minutes on average with an on-premises server. The server has 64 virtual CPU (vCPU) and 512 GiB of memory. Which solution will run the batch job within 15 minutes with the LEAST operational overhead?"
options:
  A: "Use AWS Lambda with functional scaling."
  B: "Use Amazon Elastic Container Service (Amazon ECS) with AWS Fargate."
  C: "Use Amazon Lightsail with AWS Auto Scaling."
  D: "Use AWS Batch on Amazon EC2."
answer: "D"
explanation: "AWS Batch on Amazon EC2: AWS Batch is a fully managed service for batch computing that dynamically provisions the optimal quantity and type of compute resources (Amazon EC2 instances) based on the volume and specific resource requirements of the batch jobs. If the batch job is CPU-intensive and can be parallelized, AWS Batch can efficiently manage the compute resources needed for the job, and it provides a higher level of control over the environment compared to serverless options like AWS Lambda."
tags:
  - general
---

<!-- Question data is in frontmatter -->
