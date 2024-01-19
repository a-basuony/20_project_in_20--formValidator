const form = document.getElementsByClassName("form")[0];
let userNameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let confirmPasswordInput = document.getElementById("confirmPassword");

//showError if the inputs not required
function showError(input, message) {
  let formControl = input.parentElement;
  formControl.className = "form_control error";
  let small = formControl.querySelector("small");
  small.innerText = message;
}

//showSuccess if the inputs required
function showSuccess(input) {
  let formControl = input.parentElement;
  formControl.className = "form_control success";
}

// form submit event
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (userNameInput.value.trim() === "") {
    showError(userNameInput, "Username is required");
  } else {
    showSuccess(userNameInput);
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(emailInput.value)) {
    showSuccess(emailInput);
  } else {
    showError(emailInput, "Email is invalid");
  }

  if (
    passwordInput.value.length >= 5 &&
    passwordInput.value.length <= 16 &&
    passwordInput.value.trim() !== ""
  ) {
    showSuccess(passwordInput);
  } else {
    showError(
      passwordInput,
      "Password must be between 8 and 16 characters long."
    );
  }

  if (
    confirmPasswordInput.value === passwordInput.value &&
    confirmPasswordInput.value.trim() !== ""
  ) {
    showSuccess(confirmPasswordInput);
  } else {
    showError(confirmPasswordInput, "Passwords do not match");
  }

  console.log(userNameInput.value);
  console.log(emailInput.value);
  console.log(passwordInput.value);
  console.log(confirmPasswordInput.value);

  userNameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  confirmPasswordInput.value = "";
});
