const refs = {
    input: document.querySelector('#validation-input'),
}

refs.input.addEventListener('blur', onInputBlur)

function onInputBlur() {
    let length = Number(refs.input.getAttribute('data-length'))
    let inputClassList = refs.input.classList
    inputClassList.add("valid", "invalid")
    refs.input.value.length === length ? inputClassList.remove('invalid') : inputClassList.remove('valid')
}
