//Escreva uma função que: retorne um numero aleatorio, o numero máximo deve ser passado via parametro.

function aleatorio(min, max){
    let aleat = Math.floor((Math.random() * (max-min))+min)
    return aleat
}

/* Math.floor() arrendamento para cima,  Math.ceil() arredondamento para baixo*/
let menor, maior
maior = 10;
menor = 1
console.log(`O valor aleatório entre ${menor} e ${maior} equivale a ${aleatorio(menor, maior)}`)