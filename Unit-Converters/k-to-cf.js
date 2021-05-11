window.onload = () => {

    const k_value = document.querySelector('#k-value');
    const f_value = document.querySelector('#f-value');
    const c_value = document.querySelector('#c-value');
    const convert = document.querySelector('#convert');
    const exp = document.querySelector('#explanation');


    convert.addEventListener("click", event => {

        c_value.value = k_value.value * -272.15;  
        f_value.value = k_value.value * -457.87;

        exp.value = k_value.value + " Kelvins = " + c_value.value + " Celsiuss and " + f_value.value + " Fahrenheits";

    })
}