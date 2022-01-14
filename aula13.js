//aula13
function botao() {
    if(window.scrollY === 0) {
        document.querySelector('.scrollbutton').style.display = 'none';
    }else
     document.querySelector('.scrollbutton').style.display = 'block';
}

window.addEventListener('scroll', botao);