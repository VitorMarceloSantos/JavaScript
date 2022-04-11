//Podemos definir um conjunto de caracteres para encontrar por regex. Basta pr entre []. Com um traço podemos definir um intervalo também[1-9] -> de 1 a 9.

console.log(/[123]/.test("Existe 123 aqui?"))//True
console.log(/[1-9]/.test("O numero 8 está presente aqui?"))//True


let reg1 = new RegExp("[1-5]")
console.log(reg1.test("O numero 3 está presente?"))//True
let reg2 = new RegExp("[1-9]")
console.log(reg2.test("O numero 99 está presente?"))//True
let reg3 = new RegExp("[1-9]")
console.log(reg3.test("O numero 147 está presente?"))//True
let reg4 = new RegExp("[1-9]")
console.log(reg4.test("O numero 681 está presente?"))//True

//IMPORTANTE -- O que vale é os numeros 0-9 idenpendente do tamanho do numero(2, 56, 889, 457890).