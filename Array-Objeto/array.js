//O arrays utiliza o colchete [].
//pode se criar um array sem tamanho especifico -> let array = []
let idades = [12, 34, 55, 23] 

console.log(`Idade do usuario 2: ${idades[1]}`)
console.log(`Idade do usuario 4: ${idades[3]}`)
//Adicionando uma nova idade
idades.push(85) // push adiciona no ultimo lugar
console.log(`Idade do usuario 5: ${idades[idades.length-1]}`)

