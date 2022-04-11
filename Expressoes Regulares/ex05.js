//Crie uma regex que valide nome de usuario no sistema, aceite leitras de a-z e numeros de 0-9, pode ter underline(_), no mínimo 3 caracteres e no máximo 16 caracteres.
let valida = /^(?=.{3,16}$)[a-z0-9-_]/  //O que está entre parentese é para validar de 3 a 16 caracteres
console.log(valida.test("mateus_123")) //True
console.log(valida.test("2810_vit")) //True
console.log(valida.test("23")) //False
console.log(valida.test("111111111111111111111111111111111111111111111111"))//false