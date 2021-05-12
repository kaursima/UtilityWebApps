window.onload = () => {

    const input = document.querySelector('#input');
    const output = document.querySelector('#output');
    const rep = document.querySelector('#rep');
    const delimiter = document.querySelector('#delimiter');
    const convert = document.querySelector('#convert');

    convert.addEventListener("click", event => {

        let repp = parseInt(rep.value);

        for(let i=0; i<repp; i++) {
            output.value+= input.value + delimiter.value;
        }  
    }) 


}