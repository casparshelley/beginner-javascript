// The Recipe Puppy API used in the course is broken
// Please use this replacement API URL "https://recipes.beginnerjavascript.com/api"

const baseEndpoint = 'https://recipes.beginnerjavascript.com/api';
const proxy = 'https://cors-anywhere.herokuapp.com/';
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query) {
  const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
  const data = await (await res).json();
  return data;
}

function displayRecipes(recipes) {
  const html = recipes.map(
    (recipe) => `<div class="recipe">
    ${recipe.thumbnail && `<img src="${recipe.thumbnail}" alt="${recipe.title}" />`}
    <h2>${recipe.title}</h2>
    <p>${recipe.ingredients}</p>
    <a href="${recipe.href}">View Recipe</a>
    </div>`
  );
  recipesGrid.innerHTML = html.join('');
}

async function handleSubmit(event) {
  event.preventDefault();
  const el = event.currentTarget;
  fetchAndDisplay(el.query.value);
}

async function fetchAndDisplay(query) {
  form.submit.disabled = true;
  const recipes = await fetchRecipes(query);
  form.submit.disabled = false;
  displayRecipes(recipes.results);
}

form.addEventListener('submit', handleSubmit);
fetchAndDisplay('pizza');
