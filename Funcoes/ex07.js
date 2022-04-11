//A função recebe um numero negativo e retorna um numero positivo.

function pos(num){
    return Math.abs(num)
}
let numero = -15
console.log(`O numero ${numero} possui modulo: ${pos(numero)}.`)