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

const ingredientsArrayEl = []

ingredients.map(ingredients => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('ingredients-item');
    itemEl.textContent = ingredients;
    ingredientsArrayEl.push(itemEl)
})

ingredientsEl.append(...ingredientsArrayEl)