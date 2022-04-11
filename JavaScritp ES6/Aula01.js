/* ES6 - trouxe diversas funcionalidades. São de conhecimento base para aprender os framework modernos. Aginlizam o desenvolmento de JS puro.
 - Duas formas de declara variáveis: let e const
 - let: é semelhante ao var, podemos alterar valores.
 - const: é uma forma de declara constantes, não pode alterar valores.
 - O grande diferencial é o escopo de blocos, não tem mais variáveis sendo vazadas para outros escopos por causa do mesmo nome. 
    As variaveis podem ser criadas com escopo global ou local.
    - as variáveis criadas com let terão escopo de bloco(somente serão lidas naquele bloco), já as criadas com var terão escopo global.

*/

//Variável Global
var a = 5;
var b = 15;

if(b > 10){
    var a = 8; //nesse caso a variável a será acessada dentro do escopo IF
    console.log(a);
}
console.log(a);

//Variável Local
let c = 5;
let d = 15;

if(d > 10){
    let c = 7;
    console.log(c); //nesse caso está sendo criada uma nova variável com o escopo local(IF)
}
console.log(c);//irá imprimir o valor da variável dentro do escopo geral