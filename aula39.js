function pegarTemperatura() {
    return new Promise(function (resolve, reject){
        console.log("pegando temperatura...");

        setTimeout(function(){
            resolve('40 na sombra')
        },2000);
    })
}
 console.log("codigo antes");
let temp = pegarTemperatura();
console.log("codigo durante");
temp.then(function(resultado) {
    console.log("TEMPERATURA..."+resultado)
});
temp.catch(function(erro){
    console.log("eita, deu erro!")
})
console.log("codigo depois")
