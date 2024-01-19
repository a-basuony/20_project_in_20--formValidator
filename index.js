const form = document.getElementsByClassName("form")[0];
const userNameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// check if the input is required when focus changed
function addRequiredValidation(input) {
  input.addEventListener("focus", function () {
    //if the field is empty, add an error class
    if (input.value.trim() === "") {
      input.parentNode.classList.add("error");
    } else {
      //otherwise remove the error class
      input.classList.remove("error");
    }
  });
}

addRequiredValidation(userNameInput);
addRequiredValidation(userNameInput);
addRequiredValidation(emailInput);
addRequiredValidation(passwordInput);
addRequiredValidation(confirmPasswordInput);

form.addEventListener("submit", function (e) {
  e.preventDefault();
});
