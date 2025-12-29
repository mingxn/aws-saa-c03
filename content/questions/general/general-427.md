---
title: "A solutions architect is implementing a complex Java applica..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A solutions architect is implementing a complex Java application with a MySQL database. The Java application must be deployed on Apache Tomcat and must be highly available. What should the solutions architect do to fulfill these requirements?"
options:
  A: "Deploy the application in AWS Lambda. Configure an Amazon API Gateway API to connect with the Lambda functions."
  B: "Deploy the application by using AWS Elastic Beanstalk. Configure a load-balanced environment and a rolling deployment policy."
  C: "Migrate the database to Amazon ElastiCache. Configure the ElastiCache security group to allow access from the application."
  D: "Launch an Amazon EC2 instance. Install a MySQL server on the EC2 instance. Configure the application on the server. Create an AMI. Use the AMI to create a launch template with an Auto Scaling group."
answer: "B"
explanation: "AWS Elastic Beanstalk: It is a fully managed service that simplifies the deployment and operation of applications, including web applications running Apache Tomcat. Elastic Beanstalk handles the deployment details, capacity provisioning, load balancing, auto-scaling, and application health monitoring, making it easier to deploy and manage your applications."
tags:
  - general
---

<!-- Question data is in frontmatter -->
