//Temos a possibilidade de instaciar um objeto com new.
function Cachorro(raca, cor, patas){ //  !!!! IMPORTANTE --- Deixa a primeira letra maiscula, para diferenciar uma classe de uma função
    this.raca = raca,
    this.cor = cor,
    this.patas = patas
    this.latir = function(){console.log("Au au au")} // Não é recomendável, é melhor declarar os metodos separados das propriedades.
}
Cachorro.prototype.correr = function(){ //Atrelado ao prototype, utilizando essa forma as propriedades(raca, cor, parta) ficam separada dos metodos(correr())
    console.log("Cachorro correndo...")
}

let rusky = new Cachorro("Husky","Preto", 4)
console.log(rusky.raca)
console.log(rusky.cor)
console.log(rusky.patas)
rusky.latir()
rusky.correr()
console.log(rusky)