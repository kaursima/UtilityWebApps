window.onload = () => {
  const current = document.querySelector('#current');

   let int = setInterval(() => {    
    const now = Date.now();
    current.value = "Current Unix Epoch - " + now;   
  }, 1000);
    const ep2date = document.querySelector('#convert');
    ep2date.addEventListener("click", toHumanDate);
    function toHumanDate() {
        const ep = document.querySelector('#input').value;
        const date_result  = document.querySelector('#output');
        const d = new Date(ep*1000);        
        date_result.value = d.toLocaleString();         
      }
    }