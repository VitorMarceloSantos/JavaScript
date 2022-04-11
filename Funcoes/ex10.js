//Vai receber um numero qualquer, e imprimir somente os pares

function par(num){
   //Forma reduzida
   console.log("Numeros pares:")
   for(let i = num; i>=2; i--){
       if(i %2 == 0){
           console.log(`${i}`)
       }
   }
   
   //Forma mais Complicada
    /* if(num % 2 !== 0){
        num -=1 //decrementando o numero impar, para virar par
        par(num) //chamar a função novamente
    }else{
        console.log("Números pares:")
        for(let i = num; i>=2; i--){
            console.log(`${i}`)
        }
    }*/
}
let numero = 17
par(numero)