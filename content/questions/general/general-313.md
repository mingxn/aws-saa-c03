---
title: "A company is building a mobile app on AWS. The company wants..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company is building a mobile app on AWS. The company wants to expand its reach to millions of users. The company needs to build a platform so that authorized users can watch the company’s content on their mobile devices. What should a solutions architect recommend to fulfill these requirements?"
options:
  A: "Publish content to a public Amazon S3 bucket. Use AWS Key Management Service (AWS KMS) keys to stream content."
  B: "Set up IPsec VPN between the mobile app and the AWS environment to stream content."
  C: "Use Amazon CloudFront. Provide signed URLs to stream content."
  D: "Set up AWS Client VPN between the mobile app and the AWS environment to stream content."
answer: "C"
explanation: "Amazon CloudFront: CloudFront is a content delivery network (CDN) service provided by AWS. It accelerates the delivery of content by caching it at edge locations globally, reducing latency for end-users. Signed URLs: CloudFront supports the generation of signed URLs, which can be used to control access to content. You can create time-limited URLs with specific permissions, allowing only authorized users to access the content."
tags:
  - general
---

<!-- Question data is in frontmatter -->
