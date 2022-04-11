//Bug: problema que ocorre no codigo.
//Debug: o ato de resolver os bugs encontrados no código.

//Strict mode: deixar o js mais rigoroso na hora de programar, deve ser declarado no topo de arquivos ou funções.

/*
"use strict"
texte = "Uma string qualquer" //erro: variavel não definida
*/

 //Metodo Debug: console.log 

 //Metodo Debugger: funcionalidade que para o código quando atingir a linha debugger.
 /* if(a >5){
        b = 5
    }else{
        b = 7
    }
    debugger; //O código é parado nesse parte para analise
    if(b<10){
        console.log("Erro.")
    }
  */

// Exceptions: podemos criar erros no programa, caso alguma condição nao seja atendida. Pórem as exceptions abortam o programa, só geram erro.
//Try e catch: o bloco try catch, vai tentar executar um código, caso não consiga ele pode retornar o erro que esse código gerou. Muito útil para debug.
/*try{
    let a = 2+b
}catch(erro){
    console.log(erro)
}
finally{
    console.log("Executou")
} */
// Finally: é executada idependente do resultado try catch. Pode existir com try catch ou apenas try.
//Assertions: Verificações no programa, que são utilizadas para assegurar que tudo ocorra de forma esperada.