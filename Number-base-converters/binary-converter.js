window.onload = () => {

    const binary = document.querySelector('#binary');
    const hex = document.querySelector('#hex');
    const decimal = document.querySelector('#decimal');
    const octal = document.querySelector('#octal');
    const exp = document.querySelector('#explanation');
    const convert = document.querySelector('#convert');
    


    convert.addEventListener("click", event => {

        const val = binary.value;

        hex.value = parseInt(val, 2).toString(16);
        decimal.value = parseInt(val, 2).toString(10);
        octal.value = parseInt(val, 2).toString(8);
         
    })
}