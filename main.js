let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
let matchText = document.querySelector(".match-text");

function validatePassword() {
  if (password.value === confirmPassword.value) {
    password.classList.remove("error");
    confirmPassword.classList.remove("error");
    matchText.style.visibility = "hidden";
  } else {
    password.classList.add("error");
    confirmPassword.classList.add("error");
    matchText.style.visibility = "visible";
  }
}

password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validatePassword);