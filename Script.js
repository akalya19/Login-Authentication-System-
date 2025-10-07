document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  
  const validUsername = "admin";
  const validPassword = "12345";

  if (username === validUsername && password === validPassword) {
    message.style.color = "green";
    message.textContent = "Login successful!";
   
  } else {
    message.style.color = "red";
    message.textContent = "Invalid username or password.";
  }
});
