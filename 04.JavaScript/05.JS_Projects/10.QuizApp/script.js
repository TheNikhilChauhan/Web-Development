document.addEventListener("DOMContentLoaded", () => {
  let quizSection = document.getElementById("question-container");
  let question = document.getElementById("questions");
  let option = document.getElementById("options");
  let nextButton = document.getElementById("next-btn");

  let scoreSection = document.getElementById("score-section");
  let showScore = document.getElementById("score");
  let restartButton = document.getElementById("restart-btn");

  let startButton = document.getElementById("start-btn");

  let questions = [
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "South Korea", "Thailand"],
      answer: "Japan",
    },
    {
      question: "Which gas do plants primarily use in photosynthesis?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
      answer: "Carbon Dioxide",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  startButton.addEventListener("click", () => {
    showQuiz();
  });

  function showQuiz() {
    startButton.classList.add("hidden");
    scoreSection.classList.add("hidden");
    quizSection.classList.remove("hidden");
    nextButton.classList.add("hidden");

    question.textContent = questions[currentQuestionIndex].question;
    option.innerHTML = ``;
    questions[currentQuestionIndex].options.forEach((op) => {
      const li = document.createElement("li");
      li.classList.add("list");
      li.textContent = `${op}`;
      li.addEventListener("click", () => selectAnswer(op, li));
      option.appendChild(li);
    });
  }

  function selectAnswer(choice, li) {
    const choices = document.querySelectorAll("#options li");
    choices.forEach((op) => {
      op.style.pointerEvents = "none";
    });

    if (questions[currentQuestionIndex].answer === choice) {
      score++;
      li.style.backgroundColor = "green";
    } else {
      li.style.backgroundColor = "red";
    }

    nextButton.classList.remove("hidden");
  }

  nextButton.addEventListener("click", () => {
    nextQuestion();
  });

  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
      viewScore();
    } else {
      showQuiz();
    }
  }

  function viewScore() {
    quizSection.classList.add("hidden");
    scoreSection.classList.remove("hidden");
    showScore.textContent = `${score} out of ${questions.length}`;
  }

  restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    showQuiz();
  });
});
