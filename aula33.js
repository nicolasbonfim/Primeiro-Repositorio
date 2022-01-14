
function adicionar(nomes, ...novosNomes) {


    let novoConjunto = {
        ...nomes,
        ...novoConjunto
    };
    return novoConjunto
}

let nomes = ["nicolas","jeremias"];

let outros = adicionar(...nomes, "eduarda","antonio","paulo","joao")