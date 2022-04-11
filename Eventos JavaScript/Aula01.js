//Eventos: ações condicionadas a algum tipo de respota feito pelo usuário. Exemplo: clicks, movimento do mouse, apertar alguma tecla....
//Podemos atrelar lógica a essas ações do usuário, por meio de handlers.

//Como adicionar um evento: devemos atrelar o evento a um elemento, por exemplo um botão. Depois inserir um listener e o tipo de evento como argumento, aí o elemento responderá por este evento e, obviamente, os outros da página não.

//Adicionar evento: addEventListener(evento, ação)


function msg(){
    console.log("Clicou.") //Apenas irá apresentar uma mensagem.
}


let btn = document.querySelector("#btn");

btn.addEventListener("click", msg);

//Remover evento: removeEventListener(evento, ação)
let btn2 = document.querySelector("#btn2") 

btn2.addEventListener("click", function(){btn.removeEventListener("click", msg)}) //Ao clicar no botão2, ele irá remover os eventos do botão1, ou seja, o botão1 não estará adicionando mais eventos(fica inutilizado.)

