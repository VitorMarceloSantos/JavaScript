//Operador NOT - ^
//Podemos escrever um set que aceitam tudo, menos alguns caracteres com o not.
//Lembrando que combinações serão aceitas, o negado é apenas se bate com o set.

let semNumero123 = /[^123]/ //A expressão não pode conter os seguintes numeros: 1,2,3(e somente eles)
console.log(semNumero123.test("1112")) //FALSE
console.log(semNumero123.test("14")) //TRUE
console.log(semNumero123.test("1"))//FALSE
console.log(semNumero123.test("3289")) //TRUE

console.log("espaço")
 
let numeroAeB = /[^ab]/ //A expressão não pode conter : a,b(e somente eles)
console.log(numeroAeB.test("11abc")) //true
console.log(numeroAeB.test("aa")) //false
console.log(numeroAeB.test("ab"))//false
console.log(numeroAeB.test("3289abc")) //TRUE



//Operador PLUS  - +
//O elemento repetindo mais de uma vez. ( varios caracteres, só é falso quando for vazio)
console.log("espaço")
 
let umOuMaisNumeros = /[\d+]/ //Pode ter indefinidos caracteres, somente será falso quando tiver VAZIO e sem NENHUM NUMERO
console.log(umOuMaisNumeros.test("11abc")) //true
console.log(umOuMaisNumeros.test(" ")) //false
console.log(umOuMaisNumeros.test("ab"))//false
console.log(umOuMaisNumeros.test("3289abc")) //TRUE


console.log("espaço")
//Operador QUESTION - ?
//Faz com que o digito anterior seja opcional.
let opcional = /Prova\s?\d?/
console.log(opcional.test("Prova")) //True
console.log(opcional.test("Prova 1"))//True
console.log(opcional.test("Prova657"))//True


console.log("espaço")
//Ocorrência Precisa
//Inserir o número de ocorrência entre {}
let telefone = /\d{4,5}-\d{4}/ //QUANTIDADE de digitos, na primeira pode ser 4 ou 5 numeros, já na segundo pode ser apenas 4 numeros
console.log(telefone.test("1234-1234"))//True
console.log(telefone.test("12345-1234"))//True
console.log(telefone.test("123-123")) //False
console.log(telefone.test("1234-1")) //False
console.log(telefone.test("12-1234")) //False
console.log(telefone.test("1-1234")) //False


console.log("espaço")
//Metodo EXEC
//Tem como retorno um objeto com algumas informações sobre a regex. Se nada for encontrado, retorna null.
let teste = /\d+/.exec("O numero 100")
console.log(teste) //[ '100', index: 9, input: 'O numero 100', groups: undefined ]
console.log(teste.index) //9


console.log("espaço")
//Metodo MATCH
//Tem como retorno um objeto com algumas informações sobre a regex. Se nada for encontrado, retorna null.
let teste1 ="O numero 100".match(/\d+/)
console.log(teste1) //[ '100', index: 9, input: 'O numero 100', groups: undefined ]
console.log(teste1.index) //9


console.log("espaço")
//Choice Pattern - |
//Podemos colocar uma instrução na regex que funciona com um ||(or,ou) das condicionais. OBS: deve respeitar o espaço entre o sinal de + e o parentese.
let frutas = /\d+ (bananas|maçãs|laranjas)/
console.log(frutas.test("10 bananas"))//True
console.log(frutas.test("25 uvas"))//False
console.log(frutas.test("8 laranjas"))//True
console.log(frutas.test("Temos maçãs")) //False // Não tem números.
console.log(frutas.test("Vendemos 56 goiabas"))//False