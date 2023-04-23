const decrementButtonEl = document.querySelector('button[data-action="decrement"]');
const incrementButtonEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

const countValue = {
  value: 0,
  decrement(value) {
    this.value -= 1;
  },
  increment(value) {
    this.value += 1;
  },
};

const onDecrementButtonClick = decrementButtonEl.addEventListener("click", () => {
  countValue.decrement();
  valueEl.textContent = countValue.value;
});

const onIncrementButtonClick = incrementButtonEl.addEventListener("click", () => {
  countValue.increment();
  valueEl.textContent = countValue.value;
});
