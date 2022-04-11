/* Destructuring
 - utiliza arrays e objetos. A ideia é transformar os itens de um adeses dados em variáveis; simplificando a declaração de n variáveis para apenas 1 linha.
*/
 //Com arrays
const fruit = ["maçã", "laranja", "mamão"]
const [f1,f2,f3] = fruit // o array fruit vai ser desmebrado e cada uma das variáveis(f1,f2,f3) irá receber uma posição do array, nesta ordem.
console.log(f1)
console.log(f2)
console.log(f3)

//Com objetos
const usuario = {
    name:"Vitor",
    idade:30,
    sexo:"masculino" 
}
const {name:nomeDoUsuario, idade, sexo:genero} = usuario //quando se quer mudar o nome da key(chave) deve utilizar-> Key:novoNome, agora quando quiser deixar a Key igual(sem modificar o nome) deixa apenas a Key(ex:idade)
console.log(nomeDoUsuario)
console.log(idade)
console.log(genero)