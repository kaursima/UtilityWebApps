window.onload = () => {
    const time = document.querySelector('#output');
    let intervalId;

    document.querySelector('#start').addEventListener("click",event => {
        
        let value = time.value;
        intervalId = setInterval(() => {
            time.value--;
            if(time.value < 0)
            {
                clearTimeout(intervalId);
                alert("Time is Up!!");
                time.value = 0;
            }            
        }, 1000);
        
    })
}