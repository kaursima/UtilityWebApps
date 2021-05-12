window.onload = () => {

    const binary = document.querySelector('#binary');
    const hex = document.querySelector('#hex');
    const decimal = document.querySelector('#decimal');
    const octal = document.querySelector('#octal');
    const convert = document.querySelector('#convert');
    


    convert.addEventListener("click", event => {

        const val = octal.value;

        hex.value = parseInt(val, 2).toString(16);
        decimal.value = parseInt(val, 2).toString(10);
        binary.value = parseInt(val, 2).toString(2);
         
    })
}