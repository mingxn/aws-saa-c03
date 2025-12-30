// Exam Session - Main exam functionality with timer

class ExamSession {
    constructor() {
        this.session = null;
        this.timerInterval = null;
        this.autoSaveInterval = null;
        this.init();
    }

    init() {
        // Load session from localStorage
        this.loadSession();

        if (!this.session) {
            alert('No exam session found. Redirecting to setup...');
            window.location.href = '/aws-saa-c03/exam/';
            return;
        }

        // Set up event listeners
        this.setupEventListeners();

        // Start timer
        this.startTimer();

        // Start auto-save
        this.startAutoSave();

        // Render initial question
        this.renderQuestion();

        // Render question navigator
        this.renderNavigator();

        // Update UI
        this.updateUI();
    }

    loadSession() {
        try {
            const stored = localStorage.getItem('current_exam_session');
            if (stored) {
                this.session = JSON.parse(stored);

                // Initialize answers object if it doesn't exist
                if (!this.session.answers) {
                    this.session.answers = {};
                }

                // Initialize flagged array if it doesn't exist
                if (!this.session.flagged) {
                    this.session.flagged = [];
                }
            }
        } catch (e) {
            console.error('Error loading exam session:', e);
        }
    }

    saveSession() {
        try {
            localStorage.setItem('current_exam_session', JSON.stringify(this.session));
        } catch (e) {
            console.error('Error saving exam session:', e);
        }
    }

    setupEventListeners() {
        // Navigation buttons
        document.getElementById('prev-question-btn')?.addEventListener('click', () => this.previousQuestion());
        document.getElementById('next-question-btn')?.addEventListener('click', () => this.nextQuestion());

        // Flag button
        document.getElementById('flag-question-btn')?.addEventListener('click', () => this.toggleFlag());

        // Submit button
        document.getElementById('submit-exam-btn')?.addEventListener('click', () => this.confirmSubmit());

        // Modal buttons
        document.getElementById('confirm-submit-btn')?.addEventListener('click', () => this.submitExam());
        document.getElementById('cancel-submit-btn')?.addEventListener('click', () => this.hideModal('confirm-modal'));
        document.getElementById('review-exam-btn')?.addEventListener('click', () => this.reviewExam());
        document.getElementById('new-exam-btn')?.addEventListener('click', () => this.newExam());

        // Answer selection
        document.getElementById('exam-form')?.addEventListener('change', (e) => {
            if (e.target.type === 'radio') {
                this.selectAnswer(e.target.value);
            }
        });

        // Warn before leaving page
        window.addEventListener('beforeunload', (e) => {
            if (!this.session.completed) {
                e.preventDefault();
                e.returnValue = '';
            }
        });
    }

    startTimer() {
        this.updateTimerDisplay();

        this.timerInterval = setInterval(() => {
            this.session.timeRemaining--;
            this.updateTimerDisplay();

            // Save time remaining
            this.saveSession();

            // Auto-submit when time runs out
            if (this.session.timeRemaining <= 0) {
                this.stopTimer();
                alert('Time is up! Your exam will be submitted automatically.');
                this.submitExam();
            }

            // Warning at 10 minutes
            if (this.session.timeRemaining === 600) {
                alert('10 minutes remaining!');
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    updateTimerDisplay() {
        const timerEl = document.getElementById('timer');
        if (!timerEl) return;

        const time = this.formatTime(this.session.timeRemaining);
        timerEl.textContent = time;

        // Change color when time is low
        const timerDisplay = document.getElementById('timer-display');
        if (this.session.timeRemaining < 600) { // Less than 10 minutes
            timerDisplay?.classList.add('time-warning');
        } else {
            timerDisplay?.classList.remove('time-warning');
        }
    }

    formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return `${hours}:${this.pad(minutes)}:${this.pad(secs)}`;
    }

    pad(num) {
        return num.toString().padStart(2, '0');
    }

    startAutoSave() {
        // Auto-save every 30 seconds
        this.autoSaveInterval = setInterval(() => {
            this.saveSession();
        }, 30000);
    }

    renderQuestion() {
        const question = this.session.questions[this.session.currentIndex];
        if (!question) return;

        // Update question text
        document.getElementById('question-text').textContent = question.question;

        // Update category tags
        const categoryContainer = document.getElementById('question-category');
        let categories = question.categories;
        if (typeof categories === 'string') {
            try {
                categories = JSON.parse(categories);
            } catch (e) {
                console.error('Failed to parse categories:', e);
                categories = [];
            }
        }
        if (categories && Array.isArray(categories)) {
            categoryContainer.innerHTML = categories.map(cat =>
                `<span class="category-tag">${cat}</span>`
            ).join('');
        }

        // Update domain
        document.getElementById('question-domain').textContent = question.domain || '';

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

        // Render options
        const form = document.getElementById('exam-form');
        form.innerHTML = Object.entries(options).map(([key, value]) => `
            <div class="option">
                <label>
                    <input type="radio" name="answer" value="${key}">
                    <span class="option-label">${key.toUpperCase()}.</span>
                    <span class="option-text">${value}</span>
                </label>
            </div>
        `).join('');

        // Restore selected answer if exists
        const savedAnswer = this.session.answers[this.session.currentIndex];
        if (savedAnswer) {
            const radio = form.querySelector(`input[value="${savedAnswer}"]`);
            if (radio) radio.checked = true;
        }

        // Update flag button
        this.updateFlagButton();

        // Update navigation button states
        this.updateNavigationButtons();
    }

    updateFlagButton() {
        const flagBtn = document.getElementById('flag-question-btn');
        if (flagBtn) {
            const isFlagged = this.session.flagged.includes(this.session.currentIndex);
            if (isFlagged) {
                flagBtn.textContent = '✓ Flagged';
                flagBtn.classList.add('btn-flagged');
            } else {
                flagBtn.textContent = '⚑ Answer Later';
                flagBtn.classList.remove('btn-flagged');
            }
        }
    }

    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-question-btn');
        const nextBtn = document.getElementById('next-question-btn');

        if (prevBtn) {
            prevBtn.disabled = this.session.currentIndex === 0;
        }

        if (nextBtn) {
            nextBtn.disabled = this.session.currentIndex === this.session.questions.length - 1;
        }
    }

    selectAnswer(value) {
        this.session.answers[this.session.currentIndex] = value;
        this.saveSession();
        this.updateUI();
    }

    toggleFlag() {
        const index = this.session.currentIndex;
        if (this.session.flagged.includes(index)) {
            // Unflag
            this.session.flagged = this.session.flagged.filter(i => i !== index);
        } else {
            // Flag
            this.session.flagged.push(index);
        }
        this.saveSession();
        this.updateFlagButton();
        this.renderNavigator();
    }

    previousQuestion() {
        if (this.session.currentIndex > 0) {
            this.session.currentIndex--;
            this.saveSession();
            this.renderQuestion();
            this.updateUI();
            this.renderNavigator();
        }
    }

    nextQuestion() {
        if (this.session.currentIndex < this.session.questions.length - 1) {
            this.session.currentIndex++;
            this.saveSession();
            this.renderQuestion();
            this.updateUI();
            this.renderNavigator();
        }
    }

    jumpToQuestion(index) {
        this.session.currentIndex = index;
        this.saveSession();
        this.renderQuestion();
        this.updateUI();
        this.renderNavigator();
    }

    renderNavigator() {
        const navGrid = document.getElementById('question-nav-grid');
        if (!navGrid) return;

        navGrid.innerHTML = this.session.questions.map((q, index) => {
            const answered = this.session.answers[index] !== undefined && this.session.answers[index] !== null;
            const flagged = this.session.flagged.includes(index);
            const current = index === this.session.currentIndex;

            let classes = 'nav-box';
            if (current) classes += ' current';
            if (answered) classes += ' answered';
            if (flagged) classes += ' flagged';

            return `<button class="${classes}" data-index="${index}">${index + 1}</button>`;
        }).join('');

        // Add click handlers
        navGrid.querySelectorAll('.nav-box').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                this.jumpToQuestion(index);
            });
        });
    }

    updateUI() {
        // Update progress
        const total = this.session.questions.length;
        const current = this.session.currentIndex + 1;
        document.getElementById('question-progress').textContent = `Question ${current} of ${total}`;

        // Update answered count
        const answered = Object.keys(this.session.answers).filter(k => this.session.answers[k] !== null).length;
        document.getElementById('answered-count').textContent = `${answered} of ${total} answered`;

        // Update progress bar
        const progress = (answered / total) * 100;
        document.getElementById('progress-bar').style.width = `${progress}%`;

        // Enable/disable submit button
        const submitBtn = document.getElementById('submit-exam-btn');
        const submitNote = document.querySelector('.submit-note');
        if (answered === total) {
            submitBtn.disabled = false;
            submitNote.textContent = 'All questions answered - ready to submit!';
        } else {
            submitBtn.disabled = false; // Allow submit even if not all answered
            const remaining = total - answered;
            submitNote.textContent = `${remaining} question${remaining !== 1 ? 's' : ''} remaining`;
        }
    }

    confirmSubmit() {
        const total = this.session.questions.length;
        const answered = Object.keys(this.session.answers).filter(k => this.session.answers[k] !== null).length;
        const unanswered = total - answered;

        let message = `You have answered ${answered} of ${total} questions.`;
        if (unanswered > 0) {
            message += ` You have ${unanswered} unanswered question${unanswered !== 1 ? 's' : ''}.`;
        }
        if (this.session.flagged.length > 0) {
            message += ` You have ${this.session.flagged.length} flagged question${this.session.flagged.length !== 1 ? 's' : ''}.`;
        }
        message += ' Are you sure you want to submit?';

        document.getElementById('confirm-message').textContent = message;
        this.showModal('confirm-modal');
    }

    submitExam() {
        this.hideModal('confirm-modal');

        // Stop timer
        this.stopTimer();
        if (this.autoSaveInterval) {
            clearInterval(this.autoSaveInterval);
        }

        // Calculate score
        const results = this.calculateScore();

        // Mark as completed
        this.session.completed = true;
        this.session.completedAt = new Date().toISOString();
        this.session.results = results;
        this.saveSession();

        // Save to history
        this.saveToHistory(results);

        // Show results
        this.showResults(results);
    }

    calculateScore() {
        let correct = 0;
        let incorrect = 0;
        let unanswered = 0;

        const domainStats = {};

        this.session.questions.forEach((question, index) => {
            const userAnswer = this.session.answers[index];
            const isCorrect = userAnswer === question.answer;

            if (userAnswer === undefined || userAnswer === null) {
                unanswered++;
            } else if (isCorrect) {
                correct++;
            } else {
                incorrect++;
            }

            // Domain stats
            const domain = question.domain || 'Other';
            if (!domainStats[domain]) {
                domainStats[domain] = { total: 0, correct: 0 };
            }
            domainStats[domain].total++;
            if (isCorrect) {
                domainStats[domain].correct++;
            }
        });

        const total = this.session.questions.length;
        const scorePercent = Math.round((correct / total) * 100);
        const scorePoints = Math.round((correct / total) * 1000);

        return {
            correct,
            incorrect,
            unanswered,
            total,
            scorePercent,
            scorePoints,
            passed: scorePoints >= 720, // AWS SAA-C03 passing score
            domainStats,
            timeTaken: this.session.timeLimit - this.session.timeRemaining
        };
    }

    saveToHistory(results) {
        try {
            const history = JSON.parse(localStorage.getItem('exam_sessions') || '[]');

            const examRecord = {
                id: this.session.id,
                date: this.session.completedAt,
                score: `${results.scorePercent}%`,
                scorePoints: results.scorePoints,
                passed: results.passed,
                correct: results.correct,
                incorrect: results.incorrect,
                unanswered: results.unanswered,
                questions: this.session.questions.length,
                duration: results.timeTaken,
                domainStats: results.domainStats
            };

            history.push(examRecord);
            localStorage.setItem('exam_sessions', JSON.stringify(history));
        } catch (e) {
            console.error('Error saving to history:', e);
        }
    }

    showResults(results) {
        const summaryEl = document.getElementById('results-summary');
        const breakdownEl = document.getElementById('domain-breakdown');

        // Overall results
        const statusClass = results.passed ? 'passed' : 'failed';
        summaryEl.innerHTML = `
            <div class="score-display ${statusClass}">
                <div class="score-large">${results.scorePercent}%</div>
                <div class="score-points">${results.scorePoints} / 1000 points</div>
                <div class="score-status">${results.passed ? 'PASSED ✓' : 'FAILED ✗'}</div>
            </div>
            <div class="score-breakdown">
                <div class="stat">
                    <span class="stat-label">Correct:</span>
                    <span class="stat-value correct">${results.correct}</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Incorrect:</span>
                    <span class="stat-value incorrect">${results.incorrect}</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Unanswered:</span>
                    <span class="stat-value">${results.unanswered}</span>
                </div>
                <div class="stat">
                    <span class="stat-label">Time Taken:</span>
                    <span class="stat-value">${this.formatTime(results.timeTaken)}</span>
                </div>
            </div>
        `;

        // Domain breakdown
        if (breakdownEl) {
            const domainHTML = Object.entries(results.domainStats).map(([domain, stats]) => {
                const percent = Math.round((stats.correct / stats.total) * 100);
                return `
                    <div class="domain-stat">
                        <div class="domain-name">${domain}</div>
                        <div class="domain-score">${stats.correct} / ${stats.total} (${percent}%)</div>
                        <div class="domain-bar">
                            <div class="domain-bar-fill" style="width: ${percent}%"></div>
                        </div>
                    </div>
                `;
            }).join('');

            breakdownEl.innerHTML = `
                <h3>Performance by Domain</h3>
                <div class="domain-stats">
                    ${domainHTML}
                </div>
            `;
        }

        this.showModal('results-modal');
    }

    reviewExam() {
        // Store the completed session in localStorage for review
        localStorage.setItem('exam_review_session', JSON.stringify(this.session));
        window.location.href = '/aws-saa-c03/exam/review/';
    }

    newExam() {
        localStorage.removeItem('current_exam_session');
        window.location.href = '/aws-saa-c03/exam/';
    }

    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.style.display = 'flex';
    }

    hideModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.style.display = 'none';
    }
}

// Initialize exam session
let examSession;
document.addEventListener('DOMContentLoaded', () => {
    examSession = new ExamSession();
});
