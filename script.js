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
//aula16
function mostrarTelefone(elemento) {
    elemento.style.display = 'none';
    document.getElementById("titulo").style.display = "block";
}
//aula17
let carros = [
    {nome:'Fiat',modelo:'Palio'},
    {nome:'Fiat',modelo:'uno'},
    {nome:'toyota',modelo:'corolla'},
    {nome:'ferrari',modelo:'spider'}
];

    console.log(carros[2].modelo);

//aula18

let carro = {
    nome:'Fiat',
    modelo:'Uno',
    peso: '800kg',
    ligar:false,
    ligar:function(){
        this.ligado == true;
        console.log("VRUM VRUM");
    },
    acelerar:function(){
        if(this.ligado == true) {
        console.log("RIRIRIRIRIRIR")
    } else{
        console.log(this.nome+" "+this.modelo+" nao esta ligado!")
    }
    }
};
console.log("Modelo:" +carro.modelo);

carro.ligar();
carro.acelerar();

//aula19

let dia = 6;
let diaNone = " ";

switch(dia) {
    case 6:
        diaNone = 'final de semana';
        break;
    case 7:
        diaNone = 'final de semana';
        break;
     default:
         diaNone = 'dia se semana';
         break;   
        
         document.getElementById("dia").innerHTML = "hoje é dia:" + diaNone;
}


//aula20
//for loop
//for loop array
/*
let carrinhos = ['ferrari', 'palio', 'fusca', 'corola' ];

let html = '<ul>';

for(let i in carrinhos) {
    html += '<li>'+  carros[i] +'</li>';
}



html += '</ul>';

document.getElementById("lojaDeCarros").innerHTML = html;

//aula21
/*
let a = '';

let c = 0;

while(c < 10) {
    a += "Numero:"+c+"<br/>"; 
    c++;

}

for(let c = 1;c <= 10;c++)
html += "Numero: "+c+"<br/>"

document.getElementById("demo").innerHTML = a;
*/

//aula22

let nome = "nicolas correa bonfim";

let resultado = "";

if (nome.indexOf('nicolas') > -1) {
    resultado = "acho"; 
}else {
    resultado = "nao achou";
}

console.log(resultado);




    



