const crypto = require('crypto');
window.onload = () => {
    //const crypto = require('crypto');
    const str = document.querySelector('#string');
    const result = document.querySelector('#result');
    const generate = document.querySelector('#generate');

    generate.addEventListener("click" , event => {
        result.value = crypto.createHash('md5').update(str.value).digest('hex');
    });
}