---
title: "A company is migrating a distributed application to AWS. The..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company is migrating a distributed application to AWS. The application serves variable workloads. The legacy platform consists of a primary server that coordinates jobs across multiple compute nodes. The company wants to modernize the application with a solution that maximizes resiliency and scalability. How should a solutions architect design the architecture to fulfill these requirements?"
options:
  A: "Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling to use scheduled scaling."
  B: "Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling based on the size of the queue."
  C: "Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure AWS CloudTrail as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the primary server."
  D: "Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure Amazon EventBridge (Amazon CloudWatch Events) as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the compute nodes."
answer: "B"
explanation: "Option B: This option provides a decoupled architecture where the jobs are sent to an SQS queue. The compute nodes (EC2 instances in an Auto Scaling group) can then process these jobs. Scaling based on the size of the SQS queue (the number of messages) allows the architecture to adapt to variable workloads, scaling out when the queue depth increases and scaling in when the depth decreases."
tags:
  - general
---

<!-- Question data is in frontmatter -->
