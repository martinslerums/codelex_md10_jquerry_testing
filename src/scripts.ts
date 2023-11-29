import $ from "jquery";
import { checkIfValidName } from "./utils/nameValidation/checkIfValidName";
import { checkIfValidEmail } from "./utils/emailValidation/checkIfValidEmail";
import { checkIfValidPassword } from "./utils/passwordValidation/checkIfValidPassword";
import Toastify from "toastify-js";

const showMessage = (message: string, type: string) => {

  if (type === "success") {
    Toastify({
      text: message,
      duration: 3000,
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      className: "custom-toast",
    }).showToast();
  } else {
    Toastify({
      text: message,
      duration: 3000,
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #e74c3c,#96c93d)",
      },
      className: "custom-toast",
    }).showToast();
  }
}


$(".js-wrapper").html(
  `<form class="js-form inputForm">
    <div class="input-wrapper">
      <label for="name">Name</label>
      <input type="text" class="js-nameField inputField" id="name" placeholder="Full name">
    </div>
    <div class="input-wrapper">
      <label for="email">E-mail</label>
      <input type="text" class="js-emailField inputField" id="email" placeholder="E-mail address">
    </div>
    <div class="input-wrapper">
      <label for="password">Password</label>
      <input type="text" class="js-passwordField inputField" id="password" placeholder="Password">
    </div>
    <button class="submitBtn" type="submit">Submit</button>
  </form>`
);


$(".js-form").on("submit", (event) => {
  event.preventDefault();

  const name = $<HTMLInputElement>(".js-nameField").val().toString();
  const nameIsValid = checkIfValidName(name)
  console.log("name", name, 'valid', nameIsValid);

  const email = $<HTMLInputElement>(".js-emailField").val().toString();
  const emailIsValid = checkIfValidEmail(email)
  console.log("email", email, "valid", emailIsValid)

  const pword = $<HTMLInputElement>(".js-passwordField").val().toString();
  const pwordIsValid = checkIfValidPassword(pword)
  console.log("pw", pword, "valid", pwordIsValid)

  if (nameIsValid && emailIsValid && pwordIsValid) {
    // All validations passed, show success message
    showMessage("Form submitted successfully", "success");
  } else {
    // Validations failed, show error messages
    if (!nameIsValid) {
      showMessage("Invalid name", "error");
    }
    if (!emailIsValid) {
      showMessage("Invalid email", "error");
    }
    if (!pwordIsValid) {
      showMessage("Invalid password", "error");
    }
  }


});
