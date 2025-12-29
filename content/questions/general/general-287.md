---
title: "A company wants to migrate a Windows-based application from ..."
draft: false
categories:
  - General
domain: "Design Resilient Architectures"
difficulty: "medium"
question: "A company wants to migrate a Windows-based application from on premises to the AWS Cloud. The application has three tiers: an application tier, a business tier, and a database tier with Microsoft SQL Server. The company wants to use specific features of SQL Server such as native backups and Data Quality Services. The company also needs to share files for processing between the tiers. How should a solutions architect design the architecture to fulfill these requirements?"
options:
  A: "Host all three tiers on Amazon EC2 instances. Use Amazon FSx File Gateway for file sharing between the tiers."
  B: "Host all three tiers on Amazon EC2 instances. Use Amazon FSx for Windows File Server for file sharing between the tiers."
  C: "Host the application tier and the business tier on Amazon EC2 instances. Host the database tier on Amazon RDS. Use Amazon Elastic File System (Amazon EFS) for file sharing between the tiers."
  D: "Host the application tier and the business tier on Amazon EC2 instances. Host the database tier on Amazon RDS. Use a Provisioned IOPS SSD (io2) Amazon Elastic Block Store (Amazon EBS) volume for file sharing between the tiers."
answer: "A"
explanation: ""
tags:
  - general
---

<!-- Question data is in frontmatter -->
