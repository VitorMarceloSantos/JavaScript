//Crie uma classe que simule um carro. Propriedades: marca, cor, gasolina restante. Metodos: dirigira carro que vai diminuindo a gasolina, e outro para abastecer.
class Carro{
    constructor(){
        this.gasolina = 50
    }
    dirigir(){
        this.gasolina -= 10
    }
    abastecer(){
        this.gasolina +=10
    }
    get marcador(){
        return `O combustivel se encontra em ${this.gasolina}% da capacidade total.`
    }
}
let palio = new Carro()
console.log(palio.marcador)
palio.dirigir()
palio.dirigir()
console.log(palio.marcador)
palio.abastecer()
console.log(palio.marcador)
palio.dirigir()
palio.abastecer()
palio.dirigir()
console.log(palio.marcador)