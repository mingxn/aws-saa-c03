/**
 * Practice Mode Setup
 * Handles configuration and initialization of practice sessions
 */

document.addEventListener('DOMContentLoaded', () => {
    const questionCount = document.getElementById('question-count');
    const startBtn = document.getElementById('start-practice-btn');
    const availableCount = document.getElementById('available-count');
    const historyList = document.getElementById('history-list');

    // Filter out questions without answers
    if (window.allQuestions) {
        window.allQuestions = window.allQuestions.filter(q => q.answer && q.answer !== "");
    }

    // Questions are loaded from the page via window.allQuestions
    // Check if questions are available
    if (!window.allQuestions || window.allQuestions.length === 0) {
        availableCount.textContent = 'No questions available';
        startBtn.disabled = true;
        return;
    }

    // Update available question count
    function updateAvailableCount() {
        const total = window.allQuestions.length;
        const requested = parseInt(questionCount.value);

        availableCount.textContent = `${total} questions available`;

        if (requested > total) {
            availableCount.textContent += ` (Will use all ${total} questions)`;
        }
    }

    // Load practice history from localStorage
    function loadHistory() {
        const history = JSON.parse(localStorage.getItem('practice_sessions') || '[]');

        if (history.length === 0) {
            historyList.innerHTML = '<p class="no-history">No practice sessions yet. Start your first session!</p>';
            return;
        }

        // Show last 5 sessions
        const recent = history.slice(-5).reverse();
        historyList.innerHTML = recent.map(session => {
            const correctCount = session.questions.filter(q => q.correct).length;
            const total = session.questions.length;
            const percentage = Math.round((correctCount / total) * 100);

            return `
                <div class="history-item">
                    <div class="history-info">
                        <strong>${new Date(session.date).toLocaleDateString()}</strong>
                        <span class="topic-tag">${total} questions</span>
                    </div>
                    <div class="history-score">
                        ${percentage}% (${correctCount}/${total})
                    </div>
                </div>
            `;
        }).join('');
    }

    // Start practice session
    function startPracticeSession() {
        const requested = parseInt(questionCount.value);
        const total = window.allQuestions.length;

        if (total === 0) {
            alert('No questions available');
            return;
        }

        console.log(`Starting practice session with ${requested} questions out of ${total} available`);

        // Randomly select questions
        const shuffled = [...window.allQuestions].sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, Math.min(requested, total));

        console.log(`Selected ${selected.length} questions`);

        // Save session config to localStorage
        const sessionConfig = {
            questions: selected,
            startTime: new Date().toISOString(),
            currentIndex: 0,
            answers: {},
            stats: {
                correct: 0,
                incorrect: 0,
                skipped: 0
            }
        };

        try {
            const configStr = JSON.stringify(sessionConfig);
            console.log('Saving session config, size:', configStr.length);
            localStorage.setItem('current_practice_session', configStr);
            console.log('Session saved successfully');

            // Verify it was saved
            const saved = localStorage.getItem('current_practice_session');
            if (!saved) {
                alert('Error: Failed to save session to localStorage');
                return;
            }

            console.log('Verified session in localStorage');
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            alert('Error saving session. Your browser may have localStorage disabled or quota exceeded.');
            return;
        }

        // Navigate to practice session page
        console.log('Redirecting to session page...');
        window.location.href = '/aws-saa-c03/practice/session/';
    }

    // Event listeners
    questionCount.addEventListener('change', updateAvailableCount);
    startBtn.addEventListener('click', startPracticeSession);

    // Initialize
    updateAvailableCount();
    loadHistory();
});
