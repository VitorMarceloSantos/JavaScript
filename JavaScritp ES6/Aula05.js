/*Spread Operator
 - pode ser utilzados em array e objetos.
 - utilizamos para constituir novos valores destes dados em outros arrays e objetos.
 - podemos unir vários arrays de maneira simples ou adicionar valores de um objeto a outro. */

 const a1 = [1,2,3]
 const a2 = [4,5,6]

 const a3 = [...a1, ...a2] //cria um novo array com as informações de a1 e a2

 console.log(a3)

 //Adicionando elementos a um array existente
 const b1 = [10, 11, 12, ...a1] //adicionando depois
 const b2 = [...a2, 20, 21, 22] //adicionando antes

 console.log(b1)
 console.log(b2)
