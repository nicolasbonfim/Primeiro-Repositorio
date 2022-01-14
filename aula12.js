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