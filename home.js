const sampleQuizzes = [
    { id: 1, title: "HTML Quiz" },
    { id: 2, title: "CSS Quiz" },
    { id: 3, title: "JavaScript Quiz" }
  ];
  if (!localStorage.getItem("quizzes")) {
    localStorage.setItem("quizzes", JSON.stringify(sampleQuizzes));
  }
  
  const quizzes = JSON.parse(localStorage.getItem("quizzes") || "[]");
  const quizList = document.getElementById("quizList");
  quizzes.forEach(quiz => {
    const div = document.createElement("div");
    div.className = "quiz-item";
    div.innerText = quiz.title;
    div.onclick = () => {
      if (quiz.title === "General Knowledge") {
        window.location.href = "web.html";
      } else if (quiz.title === "Science & Nature") {
        window.location.href = "css.html";
      } else if (quiz.title === "History") {
        window.location.href = "javascript.html";
      }
    };
    quizList.appendChild(div);
  });