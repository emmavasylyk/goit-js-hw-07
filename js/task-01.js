const categoriesEl = document.querySelectorAll('.item')
console.log(`В списке ${categoriesEl.length} категории`);

categoriesEl.forEach(categoriesEl => {
    const titleEl = categoriesEl.querySelector('h2')
    console.log(`Категория: ${titleEl.textContent}`);

     const itemsEl = categoriesEl.querySelectorAll('li')
    console.log(`Количество элементов: ${itemsEl.length}`)
}    
);
