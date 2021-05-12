window.onload = () => {

    const binary = document.querySelector('#binary');
    const hex = document.querySelector('#hex');
    const decimal = document.querySelector('#decimal');
    const octal = document.querySelector('#octal');
    
    const convert = document.querySelector('#convert');
    


    convert.addEventListener("click", event => {

        const val = hex.value;

        
        binary.value = parseInt(val, 16).toString(2);
        octal.value = parseInt(val, 16).toString(8);
        decimal.value = parseInt(val, 16).toString(10);


    })
}