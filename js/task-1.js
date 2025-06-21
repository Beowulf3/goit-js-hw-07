const categories = document.querySelector(".categories");
console.log(`Numbers of categories: ${categories.childElementCount}`);
const items = document.querySelectorAll(".item");
items.forEach((item) => {
  const title = item.querySelector(".categories-item-title").textContent;
  const counter = item.querySelectorAll(".categories-item-list li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${counter}`);
});
