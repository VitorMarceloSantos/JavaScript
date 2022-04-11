//Async Functions : podemos criar funções assíncronas com a palavra reservada async. Elas retornam uma Promise.
//Se retornar algo, a promessa é resolvida, se der alguma exception a promessa é rejeitada.
async function somar(a,b){
    return a + b
}
somar(2,2).then(function(value){console.log(value)})