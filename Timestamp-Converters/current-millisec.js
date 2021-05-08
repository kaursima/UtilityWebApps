window.onload = () => {


    const cur = document.querySelector('#curr');

    

    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();

    cur.innerHTML = h + ":" + m + ":" + s;
    //setInterval(cur.innerHTML,10000);
    setTimeout(cur.innerHTML,refresh);

}


