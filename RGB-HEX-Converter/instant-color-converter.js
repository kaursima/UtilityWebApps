window.onload = () => {

    const hex = document.querySelector('#hex');
    const rgb = document.querySelector('#rgb');

     hex.addEventListener("input" , bgChange_hex);
     rgb.addEventListener("input" , bgChange_rbg);

    function bgChange_hex() {
        const hex = document.querySelector('#hex');
        document.body.style.backgroundColor = "#" + hex.value;
        let h = hex.value;
        var aRgbHex = h.match(/.{1,2}/g);
        var aRgb = [
            parseInt(aRgbHex[0], 16),
            parseInt(aRgbHex[1], 16),
            parseInt(aRgbHex[2], 16)
        ];
        rgb.value = "RGB(" + aRgb.join(",")+")";
    } 
    function bgChange_rbg() {
            

    }

    
}