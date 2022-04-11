//Crie uma regex que aceite a seguinte expressão: MARCA: NOMEDAMARCA (onde nome da marca: NIKE, ADIDAS, PUMA, ASICS)
let marca = /[MARCA][:][NIKE|ADIDAS|PUMA|ASICS]/
console.log(marca.test("MARCA:NIKE"))//True
console.log(marca.test("MARCA:adidas"))//False
console.log(marca.test("MARCA:PUMA"))//True
console.log(marca.test("MARCA:asics"))//False
