# AWS SAA-C03 Interactive Question Bank - Implementation Plan

## Project Overview
Hugo-based static site for AWS Solutions Architect Associate (SAA-C03) exam preparation with interactive multiple-choice questions. Features two modes: Exam mode and Practice mode.

## Architecture
- **Static Site Generator**: Hugo
- **Hosting**: GitHub Pages
- **Deployment**: GitHub Actions
- **Interactivity**: Vanilla JavaScript (no framework dependencies)
- **Styling**: Custom CSS

## Implementation Steps

### 1. Hugo Site Initialization
- [x] Repository already initialized with Git
- [ ] Initialize Hugo site structure
- [ ] Update `.gitignore` for Hugo-specific files

### 2. Configuration
- [ ] Create/configure `config.toml` with:
  - Base URL for GitHub Pages
  - Site title and description
  - Pagination settings
  - Menu configuration

### 3. Theme Setup
**Option A**: Use minimal existing theme (e.g., PaperMod, Ananke)
**Option B**: Create custom minimal theme for full control

Decision: Custom minimal theme for quiz-specific layouts

- [ ] Create basic theme structure in `themes/aws-quiz/`
- [ ] Create layouts for:
  - Homepage (question list/dashboard)
  - Single question page
  - Exam mode layout
  - Practice mode layout

### 4. Content Structure

#### Question Format (Markdown with Frontmatter)
```yaml
---
title: "Question 1: EC2 Instance Types"
date: 2025-12-28
draft: false
categories: ["EC2", "Compute"]
domain: "Design High-Performing Architectures"
difficulty: "medium"
question: "Which EC2 instance type is optimized for memory-intensive applications?"
options:
  A: "t3.micro"
  B: "c5.large"
  C: "r5.xlarge"
  D: "m5.large"
answer: "C"
explanation: "R5 instances are memory-optimized and designed for memory-intensive applications. T3 is burstable, C5 is compute-optimized, and M5 is general purpose."
tags: ["instance-types", "memory-optimization"]
---
```

#### Directory Structure
```
content/
├── _index.md (homepage)
├── questions/
│   ├── compute/
│   │   ├── ec2-001.md
│   │   ├── lambda-001.md
│   ├── storage/
│   │   ├── s3-001.md
│   │   ├── ebs-001.md
│   ├── database/
│   ├── networking/
│   ├── security/
│   └── ...
```

### 5. Interactive Features

#### JavaScript Components
- [ ] Question renderer
- [ ] Answer selection handler
- [ ] Mode switcher (exam vs practice)
- [ ] Scoring system
- [ ] Progress tracker
- [ ] Answer reveal logic
- [ ] Results summary

#### Exam Mode Features
- Hide all answers until submission
- Submit all answers at once
- Show final score
- Display correct/incorrect answers
- Time tracking (optional)

#### Practice Mode Features
- Instant feedback on answer selection
- Show explanation immediately
- No scoring (or optional)
- Navigate freely between questions

### 6. Styling & UI
- [ ] Responsive design (mobile-first)
- [ ] Question card layout
- [ ] Radio button styling
- [ ] Answer reveal animations
- [ ] Score display
- [ ] Progress indicators
- [ ] Color coding (correct/incorrect)

### 7. GitHub Pages Deployment

#### GitHub Actions Workflow
- [ ] Create `.github/workflows/hugo.yml`
- [ ] Configure build steps:
  - Checkout repository
  - Setup Hugo
  - Build site
  - Deploy to gh-pages branch or GitHub Pages

#### Repository Settings
- [ ] Enable GitHub Pages
- [ ] Set source (GitHub Actions or gh-pages branch)
- [ ] Configure baseURL in config.toml

### 8. Content Organization

#### By AWS Service
```
content/questions/
├── compute/
├── storage/
├── database/
├── networking/
├── security/
├── monitoring/
├── management/
└── migration/
```

#### By Exam Domain (SAA-C03)
- Domain 1: Design Secure Architectures (30%)
- Domain 2: Design Resilient Architectures (26%)
- Domain 3: Design High-Performing Architectures (24%)
- Domain 4: Design Cost-Optimized Architectures (20%)

### 9. Additional Features (Optional)
- [ ] Search/filter questions by service or domain
- [ ] Bookmarking questions
- [ ] Progress persistence (localStorage)
- [ ] Export results
- [ ] Question randomization
- [ ] Timed exam mode
- [ ] Dark mode toggle

### 10. Documentation
- [ ] Update README.md with:
  - Project description
  - How to add questions
  - Local development instructions
  - Deployment process
- [ ] Create CONTRIBUTING.md (if accepting contributions)
- [ ] Add sample questions

## Technical Stack
- **Hugo**: v0.1xx+ (Extended version for SCSS support if needed)
- **Theme**: Custom minimal theme
- **JavaScript**: ES6+ (vanilla, no build step needed)
- **CSS**: Custom CSS3 (or SCSS if using Hugo Extended)
- **Deployment**: GitHub Actions
- **Storage**: GitHub Pages (static files)
- **State Management**: localStorage for client-side persistence

## File Structure (Final)
```
aws-saa-c03/
├── .github/
│   └── workflows/
│       └── hugo.yml
├── archetypes/
│   └── question.md (template for new questions)
├── content/
│   ├── _index.md
│   └── questions/
│       └── [organized by service or domain]
├── layouts/
│   ├── _default/
│   │   ├── baseof.html
│   │   ├── list.html
│   │   └── single.html
│   ├── index.html
│   └── partials/
│       ├── header.html
│       ├── footer.html
│       └── question.html
├── static/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   ├── exam.js
│   │   └── practice.js
│   └── images/
├── config.toml
├── .gitignore
├── README.md
├── LICENSE
└── plan.md (this file)
```

## Implementation Order
1. Hugo initialization and basic configuration
2. Create minimal theme structure
3. Set up layouts for question display
4. Create question content template (archetype)
5. Add sample questions for testing
6. Implement JavaScript for practice mode
7. Implement JavaScript for exam mode
8. Style the UI
9. Set up GitHub Actions workflow
10. Test deployment to GitHub Pages
11. Document and finalize

## Questions to Resolve
- [ ] Hugo theme: fully custom or start with minimal theme?
- [ ] Question organization: by service or by exam domain (or both with tags)?
- [ ] Should we track user progress across sessions?
- [ ] Time limit for exam mode?
- [ ] Number of questions per exam session?

## Success Criteria
- ✅ Site successfully deploys to GitHub Pages
- ✅ Questions display correctly in both modes
- ✅ Exam mode: answers hidden until submission, scoring works
- ✅ Practice mode: instant feedback, explanations visible
- ✅ Responsive design works on mobile and desktop
- ✅ Easy to add new questions via markdown files
