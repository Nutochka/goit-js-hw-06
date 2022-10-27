//Number of categories: 3
const htmlElement = document.querySelectorAll('ul#categories li.item');
console.log('Number of categories: ' + htmlElement.length);

//Category: Animals
const categoryName = document.querySelector('ul#categories li.item h2');
const firstCategory = categoryName.firstChild;
console.log('Category: ' + categoryName.textContent);

//Elements: 4
const numberOfElements = document.querySelector('ul#categories li.item ul');
const numberOfElementsFirst = numberOfElements.querySelectorAll('li');
console.log('Elements: ' + numberOfElementsFirst.length)

//Category: Products
const categoryNameOfSecond = document.querySelectorAll('ul#categories li.item h2');
const firstCategoryOfSecond = categoryNameOfSecond[1];
console.log('Category: ' + firstCategoryOfSecond.textContent);


//Elements: 3
const numberOfElementsSecond = document.querySelectorAll('ul#categories li.item ul');
const numberOfElementsSecondElement = numberOfElementsSecond[1];
const numberOfElementsSecondElementSum = numberOfElementsSecondElement.querySelectorAll('li');
console.log('Elements: ' + numberOfElementsSecondElementSum.length)

//Category: Technologies
const categoryNameOfThird = document.querySelectorAll('ul#categories li.item h2');
const firstCategoryOfThird = categoryNameOfThird[2];
console.log('Category: ' + firstCategoryOfThird.textContent);

//Elements: 5
const numberOfElementsThird = document.querySelectorAll('ul#categories li.item ul');
const numberOfElementsThirdElement = numberOfElementsThird[2];
const numberOfElementsThirdElementSum = numberOfElementsThirdElement.querySelectorAll('li');
console.log('Elements: ' + numberOfElementsThirdElementSum.length);
