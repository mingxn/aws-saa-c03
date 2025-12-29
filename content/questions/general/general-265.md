---
title: "A solutions architect needs to design a highly available app..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A solutions architect needs to design a highly available application consisting of web, application, and database tiers. HTTPS content delivery should be as close to the edge as possible, with the least delivery time. Which solution fulfills these requirements and is MOST secure?"
options:
  A: "Configure a public Application Load Balancer (ALB) with multiple redundant Amazon EC2 instances in public subnets. Configure Amazon CloudFront to deliver HTTPS content using the public ALB as the origin."
  B: "Configure a public Application Load Balancer with multiple redundant Amazon EC2 instances in private subnets. Configure Amazon CloudFront to deliver HTTPS content using the EC2 instances as the origin."
  C: "Configure a public Application Load Balancer (ALB) with multiple redundant Amazon EC2 instances in private subnets. Configure Amazon CloudFront to deliver HTTPS content using the public ALB as the origin."
  D: "Configure a public Application Load Balancer with multiple redundant Amazon EC2 instances in public subnets. Configure Amazon CloudFront to deliver HTTPS content using the EC2 instances as the origin."
answer: "C"
explanation: "Public ALB in Private Subnets:  Deploy a public Application Load Balancer (ALB) in private subnets. This ensures that the ALB is not directly accessible from the internet, providing an additional layer of security.  Deploy multiple redundant Amazon EC2 instances in private subnets behind the ALB. The instances host the application and database tiers.  Configure Amazon CloudFront to deliver HTTPS content using the public ALB as the origin. CloudFront provides content delivery close to the edge, reducing latency and improving the delivery time for end-users."
tags:
  - general
---

<!-- Question data is in frontmatter -->
