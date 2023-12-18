// questions.js
const questions = [
    // Previous questions...
  
    // General Knowledge
    {
      category: 'General Knowledge',
      question: 'What is the currency of Brazil?',
      answers: [
        { text: 'Peso', correct: false },
        { text: 'Real', correct: true },
        { text: 'Dollar', correct: false },
        { text: 'Euro', correct: false }
      ],
      points: 1,
      timeLimit: 15,
    },
    {
      category: 'General Knowledge',
      question: 'Who wrote the play "Romeo and Juliet"?',
      answers: [
        { text: 'Charles Dickens', correct: false },
        { text: 'William Shakespeare', correct: true },
        { text: 'Jane Austen', correct: false },
        { text: 'Mark Twain', correct: false }
      ],
      points: 2,
      timeLimit: 20,
    },
  
    // Science
    {
      category: 'Science',
      question: 'What is the powerhouse of the cell?',
      answers: [
        { text: 'Nucleus', correct: false },
        { text: 'Mitochondria', correct: true },
        { text: 'Endoplasmic Reticulum', correct: false },
        { text: 'Golgi Apparatus', correct: false }
      ],
      points: 1,
      timeLimit: 15,
    },
    {
      category: 'Science',
      question: 'What is the chemical formula for water?',
      answers: [
        { text: 'H2O', correct: true },
        { text: 'CO2', correct: false },
        { text: 'O2', correct: false },
        { text: 'CH4', correct: false }
      ],
      points: 2,
      timeLimit: 18,
    },
  
    // History
    {
      category: 'History',
      question: 'Who was the first President of the United States?',
      answers: [
        { text: 'Thomas Jefferson', correct: false },
        { text: 'George Washington', correct: true },
        { text: 'Abraham Lincoln', correct: false },
        { text: 'John Adams', correct: false }
      ],
      points: 1,
      timeLimit: 15,
    },
    {
      category: 'History',
      question: 'Which war was fought between the North and South regions of the United States?',
      answers: [
        { text: 'World War I', correct: false },
        { text: 'American Civil War', correct: true },
        { text: 'Vietnam War', correct: false },
        { text: 'Cold War', correct: false }
      ],
      points: 2,
      timeLimit: 20,
    },
  
    // Technology
    {
      category: 'Technology',
      question: 'In what year was the first iPhone released?',
      answers: [
        { text: '2005', correct: false },
        { text: '2007', correct: true },
        { text: '2010', correct: false },
        { text: '2012', correct: false }
      ],
      points: 1,
      timeLimit: 15,
    },
    {
      category: 'Technology',
      question: 'Which programming language is known as the "language of the web"?',
      answers: [
        { text: 'Java', correct: false },
        { text: 'Python', correct: false },
        { text: 'JavaScript', correct: true },
        { text: 'C++', correct: false }
      ],
      points: 2,
      timeLimit: 18,
    },
  
    // Geography
    {
      category: 'Geography',
      question: 'Which mountain range is the longest in the world?',
      answers: [
        { text: 'Himalayas', correct: false },
        { text: 'Himadri', correct: false },
        { text: 'Rocky Mountains', correct: false },
        { text: 'Andes', correct: true }
      ],
      points: 1,
      timeLimit: 15,
    },
    {
      category: 'Geography',
      question: 'Which country is known as the "Land of the Rising Sun"?',
      answers: [
        { text: 'China', correct: false },
        { text: 'South Korea', correct: false },
        { text: 'Japan', correct: true },
        { text: 'Vietnam', correct: false }
      ],
      points: 2,
      timeLimit: 20,
    },
    // Add more questions to reach a total of 50
  ];
  