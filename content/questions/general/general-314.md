---
title: "A company has an on-premises MySQL database used by the glob..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company has an on-premises MySQL database used by the global sales team with infrequent access patterns. The sales team requires the database to have minimal downtime. A database administrator wants to migrate this database to AWS without selecting a particular instance type in anticipation of more users in the future. Which service should a solutions architect recommend?"
options:
  A: "Amazon Aurora MySQL"
  B: "Amazon Aurora Serverless for MySQL"
  C: "Amazon Redshift Spectrum"
  D: "Amazon RDS for MySQL"
answer: "B"
explanation: "Amazon Aurora Serverless: Aurora Serverless is a fully managed, on-demand, and auto-scaling relational database engine provided by AWS. It is suitable for infrequent access patterns and allows the database to automatically start up, shut down, and scale capacity based on actual usage."
tags:
  - general
---

<!-- Question data is in frontmatter -->
