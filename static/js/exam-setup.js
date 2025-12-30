// Exam Setup - Initialize and configure exam sessions

document.addEventListener('DOMContentLoaded', function() {
    // Display available questions count
    const availableCount = document.getElementById('available-count');
    if (availableCount && window.allQuestions) {
        availableCount.textContent = `${window.allQuestions.length} questions available`;
    }

    // Check for incomplete exam
    checkForIncompleteExam();

    // Load exam history
    loadExamHistory();

    // Start exam button handler
    const startBtn = document.getElementById('start-exam-btn');
    if (startBtn) {
        startBtn.addEventListener('click', startNewExam);
    }

    // Resume exam button handler
    const resumeBtn = document.getElementById('resume-exam-btn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', resumeExam);
    }

    // Discard exam button handler
    const discardBtn = document.getElementById('discard-exam-btn');
    if (discardBtn) {
        discardBtn.addEventListener('click', discardIncompleteExam);
    }
});

function checkForIncompleteExam() {
    const currentExam = localStorage.getItem('current_exam_session');
    if (!currentExam) return;

    try {
        const exam = JSON.parse(currentExam);
        if (exam && !exam.completed) {
            const resumeSection = document.getElementById('resume-section');
            const resumeDetails = document.getElementById('resume-details');

            if (resumeSection && resumeDetails) {
                const startTime = new Date(exam.startTime);
                const questionsAnswered = Object.keys(exam.answers || {}).filter(k => exam.answers[k] !== null).length;
                const totalQuestions = exam.questions.length;
                const timeRemaining = formatTime(exam.timeRemaining || 0);

                resumeDetails.innerHTML = `
                    Started: ${startTime.toLocaleString()}<br>
                    Progress: ${questionsAnswered} of ${totalQuestions} answered<br>
                    Time Remaining: ${timeRemaining}
                `;

                resumeSection.style.display = 'block';
            }
        }
    } catch (e) {
        console.error('Error checking for incomplete exam:', e);
    }
}

function resumeExam() {
    window.location.href = '/aws-saa-c03/exam/session/';
}

function discardIncompleteExam() {
    if (confirm('Are you sure you want to discard the incomplete exam? This cannot be undone.')) {
        localStorage.removeItem('current_exam_session');
        document.getElementById('resume-section').style.display = 'none';
    }
}

function startNewExam() {
    // Check if there's an incomplete exam
    const currentExam = localStorage.getItem('current_exam_session');
    if (currentExam) {
        try {
            const exam = JSON.parse(currentExam);
            if (exam && !exam.completed) {
                if (!confirm('You have an incomplete exam. Starting a new exam will discard it. Continue?')) {
                    return;
                }
            }
        } catch (e) {
            console.error('Error parsing current exam:', e);
        }
    }

    // Get configuration
    const questionCount = parseInt(document.getElementById('question-count').value) || 65;
    const timeLimit = parseInt(document.getElementById('time-limit').value) || 130;

    if (!window.allQuestions || window.allQuestions.length === 0) {
        alert('No questions available');
        return;
    }

    if (window.allQuestions.length < questionCount) {
        alert(`Only ${window.allQuestions.length} questions available. Please select a smaller number.`);
        return;
    }

    // Randomly select questions
    const selectedQuestions = getRandomQuestions(window.allQuestions, questionCount);

    // Create exam session
    const examSession = {
        id: 'exam_' + Date.now(),
        startTime: new Date().toISOString(),
        timeLimit: timeLimit * 60, // Convert to seconds
        timeRemaining: timeLimit * 60,
        questions: selectedQuestions,
        currentIndex: 0,
        answers: {},
        flagged: [],
        completed: false
    };

    // Save to localStorage
    try {
        localStorage.setItem('current_exam_session', JSON.stringify(examSession));
        // Redirect to exam session page
        window.location.href = '/aws-saa-c03/exam/session/';
    } catch (e) {
        console.error('Error saving exam session:', e);
        alert('Error starting exam. Please try again.');
    }
}

function getRandomQuestions(questions, count) {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

function loadExamHistory() {
    const historyList = document.getElementById('history-list');
    if (!historyList) return;

    try {
        const history = JSON.parse(localStorage.getItem('exam_sessions') || '[]');

        if (history.length === 0) {
            historyList.innerHTML = '<p class="no-history">No exam history yet</p>';
            return;
        }

        // Show last 5 exams
        const recentExams = history.slice(-5).reverse();
        historyList.innerHTML = recentExams.map(exam => {
            const date = new Date(exam.date);
            const passed = parseFloat(exam.score) >= 72;
            const statusClass = passed ? 'passed' : 'failed';
            const duration = formatTime(exam.duration);

            return `
                <div class="history-item ${statusClass}">
                    <div class="history-date">${date.toLocaleDateString()} ${date.toLocaleTimeString()}</div>
                    <div class="history-stats">
                        <span class="score">Score: ${exam.score}</span>
                        <span class="questions">${exam.questions.length} questions</span>
                        <span class="time">Time: ${duration}</span>
                        <span class="status">${passed ? 'PASSED' : 'FAILED'}</span>
                    </div>
                </div>
            `;
        }).join('');
    } catch (e) {
        console.error('Error loading exam history:', e);
        historyList.innerHTML = '<p class="error">Error loading history</p>';
    }
}

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
        return `${hours}:${pad(minutes)}:${pad(secs)}`;
    } else {
        return `${minutes}:${pad(secs)}`;
    }
}

function pad(num) {
    return num.toString().padStart(2, '0');
}
