document.addEventListener("DOMContentLoaded", () => {
    const userTable = document.getElementById("userTable");
    const thead = userTable.querySelector("thead tr");
    const tbody = userTable.querySelector("tbody");
  
    const users = JSON.parse(localStorage.getItem("users")) || {};
  
    const quizSet = new Set();
  
    for (const email in users) {
      if (email === "admin123@quiz.com") continue;
      const user = users[email];
      if (user.scores) {
        Object.keys(user.scores).forEach((quiz) => quizSet.add(quiz));
      }
    }
  
    const quizList = Array.from(quizSet);
  
 
    thead.innerHTML =` <th>Email</th>` + quizList.map(q => `<th>${q}</th>`).join("");
  

    for (const email in users) {
      if (email === "admin123@quiz.com") continue;
      const user = users[email];
      const scores = user.scores || {};
  
      const row = document.createElement("tr");
      let rowHTML = `<td>${email}</td>`;
  
      quizList.forEach((quiz) => {
        rowHTML += `<td>${scores[quiz] !== undefined ? scores[quiz] : "-"}</td>`;
      });
  
      row.innerHTML = rowHTML;
      tbody.appendChild(row);
    }
  });