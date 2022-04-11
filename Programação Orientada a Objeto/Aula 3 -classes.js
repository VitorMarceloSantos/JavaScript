// O prototype pode ser chamando de classe. Podemos criar diversos objetos em cima de um prototype.

let cachorro = { // cria um molde para os demais objetos
    raca: "SRD", 
    patas: 4
}
let pastorAlemao = Object.create(cachorro) //criando o objeto pastorAlemao a partir do objeto cachorro
pastorAlemao.raca = "Pastor Alemao"
console.log(pastorAlemao.raca)
console.log(pastorAlemao.patas)

let labrador = Object.create(cachorro)
labrador.raca = "Labrador"
console.log(labrador.raca)
console.log(labrador.patas)
