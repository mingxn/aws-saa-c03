---
title: "A company runs an application that receives data from thousa..."
draft: false
categories:
  - General
domain: "Design Resilient Architectures"
difficulty: "medium"
question: "A company runs an application that receives data from thousands of geographically dispersed remote devices that use UDP. The application processes the data immediately and sends a message back to the device if necessary. No data is stored. The company needs a solution that minimizes latency for the data transmission from the devices. The solution also must provide rapid failover to another AWS Region. Which solution will fulfill these requirements?"
options:
  A: "Configure an Amazon Route 53 failover routing policy. Create a Network Load Balancer (NLB) in each of the two Regions. Configure the NLB to invoke an AWS Lambda function to process the data."
  B: "Use AWS Global Accelerator. Create a Network Load Balancer (NLB) in each of the two Regions as an endpoint. Create an Amazon Elastic Container Service (Amazon ECS) cluster with the Fargate launch type. Create an ECS service on the cluster. Set the ECS service as the target for the NLProcess the data in Amazon ECS."
  C: "Use AWS Global Accelerator. Create an Application Load Balancer (ALB) in each of the two Regions as an endpoint. Create an Amazon Elastic Container Service (Amazon ECS) cluster with the Fargate launch type. Create an ECS service on the cluster. Set the ECS service as the target for the ALB. Process the data in Amazon ECS."
  D: "Configure an Amazon Route 53 failover routing policy. Create an Application Load Balancer (ALB) in each of the two Regions. Create an Amazon Elastic Container Service (Amazon ECS) cluster with the Fargate launch type. Create an ECS service on the cluster. Set the ECS service as the target for the ALB. Process the data in Amazon ECS."
answer: "B"
explanation: "AWS Global Accelerator: AWS Global Accelerator provides static IP addresses that act as a fixed entry point to your application. It routes traffic over the AWS global network to the optimal AWS endpoint based on health, geography, and routing policies.  Network Load Balancer (NLB): NLB is well-suited for UDP-based traffic, and it's designed for high-performance, low-latency applications. In this case, it can efficiently handle the thousands of geographically dispersed remote devices sending UDP traffic.  Amazon ECS with Fargate Launch Type: Using ECS with Fargate allows you to deploy and run containers without managing the underlying infrastructure. This setup can efficiently handle the immediate processing of data without the need to manage the underlying servers."
tags:
  - general
---

<!-- Question data is in frontmatter -->
