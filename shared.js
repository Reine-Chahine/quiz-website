function submitQuiz(quizType) {
  const form = document.forms["quizForm"];
  const answers = form.querySelectorAll("input[type='radio']:checked");

  let score = 0;
  answers.forEach(input => {
    if (input.value === "correct") {
      score++;
    }
  });

  const total = form.querySelectorAll(".question-block").length;
  const resultDiv = document.getElementById("score");
  resultDiv.innerHTML =  `<h2>You scored ${score} out of ${total}</h2> `;

  const email = localStorage.getItem("currentUser");
  if (!email || email === "admin") return;

  const users = JSON.parse(localStorage.getItem("users") || "{}");
  if (!users[email]) return;

  users[email].scores[quizType] = score;
  localStorage.setItem("users", JSON.stringify(users));
}