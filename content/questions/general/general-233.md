---
title: "A solutions architect has created a new AWS account and must..."
draft: false
categories:
  - General
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "A solutions architect has created a new AWS account and must secure AWS account root user access. Which combination of actions will accomplish this? (Choose two.)"
options:
  A: "Ensure the root user uses a strong password."
  B: "Enable multi-factor authentication to the root user."
  C: "Store root user access keys in an encrypted Amazon S3 bucket."
  D: "Add the root user to a group containing administrative permissions. E. Apply the required permissions to the root user with an inline policy document."
answer: "A"
explanation: "B. Enable multi-factor authentication to the root user.  Using a strong, complex password for the root user is a fundamental security practice. This helps protect the account from unauthorized access. Enabling MFA adds an additional layer of security. Even if someone manages to obtain the root user's password, they would still need the second factor (e.g., a mobile device or hardware token) to successfully authenticate."
tags:
  - general
---

<!-- Question data is in frontmatter -->
