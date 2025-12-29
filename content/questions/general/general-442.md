---
title: "A company stores several petabytes of data across multiple A..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A company stores several petabytes of data across multiple AWS accounts. The company uses AWS Lake Formation to manage its data lake. The company's data science team wants to securely share selective data from its accounts with the company's engineering team for analytical purposes. Which solution will fulfill these requirements with the LEAST operational overhead?"
options:
  A: "Copy the required data to a common account. Create an IAM access role in that account. Grant access by specifying a permission policy that includes users from the engineering team accounts as trusted entities."
  B: "Use the Lake Formation permissions Grant command in each account where the data is stored to allow the required engineering team users to access the data."
  C: "Use AWS Data Exchange to privately publish the required data to the required engineering team accounts."
  D: "Use Lake Formation tag-based access control to authorize and grant cross-account permissions for the required data to the engineering team accounts."
answer: "D"
explanation: "Lake Formation allows you to use tag-based access control to authorize and grant permissions for data in the data lake. You can apply tags to databases and tables, and then use those tags to control access to the data.  By applying tags to the relevant data and using tag-based access control, you can easily manage access to specific data sets without having to create additional IAM roles or copy data to a common account."
tags:
  - general
---

<!-- Question data is in frontmatter -->
