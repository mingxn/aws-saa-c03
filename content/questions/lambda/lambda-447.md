---
title: "A company has a stateless web application that runs on AWS L..."
draft: false
categories:
  - Lambda
  - Compute
domain: "Design Resilient Architectures"
difficulty: "medium"
question: "A company has a stateless web application that runs on AWS Lambda functions that are invoked by Amazon API Gateway. The company wants to deploy the application across multiple AWS Regions to provide Regional failover capabilities. What should a solutions architect do to route traffic to multiple Regions?"
options:
  A: "Create Amazon Route 53 health checks for each Region. Use an active-active failover conguration."
  B: "Create an Amazon CloudFront distribution with an origin for each Region. Use CloudFront health checks to route traffic."
  C: "Create a transit gateway. Attach the transit gateway to the API Gateway endpoint in each Region. Configure the transit gateway to route requests."
  D: "Create an Application Load Balancer in the primary Region. Set the target group to point to the API Gateway endpoint hostnames in each Region."
answer: "A"
explanation: "By creating Amazon Route 53 health checks for each Region and configuring an active-active failover configuration, Route 53 can monitor the health of the endpoints in each Region and route traffic to healthy endpoints. In the event of a failure in one Region, Route 53 automatically routes traffic to the healthy endpoints in other Regions."
tags:
  - lambda
  - compute
---

<!-- Question data is in frontmatter -->
