# AWS SAA-C03 Question Generator

Converts AWS SAA-C03 exam questions from PDF format to Hugo-compatible markdown files.

## Directory Contents

- `pdf_to_questions.py` - Main conversion script
- `question.pdf` - Source PDF with exam questions
- `key.txt` - Answer key file with explanations
- `README.md` - This file

## Installation

```bash
pip3 install pdfplumber
```

The script will auto-install pdfplumber if not found.

## Usage

**Run from project root directory:**

```bash
# Without answer key (answers will default to 'A')
python3 generator/pdf_to_questions.py generator/question.pdf

# With answer key (recommended)
python3 generator/pdf_to_questions.py generator/question.pdf generator/key.txt
```

## Expected PDF Format

The script expects questions in this format:

```
Question #1 Topic 1
A company needs to deploy a web application...

A. Use Amazon EC2 with Auto Scaling
B. Use AWS Lambda with API Gateway
C. Use Amazon ECS with Fargate
D. Use Amazon Lightsail

Question #2 Topic 1
...
```

## Expected Answer Key Format

The answer key file should follow this format:

```
1] <question snippet>
ans- <full answer text>
Correct answer X: <explanation>

General line / Keywords / Option details
---

2] <next question>
ans- <answer text>
...
```

## Output

The script generates:

- **Location**: `content/questions/<service>/`
- **Naming**: `<service>-XXX.md` (e.g., `ec2-001.md`, `s3-015.md`)
- **Organization**: Auto-categorized by AWS service detected in question text
- **Domain assignment**: Based on keywords (security, cost, resilience, performance)
- **Hugo frontmatter**: Valid YAML with question data

**Debug output**: `extracted_text.txt` in project root (for troubleshooting)

## Service Categorization

Questions are automatically categorized based on detected AWS services:

- EC2, Lambda, ECS → Compute category
- S3, EBS, Glacier → Storage category
- RDS, DynamoDB → Database category
- VPC, ELB, CloudFront, Route 53, API Gateway → Networking category
- IAM → Security category
- CloudFormation, CloudWatch → Management/Monitoring category
- SNS, SQS → Application Integration category

## Post-Generation Tasks

After running the script:

1. Review `extracted_text.txt` if parsing issues occur
2. Verify answer matching in console output
3. Manually adjust categories/domains if needed
4. Review questions with unmatched answers
5. Test with Hugo: `hugo server --buildDrafts`

## Common Issues

- **No questions found**: Check `extracted_text.txt` format
- **Missing options**: Ensure all questions have options A, B, C, D
- **Answer not matched**: Verify answer key format and question text similarity
- **Encoding issues**: Script includes ligature fixes (fi, fl) and common PDF extraction issues
