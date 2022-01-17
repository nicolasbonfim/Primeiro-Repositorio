let cartao = '1234'

let lastDigits = cartao.slice(-4);

 let cartaoMascarado = lastDigits.padStart(16,'*')

console.log('este é seu cartao? '+cartaoMascarado)