"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

ingredients.forEach((element) => {
  const lastItem = document.createElement("li");
  lastItem.classList.add("item");
  lastItem.textContent = element;
  list.append(lastItem);
});
