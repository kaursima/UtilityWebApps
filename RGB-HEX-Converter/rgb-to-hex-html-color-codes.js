window.onload = () => {

    
    const bt = document.querySelector('#convert');

    bt.addEventListener("click" , event => {
        const red = document.querySelector('#red');
        const green = document.querySelector('#green');
        const blue = document.querySelector('#blue');
        
        const rgbArr = [red.value , green.value , blue.value];
        toHex(red.value , green.value , blue.value);
        rgb2hsv(red.value , green.value , blue.value);
        hsl(rgbArr);
        rgb(rgbArr);


    })

    function rgb2hsv (r,g,b) {
        const hsv = document.querySelector('#hsv');
        var computedH = 0;
        var computedS = 0;
        var computedV = 0;
       
        //remove spaces from input RGB values, convert to int
        var r = parseInt( (''+r).replace(/\s/g,''),10 ); 
        var g = parseInt( (''+g).replace(/\s/g,''),10 ); 
        var b = parseInt( (''+b).replace(/\s/g,''),10 ); 
       
        if ( r==null || g==null || b==null ||
            isNaN(r) || isNaN(g)|| isNaN(b) ) {
          alert ('Please enter numeric RGB values!');
          return;
        }
        if (r<0 || g<0 || b<0 || r>255 || g>255 || b>255) {
          alert ('RGB values must be in the range 0 to 255.');
          return;
        }
        r=r/255; g=g/255; b=b/255;
        var minRGB = Math.min(r,Math.min(g,b));
        var maxRGB = Math.max(r,Math.max(g,b));
       
        // Black-gray-white
        if (minRGB==maxRGB) {
         computedV = minRGB;
         return [0,0,computedV];
        }
       
        // Colors other than black-gray-white:
        var d = (r==minRGB) ? g-b : ((b==minRGB) ? r-g : b-r);
        var h = (r==minRGB) ? 3 : ((b==minRGB) ? 1 : 5);
        computedH = 60*(h - d/(maxRGB - minRGB));
        computedS = (maxRGB - minRGB)/maxRGB;
        computedV = maxRGB;
        
        hsv.value = [parseInt(computedH),parseInt(computedS),parseInt(computedV)];


       }



    function rgb(rgbArr) {
        const r1 = document.querySelector('#rgb-1');
        const r2 = document.querySelector('#rgb-2');

        r1.value = rgbArr.join(",");
        r2.value = "rgb("+ rgbArr.join(",") + ")";

    }

    function toHex(r,g,b) {
        const h1 = document.querySelector('#hex-1');
        const h2 = document.querySelector('#hex-2');

            r = Number(r).toString(16);
            g = Number(g).toString(16);
            b = Number(b).toString(16); 
            if (r.length < 2) {
            r = "0" + r;
            }
            if (g.length < 2) {
            g = "0" + g;
            }
            if (b.length < 2) {
            b = "0" + b;
            }
            h2.value = '#'+r+g+b; 
            h1.value= r+g+b; 
           
    }
 
    function hsl(rgbArr) {

        const hsl1 = document.querySelector('#hsl-1');
        const hsl2 = document.querySelector('#hsl-2');

            let r1 = rgbArr[0] / 255;
            let g1 = rgbArr[1] / 255;
            let b1 = rgbArr[2] / 255;
        
            let maxColor = Math.max(r1,g1,b1);
            let minColor = Math.min(r1,g1,b1);
            //Calculate L:
            let L = (maxColor + minColor) / 2 ;
            let S = 0;
            let H = 0;
            if(maxColor != minColor){
                //Calculate S:
                if(L < 0.5){
                    S = (maxColor - minColor) / (maxColor + minColor);
                }else{
                    S = (maxColor - minColor) / (2.0 - maxColor - minColor);
                }
                //Calculate H:
                if(r1 == maxColor){
                    H = (g1-b1) / (maxColor - minColor);
                }else if(g1 == maxColor){
                    H = 2.0 + (b1 - r1) / (maxColor - minColor);
                }else{
                    H = 4.0 + (r1 - g1) / (maxColor - minColor);
                }
            }
        
            L = L * 100;
            S = S * 100;
            H = H * 60;
            if(H<0){
                H += 360;
            }
            H = parseInt(H);
            S = parseInt(S);
            L = parseInt(L);

            const result = [H, S, L];
            hsl1.value = H + "°, " + S + "%, " + L + "%";
            
            hsl2.value = "hsl("+ H + ", " + S + "%, " + L + "%)";

    }
}

