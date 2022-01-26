async function inserirpost(){
    document.getElementById("posts").innerHTML = "carregando";

    let req = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
        title: 'titulo do teste',
        body: 'corpo do teste',
        userId: 4
        }),
        headers: {

            'content-type': 'application/json'
        }
    });
    let json = await req.json();

    console.log(json);
}