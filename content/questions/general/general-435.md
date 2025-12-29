---
title: "A company needs to migrate a MySQL database from its on-prem..."
draft: false
categories:
  - General
domain: "Design Cost-Optimized Architectures"
difficulty: "medium"
question: "A company needs to migrate a MySQL database from its on-premises data center to AWS within 2 weeks. The database is 20 TB in size. The company wants to complete the migration with minimal downtime. Which solution will migrate the database MOST cost-effectively?"
options:
  A: "Order an AWS Snowball Edge Storage Optimized device. Use AWS Database Migration Service (AWS DMS) with AWS Schema Conversion Tool (AWS SCT) to migrate the database with replication of ongoing changes. Send the Snowball Edge device to AWS to nish the migration and continue the ongoing replication."
  B: "Order an AWS Snowmobile vehicle. Use AWS Database Migration Service (AWS DMS) with AWS Schema Conversion Tool (AWS SCT) to migrate the database with ongoing changes. Send the Snowmobile vehicle back to AWS to nish the migration and continue the ongoing replication."
  C: "Order an AWS Snowball Edge Compute Optimized with GPU device. Use AWS Database Migration Service (AWS DMS) with AWS Schema Conversion Tool (AWS SCT) to migrate the database with ongoing changes. Send the Snowball device to AWS to nish the migration and continue the ongoing replication"
  D: "Order a 1 GB dedicated AWS Direct Connect connection to establish a connection with the data center. Use AWS Database Migration Service (AWS DMS) with AWS Schema Conversion Tool (AWS SCT) to migrate the database with replication of ongoing changes."
answer: "A"
explanation: "This is a cost-effective solution for shipping large amounts of data to AWS. Snowball Edge devices are designed for efficient data transfer, and they can handle the 20 TB database.  AWS DMS is a managed service for migrating databases to AWS, and AWS SCT can assist in converting the database schema. Using these tools in combination allows for a smooth migration process."
tags:
  - general
---

<!-- Question data is in frontmatter -->
