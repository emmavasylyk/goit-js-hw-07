let value = document.querySelector('#value')

let counterValue = value.textContent

const addListenerBtn = document.querySelector('[data-action="increment"]')
console.log(addListenerBtn);

const removeListenerBtn = document.querySelector('[data-action="decrement"]')
console.log(removeListenerBtn);

addListenerBtn.addEventListener('click', increment)


removeListenerBtn.addEventListener('click', decrement);

function increment() {
  counterValue = Number(counterValue) + 1
    value.textContent = counterValue
}

function decrement() {
    value.textContent -= 1
}