
//aula29


let pessoa = {
    nome: 'nicolas',
    sobrenome: 'correa',
    idade: 11,
    social: {
        facebook: 'nicolas123',
        instagram: {
            url: '@nicolas',
            seguidores: 1
        }
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }


};

function pegaNomeCompleto(obj) {
    return obj.nome+' '+obj.sobrenome;

}

console.log(pegaNomeCompleto(pessoa))
