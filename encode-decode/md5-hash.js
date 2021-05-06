window.onload = () => {

    const st = document.querySelector('#string');
    const result = document.querySelector('#result');
    const generate = document.querySelector('#generate');

    generate.addEventListener("click" , event => {
        const crypt = require('crypto');
        result.value = crypt.createHash('md5').update(st.value).digest('hex');
    })
}
