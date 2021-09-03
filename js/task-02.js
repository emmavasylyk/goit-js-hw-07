const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
    'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients')
console.log(ingredientsEl);

let ingredientsArrayEl = ingredients.map(ingredients => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('ingredients-item');
    itemEl.textContent = ingredients;
    return itemEl
})

ingredientsEl.append(...ingredientsArrayEl)