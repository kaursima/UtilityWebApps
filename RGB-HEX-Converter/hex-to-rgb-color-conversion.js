window.onload = () => {
    const box = document.querySelector('#box');
    const bt = document.querySelector('#convert');
    const reset = document.querySelector('#reset');
    const swap = document.querySelector('#swap');
    let red = document.querySelector('#red');
    let green = document.querySelector('#green');
    let blue = document.querySelector('#blue');
    let hex = document.querySelector('#hex');

    bt.addEventListener("click", event => {
    let h = hex.value;
    let aRgbHex = h.match(/.{1,2}/g);
    let aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    red.value = aRgb[0];
    green.value = aRgb[1];
    blue.value = aRgb[2];
    
    box.style.backgroundColor = '#'+h;
})

    reset.addEventListener("click", event => {
        hex.value = "";
        red.value = "";
        green.value = "";
        blue.value = "";


    })

    swap.addEventListener("click", event => {
        
        
    })


}