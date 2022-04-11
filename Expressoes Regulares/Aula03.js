/*Caracteres Especiais

\d - qualquer digito de caractere - [0-9] - [A-Z] [@#$%....]Aceita todas as expressos que CONTEM numero(Deve ter número para ser valida)
\w - um caractere alfanumerico("teste1234") - letras e numeros(excetos espaço em branco)
\s - qualquer caractere de espaço em branco - espaços, quebra de linha
\D - caracteres que não são digitos - //[0-9] e [A-Z] e [@#$%¨...] As expressões que tiverem apenas numeros serão Falsas
\W - caracteres não-alafanumerico
\S - caractere que não seja espaço em branco
. - qualquer caractere, menos nova linha 

*/

let pontoRegex = /./ //Aceita tudo
console.log(pontoRegex.test("asd"))  //True
console.log(pontoRegex.test(" ")) //-espaço //True
console.log(pontoRegex.test("359")) //True
console.log(pontoRegex.test("123milhas")) //True
console.log(pontoRegex.test("@#$vias123")) //True

console.log("espaço")

let dRegex = /\d/ //[0-9] Aceita todas as expressos que CONTEM numero
console.log(dRegex.test("359")) //True
console.log(dRegex.test("asd"))  //False
console.log(dRegex.test(" ")) //-espaço //False
console.log(dRegex.test("329384729384")) //True
console.log(dRegex.test("123milhas")) //True
console.log(dRegex.test("@#$vias123")) //True

console.log("espaço")

let DRegex = /\D/ //[0-9] As expressões que tiverem apenas numeros serão Falsas
console.log(DRegex.test("359")) //false
console.log(DRegex.test("asd"))  //True
console.log(DRegex.test(" ")) //-espaço //True
console.log(DRegex.test("329384729384")) //false
console.log(DRegex.test("123milhas")) //True
console.log(DRegex.test("@#$vias123")) //True

console.log("espaço")

let wRegex = /\w/ //letras e numeros e caracteres especiais(@#$%)(excetos espaço em branco)
console.log(wRegex.test("359")) //True
console.log(wRegex.test("asd"))  //True
console.log(wRegex.test(" ")) //-espaço //false
console.log(wRegex.test("329384729384")) //True
console.log(wRegex.test("123milhas")) //True
console.log(wRegex.test("@#$vias123")) //True

console.log("espaço")

let WRegex = /\W/ // Não pode conter letras e numeros(somente espaço em branco e caracteres especiais(@#$%))
console.log(WRegex.test("359")) //false
console.log(WRegex.test("asd"))  //false
console.log(WRegex.test(" ")) //-espaço // True
console.log(WRegex.test("329384729384")) //false
console.log(WRegex.test("123milhas")) //false
console.log(WRegex.test("@#$vias123")) //True

console.log("espaço")

let sRegex = /\s/ // espaços, quebra de linha
console.log(sRegex.test("359")) //false
console.log(sRegex.test("asd"))  //false
console.log(sRegex.test(" ")) //-espaço // True
console.log(sRegex.test("329384729384")) //false
console.log(sRegex.test("123milhas")) //false
console.log(sRegex.test("@#$vias123")) //false