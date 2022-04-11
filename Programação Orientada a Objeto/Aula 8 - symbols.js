//Propriedades unicas que não podem ser alteradas e nem criadas duas vezes. Pode ser utilizada como uma constante.

class Cachorro{
    constructor(raca){
        this.raca = raca
    }
}
let patas = Symbol()
Cachorro.prototype[patas] = 4
let golden = new Cachorro("Golden Retriever")

console.log(golden)
console.log(Cachorro.prototype[patas])
console.log(golden[patas])  //Para acessar o Symbol utiliza a constante entre colchetes