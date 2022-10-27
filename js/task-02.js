const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('ul#ingredients');
const elements = [];

ingredients.forEach( (ingredient) => {
  const createdElements = document.createElement('li');
  createdElements.textContent = ingredient;
  createdElements.classList.add('item');
  elements.push(createdElements);
} )

list.append(...elements);

