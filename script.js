let currentQuestion = 0;
let score = 0;
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit-btn');
const timerContainer = document.getElementById('timer');
const progressBar = document.getElementById('progress-bar');

// Shuffle questions for variety
questions = shuffleArray(questions);

// Function to shuffle array elements
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to load questions and options
function loadQuestion() {
    const currentQ = questions[currentQuestion];
    const optionsHtml = currentQ.options.map(option => `<label><input type="radio" name="quiz" value="${option}">${option}</label>`).join('');

    quizContainer.innerHTML = `<div class="question">${currentQ.question}</div>${optionsHtml}`;
}

// Function to calculate and display progress
function updateProgress() {
    const progressPercentage = (currentQuestion / questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

// Function to start and display the countdown timer
function startTimer(durationInSeconds) {
    let timer = durationInSeconds;
    const timerInterval = setInterval(function () {
        timerContainer.textContent = `${Math.floor(timer / 60)}:${(timer % 60).toLocaleString('en-US', { minimumIntegerDigits: 2 })}`;
        timer--;

        if (timer < 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }
    }, 1000);
}

// Function to handle quiz submission
function submitQuiz() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (selectedOption) {
        if (selectedOption.value === questions[currentQuestion].correctAnswer) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < questions.length) {
            loadQuestion();
            updateProgress();
        } else {
            showResults();
        }
    }
}

// Function to display final results with animation
function showResults() {
    quizContainer.style.display = 'none';
    resultsContainer.innerHTML = `<p>Your score: ${score}/${questions.length}</p>`;
    resultsContainer.style.opacity = '0';
    resultsContainer.style.transform = 'translateY(-20px)';
    resultsContainer.style.display = 'block';

    // Animate the result container
    setTimeout(() => {
        resultsContainer.style.opacity = '1';
        resultsContainer.style.transform = 'translateY(0)';
    }, 100);
}

// Initialize quiz
loadQuestion();
updateProgress();
startTimer(300); // 5 minutes countdown for the entire quiz
