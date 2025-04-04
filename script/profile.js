//get the

document.addEventListener("DOMContentLoaded", function () {
  let studentName = document.getElementById("student-name");
  let studentPicture = document.getElementById("student-picture");

  let savedName = localStorage.getItem("studentName");
  let savedPicture = localStorage.getItem("studentPicture");

  if (savedName) {
    studentName.textContent = savedName;
  } else {
    console.warn("No saved name found.");
  }

  if (savedPicture) {
    studentPicture.src = savedPicture;
  } else {
    console.warn("No saved Picture found.");
  }
});
