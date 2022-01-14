//aula25


let lista = [
    {id:1,nome: 'nicolas', sobrenome: 'correa'},
    {id:2,nome: 'Weslei', sobrenome: 'Bruno'},
    {id:3,nome: 'Daiane', sobrenome: 'zabini'}
];

let pessoa = lista.find(function(item){
    return (item.nome == 'nicolas' )? true:false;
})

let res = pessoa;

console.log(res);
