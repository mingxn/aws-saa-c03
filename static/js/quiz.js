// Quiz functionality for AWS SAA-C03 Question Bank

document.addEventListener('DOMContentLoaded', function() {
    const questionPage = document.querySelector('.question-page');
    if (!questionPage) return;

    const form = document.getElementById('quiz-form');
    const submitBtn = document.getElementById('submit-btn');
    const revealBtn = document.getElementById('reveal-btn');
    const result = document.getElementById('result');
    const question = document.querySelector('.question');
    const correctAnswer = question.dataset.answer;

    // Submit answer
    if (submitBtn) {
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const selected = form.querySelector('input[name="answer"]:checked');

            if (!selected) {
                alert('Please select an answer');
                return;
            }

            const userAnswer = selected.value;
            const isCorrect = userAnswer === correctAnswer;

            // Show result
            result.style.display = 'block';
            const feedback = result.querySelector('.feedback-text');

            if (isCorrect) {
                feedback.textContent = '✓ Correct!';
                feedback.className = 'feedback-text correct';
                result.classList.add('correct');
                result.classList.remove('incorrect');
            } else {
                feedback.textContent = `✗ Incorrect. The correct answer is ${correctAnswer}.`;
                feedback.className = 'feedback-text incorrect';
                result.classList.add('incorrect');
                result.classList.remove('correct');
            }

            // Highlight correct/incorrect options
            const options = form.querySelectorAll('.option');
            options.forEach(option => {
                const input = option.querySelector('input');
                if (input.value === correctAnswer) {
                    option.classList.add('correct-option');
                }
                if (input.checked && input.value !== correctAnswer) {
                    option.classList.add('incorrect-option');
                }
            });

            // Disable further selection
            form.querySelectorAll('input').forEach(input => input.disabled = true);
            submitBtn.style.display = 'none';
        });
    }

    // Reveal answer (practice mode)
    if (revealBtn) {
        revealBtn.addEventListener('click', function(e) {
            e.preventDefault();

            result.style.display = 'block';
            const feedback = result.querySelector('.feedback-text');
            feedback.textContent = `The correct answer is ${correctAnswer}.`;
            feedback.className = 'feedback-text';

            // Highlight correct option
            const options = form.querySelectorAll('.option');
            options.forEach(option => {
                const input = option.querySelector('input');
                if (input.value === correctAnswer) {
                    option.classList.add('correct-option');
                }
            });
        });
    }
});
