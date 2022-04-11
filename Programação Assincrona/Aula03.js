//Rejeitando Promises - além do resolve, há o metodo reject. Que é quando determinada lógica não satisfaz nosso programa, então podemos ir para outra com o reject, em vez do resolve.
//Resolve e reject terminam a Promise, ou seja, não podemos chamar mais o then, por exemplo.
function verificarAlgo(num){
    return new Promise((resolve, reject) =>{
        if(num == 2){
            resolve(console.log("O numero é 2."))
        }else{
            reject(new Error("Falhou."))
        }
    })
}
verificarAlgo(3)
verificarAlgo(2)