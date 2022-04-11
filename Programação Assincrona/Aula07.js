//Generators : funcionam semelhantes as Promises. Onde ações podem ser pausadas e continuadas depois.
//Caracterizados pelo function* e yield(pode salvar o estado da variável)
function* genTest(){  
    let id = 0
    while(true){
        yield id++
    }
}
let criarId = genTest()
console.log(criarId.next().value) //só vai repetir quando chamado novamente.
console.log(criarId.next().value)
console.log(criarId.next().value)
console.log(criarId.next().value)
