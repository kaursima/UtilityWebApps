window.onload = () => {
    
    const bt_encode = document.querySelector('#encode');
    const bt_decode = document.querySelector('#decode');
    const bt_64encode = document.querySelector('#bt_64encode');
    const bt_64decode = document.querySelector('#bt_64decode');


    bt_encode.addEventListener("click",encode);
    bt_decode.addEventListener("click",decode);
    bt_64encode.addEventListener("click",encode_64);
    bt_64decode.addEventListener("click",decode_64);


    function encode() {
        const ur1 = document.querySelector('#url-1');
        const ur2 = document.querySelector('#url-2');
        ur2.value = encodeURIComponent(ur1.value);
    }

    function decode() {
        const ur1 = document.querySelector('#url-1');
        const ur2 = document.querySelector('#url-2');
        ur1.value = decodeURIComponent(ur2.value);
    }
    function encode_64() {
        /* console.log(Buffer.from(url).toString('base64')); */
        const base_string = document.querySelector('#bt_64encode').value;
        const binary_string = document.querySelector('#bt_64decode');

        binary_string.value = Buffer.from(base_string).toString('base64');
        
    }
    function decode_64() {

    }

}