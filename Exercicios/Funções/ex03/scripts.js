/*
//Arrow Function

let soma = (a, b) => a+b
console.log((soma(7,5)));

*/

/*
//Somar 2 números e retornar a soma
function Soma(a,b){
    return a+b;
}
console.log(Soma(1,7));
*/

/*
//Retornar um número aleatório
function Aleatorio () {
    return Math.floor(Math.random()*10)+1; //numeros aleatorios de 1 a 10 
}
console.log(Aleatorio());
*/


/*
//Maior de Idade
function Verificar_idade(verificar){
    if(verificar>=18){
        console.log("Maior de idade, pode comprar bebida alcoolica.");
    }else{
        console.log("Menor de idade, NÂO pode comprar bebida alcoolica.");
    }
}
console.log(Verificar_idade(17));
console.log(Verificar_idade(32));
*/

/*
//Função Modulo
function Modulo(a){
    return Math.abs(a)
}
console.log(Modulo(-15));
*/

/*
//Tamanho do Texto
let texto = (string) => {
    if(string.length > 10){
        console.log("Texto muito longo.");
    }else{
        console.log("Texto dentro do parâmetro.");
    }
}
console.log(texto("O texto é longo"));
console.log(texto("Vitor"));
*/

/*
//Potenciação
let potencia = (base,potencia) => Math.pow(base,potencia);
console.log(potencia(2,3));
console.log(potencia(3,2));
*/


//FUNÇÃO RECURSIVA
//Imprimir números Pares
let resultado = function Loop(num){
    if(num%2 == 0){
        console.log(num);
        num += -2;
        if(num == 0 ){
            console.log("Fim da execução.")
        }else{
            return Loop(num);
        }
    }else {
        num += -1; //no caso de ser impar, depois entra no loop do par
        Loop(num); // retornar a função Loop()
    }   
}
console.log(resultado(35));
console.log(resultado(16));