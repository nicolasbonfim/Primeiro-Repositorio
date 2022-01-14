function Azul(){
    limpar();
    document.getElementById("titulo").classList.add('azul');
}
function Vermelho() {
    limpar();
    document.getElementById("titulo").classList.add('vermelho');
}
function Verde () {
    limpar();
    document.getElementById("titulo").classList.add('verde');
}
function limpar() {
    document.getElementById("titulo").classList.remove('azul');
    document.getElementById("titulo").classList.remove('vermelho');
    document.getElementById("titulo").classList.remove('verde');
}