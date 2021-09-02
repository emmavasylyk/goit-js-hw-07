const refs = {
    input: document.querySelector('#validation-input'),
}

refs.input.addEventListener('blur', onInputBlur)

function onInputBlur() {
    let length = Number(refs.input.getAttribute('data-length'))
    if (refs.input.value.length === length) {
        refs.input.classList.add('valid')
        refs.input.classList.remove('invalid')
       
    } else if (refs.input.textContent.length !== length) {
        refs.input.classList.add('invalid')
        refs.input.classList.remove('valid')
    }
}