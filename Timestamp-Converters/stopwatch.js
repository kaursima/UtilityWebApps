window.onload = () => {
let intervalId;
const time = document.querySelector('#output');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

start.addEventListener("click", event => {
    intervalId = setInterval(() => {
    time.value++;
    }, 1000);  
})
stop.addEventListener("click", event => {
      clearTimeout(intervalId);
})

document.querySelector('#reset').addEventListener("click", event => {
    clearTimeout(intervalId);
    time.value = 0;
})
}

