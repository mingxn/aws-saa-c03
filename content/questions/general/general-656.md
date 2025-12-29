---
title: "A company has multiple AWS accounts in an organization in AW..."
draft: false
categories:
  - General
domain: "Design Secure Architectures"
difficulty: "medium"
question: "A company has multiple AWS accounts in an organization in AWS Organizations that different business units use. The company has multiple oces around the world. The company needs to update security group rules to allow new oce CIDR ranges or to remove old CIDR ranges across the organization. The company wants to centralize the management of security group rules to minimize the administrative overhead that updating CIDR ranges requires. Which solution will fulfill these requirements MOST cost-effectively?"
options:
  A: "Create VPC security groups in the organization's management account. Update the security groups when a CIDR range update is necessary."
  B: "Create a VPC customer managed prex list that contains the list of CIDRs. Use AWS Resource Access Manager (AWS RAM) to share the prex list across the organization. Use the prex list in the security groups across the organization."
  C: "Create an AWS managed prex list. Use an AWS Security Hub policy to enforce the security group update across the organization. Use an AWS Lambda function to update the prex list automatically when the CIDR ranges change."
  D: "Create security groups in a central administrative AWS account. Create an AWS Firewall Manager common security group policy for the whole organization. Select the previously created security groups as primary groups in the policy."
answer: ""
explanation: ""
tags:
  - general
---

<!-- Question data is in frontmatter -->
