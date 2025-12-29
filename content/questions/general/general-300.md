---
title: "A company needs to migrate a legacy application from an on-p..."
draft: false
categories:
  - General
domain: "Design Cost-Optimized Architectures"
difficulty: "medium"
question: "A company needs to migrate a legacy application from an on-premises data center to the AWS Cloud because of hardware capacity constraints. The application runs 24 hours a day, 7 days a week. The application’s database storage continues to grow over time. What should a solutions architect do to fulfill these requirements MOST cost-effectively?"
options:
  A: "Migrate the application layer to Amazon EC2 Spot Instances. Migrate the data storage layer to Amazon S3."
  B: "Migrate the application layer to Amazon EC2 Reserved Instances. Migrate the data storage layer to Amazon RDS On-Demand Instances."
  C: "Migrate the application layer to Amazon EC2 Reserved Instances. Migrate the data storage layer to Amazon Aurora Reserved Instances."
  D: "Migrate the application layer to Amazon EC2 On-Demand Instances. Migrate the data storage layer to Amazon RDS Reserved Instances."
answer: "C"
explanation: "Using Amazon EC2 Reserved Instances for the application layer provides cost savings compared to On-Demand Instances while ensuring availability for the 24/7 runtime. Migrating the data storage layer to Amazon Aurora Reserved Instances provides a fully managed relational database service with automatic scaling capabilities. Amazon Aurora is designed for high performance and cost efficiency. Reserved Instances provide cost savings compared to On-Demand Instances over an extended period, making them suitable for applications with continuous operation. Amazon Aurora, being a fully managed service, offloads much of the operational overhead associated with managing a traditional database, making it a cost-effective choice for growing database storage."
tags:
  - general
---

<!-- Question data is in frontmatter -->
