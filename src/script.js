function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: null,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-input");

  let apiKey = "4c8c7b09546det2d72f3521aa5o882ea";

  let prompt = `Give a recipe containing the ingredients/keywords given to you here: ${searchInput.value}`;
  let context = `Provide a recipe containing information provided in ${prompt}. Use html tags to display it better and separate each line with a html <br /> or <li></li> tag if possible. Do not override CSS styling. This is important, recipe titles must always display between a h2 tag, example <h2>Raspberry Lemonade</h2>, subtitles must always display between a h3 tag, example <h3>Ingredients</h3>, do not ignore. Always provide ingredients. Always provide serving sizes in h4 tags, do not ignore. Always provide instructions. Prioritise celsius.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeBlock = document.querySelector("#recipe");
  recipeBlock.classList.remove("hidden");
  recipeBlock.innerHTML = `<span class="blink load-msg">🍽️Cooking up your recipe containing '${searchInput.value}'</span>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);
