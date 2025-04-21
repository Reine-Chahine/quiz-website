// dashboard.js

document.addEventListener("DOMContentLoaded", () => {
    const userTableBody = document.querySelector("#userTable tbody");
  
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    if (users.length === 0) {
      const row = document.createElement("tr");
      row.innerHTML = <td colspan="2">No users found</td>;
      userTableBody.appendChild(row);
      return;
    }
  
    // Populate the table with user data
    users.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.email}</td>
        <td>${user.score !== undefined ? user.score : "No score yet"}</td>
      `;
      userTableBody.appendChild(row);
    });
  });