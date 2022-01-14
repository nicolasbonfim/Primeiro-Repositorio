//aula28
let timer;


function rodar() {
    timer = setTimeout(function() {
        document.querySelector('#timers').innerHTML = 'rodou';

    },2000);
}

function parar() {
    clearTimeout(timer);
}
