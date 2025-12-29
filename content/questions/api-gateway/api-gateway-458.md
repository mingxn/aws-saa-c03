---
title: "A solutions architect is designing a RESTAPI in Amazon API G..."
draft: false
categories:
  - API Gateway
  - Networking
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A solutions architect is designing a RESTAPI in Amazon API Gateway for a cash payback service. The application requires 1 GB of memory and 2 GB of storage for its computation resources. The application will require that the data is in a relational format. Which additional combination ofAWS services will fulfill these requirements with the LEAST administrative effort? (Choose two.)"
options:
  A: "Amazon EC2"
  B: "AWS Lambda"
  C: "Amazon RDS"
  D: "Amazon DynamoDB E. Amazon Elastic Kubernetes Services (Amazon EKS)"
answer: "B"
explanation: "C. Amazon RDS  AWS Lambda is a serverless compute service that automatically scales based on the number of requests and executes your code without requiring you to provision or manage servers. It's event-driven, and you pay only for the compute time consumed. For a REST API, Lambda can be a low-administration solution compared to managing infrastructure directly.  Amazon RDS (Relational Database Service) is a fully managed relational database service that simplifies database administration tasks. It provides options for popular database engines like MySQL, PostgreSQL, Oracle, and Microsoft SQL Server. You can easily provision, scale, and manage a relational database without dealing with the underlying infrastructure."
tags:
  - api gateway
  - networking
---

<!-- Question data is in frontmatter -->
