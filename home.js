// home.js

document.addEventListener('DOMContentLoaded', () => {
  const quizzes = [
    { name: "HTML quiz", file: "ht.html" },
    { name: "CSS quiz", file: "css.html" },
    { name: "JavaScript quiz", file: "javascript.html" }
  ];

  const quizList = document.getElementById("quizList");

  quizzes.forEach(quiz => {
    const link = document.createElement("a");
    link.href = quiz.file;
    link.textContent = quiz.name;
    link.className = "quiz-link"; // optional class for styling
    quizList.appendChild(link);
  });
});