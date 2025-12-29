---
title: "A company wants to restrict access to the content of one of ..."
draft: false
categories:
  - General
domain: "Design Cost-Optimized Architectures"
difficulty: "medium"
question: "A company wants to restrict access to the content of one of its main web applications and to protect the content by using authorization techniques available on AWS. The company wants to implement a serverless architecture and an authentication solution for fewer than 100 users. The solution needs to integrate with the main web application and serve web content globally. The solution must also scale as the company's user base grows while providing the lowest login latency possible. Which solution will fulfill these requirements MOST cost-effectively?"
options:
  A: "Use Amazon Cognito for authentication. Use Lambda@Edge for authorization. Use Amazon CloudFront to serve the web application globally."
  B: "Use AWS Directory Service for Microsoft Active Directory for authentication. Use AWS Lambda for authorization. Use an Application Load Balancer to serve the web application globally."
  C: "Use Amazon Cognito for authentication. Use AWS Lambda for authorization. Use Amazon S3 Transfer Acceleration to serve the web application globally."
  D: "Use AWS Directory Service for Microsoft Active Directory for authentication. Use Lambda@Edge for authorization. Use AWS Elastic Beanstalk to serve the web application globally."
answer: "A"
explanation: "Amazon Cognito for Authentication: Amazon Cognito is a fully managed service for user identity and access control. It provides easy integration for authentication with a serverless architecture and supports a user pool for fewer than 100 users.  Lambda@Edge for Authorization: Lambda@Edge allows you to run custom code in response to CloudFront events, including authorization. You can implement authorization logic at the edge locations closest to the end-users, providing low-latency access.  Amazon CloudFront for Content Delivery: Amazon CloudFront is a global content delivery network (CDN) that integrates seamlessly with Lambda@Edge. CloudFront can serve the web application globally, distributing content from edge locations for low-latency access."
tags:
  - general
---

<!-- Question data is in frontmatter -->
