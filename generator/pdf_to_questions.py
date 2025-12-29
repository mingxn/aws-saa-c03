#!/usr/bin/env python3
"""
PDF to Hugo Questions Converter
Extracts AWS SAA-C03 questions from PDF and creates Hugo markdown files
"""

import re
import os
from pathlib import Path
from datetime import datetime

try:
    import pdfplumber
except ImportError:
    print("pdfplumber not installed. Installing...")
    import subprocess
    subprocess.check_call(["pip3", "install", "pdfplumber"])
    import pdfplumber


def sanitize_filename(text):
    """Convert text to valid filename"""
    # Remove special characters, convert to lowercase
    text = re.sub(r'[^\w\s-]', '', text.lower())
    # Replace spaces with hyphens
    text = re.sub(r'[\s_]+', '-', text)
    # Limit length
    return text[:50]


def clean_text(text):
    """Clean weird characters from PDF text"""
    # First, remove NULL characters and other control characters
    # NULL chars often appear where ligatures (fi, fl) should be
    text = text.replace('\x00', '')
    text = text.replace('\x01', '')
    text = text.replace('\x02', '')

    # Normalize multiple spaces to single space
    text = re.sub(r' {2,}', ' ', text)

    # Fix common PDF extraction issues (fi and fl ligatures)
    # These patterns occur when fi/fl ligatures are extracted incorrectly
    # IMPORTANT: Keep leading/trailing spaces in replacements!
    replacements = {
        # Patterns with spaces (most common after NULL removal)
        ' le ': ' file ',
        ' les ': ' files ',
        ' le.': ' file.',
        ' les.': ' files.',
        ' le,': ' file,',
        ' les,': ' files,',
        ' lter': ' filter',
        ' rst': ' first',
        ' nal': ' final',
        ' nance': ' finance',
        ' nancial': ' financial',

        # Configure patterns
        'Con gure': 'Configure',
        'con gure': 'configure',
        'Congure': 'Configure',
        'congure': 'configure',

        # Notification patterns
        'Noti cation': 'Notification',
        'noti cation': 'notification',
        'Notication': 'Notification',
        'notication': 'notification',

        # Classification
        'classi cation': 'classification',
        'classication': 'classification',

        # Identify/Specify patterns
        'identi ': 'identifi',
        'speci ': 'specifi',

        # Certificate
        'certi cate': 'certificate',
        'certicate': 'certificate',

        # Traffic
        'tra c': 'traffic',
        'trac': 'traffic',

        # Fleet/Fulfill
        'eet': 'fleet',
        'mfleet': 'fulfill',

        # Profile
        'pro le': 'profile',
        'prole': 'profile',

        # Specific
        'speci c': 'specific',
        'specic': 'specific',

        # Benefit
        'bene t': 'benefit',
        'benet': 'benefit',

        # Efficient
        'ef cient': 'efficient',
        'efcient': 'efficient',

        # Difficult
        'dif cult': 'difficult',
        'difcult': 'difficult',
    }

    for old, new in replacements.items():
        text = text.replace(old, new)

    # Final catch-all replacements for any remaining broken words
    # Use word boundary patterns to catch edge cases
    final_fixes = [
        (r'\bnance\b', 'finance'),
        (r'\bnancial\b', 'financial'),
        (r'\bprole\b', 'profile'),
        (r'\bcongure\b', 'configure'),
        (r'\bCongure\b', 'Configure'),
        (r'\bnotication\b', 'notification'),
        (r'\bNotication\b', 'Notification'),
        (r'\bspecic\b', 'specific'),
        (r'\bclassication\b', 'classification'),
        (r'\btrac\b', 'traffic'),
        (r'\bcerticate\b', 'certificate'),
        (r'\befcient\b', 'efficient'),
        (r'\bdifcult\b', 'difficult'),
        (r'\bbenet\b', 'benefit'),
    ]

    for pattern, replacement in final_fixes:
        text = re.sub(pattern, replacement, text, flags=re.IGNORECASE)

    return text


def parse_question_block(text):
    """
    Parse a question block from PDF text
    Format: Question #N Topic 1
    """
    # Clean text first
    text = clean_text(text)

    questions = []

    # Split by "Question #" pattern
    pattern = r'Question #(\d+) Topic \d+'
    parts = re.split(pattern, text)

    # Parts will be: ['', '1', 'question1 content', '2', 'question2 content', ...]
    for i in range(1, len(parts), 2):
        if i + 1 >= len(parts):
            break

        question_num = parts[i]
        block = parts[i + 1]

        if not block.strip():
            continue

        # Extract question text (everything before first option A/B/C/D)
        question_match = re.search(r'^(.+?)(?=\n[A-D]\.)', block, re.DOTALL)
        if not question_match:
            continue

        question_text = question_match.group(1).strip()

        # Extract options (A, B, C, D)
        options = {}
        option_pattern = r'^([A-D])\.\s*(.+?)(?=\n[A-D]\.|Question #|\Z)'

        for match in re.finditer(option_pattern, block, re.MULTILINE | re.DOTALL):
            letter = match.group(1)
            text = match.group(2).strip()
            # Clean up line breaks and extra spaces
            text = re.sub(r'\s+', ' ', text)
            options[letter] = text

        # Skip if essential fields are missing
        if not question_text or len(options) < 4:
            print(f"  Skipping question #{question_num}: incomplete (found {len(options)} options)")
            continue

        # Clean up question text
        question_text = re.sub(r'\s+', ' ', question_text)

        questions.append({
            'question': question_text,
            'options': options,
            'answer': '',  # No answer in PDF
            'explanation': ''  # No explanation in PDF
        })

    return questions


def categorize_question(question_text):
    """
    Attempt to categorize question based on AWS service mentioned
    Returns (categories, suggested_filename)
    """
    services = {
        'ec2': ['EC2', 'Compute'],
        's3': ['S3', 'Storage'],
        'rds': ['RDS', 'Database'],
        'dynamodb': ['DynamoDB', 'Database'],
        'lambda': ['Lambda', 'Compute'],
        'vpc': ['VPC', 'Networking'],
        'cloudformation': ['CloudFormation', 'Management'],
        'cloudwatch': ['CloudWatch', 'Monitoring'],
        'iam': ['IAM', 'Security'],
        'route 53': ['Route53', 'Networking'],
        'elb': ['ELB', 'Networking'],
        'auto scaling': ['AutoScaling', 'Compute'],
        'ebs': ['EBS', 'Storage'],
        'glacier': ['Glacier', 'Storage'],
        'sns': ['SNS', 'Application Integration'],
        'sqs': ['SQS', 'Application Integration'],
        'api gateway': ['API Gateway', 'Networking'],
        'cloudfront': ['CloudFront', 'Networking'],
    }

    question_lower = question_text.lower()

    for keyword, categories in services.items():
        if keyword in question_lower:
            return categories, keyword.replace(' ', '-')

    return ['General'], 'general'


def create_hugo_markdown(question_data, output_dir, index):
    """Create a Hugo markdown file for the question"""

    categories, service = categorize_question(question_data['question'])

    # Create subdirectory based on category
    category_dir = output_dir / service
    category_dir.mkdir(parents=True, exist_ok=True)

    # Generate filename
    filename = f"{service}-{index:03d}.md"
    filepath = category_dir / filename

    # Determine domain (simplified - you can enhance this)
    domain = "Design High-Performing Architectures"  # Default
    if any(term in question_data['question'].lower() for term in ['security', 'iam', 'encryption']):
        domain = "Design Secure Architectures"
    elif any(term in question_data['question'].lower() for term in ['cost', 'budget', 'pricing']):
        domain = "Design Cost-Optimized Architectures"
    elif any(term in question_data['question'].lower() for term in ['failover', 'backup', 'disaster']):
        domain = "Design Resilient Architectures"

    # Escape quotes in text
    def escape_quotes(s):
        return s.replace('"', '\\"').replace('\n', ' ')

    question = escape_quotes(question_data['question'])
    opt_a = escape_quotes(question_data['options'].get('A', ''))
    opt_b = escape_quotes(question_data['options'].get('B', ''))
    opt_c = escape_quotes(question_data['options'].get('C', ''))
    opt_d = escape_quotes(question_data['options'].get('D', ''))
    answer = question_data.get('answer', 'A')  # Default to A if no answer
    explanation = escape_quotes(question_data.get('explanation', 'Add explanation here'))

    # Create markdown content
    # Hugo requires a title field even if we don't display it
    title = question_data['question'][:60] + "..."

    # Format categories and tags as proper YAML arrays
    categories_yaml = "\n".join(f"  - {cat}" for cat in categories)
    tags_yaml = "\n".join(f"  - {cat.lower()}" for cat in categories)

    content = f"""---
title: "{title}"
draft: false
categories:
{categories_yaml}
domain: "{domain}"
difficulty: "medium"
question: "{question}"
options:
  A: "{opt_a}"
  B: "{opt_b}"
  C: "{opt_c}"
  D: "{opt_d}"
answer: "{answer}"
explanation: "{explanation}"
tags:
{tags_yaml}
---

<!-- Question data is in frontmatter -->
"""

    # Write to file
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    return filepath


def parse_answer_key(answer_key_path):
    """
    Parse answer key file
    Format:
    1] <question>
    ans- <answer text>
    Correct answer X: <explanation>
    """
    answers = {}

    with open(answer_key_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Clean text
    content = clean_text(content)

    # Split by question number pattern
    pattern = r'(\d+)\]'
    parts = re.split(pattern, content)

    for i in range(1, len(parts), 2):
        if i + 1 >= len(parts):
            break

        question_num = int(parts[i])
        block = parts[i + 1]

        # Extract answer text (after "ans-" or "ans -")
        ans_match = re.search(r'ans[-\s]+(.+?)(?:\n\n|\nCorrect answer|General line|Keywords|Option|---)', block, re.IGNORECASE | re.DOTALL)
        answer_text = ans_match.group(1).strip() if ans_match else ""

        # Extract explanation (everything after answer until separator)
        explanation_match = re.search(r'(?:ans-.+?\n\n)(.+?)(?=\d+\]|\Z)', block, re.DOTALL | re.IGNORECASE)
        explanation = explanation_match.group(1).strip() if explanation_match else ""

        # Clean up explanation (remove separator lines)
        explanation = re.sub(r'-{5,}', '', explanation).strip()

        answers[question_num] = {
            'answer_text': answer_text,
            'explanation': explanation
        }

    return answers


def match_answer_to_option(answer_text, options):
    """Match answer text to option letter (A, B, C, D)"""
    # Clean answer text for comparison
    answer_clean = answer_text.lower().strip()

    # Try exact match first
    for letter, option in options.items():
        if answer_clean in option.lower() or option.lower() in answer_clean:
            return letter

    # Try partial match (first 30 chars)
    answer_start = answer_clean[:30]
    for letter, option in options.items():
        if answer_start in option.lower()[:30]:
            return letter

    return ""  # No match found


def main():
    import sys

    if len(sys.argv) < 2:
        print("Usage: python3 pdf_to_questions.py <pdf_file> [answer_key_file]")
        print("Example: python3 pdf_to_questions.py aws-questions.pdf answer_key.txt")
        sys.exit(1)

    pdf_path = sys.argv[1]
    answer_key_path = sys.argv[2] if len(sys.argv) > 2 else None

    if not os.path.exists(pdf_path):
        print(f"Error: File '{pdf_path}' not found")
        sys.exit(1)

    # Parse answer key if provided
    answer_key = {}
    if answer_key_path:
        if not os.path.exists(answer_key_path):
            print(f"Warning: Answer key file '{answer_key_path}' not found")
        else:
            print(f"Loading answer key: {answer_key_path}")
            answer_key = parse_answer_key(answer_key_path)
            print(f"Loaded {len(answer_key)} answers")

    print(f"Processing PDF: {pdf_path}")

    # Extract text from PDF
    full_text = ""
    with pdfplumber.open(pdf_path) as pdf:
        print(f"Total pages: {len(pdf.pages)}")
        for i, page in enumerate(pdf.pages, 1):
            print(f"Processing page {i}...")
            full_text += page.extract_text() + "\n\n"

    # Save extracted text for debugging
    with open("extracted_text.txt", "w", encoding="utf-8") as f:
        f.write(full_text)
    print("Saved extracted text to: extracted_text.txt")

    # Parse questions
    print("\nParsing questions...")
    questions = parse_question_block(full_text)
    print(f"Found {len(questions)} questions")

    # Match answers from answer key
    if answer_key:
        print("\nMatching answers...")
        for i, question in enumerate(questions, 1):
            if i in answer_key:
                answer_data = answer_key[i]
                # Match answer text to option letter
                matched_letter = match_answer_to_option(answer_data['answer_text'], question['options'])
                if matched_letter:
                    question['answer'] = matched_letter
                    question['explanation'] = answer_data['explanation']
                    print(f"  Question {i}: Matched answer {matched_letter}")
                else:
                    print(f"  Question {i}: Could not match answer")
            else:
                print(f"  Question {i}: No answer in key")

    if not questions:
        print("\nNo questions found. Check extracted_text.txt to see the format.")
        print("You may need to adjust the parsing logic in parse_question_block()")
        sys.exit(1)

    # Create output directory
    output_dir = Path("content/questions")
    output_dir.mkdir(parents=True, exist_ok=True)

    # Generate Hugo markdown files
    print("\nGenerating Hugo markdown files...")
    for i, question in enumerate(questions, 1):
        filepath = create_hugo_markdown(question, output_dir, i)
        print(f"Created: {filepath}")

    print(f"\n✓ Successfully created {len(questions)} question files!")
    print(f"Files saved to: {output_dir}")
    print("\nNext steps:")
    print("1. Review the generated files")
    print("2. Adjust categories/domains as needed")
    print("3. Run: hugo server --buildDrafts")


if __name__ == "__main__":
    main()
