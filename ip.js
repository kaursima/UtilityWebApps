window.onload = () => {
const ip = document.querySelector('#ip');
document.querySelector('#check').addEventListener("click", event => {
        const request = new Request('https://api.ipify.org/?format=json');
        fetch(request).then(res => res.json()).then(json => ip.value = json.ip);
    })
}
