window.onload = () => {
    
    const bt_encode = document.querySelector('#encode');
    const bt_decode = document.querySelector('#decode');
    const ur1 = document.querySelector('#url-1');
    const ur2 = document.querySelector('#url-2');

    bt_encode.addEventListener("click", event => {
        ur2.value = encodeURIComponent(ur1.value);
    });

    bt_decode.addEventListener("click", event => {
        ur2.value = decodeURIComponent(ur1.value);
    });     

}