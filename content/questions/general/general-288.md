---
title: "A company is migrating a Linux-based web server group to AWS..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company is migrating a Linux-based web server group to AWS. The web servers must access files in a shared file store for some content. The company must not make any changes to the application. What should a solutions architect do to fulfill these requirements?"
options:
  A: "Create an Amazon S3 Standard bucket with access to the web servers."
  B: "Configure an Amazon CloudFront distribution with an Amazon S3 bucket as the origin."
  C: "Create an Amazon Elastic File System (Amazon EFS) file system. Mount the EFS file system on all web servers."
  D: "Configure a General Purpose SSD (gp3) Amazon Elastic Block Store (Amazon EBS) volume. Mount the EBS volume to all web servers."
answer: "C"
explanation: "To fulfill the requirement of providing a shared file store for Linux-based web servers without making changes to the application, you can use Amazon Elastic File System (Amazon EFS). Amazon EFS is a scalable and fully managed file storage service that can be easily mounted on multiple EC2 instances."
tags:
  - general
---

<!-- Question data is in frontmatter -->
