---
title: "A company is developing a new mobile app. The company must i..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company is developing a new mobile app. The company must implement proper traffic filtering to protect its Application Load Balancer (ALB) against common application-level attacks, such as cross-site scripting or SQL injection. The company has minimal infrastructure and operational staff. The company needs to reduce its share of the responsibility in managing, updating, and securing servers for its AWS environment. What should a solutions architect recommend to fulfill these requirements?"
options:
  A: "Configure AWS WAF rules and associate them with the ALB."
  B: "Deploy the application using Amazon S3 with public hosting enabled."
  C: "Deploy AWS Shield Advanced and add the ALB as a protected resource."
  D: "Create a new ALB that directs traffic to an Amazon EC2 instance running a third-party rewall, which then passes the traffic to the current ALB."
answer: "A"
explanation: "AWS WAF (Web Application Firewall) is a service that helps protect web applications from common web exploits by allowing you to define customizable web security rules. It can be associated with an Application Load Balancer (ALB) to filter and block malicious traffic before it reaches the application. AWS WAF is a managed service, which means it reduces the operational burden on the company by handling the infrastructure, updates, and security configurations."
tags:
  - general
---

<!-- Question data is in frontmatter -->
