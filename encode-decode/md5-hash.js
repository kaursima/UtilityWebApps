window.onload = () => {

    const st = document.querySelector('#string');
    const result = document.querySelector('#result');
    const generate = document.querySelector('#generate');

    generate.addEventListener("click" , event => {
        /* document.querySelector("#result").innerText = CryptoJS.MD5(document.querySelector("#string").value) */

        result.value = window.CryptoJS.MD5(st.value);
    })
}
