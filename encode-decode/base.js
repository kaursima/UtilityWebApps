window.onload = () => {
    
    
    const bt_64encode = document.querySelector('#bt_64encode');
    const bt_64decode = document.querySelector('#bt_64decode');

    const base_string = document.querySelector('#base');
    const binary_string = document.querySelector('#string');

    bt_64encode.addEventListener("click", event => {
        binary_string.value = btoa(base_string.value);
    })

    bt_64decode.addEventListener("click", event => {
        binary_string.value = atob(base_string.value);
    })
    



    

    

}