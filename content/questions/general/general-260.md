---
title: "A company’s compliance team needs to move its file shares to..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company’s compliance team needs to move its file shares to AWS. The shares run on a Windows Server SMB file share. A self-managed on- premises Active Directory controls access to the files and folders. The company wants to use Amazon FSx for Windows File Server as part of the solution. The company must ensure that the on-premises Active Directory groups restrict access to the FSx for Windows File Server SMB compliance shares, folders, and files after the move to AWS. The company has created an FSx for Windows File Server file system. Which solution will fulfill these requirements?"
options:
  A: "Create an Active Directory Connector to connect to the Active Directory. Map the Active Directory groups to IAM groups to restrict access."
  B: "Assign a tag with a Restrict tag key and a Compliance tag value. Map the Active Directory groups to IAM groups to restrict access."
  C: "Create an IAM service-linked role that is linked directly to FSx for Windows File Server to restrict access."
  D: "Join the file system to the Active Directory to restrict access."
answer: "A"
explanation: ""
tags:
  - general
---

<!-- Question data is in frontmatter -->
