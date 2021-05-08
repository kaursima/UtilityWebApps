window.onload = () => {

    const st = document.querySelector('#string');
    const result = document.querySelector('#result');
    const generate = document.querySelector('#generate');

    generate.addEventListener("click" , event => {

        result.value = window.CryptoJS.SHA512(st.value);
    })
}
