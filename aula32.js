function adicionarInfo(info) { 
    let novaInfo = {
    ...info,
    status: 0,
    token: "ajdjhaisdihabd",
    data_cadrasto:'.....'    

    };
    return novaInfo;

}

console.log(adicionarInfo({nome:'nicolas',sobrenome:'correa'}));
