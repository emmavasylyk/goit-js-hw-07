let counterValue = document.querySelector('#value')

let value = counterValue.textContent


const addListenerBtn = document.querySelector('[data-action="increment"]')
console.log(addListenerBtn);

const removeListenerBtn = document.querySelector('[data-action="decrement"]')
console.log(removeListenerBtn);

addListenerBtn.addEventListener('click', increment)


removeListenerBtn.addEventListener('click', decrement);

function increment() {
  value = Number(value) + 1
    counterValue.textContent = value
}

function decrement() {
    counterValue.textContent -= 1
}