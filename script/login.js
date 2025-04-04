//grab the input from the two sections
let logForm = document.getElementById("login-form");
let registeredEmail = document.getElementById("registered-email");
let registeredPassword = document.getElementById("registered-password");
let loo = document.getElementById("logii");

//get the user details from local storage
let savedEmail = localStorage.getItem("studentEmail");
let savedPassword = localStorage.getItem("studentPassword");

//make sure it matches during submission
logForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let usersLoginEmail = registeredEmail.value;
  let usersLoginPassword = registeredPassword.value;

  if (usersLoginEmail === savedEmail && usersLoginPassword === savedPassword) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "home.html";
  } else {
    loo.textContent = "The details are wrong";
  }

  console.log(localStorage.getItem("studentEmail"));
  console.log(localStorage.getItem("studentPassword"));
});
