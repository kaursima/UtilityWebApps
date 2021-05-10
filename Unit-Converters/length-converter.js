window.onload = () => {

    //const input = document.querySelector('#from');
    const result = document.querySelector('#result');    
    const m2km = document.querySelector('#m2km');
    const m2mm = document.querySelector('#m2mm');
    const m2cm = document.querySelector('#m2cm');
    const m2dm = document.querySelector('#m2dm');
    const m2in = document.querySelector('#m2in');
    const exp = document.querySelector('#explanation');
    

    m2km.addEventListener("click" , event => {
        const input = document.querySelector('#from');
        const v = input.value;
        result.value = v/1000;
        exp.value = v + " Meters = " + result.value + " Kilometers";


    }) 
    m2mm.addEventListener("click" , event => {
        const input = document.querySelector('#from');
        const v = input.value;
        result.value = v*1000;
        exp.value = v + " Meters = " + result.value + " Millimeters";        ;
        

    })
    m2dm.addEventListener("click" , event => {
        const input = document.querySelector('#from');
        const v = input.value;
        result.value = v*10;
        exp.value = v + " Meters = " + result.value + " Decimeter";
        

    })
    m2cm.addEventListener("click" , event => {
        
        const input = document.querySelector('#from');
        const v = input.value;
        result.value = v*100;
        exp.value = v + " Meters = " + result.value + " Centimeter";
    })
    m2in.addEventListener("click" , event => {
        const input = document.querySelector('#from');
        const v = input.value;
        result.value = v*39.37;
        exp.value = v + " Meters = " + result.value + " Inches";
        

    })  
        

}