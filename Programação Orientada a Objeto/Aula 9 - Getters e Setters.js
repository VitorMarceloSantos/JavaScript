//Get: serve para resgatar um valor de uma propriedade
//Set: serve para alterar o valor de uma propriedade

class Cachorro{ //Sempre quando é classe, deve se utilizar a primeira letra maiúscula.
    constructor(raca){
        this.raca = raca
    }
    get verRaca(){
        return `A raça é ${this.raca}`
    }
    set novaRaca(value){
        this.raca = value
    }
}
let golden = new Cachorro("Pastor Alemão")
console.log(golden.verRaca)
golden.novaRaca = "Golden Retriever"
console.log(golden.verRaca)