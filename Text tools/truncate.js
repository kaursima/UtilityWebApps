window.onload = () => {
    const input = document.querySelector('#input');
    const left = document.querySelector('#left');
    const right = document.querySelector('#right');
    const button = document.querySelector('#convert');
    const characters = document.querySelector('#characters');
    const output = document.querySelector('#output');

    button.addEventListener("click", event => {
        const val = input.value;

        if(left.checked) {
            output.value = val.substring(0,parseInt(characters.value));
        }
        else if(right.checked) {
            output.value = input.value.substring(val.length - parseInt(characters.value));
        }
    })


}