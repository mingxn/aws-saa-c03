---
title: "A company is developing a real-time multiplayer game that us..."
draft: false
categories:
  - AutoScaling
  - Compute
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company is developing a real-time multiplayer game that uses UDP for communications between the client and servers in an Auto Scaling group. Spikes in demand are anticipated during the day, so the game server platform must adapt accordingly. Developers want to store gamer scores and other non-relational data in a database solution that will scale without intervention. Which solution should a solutions architect recommend?"
options:
  A: "Use Amazon Route 53 for traffic distribution and Amazon Aurora Serverless for data storage."
  B: "Use a Network Load Balancer for traffic distribution and Amazon DynamoDB on-demand for data storage."
  C: "Use a Network Load Balancer for traffic distribution and Amazon Aurora Global Database for data storage."
  D: "Use an Application Load Balancer for traffic distribution and Amazon DynamoDB global tables for data storage."
answer: "B"
explanation: "Think of an NLB like a traffic cop for your game. It helps distribute and manage the incoming traffic from players to your game servers. It ensures that the load is balanced across your servers, which is crucial for handling the expected spikes in demand. DynamoDB is a type of database that can store data for your game, such as gamer scores. \"On-demand\" means that DynamoDB automatically scales to handle the amount of data and traffic your game is experiencing."
tags:
  - autoscaling
  - compute
---

<!-- Question data is in frontmatter -->
