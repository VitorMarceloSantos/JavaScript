//NA PRÁTICA - VALIDANDO UM DOMINIO
//Da seguinte forma, podemos validar um dominio:
let dominio = /www.\w+\.com|.com.br/
console.log(dominio.test("www.google.com.br"))//True
console.log(dominio.test("www.bet365.com"))//True
console.log(dominio.test("www.123milhas.com.br"))//True
console.log(dominio.test("www.mec.gov.edu.br")) //False


console.log("espaço")
//NA PRATICA - VALIDANDO EMAIL
let validaEmail = /\w+@\w+.\w+/
console.log(validaEmail.test("vitor.marcelo2009@hotmail.com")) //True
console.log(validaEmail.test("1234email@ufv.br")) //True
console.log(validaEmail.test("23456@345.com")) //True


console.log("espaço")
//NA PRATICA - VALIDANDO DATA DE NASCIMENTO
//O ACENTO CIRCUFLEXO ELE DÁ A POSSIBILIDADE DE COLCOAR VALORES BEM ESPECIFICOS(ENTRE CHAVES NUMEROS PERMITIDOS E A BARRA, ENTRE COLCHETES A QUANTIDADE PERMITIDA)
let dataNascimento = /^[0-31]{2}[/][0-12]{2}[/][1920-2022]{4}/    //   /\d{2}\/\d{2}\/\d{4}/   dessa forma pode digitar letras e numeros
console.log(dataNascimento.test("16/04/1991")) //True
console.log(dataNascimento.test("01/01/2000")) //True
console.log(dataNascimento.test("4/04/1991")) //False
console.log(dataNascimento.test("21/3/1991")) //False
console.log(dataNascimento.test("13/09/22")) //False