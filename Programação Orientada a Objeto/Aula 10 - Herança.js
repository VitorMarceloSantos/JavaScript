//Uma classe pode herdar propriedades de outra classe por herança. Utiliza a palavra extends.

class Mamiferos{
    constructor(patas){
        this.patas = patas
    }
}
class Cachorro extends Mamiferos{
    constructor(patas, raca){
        super(patas, patas)
        this.raca = raca
    }
}

let pug = new Cachorro(4, "Pug")
console.log(pug)