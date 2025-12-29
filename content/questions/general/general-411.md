---
title: "A company has a web application with sporadic usage patterns..."
draft: false
categories:
  - General
domain: "Design Cost-Optimized Architectures"
difficulty: "medium"
question: "A company has a web application with sporadic usage patterns. There is heavy usage at the beginning of each month, moderate usage at the start of each week, and unpredictable usage during the week. The application consists of a web server and a MySQL database server running inside the data center. The company would like to move the application to the AWS Cloud, and needs to select a cost-effective database platform that will not require database modications. Which solution will fulfill these requirements?"
options:
  A: "Amazon DynamoDB"
  B: "Amazon RDS for MySQL"
  C: "MySQL-compatible Amazon Aurora Serverless"
  D: "MySQL deployed on Amazon EC2 in an Auto Scaling group"
answer: "C"
explanation: "Aurora Serverless is a serverless option for MySQL-compatible databases. It automatically adjusts the database capacity based on actual usage, making it suitable for sporadic usage patterns. It is MySQL-compatible, so it won't require significant database modifications."
tags:
  - general
---

<!-- Question data is in frontmatter -->
