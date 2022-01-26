async function loadPosts() {
    document.getElementById("posts").innerHTML = 'carregando...';
    
    let req = await fetch('https://jsonplaceholder.typicode.com/posts',)
    let json = await req.json();
    montarBlog(json);






    fetch('https://jsonplaceholder.typicode.com/posts',)
        .then(function(resultado) {
            return resultado.json();
        })
        .then(function(json){
             montarBlog(json)
        })

        .then(function(json) {
            console.log(json)
            document.getElementById("posts").innerHTML = json.length + ' posts'
        })
        
        .catch(function(erro){
            console.log("deu problema");
        });
        
        
}

function montarBlog(lista) {
    let html = '';

    for (let i in lista) {
        html += '<h3>'+lista[i].title+'</h3>'
        html += lista[i].body+'</br>'
        html += '<hr/>'
    }

    document.getElementById("posts").innerHTML = html;

}


