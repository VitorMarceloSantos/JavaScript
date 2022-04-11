//Sempre que adicionamos uma propriedade a um objeto, é criada uma identica no prototype. Sendo assim podemos substituir a do prototype.

class Cachorro{ //utilizar letra maiscula para se referir a uma classe !!!! IMPORTANTE !!!!
    constructor(raca, cor){
        this.raca = raca,
        this.cor = cor
    }
}
let podle = new Cachorro("Podle", "Branco")
console.log(podle.raca)
console.log(podle.cor)

Cachorro.prototype.raca = "SRD" //Alterando o Prototype(Classe padrão - Pai)
console.log(Cachorro.prototype.raca)