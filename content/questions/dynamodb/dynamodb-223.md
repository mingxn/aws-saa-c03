---
title: "A company has deployed a Java Spring Boot application as a p..."
draft: false
categories:
  - DynamoDB
  - Database
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company has deployed a Java Spring Boot application as a pod that runs on Amazon Elastic Kubernetes Service (Amazon EKS) in private subnets. The application needs to write data to an Amazon DynamoDB table. A solutions architect must ensure that the application can interact with the DynamoDB table without exposing traffic to the internet. Which combination of steps should the solutions architect take to accomplish this goal? (Choose two.)"
options:
  A: "Attach an IAM role that has sucient privileges to the EKS pod."
  B: "Attach an IAM user that has sucient privileges to the EKS pod."
  C: "Allow outbound connectivity to the DynamoDB table through the private subnets’ network ACLs."
  D: "Create a VPC endpoint for DynamoDB. E. Embed the access keys in the Java Spring Boot code."
answer: "A"
explanation: "D. Create a VPC endpoint for DynamoDB. Most Voted  This IAM role should have the necessary permissions to interact with DynamoDB. You can attach the IAM role to the pod using Kubernetes service account annotations or other mechanisms.  By creating a VPC endpoint for DynamoDB, you allow your EKS pods to access DynamoDB directly within the AWS network without traversing the public internet. This enhances security and reduces the risk of exposure."
tags:
  - dynamodb
  - database
---

<!-- Question data is in frontmatter -->
