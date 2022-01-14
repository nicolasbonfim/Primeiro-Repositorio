
//aula27

let timer;

function comecar() {
    timer = setInterval(showTime, 10);
}

function parar() {
    clearInterval(timer);

}

function showTime() {
    let d = new Date();
    let s = d.getSeconds();
    let m = d.getMilliseconds();

    let txt =s+':'+m;

    document.querySelector('#timers').innerHTML = txt;
}
