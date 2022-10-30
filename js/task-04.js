const counterButtonIncrement = document.querySelector('button[data-action="increment"]');

const counterButtonDecrement = document.querySelector('button[data-action="decrement"]');

let currentValue = document.querySelector('#value');

let counterValue = 0;

counterButtonIncrement.addEventListener("click", () => {
    counterValue +=1;
    currentValue.textContent = counterValue;
  });

counterButtonDecrement.addEventListener("click", () => {
    counterValue -=1;
    currentValue.textContent = counterValue;
});