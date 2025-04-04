//grab all the inputs
let updateForm = document.getElementById("update-form");
let updateName = document.getElementById("update-name");
let updateEmail = document.getElementById("update-email");
let oldPassword = document.getElementById("old-password");
let updatePassword = document.getElementById("update-password");
let confirmnewPassword = document.getElementById("confirm-newpassword");
let updatePicture = document.getElementById("update-picture");

//update the placeholders onload
document.addEventListener("DOMContentLoaded", function () {
  let oldUsername = localStorage.getItem("studentName");
  let oldEmail = localStorage.getItem("studentEmail");

  updateName.placeholder = oldUsername;
  updateEmail.placeholder = oldEmail;
});

updateForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let updatedName = updateName.value;
  let updatedEmail = updateEmail.value;
  let useroldPassword = oldPassword.value;
  let updatedPassword = updatePassword.value;
  let confirmUpdatedPassword = confirmnewPassword.value;

  //update the data in the pages
  localStorage.setItem("studentName", updatedName);
  localStorage.setItem("studentEmail", updatedEmail);

  //confirm the entered password matches the confirmed
  if (updatedPassword === confirmUpdatedPassword) {
    return true;
  } else {
    console.error("your Password Did not Match");
  }

  //change password if it matches the saved Password
  let SavedPassword = localStorage.getItem("studentPassword");
  if (savedPassword && useroldPassword === updatedPassword) {
    localStorage.setItem("studentPassword", updatedPassword);
  } else {
    console.error("Your old Password is not correct");
  }
});
