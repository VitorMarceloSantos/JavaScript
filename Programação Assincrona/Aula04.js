//Resolvendo várias Promises
//Com o metodo all, podemos resolver várias promessas de uma vez só, ou seja, passamos ela por array e quando a última for resolvida, receberemos a resposta.
let p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(100)
    }, 2500)
})

let p2 = Promise.resolve(5)

let p3 = new Promise(function(resolve, reject){
    resolve(10)
})

Promise.all([p1,p2,p3]).then((values) => console.log(values))