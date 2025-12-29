/**
 * Practice Mode Session
 * Handles interactive practice sessions with immediate feedback
 */

class PracticeSession {
    constructor() {
        this.session = null;
        this.currentIndex = 0;
        this.stats = {
            correct: 0,
            incorrect: 0,
            skipped: 0
        };
        this.answered = false;

        this.init();
    }

    init() {
        console.log('Initializing practice session...');

        // Load session from localStorage
        const sessionData = localStorage.getItem('current_practice_session');

        console.log('Session data from localStorage:', sessionData ? 'Found' : 'Not found');

        if (!sessionData) {
            // No active session, redirect to setup
            console.error('No session data found in localStorage');
            alert('No practice session found. Redirecting to setup...');
            window.location.href = '/aws-saa-c03/practice/';
            return;
        }

        try {
            this.session = JSON.parse(sessionData);
            console.log('Session loaded:', this.session.questions.length, 'questions');

            if (!this.session.questions || this.session.questions.length === 0) {
                throw new Error('No questions in session');
            }

            // Restore progress if resuming
            if (this.session.currentIndex !== undefined) {
                this.currentIndex = this.session.currentIndex;
            }

            if (this.session.stats) {
                this.stats = this.session.stats;
            }

            console.log('Setting up event listeners...');
            this.setupEventListeners();

            console.log('Loading first question...');
            this.loadQuestion();
            this.updateStats();

            console.log('Practice session initialized successfully');
        } catch (error) {
            console.error('Error loading session:', error);
            alert('Error loading practice session: ' + error.message);
            window.location.href = '/aws-saa-c03/practice/';
        }
    }

    setupEventListeners() {
        const checkBtn = document.getElementById('check-answer-btn');
        const revealBtn = document.getElementById('reveal-answer-btn');
        const nextBtn = document.getElementById('next-question-btn');

        if (checkBtn) {
            checkBtn.addEventListener('click', () => this.checkAnswer());
        }

        if (revealBtn) {
            revealBtn.addEventListener('click', () => this.revealAnswer());
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextQuestion());
        }
    }

    loadQuestion() {
        const question = this.session.questions[this.currentIndex];

        if (!question) {
            this.completeSession();
            return;
        }

        // Reset answered state
        this.answered = false;

        // Update question metadata
        const categoryTag = document.getElementById('question-category');
        const domainInfo = document.getElementById('question-domain');

        if (categoryTag) {
            // Handle categories - could be array, string, or undefined
            let categories = [];
            if (question.categories) {
                if (Array.isArray(question.categories)) {
                    categories = question.categories;
                } else if (typeof question.categories === 'string') {
                    // Try to parse if it looks like JSON array
                    if (question.categories.startsWith('[')) {
                        try {
                            const parsed = JSON.parse(question.categories);
                            categories = Array.isArray(parsed) ? parsed : [question.categories];
                        } catch (e) {
                            categories = [question.categories];
                        }
                    } else {
                        // Check if it's comma-separated
                        categories = question.categories.includes(',')
                            ? question.categories.split(',').map(c => c.trim())
                            : [question.categories];
                    }
                } else {
                    categories = [String(question.categories)];
                }
            } else {
                categories = ['General'];
            }

            // Clear and create multiple category tags
            categoryTag.innerHTML = '';
            categories.forEach(cat => {
                const tag = document.createElement('span');
                tag.className = 'category-tag';
                tag.textContent = cat;
                categoryTag.appendChild(tag);
            });
        }

        if (domainInfo) {
            let domainText = question.domain || '';
            // Remove surrounding quotes if present
            domainText = domainText.replace(/^["']|["']$/g, '');

            // Hide domain tag if empty
            if (domainText && domainText.trim() !== '') {
                domainInfo.textContent = domainText;
                domainInfo.style.display = 'inline-block';
            } else {
                domainInfo.style.display = 'none';
            }
        }

        // Update question text
        const questionText = document.getElementById('question-text');
        if (questionText) {
            questionText.innerHTML = question.question;
        }

        // Create options
        const form = document.getElementById('practice-form');
        if (form) {
            form.innerHTML = '';

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

            // Make sure options is an object
            if (options && typeof options === 'object' && !Array.isArray(options)) {
                for (const [key, value] of Object.entries(options)) {
                    const optionDiv = document.createElement('div');
                    optionDiv.className = 'option';
                    optionDiv.innerHTML = `
                        <input type="radio" id="option-${key}" name="answer" value="${key}">
                        <label for="option-${key}">
                            <strong>${key}:</strong> ${value}
                        </label>
                    `;
                    form.appendChild(optionDiv);
                }
            } else {
                console.error('Invalid options format:', options);
            }
        }

        // Hide result and explanation
        const resultDiv = document.getElementById('result');
        const explanationDiv = document.getElementById('explanation');
        const navActions = document.querySelector('.navigation-actions');

        if (resultDiv) resultDiv.style.display = 'none';
        if (explanationDiv) explanationDiv.style.display = 'none';
        if (navActions) navActions.style.display = 'none';

        // Show check/reveal buttons
        const checkBtn = document.getElementById('check-answer-btn');
        const revealBtn = document.getElementById('reveal-answer-btn');
        if (checkBtn) checkBtn.style.display = 'inline-block';
        if (revealBtn) revealBtn.style.display = 'inline-block';

        // Update progress
        this.updateProgress();

        // Save progress
        this.saveProgress();
    }

    checkAnswer() {
        if (this.answered) return;

        const selected = document.querySelector('input[name="answer"]:checked');

        if (!selected) {
            alert('Please select an answer');
            return;
        }

        const question = this.session.questions[this.currentIndex];
        const userAnswer = selected.value;
        const correctAnswer = question.answer;
        const isCorrect = userAnswer === correctAnswer;

        this.answered = true;
        this.session.answers = this.session.answers || {};
        this.session.answers[this.currentIndex] = {
            selected: userAnswer,
            correct: isCorrect,
            skipped: false
        };

        // Update stats
        if (isCorrect) {
            this.stats.correct++;
        } else {
            this.stats.incorrect++;
        }

        // Show feedback
        this.showFeedback(isCorrect, correctAnswer);

        // Update stats display
        this.updateStats();

        // Hide check/reveal buttons
        const checkBtn = document.getElementById('check-answer-btn');
        const revealBtn = document.getElementById('reveal-answer-btn');
        if (checkBtn) checkBtn.style.display = 'none';
        if (revealBtn) revealBtn.style.display = 'none';

        // Show next button
        const navActions = document.querySelector('.navigation-actions');
        if (navActions) navActions.style.display = 'block';

        // Save progress
        this.saveProgress();
    }

    revealAnswer() {
        if (this.answered) return;

        const question = this.session.questions[this.currentIndex];
        const correctAnswer = question.answer;

        this.answered = true;
        this.session.answers = this.session.answers || {};
        this.session.answers[this.currentIndex] = {
            selected: null,
            correct: false,
            skipped: true
        };

        // Update stats
        this.stats.skipped++;

        // Show feedback
        this.showFeedback(false, correctAnswer, true);

        // Update stats display
        this.updateStats();

        // Hide check/reveal buttons
        const checkBtn = document.getElementById('check-answer-btn');
        const revealBtn = document.getElementById('reveal-answer-btn');
        if (checkBtn) checkBtn.style.display = 'none';
        if (revealBtn) revealBtn.style.display = 'none';

        // Show next button
        const navActions = document.querySelector('.navigation-actions');
        if (navActions) navActions.style.display = 'block';

        // Save progress
        this.saveProgress();
    }

    showFeedback(isCorrect, correctAnswer, wasRevealed = false) {
        const question = this.session.questions[this.currentIndex];
        const resultDiv = document.getElementById('result');
        const explanationDiv = document.getElementById('explanation');

        // Highlight options
        const options = document.querySelectorAll('.option');
        options.forEach(opt => {
            const input = opt.querySelector('input');
            if (input.value === correctAnswer) {
                opt.classList.add('correct-option');
            } else if (input.checked && !isCorrect) {
                opt.classList.add('incorrect-option');
            }
            input.disabled = true;
        });

        // Show result message
        if (resultDiv) {
            if (wasRevealed) {
                resultDiv.innerHTML = `<p class="info">Answer revealed: <strong>${correctAnswer}</strong></p>`;
            } else if (isCorrect) {
                resultDiv.innerHTML = '<p class="correct">✓ Correct!</p>';
            } else {
                resultDiv.innerHTML = `<p class="incorrect">✗ Incorrect. The correct answer is <strong>${correctAnswer}</strong></p>`;
            }
            resultDiv.style.display = 'block';
        }

        // Show explanation if available
        if (explanationDiv && question.explanation) {
            explanationDiv.innerHTML = `<strong>Explanation:</strong> ${question.explanation}`;
            explanationDiv.style.display = 'block';
        }
    }

    nextQuestion() {
        this.currentIndex++;

        if (this.currentIndex >= this.session.questions.length) {
            this.completeSession();
        } else {
            // Clear option highlighting
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('correct-option', 'incorrect-option');
                const input = opt.querySelector('input');
                if (input) {
                    input.disabled = false;
                    input.checked = false;
                }
            });

            this.loadQuestion();
        }
    }

    updateProgress() {
        const total = this.session.questions.length;
        const current = this.currentIndex + 1;

        const progressInfo = document.getElementById('question-progress');
        if (progressInfo) {
            progressInfo.textContent = `Question ${current} of ${total}`;
        }

        // Update progress bar
        const progressBar = document.getElementById('progress-bar');
        if (progressBar) {
            const percentage = (this.currentIndex / total) * 100;
            progressBar.style.width = `${percentage}%`;
        }
    }

    updateStats() {
        const correctCount = document.getElementById('correct-count');
        const incorrectCount = document.getElementById('incorrect-count');
        const skippedCount = document.getElementById('skipped-count');

        if (correctCount) correctCount.textContent = `Correct: ${this.stats.correct}`;
        if (incorrectCount) incorrectCount.textContent = `Incorrect: ${this.stats.incorrect}`;
        if (skippedCount) skippedCount.textContent = `Skipped: ${this.stats.skipped}`;
    }

    saveProgress() {
        this.session.currentIndex = this.currentIndex;
        this.session.stats = this.stats;
        localStorage.setItem('current_practice_session', JSON.stringify(this.session));
    }

    completeSession() {
        const total = this.session.questions.length;
        const percentage = Math.round((this.stats.correct / total) * 100);

        // Save to history
        const history = JSON.parse(localStorage.getItem('practice_sessions') || '[]');
        history.push({
            id: `session_${Date.now()}`,
            date: new Date().toISOString(),
            questions: this.session.questions.map((q, i) => ({
                id: q.title,
                correct: this.session.answers[i]?.correct || false,
                skipped: this.session.answers[i]?.skipped || false
            })),
            score: `${percentage}%`,
            stats: this.stats
        });
        localStorage.setItem('practice_sessions', JSON.stringify(history));

        // Clear current session
        localStorage.removeItem('current_practice_session');

        // Show results
        this.showResults();
    }

    showResults() {
        const total = this.session.questions.length;
        const percentage = Math.round((this.stats.correct / total) * 100);

        const modal = document.getElementById('results-modal');
        const summary = document.getElementById('results-summary');

        if (summary) {
            summary.innerHTML = `
                <div class="results-stats">
                    <div class="result-score ${percentage >= 70 ? 'passing' : 'failing'}">
                        <h3>${percentage}%</h3>
                        <p>${this.stats.correct} / ${total}</p>
                    </div>
                    <div class="result-breakdown">
                        <p><span class="correct-badge">✓</span> Correct: ${this.stats.correct}</p>
                        <p><span class="incorrect-badge">✗</span> Incorrect: ${this.stats.incorrect}</p>
                        <p><span class="skipped-badge">−</span> Skipped: ${this.stats.skipped}</p>
                    </div>
                </div>
                <div class="performance-message">
                    ${percentage >= 70
                        ? '<p class="success-message">Great job! You\'re making good progress.</p>'
                        : '<p class="improvement-message">Keep practicing to improve your score!</p>'}
                </div>
            `;
        }

        if (modal) {
            modal.style.display = 'flex';
        }

        // Setup modal buttons
        const newSessionBtn = document.getElementById('new-session-btn');
        const reviewBtn = document.getElementById('review-answers-btn');

        if (newSessionBtn) {
            newSessionBtn.onclick = () => {
                window.location.href = '/aws-saa-c03/practice/';
            };
        }

        if (reviewBtn) {
            reviewBtn.onclick = () => {
                // Reset to first question for review
                this.currentIndex = 0;
                if (modal) modal.style.display = 'none';
                this.loadQuestion();
                // Automatically reveal the answer in review mode
                setTimeout(() => {
                    const question = this.session.questions[this.currentIndex];
                    this.answered = true;
                    this.showFeedback(
                        this.session.answers[this.currentIndex]?.correct || false,
                        question.answer,
                        this.session.answers[this.currentIndex]?.skipped || false
                    );
                    const navActions = document.querySelector('.navigation-actions');
                    if (navActions) navActions.style.display = 'block';
                    const checkBtn = document.getElementById('check-answer-btn');
                    const revealBtn = document.getElementById('reveal-answer-btn');
                    if (checkBtn) checkBtn.style.display = 'none';
                    if (revealBtn) revealBtn.style.display = 'none';
                }, 100);
            };
        }
    }
}

// Initialize practice session when page loads
document.addEventListener('DOMContentLoaded', () => {
    new PracticeSession();
});
