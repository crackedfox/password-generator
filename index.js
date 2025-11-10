// Password Generator - script.js - Author: Farhan
const passwordInput = document.querySelector('input[name="password"]');
const uppercaseCheckbox = document.querySelector('input[name="uppercase"]');
const lowercaseCheckbox = document.querySelector('input[name="lowercase"]');
const numbersCheckbox = document.querySelector('input[name="numbers"]');
const symbolsCheckbox = document.querySelector('input[name="symbols"]');
const button = document.querySelector(".generate-btn");
const passwordRange = document.querySelector(".password-range");
const passwordLengthDisplay = document.querySelector(".password-length-value");
const copyIcon = document.querySelector("#icon-copy");
const row = document.querySelector(".row");
const errorMessage = document.querySelector(".error-row");
const toast = document.querySelector(".toast");

passwordLengthDisplay.textContent = passwordRange.value;
let password = "";
let passwordCombo = "";
const passwordUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const passwordLowercase = "abcdefghijklmnopqrstuvwxyz";
const passwordNumbers = "0123456789";
const passwordSymbols = "!@#$%^&*()_+[]{}|;:,.<>?";

// Event Listeners
button.addEventListener("click", generatePassword);
passwordRange.addEventListener("input", () => {
  passwordLengthDisplay.textContent = passwordRange.value;
});
copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordInput.value);
  copyIcon.textContent = "content_check";
  toast.classList.add("show");
  toast.classList.remove("hide");
  setTimeout(() => {
    toast.classList.add("hide");
    toast.classList.remove("show");
  }, 2000);
  setTimeout(() => {
    copyIcon.textContent = "content_copy";
  }, 1500);
});

// Generate Password - length = 5
function generatePassword() {
  errorMessage.style.display = "none";
  password = "";
  passwordCombo = "";
  passwordCombo += uppercaseCheckbox.checked === true ? passwordUppercase : "";
  passwordCombo += lowercaseCheckbox.checked === true ? passwordLowercase : "";
  passwordCombo += numbersCheckbox.checked === true ? passwordNumbers : "";
  passwordCombo += symbolsCheckbox.checked === true ? passwordSymbols : "";

  if (passwordCombo === "" || !passwordCombo) {
    console.log("No character types selected!");
    errorMessage.style.display = "block";
    return password;
  }

  for (let i = 0; i < passwordRange.value; i++) {
    password += passwordCombo.charAt(
      Math.floor(Math.random() * passwordCombo.length) + 1
    );
  }

  passwordInput.value = password;
  if (passwordInput.value) {
    copyIcon.style.pointerEvents = "initial";
  }
}
