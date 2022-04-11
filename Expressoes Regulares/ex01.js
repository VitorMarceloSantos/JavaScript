//Crie uma regex que aceite só letras maiculas.
let maiscula = /[A-Z]/
console.log(maiscula.test("VITOR")) //True
console.log(maiscula.test("LETRAS")) //True
console.log(maiscula.test("minuscula"))//False
console.log(maiscula.test("testeMinuscula"))//False
console.log(maiscula.test("CaMeLcAsE"))//FAlse
