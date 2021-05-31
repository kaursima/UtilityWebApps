window.onload = () => {
    const input = document.querySelector('#input');
    const output = document.querySelector('#output');
    const from = document.querySelector('#from');
    const to = document.querySelector('#to');

    const url = "https://api.mymemory.translated.net/get?q=";
    document.querySelector('#translate').addEventListener("click", event => {
        const content = url + input.value + "&langpair=" + from.value + "|" + to.value;
        const request = new Request(content);
        fetch(request).then(res => res.json()).then(json => output.value = json.responseData.translatedText);    
    })
    
}