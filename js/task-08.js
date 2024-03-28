"use strict";
const form = document.querySelector("form.login-form");
const inputs = document.querySelectorAll("form.login-form input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;

  if (!emailInput.value || !passwordInput.value) {
    window.alert("Wypełnij wszystkie pola formularza!");
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    console.log("Wartości formularza:", formData);
    form.reset();
  }
});
