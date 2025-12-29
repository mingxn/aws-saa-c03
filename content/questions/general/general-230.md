---
title: "A company is concerned that two NAT instances in use will no..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company is concerned that two NAT instances in use will no longer be able to support the traffic needed for the company’s application. A solutions architect wants to implement a solution that is highly available, fault tolerant, and automatically scalable. What should the solutions architect recommend?"
options:
  A: "Remove the two NAT instances and replace them with two NAT gateways in the same Availability Zone."
  B: "Use Auto Scaling groups with Network Load Balancers for the NAT instances in different Availability Zones."
  C: "Remove the two NAT instances and replace them with two NAT gateways in different Availability Zones."
  D: "Replace the two NAT instances with Spot Instances in different Availability Zones and deploy a Network Load Balancer."
answer: "C"
explanation: "NAT Gateway: NAT Gateways are managed, highly available, and scalable components provided by AWS. They are designed to handle the network address translation for instances in private subnets. By deploying NAT gateways in different Availability Zones, you ensure high availability.  Benefits of NAT Gateway: Managed Service: NAT Gateway is a fully managed service, reducing operational overhead. High Availability: Deploying NAT gateways in different Availability Zones ensures fault tolerance and high availability. Automatically Scalable: NAT Gateways automatically scale based on the traffic volume, eliminating the need for manual adjustments."
tags:
  - general
---

<!-- Question data is in frontmatter -->
