---
title: "A company that uses AWS is building an application to transf..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company that uses AWS is building an application to transfer data to a product manufacturer. The company has its own identity provider (IdP). The company wants the IdP to authenticate application users while the users use the application to transfer data. The company must use Applicability Statement 2 (AS2) protocol. Which solution will fulfill these requirements?"
options:
  A: "Use AWS DataSync to transfer the data. Create an AWS Lambda function for IdP authentication."
  B: "Use Amazon AppFlow ows to transfer the data. Create an Amazon Elastic Container Service (Amazon ECS) task for IdP authentication."
  C: "Use AWS Transfer Family to transfer the data. Create an AWS Lambda function for IdP authentication."
  D: "Use AWS Storage Gateway to transfer the data. Create an Amazon Cognito identity pool for IdP authentication."
answer: "C"
explanation: "AWS Transfer Family (Option C): AWS Transfer Family is a fully managed service that allows you to transfer files over the internet using a range of protocols, including AS2. You can integrate AWS Transfer Family with your IdP for user authentication. By using a Lambda function, you can customize the authentication process and integrate it with your own IdP."
tags:
  - general
---

<!-- Question data is in frontmatter -->
