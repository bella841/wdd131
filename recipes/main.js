import recipes from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

function ratingTemplate(rating) {
    // begin building an html string using the ratings HTML written earlier as a model.
    let html = `<span
        class="rating"
        role="img"
        aria-label="Rating: ${rating} out of 5 stars"
    >`;

    // our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 1; i <= 5; i++) {
        // check to see if the current index of the loop is less than our rating
        // if so then output a filled star
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            // else output an empty star
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

    // after the loop, add the closing tag to our string
    html += `</span>`;

    // return the html string
    return html;
}

function tagsTemplate(tags) {
    let html = ''; 

    tags.forEach(tag => {
html += `<div class="dessert-row">
                <span class="dessert recipe-tag" data-tag="${tag}">${tag}</span>
                </div>`;
    });
    
    return html;
}

function recipeTemplate(recipe) {
    return `
    <article class="recipe">
        <img class="recipe-image" src="${recipe.image}" alt="${recipe.name}">
        <div class="recipe-content">
            <h2 class="recipe-title">${recipe.name}</h2>
            <div class="recipe-tags">
                ${tagsTemplate(recipe.tags)} 
            </div>
            <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                ${ratingTemplate(recipe.rating)} 
            </span>
            <p class="recipe-description">${recipe.description}</p>
        </div>
    </article>`;
}


function renderRecipes(recipeList) {
    // get the element we will output the recipes into
    const recipeContainer = document.getElementById('recipe-container');
    
    // use the recipeTemplate function to transform our recipe objects into recipe HTML strings

    const recipeHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    
    // Set the HTML strings as the innerHTML of our output element.
    recipeContainer.innerHTML = recipeHTML;
}

function init() {
    // get a random recipe
    const recipe = getRandomListEntry(recipes);
    
    // render the recipe with renderRecipes.

    renderRecipes([recipe]);
}

init();


function filter(query) {
    // Filter the recipes using the filterFunction
    const filtered = recipes.filter(recipe => {
        return (
            recipe.name.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
            recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query))
        );
    });

    // Sort by name using the sortFunction

    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
    
    return sorted;
}

function searchHandler(e) {
    e.preventDefault();

    // get the search input

    const query = document.getElementById('search-bar').value.trim().toLowerCase();
    
    // use the filter function to filter our recipes

    let filteredRecipes;
    if (query) {
        filteredRecipes = filter(query);
    } else {
        filteredRecipes = recipes;
    }

    // render the filtered list

    renderRecipes(filteredRecipes);
}


window.onload = function() {

    document.addEventListener('click', function(event) {

        if (event.target.id === 'search-button' || event.target.classList.contains('recipe-tag')) {
            searchHandler(event);
        }
    });
};
