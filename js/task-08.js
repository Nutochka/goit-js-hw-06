const form = document.querySelector('.login-form');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  }

  const nameEmail = form.email.name;
  const valueEmail = email.value;
  const passwordEmail = form.password.name;
  const passwordValue = password.value;

  console.log({
    nameEmail: valueEmail,
    passwordEmail: passwordValue,
  })

  event.currentTarget.reset();
}