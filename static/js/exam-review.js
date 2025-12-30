// Exam Review - Review completed exam with explanations

class ExamReview {
    constructor() {
        this.session = null;
        this.currentFilter = 'all';
        this.filteredIndices = [];
        this.currentFilteredIndex = 0;
        this.init();
    }

    init() {
        // Load session from localStorage
        this.loadSession();

        if (!this.session) {
            alert('No exam review data found. Redirecting to exam setup...');
            window.location.href = '/aws-saa-c03/exam/';
            return;
        }

        // Set up event listeners
        this.setupEventListeners();

        // Apply default filter
        this.applyFilter('all');

        // Render summary
        this.renderSummary();

        // Render question
        this.renderQuestion();

        // Render navigator
        this.renderNavigator();
    }

    loadSession() {
        try {
            const stored = localStorage.getItem('exam_review_session');
            if (stored) {
                this.session = JSON.parse(stored);
            }
        } catch (e) {
            console.error('Error loading exam review session:', e);
        }
    }

    setupEventListeners() {
        // Navigation buttons
        document.getElementById('prev-review-btn')?.addEventListener('click', () => this.previousQuestion());
        document.getElementById('next-review-btn')?.addEventListener('click', () => this.nextQuestion());

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.dataset.filter;
                this.applyFilter(filter);
            });
        });

        // Action buttons
        document.getElementById('new-exam-btn')?.addEventListener('click', () => this.newExam());
        document.getElementById('back-to-results-btn')?.addEventListener('click', () => this.backToResults());
    }

    applyFilter(filter) {
        this.currentFilter = filter;
        this.filteredIndices = [];

        // Update filter button states
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });

        // Build filtered indices array
        this.session.questions.forEach((question, index) => {
            const userAnswer = this.session.answers[index];
            const isCorrect = userAnswer === question.answer;
            const isFlagged = this.session.flagged.includes(index);

            let include = false;
            switch (filter) {
                case 'all':
                    include = true;
                    break;
                case 'correct':
                    include = isCorrect;
                    break;
                case 'incorrect':
                    include = !isCorrect && userAnswer !== undefined && userAnswer !== null;
                    break;
                case 'flagged':
                    include = isFlagged;
                    break;
            }

            if (include) {
                this.filteredIndices.push(index);
            }
        });

        // Reset to first question in filtered set
        this.currentFilteredIndex = 0;

        // Check if filter has results
        if (this.filteredIndices.length === 0) {
            alert(`No ${filter} questions found.`);
            // Reset to all
            this.applyFilter('all');
            return;
        }

        this.renderQuestion();
        this.renderNavigator();
    }

    getCurrentQuestionIndex() {
        return this.filteredIndices[this.currentFilteredIndex];
    }

    renderSummary() {
        const summaryEl = document.getElementById('review-summary');
        if (!summaryEl || !this.session.results) return;

        const results = this.session.results;
        const statusClass = results.passed ? 'passed' : 'failed';

        summaryEl.innerHTML = `
            <div class="review-summary-content">
                <div class="summary-score ${statusClass}">
                    <strong>${results.scorePercent}%</strong>
                    (${results.scorePoints}/1000 points)
                    <span class="status-badge">${results.passed ? 'PASSED' : 'FAILED'}</span>
                </div>
                <div class="summary-stats">
                    <span class="stat correct">✓ ${results.correct} correct</span>
                    <span class="stat incorrect">✗ ${results.incorrect} incorrect</span>
                    <span class="stat">⊗ ${results.unanswered} unanswered</span>
                </div>
            </div>
        `;
    }

    renderQuestion() {
        const actualIndex = this.getCurrentQuestionIndex();
        const question = this.session.questions[actualIndex];
        if (!question) return;

        const container = document.getElementById('review-question-container');
        const userAnswer = this.session.answers[actualIndex];
        const correctAnswer = question.answer;
        const isCorrect = userAnswer === correctAnswer;
        const wasAnswered = userAnswer !== undefined && userAnswer !== null;
        const isFlagged = this.session.flagged.includes(actualIndex);

        // Update progress
        const progressEl = document.getElementById('review-progress');
        progressEl.textContent = `Question ${this.currentFilteredIndex + 1} of ${this.filteredIndices.length}`;

        // Build question HTML
        let resultHTML = '';
        if (!wasAnswered) {
            resultHTML = '<div class="review-result unanswered">You did not answer this question</div>';
        } else if (isCorrect) {
            resultHTML = '<div class="review-result correct">✓ Correct!</div>';
        } else {
            resultHTML = '<div class="review-result incorrect">✗ Incorrect</div>';
        }

        // Handle options - might be object or string
        let options = question.options;
        if (typeof options === 'string') {
            try {
                options = JSON.parse(options);
            } catch (e) {
                console.error('Failed to parse options:', e);
                options = {};
            }
        }

        // Handle categories - might be object or string
        let categories = question.categories;
        if (typeof categories === 'string') {
            try {
                categories = JSON.parse(categories);
            } catch (e) {
                console.error('Failed to parse categories:', e);
                categories = [];
            }
        }

        // Build options HTML
        const optionsHTML = Object.entries(options).map(([key, value]) => {
            let classes = 'review-option';
            let indicator = '';

            if (key === correctAnswer) {
                classes += ' correct-answer';
                indicator = '<span class="answer-indicator">✓ Correct Answer</span>';
            }

            if (key === userAnswer && key !== correctAnswer) {
                classes += ' user-incorrect';
                indicator = '<span class="answer-indicator">✗ Your Answer</span>';
            }

            if (key === userAnswer && key === correctAnswer) {
                indicator = '<span class="answer-indicator">✓ Your Answer (Correct)</span>';
            }

            return `
                <div class="${classes}">
                    <span class="option-label">${key.toUpperCase()}.</span>
                    <span class="option-text">${value}</span>
                    ${indicator}
                </div>
            `;
        }).join('');

        // Render content
        container.innerHTML = `
            <div class="review-question-header">
                <div class="question-number">Question ${actualIndex + 1}</div>
                ${isFlagged ? '<span class="flagged-indicator">⚑ Flagged</span>' : ''}
            </div>

            <div class="question-meta">
                <div class="category-tags-container">
                    ${categories && Array.isArray(categories) ? categories.map(cat =>
                        `<span class="category-tag">${cat}</span>`
                    ).join('') : ''}
                </div>
                <span class="domain-info">${question.domain || ''}</span>
            </div>

            <div class="question-text">${question.question}</div>

            ${resultHTML}

            <div class="review-options">
                ${optionsHTML}
            </div>

            <div class="explanation-section">
                <h4>Explanation</h4>
                <div class="explanation-text">${question.explanation || 'No explanation available.'}</div>
            </div>
        `;

        // Update navigation button states
        this.updateNavigationButtons();
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-review-btn');
        const nextBtn = document.getElementById('next-review-btn');

        if (prevBtn) {
            prevBtn.disabled = this.currentFilteredIndex === 0;
        }

        if (nextBtn) {
            nextBtn.disabled = this.currentFilteredIndex === this.filteredIndices.length - 1;
        }
    }

    previousQuestion() {
        if (this.currentFilteredIndex > 0) {
            this.currentFilteredIndex--;
            this.renderQuestion();
            this.renderNavigator();
        }
    }

    nextQuestion() {
        if (this.currentFilteredIndex < this.filteredIndices.length - 1) {
            this.currentFilteredIndex++;
            this.renderQuestion();
            this.renderNavigator();
        }
    }

    jumpToQuestion(actualIndex) {
        // Find this index in the filtered set
        const filteredIndex = this.filteredIndices.indexOf(actualIndex);
        if (filteredIndex !== -1) {
            this.currentFilteredIndex = filteredIndex;
            this.renderQuestion();
            this.renderNavigator();
        }
    }

    renderNavigator() {
        const navGrid = document.getElementById('review-nav-grid');
        if (!navGrid) return;

        const currentActualIndex = this.getCurrentQuestionIndex();

        navGrid.innerHTML = this.session.questions.map((question, index) => {
            const userAnswer = this.session.answers[index];
            const isCorrect = userAnswer === question.answer;
            const wasAnswered = userAnswer !== undefined && userAnswer !== null;
            const isFlagged = this.session.flagged.includes(index);
            const isCurrent = index === currentActualIndex;

            let classes = 'nav-box';
            if (isCurrent) classes += ' current';
            if (wasAnswered && isCorrect) classes += ' correct';
            if (wasAnswered && !isCorrect) classes += ' incorrect';
            if (isFlagged) classes += ' flagged';

            // Only show if in current filter
            const inFilter = this.filteredIndices.includes(index);
            if (!inFilter && this.currentFilter !== 'all') {
                classes += ' dimmed';
            }

            return `<button class="${classes}" data-index="${index}">${index + 1}</button>`;
        }).join('');

        // Add click handlers
        navGrid.querySelectorAll('.nav-box:not(.dimmed)').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                this.jumpToQuestion(index);
            });
        });
    }

    backToResults() {
        // Show results modal from exam.js or go back to exam page
        alert('Results summary:\n' +
            `Score: ${this.session.results.scorePercent}%\n` +
            `Status: ${this.session.results.passed ? 'PASSED' : 'FAILED'}\n` +
            `Correct: ${this.session.results.correct}\n` +
            `Incorrect: ${this.session.results.incorrect}\n` +
            `Unanswered: ${this.session.results.unanswered}`
        );
    }

    newExam() {
        if (confirm('Start a new exam? This will clear the current review.')) {
            localStorage.removeItem('exam_review_session');
            localStorage.removeItem('current_exam_session');
            window.location.href = '/aws-saa-c03/exam/';
        }
    }
}

// Initialize exam review
let examReview;
document.addEventListener('DOMContentLoaded', () => {
    examReview = new ExamReview();
});
