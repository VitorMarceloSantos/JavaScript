//Podemos utilizar o caracteres especiais de varias formas.

let ano = /\d\d\d\d/ //Aceita 4 numeros, uma expressao que tenha 4 numeros[0-9]
console.log(ano.test("vi05")) //false
console.log(ano.test("2019")) //True
console.log(ano.test("opa32")) //false
console.log(ano.test("vitor578935")) //True
console.log(ano.test("janeiro2022")&&"janeiro2022".length == 4) // false - vai verificar se contem 4 numeros e o tamanho da string é 4, ou seja, somente satisfazer as duas será verdade

console.log("espaço")

let dia = /\d\d/ //Aceita 4 numeros, uma expressao que tenha 2 numeros[0-9]
console.log(dia.test("vi05")) //True
console.log(dia.test("20") && "20".length == 2) //True
console.log(dia.test("opa")) //false

console.log("espaço")

let palavra = /\w\w\w/ //Confere se tem 3 caracteres
console.log(palavra.test("abc")) //True
console.log(palavra.test("ahiss45") && "ahiss45".length == 3) //False
console.log(palavra.test("op3")) //True Pelo menos 3 caracteres