---
title: "A company uses AWS Organizations. The company wants to opera..."
draft: false
categories:
  - General
domain: "Design Cost-Optimized Architectures"
difficulty: "medium"
question: "A company uses AWS Organizations. The company wants to operate some of its AWS accounts with different budgets. The company wants to receive alerts and automatically prevent provisioning of additional resources on AWS accounts when the allocated budget threshold is met during a specific period. Which combination of solutions will fulfill these requirements? (Choose three.)"
options:
  A: "Use AWS Budgets to create a budget. Set the budget amount under the Cost and Usage Reports section of the required AWS accounts."
  B: "Use AWS Budgets to create a budget. Set the budget amount under the Billing dashboards of the required AWS accounts."
  C: "Create an IAM user for AWS Budgets to run budget actions with the required permissions."
  D: "Create an IAM role for AWS Budgets to run budget actions with the required permissions. E. Add an alert to notify the company when each account fulfills its budget threshold. Add a budget action that selects the IAM identity created with the appropriate cong rule to prevent provisioning of additional resources. F. Add an alert to notify the company when each account fulfills its budget threshold. Add a budget action that selects the IAM identity created with the appropriate service control policy (SCP) to prevent provisioning of additional resources."
answer: "A"
explanation: ""
tags:
  - general
---

<!-- Question data is in frontmatter -->
