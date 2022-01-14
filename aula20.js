//aula20
//for loop
//for loop array

let carrinhos = ['ferrari', 'palio', 'fusca', 'corola' ];

let html = '<ul>';

for(let i in carrinhos) {
    html += '<li>'+  carros[i] +'</li>';
}



html += '</ul>';

document.getElementById("lojaDeCarros").innerHTML = html;
