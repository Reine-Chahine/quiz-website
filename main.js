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