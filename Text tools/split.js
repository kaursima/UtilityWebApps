window.onload = () => {

    const input = document.querySelector('#input');
    const output = document.querySelector('#output');
    const convert = document.querySelector('#convert');

    convert.addEventListener("click", event => {
        let val = input.value.split(" ");

        for(let i=0; i<val.length; i++) {
            output.value += val[i] +"\n";
        }
    })
}