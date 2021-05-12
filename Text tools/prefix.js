window.onload = () => {
    const input = document.querySelector('#input');
    const output = document.querySelector('#output');
    const button = document.querySelector('#convert');
    const val = document.querySelector('#value');

    button.addEventListener("click", event => {

        output.value = val.value + input.value;
    })
}