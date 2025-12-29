---
title: "A company has a production web application in which users up..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company has a production web application in which users upload documents through a web interface or a mobile app. According to a new regulatory requirement. new documents cannot be modied or deleted after they are stored. What should a solutions architect do to fulfill this requirement?"
options:
  A: "Store the uploaded documents in an Amazon S3 bucket with S3 Versioning and S3 Object Lock enabled."
  B: "Store the uploaded documents in an Amazon S3 bucket. Configure an S3 Lifecycle policy to archive the documents periodically."
  C: "Store the uploaded documents in an Amazon S3 bucket with S3 Versioning enabled. Configure an ACL to restrict all access to read-only."
  D: "Store the uploaded documents on an Amazon Elastic File System (Amazon EFS) volume. Access the data by mounting the volume in read- only mode."
answer: ""
explanation: ""
tags:
  - general
---

<!-- Question data is in frontmatter -->
