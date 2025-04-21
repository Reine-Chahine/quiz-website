window.onload = function () {
  // Tab Switching
  document.getElementById("loginTab").onclick = () => {
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("registerForm").classList.add("hidden");
    document.getElementById("loginTab").classList.add("active");
    document.getElementById("registerTab").classList.remove("active");
  };

  document.getElementById("registerTab").onclick = () => {
    document.getElementById("registerForm").classList.remove("hidden");
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("registerTab").classList.add("active");
    document.getElementById("loginTab").classList.remove("active");
  };

  // Registration
  document.getElementById("registerForm").onsubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    let users = JSON.parse(localStorage.getItem("users") || "{}");

    if (users[email]) {
      alert("User already exists");
      return;
    }

    users[email] = {
      password: password,
      scores: {}  // initialize scores object
    };

    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! Please login.");
    document.getElementById("loginTab").click();
  };

  // Login
  document.getElementById("loginForm").onsubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const users = JSON.parse(localStorage.getItem("users") || "{}");

    if (email === "admin123@quiz.com" && password === "admin123") {
      localStorage.setItem("currentUser", "admin123@quiz.com");
      window.location.href = "dashboard.html";
      return;
    }

    if (users[email] && users[email].password === password) {
      localStorage.setItem("currentUser", email);
      window.location.href = "home.html";
    } else {
      alert("Invalid credentials");
    }
  };
};