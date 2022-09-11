const baseEndPoint = 'https://recipes.beginnerjavascript.com/api';

async function fetchRecipes(query) {
  const res = await fetch(`${baseEndPoint}?q=${query}`);
  const data = await res.json();
}

fetchRecipes('pizza');
