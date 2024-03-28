"use strict";
const spanValue = document.querySelector("span#name-output");
const inputValue = document.querySelector("input#name-input");

//Wypełnienie span po odświeżeniu strony
fillField();

//Wypełnienie span po naciśnięciu klawisza
document.addEventListener("keyup", fillField);

function fillField() {
  spanValue.textContent =
    inputValue.value.length > 0 ? inputValue.value : "Anonymous";
}
