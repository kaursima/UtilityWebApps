window.onload = () => {


const slider_R = document.getElementById("myRange-R");
const slider_G = document.getElementById("myRange-G");
const slider_B = document.getElementById("myRange-B");
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const hex = document.getElementById("hex-code");
const rgb = document.getElementById("rgb-code");
const box = document.querySelector('#box');

const convert = document.querySelector('#convert');

slider_R.oninput = function() {
    red.value = this.value;
    
  }
slider_G.oninput = function() {
    green.value = this.value;
    
  }
slider_B.oninput = function() {
    blue.value = this.value;
    
  }



convert.addEventListener("click" , event => {

            let r = document.querySelector('#red').value;
            let g = document.querySelector('#green').value;
            let b = document.querySelector('#blue').value;
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
            hex.value = '#'+r+g+b;
            rgb.value = "RGB(" + red.value+","+green.value+","+blue.value+")";

                
})
}
