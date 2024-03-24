"use strict";
const categoryCount = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryCount.length}`);

const categoryArray = [...document.querySelectorAll(".item>h2")];
categoryArray.forEach((element) => {
  console.log(`Category: ${element.textContent}`);
});
