"use strict";

const button = document.querySelectorAll("button");

button.addEventListener("click", () => {
  console.log("Button was clicked");
});
const titleEl = document.querySelector(".article-title");
titleEl.textContent = "Welcome to Bahamas!";
