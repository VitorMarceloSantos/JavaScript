// Os elementos dos objetos podem ser nomeados
// Nos objetos utiliza-se chaves {}
//Pode criar um objeto sem tamanho especifico -> let obj = {}
//Os elementos do objeto podem conter funções
//Os objetos são divididos em nomes e valor; chave: identificação(NOme, idade, sexo), valor: o valor propriamente dito(vitor, 30, masculino)

let cadastro = {nome:"Vitor", idade:30, sexo:"Masculino", dobro(x){return x * 2 }}

console.log(`Nome: ${cadastro.nome}`)
console.log(`Idade: ${cadastro.idade}`)
console.log(`Sexo: ${cadastro.sexo}`)
console.log(`Quadrado do numero: ${cadastro.dobro(5)}`) 

//Adicionando novos elementos;
cadastro.graduacao = true //criando novo elemento
cadastro.curso = "Contábeis"//criando novo elemento

console.log(`Graduação: ${cadastro.graduacao}`)
console.log(`Curso: ${cadastro.curso}`)

//Excluindo elementos
delete cadastro.sexo //excluindo o elemento sexo
delete cadastro.idade // excluindo o elemento idade

console.log(`Sexo: ${cadastro.sexo}`)
console.log(`Idade: ${cadastro.idade}`)


//Copiar todos os elementos de um objeto para outro.
let obj1 = {nome:"vitor", idade:30}
let obj2 = {sexo:"masculino"}

Object.assign(obj1,obj2) // O objeto(obj1) irá herdar todos os elementos do objeto(obj2).
console.log(`Nome: ${obj1.nome}`)
console.log(`Idade: ${obj1.idade}`)
console.log(`Sexo: ${obj1.sexo}`) //mostrar que herdou todos os elementos

//Consegue veriricar quais as chaves de um objeto
console.log(Object.keys(obj1))

//Mutação: um objeto pode herdar todas as caractericas de outro, virando uma referencia ao mesmo(caso eu altere um objeto, o outro também será alterado.)
let objA = { pontos: 10}
let objB = objA //o objB está recebendo a referencia do objA
console.log(objA == objB)
console.log(objB) // imprimir o valor de objB

objA.pontos = 45
console.log(objB) //foi alterado o valor do objA e em consequencia alterou o valor do objB

objB.pontos = 80
console.log(objA) //o valor do objA foi alterado a partir do objB