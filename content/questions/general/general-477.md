---
title: "A law rm needs to share information with the public. The inf..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A law rm needs to share information with the public. The information includes hundreds of files that must be publicly readable. Modications or deletions of the files by anyone before a designated future date are prohibited. Which solution will fulfill these requirements in the MOST secure way?"
options:
  A: "Upload all files to an Amazon S3 bucket that is configured for static website hosting. Grant read-only IAM permissions to any AWS principals that access the S3 bucket until the designated date."
  B: "Create a new Amazon S3 bucket with S3 Versioning enabled. Use S3 Object Lock with a retention period in accordance with the designated date. Configure the S3 bucket for static website hosting. Set an S3 bucket policy to allow read-only access to the objects."
  C: "Create a new Amazon S3 bucket with S3 Versioning enabled. Configure an event trigger to run an AWS Lambda function in case of object modication or deletion. Configure the Lambda function to replace the objects with the original versions from a private S3 bucket."
  D: "Upload all files to an Amazon S3 bucket that is configured for static website hosting. Select the folder that contains the files. Use S3 Object Lock with a retention period in accordance with the designated date. Grant read-only IAM permissions to any AWS principals that access the S3 bucket."
answer: "A"
explanation: ""
tags:
  - general
---

<!-- Question data is in frontmatter -->
