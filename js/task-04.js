"use strict";
let counterValue = 0;
const buttons = document.querySelector("div#counter");
const spanValue = document.querySelector("span#value");

buttons.addEventListener("click", (event) => {
  if (event.target.dataset.action === "decrement") {
    counterValue--;
  } else if (event.target.dataset.action === "increment") {
    counterValue++;
  }
  spanValue.textContent = counterValue;
});
