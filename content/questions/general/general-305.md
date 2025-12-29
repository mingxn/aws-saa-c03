---
title: "A company is designing a shared storage solution for a gamin..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company is designing a shared storage solution for a gaming application that is hosted in the AWS Cloud. The company needs the ability to use SMB clients to access data. The solution must be fully managed. Which AWS solution fulfills these requirements?"
options:
  A: "Create an AWS DataSync task that shares the data as a mountable file system. Mount the file system to the application server."
  B: "Create an Amazon EC2 Windows instance. Install and configure a Windows file share role on the instance. Connect the application server to the file share."
  C: "Create an Amazon FSx for Windows File Server file system. Attach the file system to the origin server. Connect the application server to the le system."
  D: "Create an Amazon S3 bucket. Assign an IAM role to the application to grant access to the S3 bucket. Mount the S3 bucket to the application server."
answer: "A"
explanation: ""
tags:
  - general
---

<!-- Question data is in frontmatter -->
