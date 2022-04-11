//crie um array com 5 elementos, faça uma intereçao entre ele, e apresente a soma

let elementos = [2, 4, 5, 6, 8]
let soma = 0

for( let i in elementos){
    soma += elementos[i]
}
console.log(`A soma do Array é: ${soma}`)