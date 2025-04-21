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
  document.getElementById("registerForm").onsubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
  
    let users = JSON.parse(localStorage.getItem("users") || "[]");
  
    if (users.find(user => user.email === email)) {
      alert("User already exists");
      return;
    }
  
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! Please login.");
    document.getElementById("loginTab").click();
  };
  document.getElementById("loginForm").onsubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
  
    if (email === "admin123@quiz.com" && password === "admin123") {
      window.location.href = "dashboard.html";
      return;
    }
  
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === email && u.password === password);
  
    if (user) {
      window.location.href = "home.html";
    } else {
      alert("Invalid credentials,please retry!");
    }
  };
  document.getElementById("forgotPasswordLink").onclick = () => {
    const email = prompt("Enter your registered email:");
  
    if (!email) return;
  
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === email);
  
    if (user) {
      alert("Your password is: " + user.password);
    } else {
      alert("Email not found.REGISTER!");
    }
  };