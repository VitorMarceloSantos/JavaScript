/* Filter : metodo de array para filtrar dados, baseado em alguma condição que estabelecemos.
 - Isso dá ao array apenas os elementos que queremos, de forma perfomática. NÃO MODIFICA O ARRAY*/ 

 const arr = [1,2,3,4,5]
 const highNumbers = arr.filter((n) =>{ //seleciona os numeros maiores que 3
    if(n >= 3){
        return n;
    }
 });
 console.log(highNumbers)
 console.log(arr) //a função filter não modifica o array em questão

const users = [
    {name:"Vitor", available:true}, 
    {name:"Rafaela", available:false},
    {name:"Luis", available:false},
    {name:"Paulo", available:true}
];
const availableUsers = users.filter((user) => user.available) //Apenas usuários com available: true
console.log(availableUsers)