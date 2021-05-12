window.onload = () => {

    const binary = document.querySelector('#binary');
    const hex = document.querySelector('#hex');
    const decimal = document.querySelector('#decimal');
    const octal = document.querySelector('#octal');
    
    const convert = document.querySelector('#convert');
    


    convert.addEventListener("click", event => {

        const val = decimal.value;        
        binary.value = parseInt(val, 10).toString(2);
        octal.value = parseInt(val, 10).toString(8);
        hex.value = parseInt(val, 10).toString(16);


    })

}