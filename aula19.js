
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

