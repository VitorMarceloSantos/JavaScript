//Não precisa criar o construtor por meio de função, basta utilizar class.

class Cachorro{ //utilizar letra maiscula para se referir a uma classe !!!! IMPORTANTE !!!!
    constructor(raca, cor){
        this.raca = raca,
        this.cor = cor
    }
    latir(){
        console.log("Au au au") //Declarando metodos no constructor
    }
}
let labrador = new Cachorro("Labrador", "Caramelo")
console.log(labrador.raca)
console.log(labrador.cor)

//!!! IMPORTANTE:  não podemos adicionar propriedades na classe, só via prototype. A classe só aceita adicionar metodos.

Cachorro.prototype.adestrado = true

console.log(labrador.adestrado)