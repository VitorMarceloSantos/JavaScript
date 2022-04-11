//Crie um regex que valide um endereço de Ip (Exemplo:127.0.01)
let endereco = /[0-9]{3}[.][0-9]{1}[.][0-9]{2}/
console.log(endereco.test("123.4.56"))//True
console.log(endereco.test("456.9.00"))//True
console.log(endereco.test("1.4.56"))//False
console.log(endereco.test("123.456.56"))//False
console.log(endereco.test("123.4.5")) //False
