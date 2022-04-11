//Escreva uma função que: receba a idade, se maior de 18 pode dirigir, caso contrario não pode dirigir.

function dirigir(idade){
    if(idade >= 18){
        console.log("Permissão concedida para entrar na auto escola. Bons estudos.")
    }else{
        console.log(`Não autorizado a entrar na auto escola. Tente daqui ${18-idade} anos.`)
    }
}

let id = 15
dirigir(id)