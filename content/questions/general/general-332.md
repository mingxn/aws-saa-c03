---
title: "A company needs to provide its employees with secure access ..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company needs to provide its employees with secure access to condential and sensitive files. The company wants to ensure that the files can be accessed only by authorized users. The files must be downloaded securely to the employees’ devices. The files are stored in an on-premises Windows file server. However, due to an increase in remote usage, the file server is running out of capacity. . Which solution will fulfill these requirements?"
options:
  A: "Migrate the file server to an Amazon EC2 instance in a public subnet. Configure the security group to limit inbound traffic to the employees’ IP addresses."
  B: "Migrate the files to an Amazon FSx for Windows File Server file system. Integrate the Amazon FSx file system with the on-premises Active Directory. Configure AWS Client VPN."
  C: "Migrate the files to Amazon S3, and create a private VPC endpoint. Create a signed URL to allow download."
  D: "Migrate the files to Amazon S3, and create a public VPC endpoint. Allow employees to sign on with AWS IAM Identity Center (AWS Single Sign-On)."
answer: "A"
explanation: ""
tags:
  - general
---

<!-- Question data is in frontmatter -->
