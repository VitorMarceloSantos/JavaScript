//Cosntrutores são formas de instaciar(criar novos objetos) uma classe. No construtor podemos definir propriedades.

function criarCachorro(raca, cor){
    let cachorro = Object.create({})
    cachorro.raca = raca
    cachorro.cor = cor
    return cachorro
}

let doberman = criarCachorro("Doberman", "Caramelo")
console.log(doberman.raca)
console.log(doberman.cor)