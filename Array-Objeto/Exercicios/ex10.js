//criar um objeto calculadora, com os seguinte paramentros: soma, subtrair, multiplicar e dividar. Receba dois numeros

let calculadora = {
    soma: function(a,b){ return a+b}, 
    subtrair: function(a,b){return a-b},
    multiplicar: function(a,b){return a*b},
    dividir: function(a,b){return a/b}
}

console.log(calculadora.soma(3,5))
console.log(calculadora.subtrair(8,4))
console.log(calculadora.multiplicar(5,5))
console.log(calculadora.dividir(16,4))