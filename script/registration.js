//Grab the form
let regForm = document.getElementById("registration-form");

//Get the users input from the registration form
let usersName = document.getElementById("registration-name");
let usersEmail = document.getElementById("registration-email");
let usersPassword = document.getElementById("registration-password");
let confirmpassword = document.getElementById("registration-conf-password");
let usersPicture = document.getElementById("registration-picture");

//listen to the form submission
regForm.addEventListener("submit", function (e) {
  e.preventDefault();

  //Grab The Value From The users input
  let usersnameValue = usersName.value;
  let usersemailValue = usersEmail.value;
  let userspasswordValue = usersPassword.value;
  let confirmpasswordValue = confirmpassword.value;

  // Save name to local storage
  localStorage.setItem("studentName", usersnameValue);

  //check if user already registered
  if (localStorage.getItem("studentEmail") === usersemailValue) {
    alert("Email already registered. Try logging in.");
    return;
  }

  //save the email to local storage
  localStorage.setItem("studentEmail", usersemailValue);

  //a vrey big concept
  //grab the users selection
  let file = usersPicture.files[0];

  if (file) {
    //i create a new reader
    let reader = new FileReader();

    reader.onloadend = function () {
      //convert image to base64 string
      let base64img = reader.result;

      //store in local storage
      localStorage.setItem("studentPicture", base64img);
    };

    //read the file as a dataurl(base64 forma)
    reader.readAsDataURL(file);
  }

  //make sure the password match
  if (userspasswordValue === confirmpasswordValue) {
    localStorage.setItem("studentPassword", userspasswordValue);

    // Log after everything is saved
    console.log(localStorage.getItem("studentEmail"));
    console.log(localStorage.getItem("studentPassword"));
  } else {
    console.log("password does not match");
  }

  localStorage.setItem("isLoggedIn", "true");
  window.location.href = "home.html";
});
