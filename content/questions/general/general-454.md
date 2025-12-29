---
title: "A company has resources across multiple AWS Regions and acco..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company has resources across multiple AWS Regions and accounts. A newly hired solutions architect discovers a previous employee did not provide details about the resources inventory. The solutions architect needs to build and map the relationship details of the various workloads across all accounts. Which solution will fulfill these requirements in the MOST operationally ecient way?"
options:
  A: "Use AWS Systems Manager Inventory to generate a map view from the detailed view report."
  B: "Use AWS Step Functions to collect workload details. Build architecture diagrams of the workloads manually."
  C: "Use Workload Discovery on AWS to generate architecture diagrams of the workloads."
  D: "Use AWS X-Ray to view the workload details. Build architecture diagrams with relationships."
answer: "C"
explanation: "AWS has a service called AWS Well-Architected Tool, which includes Workload Discovery. Workload Discovery automatically discovers and visualizes the architecture of your workloads. It provides architecture diagrams, best practice recommendations, and insights into your workloads."
tags:
  - general
---

<!-- Question data is in frontmatter -->
