---
title: "A financial company hosts a web application on AWS. The appl..."
draft: false
categories:
  - API Gateway
  - Networking
domain: "Design Secure Architectures"
difficulty: "medium"
question: "A financial company hosts a web application on AWS. The application uses an Amazon API Gateway Regional API endpoint to give users the ability to retrieve current stock prices. The company’s security team has noticed an increase in the number of API requests. The security team is concerned that HTTP ood attacks might take the application oine. A solutions architect must design a solution to protect the application from this type of attack. Which solution fulfills these requirements with the LEAST operational overhead?"
options:
  A: "Create an Amazon CloudFront distribution in front of the API Gateway Regional API endpoint with a maximum TTL of 24 hours."
  B: "Create a Regional AWS WAF web ACL with a rate-based rule. Associate the web ACL with the API Gateway stage."
  C: "Use Amazon CloudWatch metrics to monitor the Count metric and alert the security team when the predened rate is reached."
  D: "Create an Amazon CloudFront distribution with Lambda@Edge in front of the API Gateway Regional API endpoint. Create an AWS Lambda function to block requests from IP addresses that exceed the predened rate."
answer: ""
explanation: ""
tags:
  - api gateway
  - networking
---

<!-- Question data is in frontmatter -->
