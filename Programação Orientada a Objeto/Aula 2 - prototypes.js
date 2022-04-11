//Quando uma objeto recebe uma requisiçãoo de uma propriedade que não tem, ela é procura no prototype deste objeto. O prototype d eum objeto criado do zero é o Object, que tem os métodos nativos da liguagem. O Object é o pai de todos os objetos.
//Ele herdara tanto os metodos e propriedades de Object(o prototype do objeto base)

let pessoa ={
    maos:2
}
console.log(Object.getPrototypeOf(pessoa))
console.log(Object.getPrototypeOf(pessoa) == Object.prototype)