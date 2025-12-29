---
title: "A company has a web application that is based on Java and PH..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company has a web application that is based on Java and PHP. The company plans to move the application from on premises to AWS. The company needs the ability to test new site features frequently. The company also needs a highly available and managed solution that requires minimum operational overhead. Which solution will fulfill these requirements?"
options:
  A: "Create an Amazon S3 bucket. Enable static web hosting on the S3 bucket. Upload the static content to the S3 bucket. Use AWS Lambda to process all dynamic content."
  B: "Deploy the web application to an AWS Elastic Beanstalk environment. Use URL swapping to switch between multiple Elastic Beanstalk environments for feature testing."
  C: "Deploy the web application to Amazon EC2 instances that are configured with Java and PHP. Use Auto Scaling groups and an Application Load Balancer to manage the website’s availability."
  D: "Containerize the web application. Deploy the web application to Amazon EC2 instances. Use the AWS Load Balancer Controller to dynamically route traffic between containers that contain the new site features for testing."
answer: "B"
explanation: "Elastic Beanstalk allows you to perform blue-green deployments, which involve creating a new environment (green) with the updated code, testing it, and then swapping the URLs to direct traffic to the new environment. This enables you to test new features without affecting the production environment."
tags:
  - general
---

<!-- Question data is in frontmatter -->
