const searchBtn = document.getElementById("search-btn");
const mealList = document.getElementById("meal");
const mealDetailsContent = document.querySelector("meal-details-content");
const recipeCloseBtn = document.getElementById("recipe-close-btn");

//event listeners
searchBtn.addEventListener("click", getMealList);
mealList.addEventListener("click", getRecipe);

function getMealList() {
  let searchInput = document.getElementById("search-input").value.trim(); //trim() - removes whitespace.
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      let html = "";
      if (data.meals) {
        data.meals.forEach((meal) => {
          //forEach() method calls a function for each element in an array.
          html += `
       <div class="meal-item" data-id="${meal.idMeal}">
              <div class="meal-img">
                  <img src="${meal.strMealThumb}" alt="" />
              </div>

              <div class="meal-name">
                <h3>${meal.strMeal}</h3>
                <a href="#" class="recipe-btn">Get Recipe</a>
              </div>
           </div> 

          `; // "+=" - operator takes the values from the right of the operator and adds it to the variable on the left
        });
        mealList.classList.remove("notFound");
      } else {
        html = "Sorry, we didn't match any meal :(";
        mealList.classList.add("notFound");
      }
      mealList.innerHTML = html;
    });
}

//get recipe
function getRecipe(e) {
  e.preventDefault();
  if (e.target.classList.contains("recipe-btn")) {
    let mealItem = e.target.parentElement.parentElement;
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`
    )
      .then((response) => response.json())
      .then((data) => mealRecipe(data.meals));
  }
}
