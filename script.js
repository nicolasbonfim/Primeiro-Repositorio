//aula12
function trocarImagem(filename, animalname) {
    document.querySelector('.imagem').setAttribute('src', 'images/' + filename);
    document.querySelector('.imagem').setAttribute('data-animal', animalname);
    

}
function pegarAnimal() {
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert("o animal é :" + animal)
}
//aula13
function subirtela() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
    
}
//aula13
function botao() {
    if(window.scrollY === 0) {
        document.querySelector('.scrollbutton').style.display = 'none';
    }else
     document.querySelector('.scrollbutton').style.display = 'block';
}

window.addEventListener('scroll', botao);

//aula15
function digitou(e) {
   if(e.keyCode == 13 && e.ctrlKey == true) { //Enter
    let texto = document.getElementById("campo").value;

    console.log(texto);
   }
}
//aula16

    



