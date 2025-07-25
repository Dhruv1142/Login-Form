document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const validUsername = "admin";
  const validPassword = "1234";

  if (!username || !password) {
    alert("Please fill in both username and password.");
    return;
  }

  if (username.length < 3) {
    alert("Username must be at least 3 characters.");
    return;
  }

  if (password.length < 4) {
    alert("Password must be at least 4 characters.");
    return;
  }

  if (username === validUsername && password === validPassword) {
    alert("Login successful!");
  } else {
    alert("Invalid username or password.");
  }
});
