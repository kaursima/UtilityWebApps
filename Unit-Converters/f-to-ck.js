window.onload = () => {

    const k_value = document.querySelector('#k-value');
    const f_value = document.querySelector('#f-value');
    const c_value = document.querySelector('#c-value');
    const convert = document.querySelector('#convert');
    const exp = document.querySelector('#explanation');


    convert.addEventListener("click", event => {

        k_value.value = f_value.value * 255.928;  
        c_value.value = f_value.value * -17.222 ;

        exp.value = f_value.value + " Fahrenheits = " + k_value.value + " Kelvins and " + c_value.value + " Celsiuss";

    })
}