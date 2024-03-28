"use strict";
const slider = document.querySelector("input#font-size-control");
const spanText = document.querySelector("span#text");

slider.addEventListener("input", () => {
  const fontSize = slider.value + "px";
  spanText.style.fontSize = fontSize;
});
