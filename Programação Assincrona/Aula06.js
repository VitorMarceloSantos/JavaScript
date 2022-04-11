//Await: nas async functions, podemos determinar uma instrução await, que vai esperar uma promise ser resolvida, para apresentar os resultados.
function somaComDelay(a,b){
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(a + b)
        }, 2000)
    })
}

async function soma(a,b,c,d){
    let x = somaComDelay(a,b)
    let y = somaComDelay(c,d)
    return await x + await y
}

soma(2,4,6,8).then( value => console.log(value))