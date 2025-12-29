---
title: "A company is designing the network for an online multi-playe..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company is designing the network for an online multi-player game. The game uses the UDP networking protocol and will be deployed in eight AWS Regions. The network architecture needs to minimize latency and packet loss to give end users a high-quality gaming experience. Which solution will fulfill these requirements?"
options:
  A: "Setup a transit gateway in each Region. Create inter-Region peering attachments between each transit gateway."
  B: "Set up AWS Global Accelerator with UDP listeners and endpoint groups in each Region."
  C: "Set up Amazon CloudFront with UDP turned on. Configure an origin in each Region."
  D: "Set up a VPC peering mesh between each Region. Turn on UDP for each VPC."
answer: "B"
explanation: "AWS Global Accelerator is designed to improve the availability and performance of applications by using static IP addresses (Anycast) and directing traffic over the AWS global network. It provides low-latency and high-performance routing, making it well-suited for applications with a global user base, such as multi-player games.  By setting up UDP listeners and endpoint groups in each Region with AWS Global Accelerator, you can efficiently route traffic to the nearest game servers, reducing latency and improving the overall gaming experience."
tags:
  - general
---

<!-- Question data is in frontmatter -->
