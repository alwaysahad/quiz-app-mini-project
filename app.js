import axios from 'axios';
import Swal from 'sweetalert2';

const API_URL = 'https://api.example.com/questions'; // Replace this with your actual API endpoint

const App = async () => {
    try {
        const response = await axios.get(API_URL);
        const questions = response.data;
        let currentQuestion = 0;
        let score = 0;

        const renderQuestion = () => {
            const questionContainer = document.getElementById('root');
            questionContainer.innerHTML = `
                <div id="quiz-container">
                    <h2 class="question">${questions[currentQuestion].question}</h2>
                    <ul>
                        ${questions[currentQuestion].options.map((option, index) => `
                            <li onclick="checkAnswer('${option}')">${option}</li>
                        `).join('')}
                    </ul>
                </div>
            `;
        };

        window.checkAnswer = (selectedOption) => {
            if (selectedOption === questions[currentQuestion].correctAnswer) {
                score++;
            }

            currentQuestion++;

            if (currentQuestion < questions.length) {
                renderQuestion();
            } else {
                Swal.fire({
                    title: 'Quiz Completed!',
                    text: `Your score: ${score}`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            }
        };

        renderQuestion();
    } catch (error) {
        console.error('Error fetching questions:', error);
    }
};

App();
