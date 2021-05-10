window.onload = () => {

    //const input = document.querySelector('#from');
    const result = document.querySelector('#result');    
    const m2km2 = document.querySelector('#m2km2');
    const m2mm2 = document.querySelector('#m2mm2');
    const m2cm2 = document.querySelector('#m2cm2');
    const m2mi2 = document.querySelector('#m2mi2');
    const m2ac = document.querySelector('#m2ac');
    const exp = document.querySelector('#explanation');
    

    m2km2.addEventListener("click" , event => {
        const input = document.querySelector('#from');
        const v = input.value;
        result.value = v/0.00000001;
        exp.value = v + " Meter square = " + result.value + " Kilometers square";


    }) 
    m2mm2.addEventListener("click" , event => {
        const input = document.querySelector('#from');
        const v = input.value;
        result.value = v/0.00000001;
        exp.value = v + " Meters square = " + result.value + " Millimeters square";        ;
        

    })
    m2cm2.addEventListener("click" , event => {
        const input = document.querySelector('#from');
        const v = input.value;
        result.value = v*10000;
        exp.value = v + " Meters square = " + result.value + " Centimeter square";
        

    })
    m2mi2.addEventListener("click" , event => {
        
        const input = document.querySelector('#from');
        const v = input.value;
        result.value = v*1550;
        exp.value = v + " Meters square = " + result.value + " Inch square";
    })
    m2ac.addEventListener("click" , event => {
        const input = document.querySelector('#from');
        const v = input.value;
        result.value = v/4047;
        exp.value = v + " Meters square = " + result.value + " Acres";
        

    })  
        

}