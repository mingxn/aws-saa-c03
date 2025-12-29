---
title: "A company is designing an application. The application uses ..."
draft: false
categories:
  - Lambda
  - Compute
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company is designing an application. The application uses an AWS Lambda function to receive information through Amazon API Gateway and to store the information in an Amazon Aurora PostgreSQL database. During the proof-of-concept stage, the company has to increase the Lambda quotas signicantly to handle the high volumes of data that the company needs to load into the database. A solutions architect must recommend a new design to improve scalability and minimize the conguration effort. Which solution will fulfill these requirements?"
options:
  A: "Refactor the Lambda function code to Apache Tomcat code that runs on Amazon EC2 instances. Connect the database by using native Java Database Connectivity (JDBC) drivers."
  B: "Change the platform from Aurora to Amazon DynamoDProvision a DynamoDB Accelerator (DAX) cluster. Use the DAX client SDK to point the existing DynamoDB API calls at the DAX cluster."
  C: "Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using Amazon Simple Notification Service (Amazon SNS)."
  D: "Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using an Amazon Simple Queue Service (Amazon SQS) queue."
answer: "D"
explanation: "\"By dividing the functionality into two Lambda functions, one for receiving the information and the other for loading it into the database, you can independently scale and optimize each function based on their specific requirements. This approach allows for more efficient resource allocation and reduces the potential impact of high volumes of data on the overall system."
tags:
  - lambda
  - compute
---

<!-- Question data is in frontmatter -->
