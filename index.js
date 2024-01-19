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
  let button = document.querySelector("button");
  button.className = "disabled";
}

//showSuccess outline
function showSuccess(input) {
  let formControl = input.parentElement;
  formControl.className = "form_control success";
}

//check required fields
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value !== "") {
      showSuccess(input);
    } else {
      showError(input, `${getFieldName(input)} is required!`);
    }
  });
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max) {
  if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else {
    showSuccess(userNameInput);
  }
}

function checkEmail(input) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(emailInput.value)) {
    showSuccess(emailInput);
  } else {
    showError(emailInput, "Email is invalid");
  }
}

function checkPasswordsMatch(input1, input2) {
  if (input1.value === input2.value && input1.value.trim() !== "") {
    showSuccess(input1);
  } else {
    showError(input1, "Passwords do not match");
  }
}

// form submit event
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([
    userNameInput,
    emailInput,
    passwordInput,
    confirmPasswordInput,
  ]);

  checkLength(userNameInput, 3, 15);
  checkLength(passwordInput, 6, 25);
  checkEmail(emailInput);
  checkPasswordsMatch(confirmPasswordInput, passwordInput);

  userNameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  confirmPasswordInput.value = "";
});
