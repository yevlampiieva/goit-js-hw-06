const refs = {
  nameInputEl: document.querySelector("#name-input"),
  nameOutputEl: document.querySelector("#name-output"),
};

refs.nameInputEl.addEventListener("input", onInputText);

function onInputText(event) {
  let nameInput = event.target.value;
  if (nameInput === "") {
    nameInput = "Anonymous";
  }
  refs.nameOutputEl.textContent = nameInput;
}
