---
title: "A company is implementing a shared storage solution for a ga..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company is implementing a shared storage solution for a gaming application that is hosted in the AWS Cloud. The company needs the ability to use Lustre clients to access data. The solution must be fully managed. Which solution fulfills these requirements?"
options:
  A: "Create an AWS DataSync task that shares the data as a mountable file system. Mount the file system to the application server."
  B: "Create an AWS Storage Gateway file gateway. Create a file share that uses the required client protocol. Connect the application server to the le share."
  C: "Create an Amazon Elastic File System (Amazon EFS) file system, and configure it to support Lustre. Attach the file system to the origin server. Connect the application server to the file system."
  D: "Create an Amazon FSx for Lustre file system. Attach the file system to the origin server. Connect the application server to the file system."
answer: "A"
explanation: ""
tags:
  - general
---

<!-- Question data is in frontmatter -->
