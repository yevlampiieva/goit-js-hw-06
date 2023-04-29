const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  if (email === "" || password === "") {
    alert("Увага, всі поля повинні бути заповнені!");
  } else {
    console.log({ email, password });
    loginForm.reset();
  }
}
