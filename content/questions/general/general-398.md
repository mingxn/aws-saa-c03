---
title: "A company needs to transfer 600 TB of data from its on-premi..."
draft: false
categories:
  - General
domain: "Design Cost-Optimized Architectures"
difficulty: "medium"
question: "A company needs to transfer 600 TB of data from its on-premises network-attached storage (NAS) system to the AWS Cloud. The data transfer must be complete within 2 weeks. The data is sensitive and must be encrypted in transit. The company’s internet connection can support an upload speed of 100 Mbps. Which solution fulfills these requirements MOST cost-effectively?"
options:
  A: "Use Amazon S3 multi-part upload functionality to transfer the files over HTTPS."
  B: "Create a VPN connection between the on-premises NAS system and the nearest AWS Region. Transfer the data over the VPN connection."
  C: "Use the AWS Snow Family console to order several AWS Snowball Edge Storage Optimized devices. Use the devices to transfer the data to Amazon S3."
  D: "Set up a 10 Gbps AWS Direct Connect connection between the company location and the nearest AWS Region. Transfer the data over a VPN connection into the Region to store the data in Amazon S3."
answer: "C"
explanation: "Transferring 600 TB of data over a 100 Mbps connection would take a very long time. AWS Snowball Edge devices allow for offline data transfer, and you can transfer the data to the devices at your location before shipping them to AWS. This way, you are not constrained by the upload speed during the 2-week period."
tags:
  - general
---

<!-- Question data is in frontmatter -->
