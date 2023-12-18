// quiz.js

// Selecting elements
const quizContainer = document.querySelector('.quiz-container');
const feedbackElement = document.getElementById('feedback');
const resultsContainer = document.getElementById('results');
const submitButton = document.querySelector('.submit-btn');
const timerElement = document.getElementById('timer');
const progressBar = document.getElementById('progress-bar');
const scoreElement = document.getElementById('score'); // Added line

let currentQuestionIndex = 0;
let score = 0;
let timer;
const totalQuestions = questions.length;

// Function to start the quiz
function startQuiz() {
    // Reset variables
    currentQuestionIndex = 0;
    score = 0;
    resultsContainer.innerHTML = '';
    feedbackElement.innerHTML = '';
    scoreElement.innerText = 'Score: 0'; // Added line

    // Display the first question
    showQuestion();

    // Start the timer
    startTimer();
}

// Function to show a question
function showQuestion() {
    const question = questions[currentQuestionIndex];
    quizContainer.innerHTML = '';

    // Display question
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `<h2>${question.question}</h2>`;
    quizContainer.appendChild(questionElement);

    // Display answer options
    question.answers.forEach(answer => {
        const option = document.createElement('div');
        option.classList.add('answer-option');
        option.innerText = answer.text;
        option.addEventListener('click', () => selectAnswer(answer.correct));
        quizContainer.appendChild(option);
    });

    // Update progress bar
    updateProgressBar();
}

// Function to select an answer
function selectAnswer(correct) {
    if (correct) {
        score += questions[currentQuestionIndex].points;
        showFeedback('Correct!', '#27ae60');
        event.target.classList.add('correct');
    } else {
        // For wrong answers, vibrate the screen and show red feedback
        vibrateScreen();
        showFeedback('Wrong!', '#e74c3c');
        event.target.classList.add('wrong');
    }

    // Update and display real-time score
    scoreElement.innerText = `Score: ${score}`;

    // Disable further clicks on options
    document.querySelectorAll('.answer-option').forEach(option => {
        option.removeEventListener('click', selectAnswer);
    });

    // Move to the next question
    currentQuestionIndex++;

    // Check if the quiz is completed
    if (currentQuestionIndex === totalQuestions) {
        endQuiz();
    } else {
        setTimeout(() => showQuestion(), 2000); // Delay for feedback visibility
    }
}

// Function to end the quiz
function endQuiz() {
    clearInterval(timer); // Stop the timer
    displayResults();
}

// Function to display quiz results
function displayResults() {
    resultsContainer.innerHTML = `<p>Your Score: ${score}/${totalQuestions}</p>`;
}

// Function to show feedback
function showFeedback(message, color) {
    feedbackElement.innerHTML = message;
    feedbackElement.style.color = color;
    feedbackElement.style.display = 'block';

    // Hide feedback after 2 seconds
    setTimeout(() => {
        feedbackElement.style.display = 'none';
    }, 2000);
}

// Function to start the timer
function startTimer() {
    let timeLimit = questions[currentQuestionIndex].timeLimit;
    timerElement.innerText = formatTime(timeLimit);

    timer = setInterval(() => {
        timeLimit--;

        if (timeLimit < 0) {
            endQuiz();
        } else {
            timerElement.innerText = formatTime(timeLimit);
        }
    }, 1000);
}

// Function to format time (convert seconds to mm:ss)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Function to update the progress bar
function updateProgressBar() {
    const progressPercentage = (currentQuestionIndex / totalQuestions) * 100;
    progressBar.style.width = `${progressPercentage}%`;

    // Change progress bar color to yellow when the user progresses
    if (progressPercentage > 0) {
        progressBar.style.backgroundColor = '#FFC107'; // Yellow color
    }
}


// Function to vibrate the screen (for wrong answers)
function vibrateScreen() {
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;

    if (navigator.vibrate) {
        navigator.vibrate(200); // Vibrate for 200 milliseconds
    }
}

// Event listener for the submit button
submitButton.addEventListener('click', () => submitQuiz());

// Call the startQuiz function to initiate the quiz
startQuiz();
