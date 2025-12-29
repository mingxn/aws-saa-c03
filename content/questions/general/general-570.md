---
title: "A company is creating a REST API. The company has strict req..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company is creating a REST API. The company has strict requirements for the use of TLS. The company requires TLSv1.3 on the API endpoints. The company also requires a specific public third-party certificate authority (CA) to sign the TLS certificate. Which solution will fulfill these requirements?"
options:
  A: "Use a local machine to create a certificate that is signed by the third-party CImport the certificate into AWS certificate Manager (ACM). Create an HTTP API in Amazon API Gateway with a custom domain. Configure the custom domain to use the certificate."
  B: "Create a certificate in AWS certificate Manager (ACM) that is signed by the third-party CA. Create an HTTP API in Amazon API Gateway with a custom domain. Configure the custom domain to use the certificate."
  C: "Use AWS certificate Manager (ACM) to create a certificate that is signed by the third-party CA. Import the certificate into AWS certificate Manager (ACM). Create an AWS Lambda function with a Lambda function URL. Configure the Lambda function URL to use the certificate."
  D: "Create a certificate in AWS certificate Manager (ACM) that is signed by the third-party CA. Create an AWS Lambda function with a Lambda function URL. Configure the Lambda function URL to use the certificate."
answer: "A"
explanation: ""
tags:
  - general
---

<!-- Question data is in frontmatter -->
