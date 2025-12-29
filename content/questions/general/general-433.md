---
title: "A company is running its production and nonproduction enviro..."
draft: false
categories:
  - General
domain: "Design Cost-Optimized Architectures"
difficulty: "medium"
question: "A company is running its production and nonproduction environment workloads in multiple AWS accounts. The accounts are in an organization in AWS Organizations. The company needs to design a solution that will prevent the modication of cost usage tags. Which solution will fulfill these requirements?"
options:
  A: "Create a custom AWS Cong rule to prevent tag modication except by authorized principals."
  B: "Create a custom trail in AWS CloudTrail to prevent tag modication."
  C: "Create a service control policy (SCP) to prevent tag modication except by authorized principals."
  D: "Create custom Amazon CloudWatch logs to prevent tag modication."
answer: "C"
explanation: "SCPs in AWS Organizations are used to set fine-grained permissions on what actions AWS accounts within the organization can perform. You can create a custom SCP to specifically control access to tag modification."
tags:
  - general
---

<!-- Question data is in frontmatter -->
