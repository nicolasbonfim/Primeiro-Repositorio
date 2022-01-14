
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
