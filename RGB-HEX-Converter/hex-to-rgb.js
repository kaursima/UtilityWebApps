window.onload = () => {
        const box = document.querySelector('#box');
        const bt = document.addEventListener("click", event => {
        let red = document.querySelector('#red');
        let green = document.querySelector('#green');
        let blue = document.querySelector('#blue');
        let h = document.querySelector('#hex').value;
        var aRgbHex = h.match(/.{1,2}/g);
        var aRgb = [
            parseInt(aRgbHex[0], 16),
            parseInt(aRgbHex[1], 16),
            parseInt(aRgbHex[2], 16)
        ];
        red.value = aRgb[0];
        green.value = aRgb[1];
        blue.value = aRgb[2];
        
        box.style.backgroundColor = '#'+h;


    })
}