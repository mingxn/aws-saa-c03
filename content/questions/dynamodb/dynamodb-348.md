---
title: "A company collects data from a large number of participants ..."
draft: false
categories:
  - DynamoDB
  - Database
domain: "Design Cost-Optimized Architectures"
difficulty: "medium"
question: "A company collects data from a large number of participants who use wearable devices. The company stores the data in an Amazon DynamoDB table and uses applications to analyze the data. The data workload is constant and predictable. The company wants to stay at or below its forecasted budget for DynamoDB. Which solution will fulfill these requirements MOST cost-effectively?"
options:
  A: "Use provisioned mode and DynamoDB Standard-Infrequent Access (DynamoDB Standard-IA). Reserve capacity for the forecasted workload."
  B: "Use provisioned mode. Specify the read capacity units (RCUs) and write capacity units (WCUs)."
  C: "Use on-demand mode. Set the read capacity units (RCUs) and write capacity units (WCUs) high enough to accommodate changes in the workload."
  D: "Use on-demand mode. Specify the read capacity units (RCUs) and write capacity units (WCUs) with reserved capacity."
answer: "B"
explanation: "In provisioned mode, you provision a specific amount of read and write capacity, which allows you to manage costs more effectively based on your expected workload. This approach is suitable when your workload is predictable, as you can provision the capacity to fulfill your known requirements. DynamoDB Standard-Infrequent Access (Option A) is designed for cost savings on long-term storage and retrieval of infrequently accessed data, and it might not be the best fit for a constant and predictable workload."
tags:
  - dynamodb
  - database
---

<!-- Question data is in frontmatter -->
