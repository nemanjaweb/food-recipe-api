const searchBtn = document.getElementById("search-btn");
const mealList = document.getElementById("meal");
const mealDetailsContent = document.querySelector("meal-details-content");
const recipeCloseBtn = document.getElementById("recipe-close-btn");

//event listeners
searchBtn.addEventListener("click", getMealList);

function getMealList() {
  let searchInput = document.getElementById("search-input").value.trim(); //trim() - removes whitespace.
  console.log(searchInput);
}
