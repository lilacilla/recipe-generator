function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#ingredients", {
    strings: "Ingredients to display here",
    autoStart: true,
    delay: 5,
    cursor: null,
  });

  new Typewriter("#recipe", {
    strings: "Recipe to display here",
    autoStart: true,
    delay: 5,
    cursor: null,
  });
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);
