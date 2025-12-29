---
title: "A company that primarily runs its application servers on pre..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company that primarily runs its application servers on premises has decided to migrate to AWS. The company wants to minimize its need to scale its Internet Small Computer Systems Interface (iSCSI) storage on premises. The company wants only its recently accessed data to remain stored locally. Which AWS solution should the company use to fulfill these requirements?"
options:
  A: "Amazon S3 File Gateway"
  B: "AWS Storage Gateway Tape Gateway"
  C: "AWS Storage Gateway Volume Gateway stored volumes"
  D: "AWS Storage Gateway Volume Gateway cached volumes"
answer: "D"
explanation: "AWS Storage Gateway provides a hybrid cloud storage service that enables on-premises applications to use cloud storage seamlessly. Volume Gateway offers two modes: cached volumes and stored volumes. In the cached volumes mode, the entire dataset is stored in Amazon S3, and the most frequently accessed data is cached on-premises. This allows the company to keep recently accessed data locally, minimizing the need for on-premises scaling."
tags:
  - general
---

<!-- Question data is in frontmatter -->
