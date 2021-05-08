window.onload = () => {

    const ep2date = document.querySelector('#ep2date');
    const date2ep = document.querySelector('#date2ep');

    ep2date.addEventListener("click", toHumanDate);
    date2ep.addEventListener("click", toEp);


    function toHumanDate() {
        const ep = document.querySelector('#epoch').value;
        const date_result  = document.querySelector('#date-result');
        const d = new Date(ep*1000);
        
        date_result.value = d.toLocaleString();
        
  
      }

      function toEp() {
        const y = document.querySelector('#year').value;
        const m = document.querySelector('#month').value;
        const d = document.querySelector('#day').value;
        const h = document.querySelector('#hour').value;
        const min = document.querySelector('#min').value;
        const s = document.querySelector('#sec').value;
        const ep_result = document.querySelector('#ep-result');

        const HumanDate = new Date(y,m,d,h,min,s);
        ep_result.value = HumanDate;


      }
}