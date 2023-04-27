const inputEl = document.querySelector("#validation-input");

const validInputLength = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", onInputValueValidation);

function onInputValueValidation(event) {
  const currentInputLength = inputEl.value.length;

  if (currentInputLength === validInputLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
