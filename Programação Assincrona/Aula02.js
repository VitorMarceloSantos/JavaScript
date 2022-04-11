//PROMISES - são ações assíncronas que podem produzir um valor em algum momento no código.
//Uma forma de dizer a linguagem que um valor pode estar presente em um futuro do código.
//O objeto das promises é Promise, resolve é o método que resolve uma Promise, o then é o que faz ela poder ser executada em um ponto futuro.
let promessa = Promise.resolve(4 + 8)
console.log("Algum código.")
promessa.then((value) => console.log(`A soma é ${value}`))


//Falhas nas Promises, podendo reter esse erro como um método chamado catch.
//Com esse erro podemos exibir o erro no console, por exemplo, e fazer o debug no código.

let promiseErrada = Promise.resolve(new Error("Algo deu errado."))
promiseErrada
    .then((value) => console.log(value))
    .catch(reason => console.log("Erro: "+ reason))


