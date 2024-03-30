"use strict";
const inputField = document.querySelector("input#validation-input");

inputField.addEventListener("blur", (event) => {
  if (inputField.value.length === event.target.dataset.length) {
    inputField.classList.add("valid");
    inputField.classList.remove("invalid");
    return;
  }
  inputField.classList.add("invalid");
  inputField.classList.remove("valid");
});
