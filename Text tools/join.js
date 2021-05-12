window.onload = () => {

    const input = document.querySelector('#input');
    const output = document.querySelector('#output');
    const convert = document.querySelector('#convert');

    convert.addEventListener("click", event => {
        
        output.value = input.value.replace(/\s+/g, ' ').trim();
    })
}