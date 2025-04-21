// home.js

document.addEventListener('DOMContentLoaded', () => {
  const quizzes = [
    { name: "HTML", file: "ht.html" },
    { name: "CSS", file: "css.html" },
    { name: "JavaScript", file: "javascript.html" }
  ];

  const quizList = document.getElementById("quizList");

  quizzes.forEach(quiz => {
    const link = document.createElement("a");
    link.href = quiz.file;
    link.textContent = quiz.name;
   
    quizList.appendChild(link);
  });
});