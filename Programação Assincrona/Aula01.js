//Na programação Assíncrona as ações podem ser executadas ao tempo todo sem uma "fila", ou seja, não depende de uma ordem pré estabelecida. 
/* Exemplo: usuário está no checkout, manda salvar seu endereço na conta, mas pode prosseguir para a finalização sem recarregar a pagina, pois adicionar endereço ocorre de forma assincrona. */

//CALLABACKS - é uma função que faz uma ação após algum acontecimento no código.
//Exemplo de callback - Função setTimeout
console.log("Ainda não chamou o callback.")
setTimeout(function(){
    console.log("Chamou o callback.")
}, 2000) //irá se executado idependendo da ordem, pois é executado após 2 segundos(2milisegundo).
console.log("Ainda não chamou o callback.")
console.log("Ainda não chamou o callback.")