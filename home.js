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