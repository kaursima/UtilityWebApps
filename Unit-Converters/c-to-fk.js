window.onload = () => {

    const k_value = document.querySelector('#k-value');
    const f_value = document.querySelector('#f-value');
    const c_value = document.querySelector('#c-value');
    const convert = document.querySelector('#convert');
    const exp = document.querySelector('#explanation');


    convert.addEventListener("click", event => {

        k_value.value = c_value.value * 274.15;  
        f_value.value = c_value.value * 33.8;

        exp.value = c_value.value + " Celsiuss = " + k_value.value + " Kelvins and " + f_value.value + " Fahrenheits";

    })
}