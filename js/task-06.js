const input = document.querySelector('#validation-input');
const inputLength = input.getAttribute('data-length');

input.addEventListener("blur", (event) => {
    if (input.value.length === Number(inputLength)) {
      input.classList.add("valid")
      input.classList.remove("invalid")
    } else {
        input.classList.add("invalid")
        input.classList.remove("valid")
    }
 });