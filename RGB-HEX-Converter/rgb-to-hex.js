window.onload = () => {
    
    const bt = document.querySelector('#convert');
    let result = document.querySelector('#result');
    const box = document.querySelector('#box');

    bt.addEventListener("click" , event => {
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
            result.value = '#'+r+g+b; 
            box.style.backgroundColor = result.value ;

    })
}



