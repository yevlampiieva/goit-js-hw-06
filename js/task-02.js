const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsEl = document.querySelector("#ingredients");

const ingredientsContainer = [];

const markup = ingredients.map((ingredient) => {
  const ingredientsItemEl = document.createElement("li");
  ingredientsItemEl.textContent = `${ingredient}`;
  ingredientsItemEl.classList.add("item");
  ingredientsContainer.push(ingredientsItemEl);
});

ingredientsEl.append(...ingredientsContainer);

console.log(ingredientsEl);
