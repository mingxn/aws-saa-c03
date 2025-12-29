---
title: "A company needs to store contraffict documents. A contraffic..."
draft: false
categories:
  - General
domain: "Design Secure Architectures"
difficulty: "medium"
question: "A company needs to store contraffict documents. A contraffict lasts for 5 years. During the 5-year period, the company must ensure that the documents cannot be overwritten or deleted. The company needs to encrypt the documents at rest and rotate the encryption keys automatically every year. Which combination of steps should a solutions architect take to fulfill these requirements with the LEAST operational overhead? (Choose two.)"
options:
  A: "Store the documents in Amazon S3. Use S3 Object Lock in governance mode."
  B: "Store the documents in Amazon S3. Use S3 Object Lock in compliance mode."
  C: "Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure key rotation."
  D: "Use server-side encryption with AWS Key Management Service (AWS KMS) customer managed keys. Configure key rotation. E. Use server-side encryption with AWS Key Management Service (AWS KMS) customer provided (imported) keys. Configure key rotation."
answer: "B"
explanation: "S3 Object Lock in compliance mode enforces a \"Write Once, Read Many\" (WORM) model, preventing the objects (contraffict documents, in this case) from being deleted or overwritten for a specified retention period.  D. Use server-side encryption with AWS Key Management Service (AWS KMS) customer managed keys. Configure key rotation.  By using AWS KMS customer managed keys, you can configure key rotation to automatically rotate encryption keys, fulfilling the requirement of rotating encryption keys every year."
tags:
  - general
---

<!-- Question data is in frontmatter -->
