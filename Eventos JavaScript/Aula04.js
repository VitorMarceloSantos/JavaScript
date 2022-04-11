// Ações Default: muitos elementos/teclas(exemplo: seta para baixo, é o mesmo que scroll para baixo ambos descem a página) já tem ações pré-definidas, como clicar num link nos leva a outra página.

function msg(e){
    console.log("Clicou no botão.")
}

let a = document.querySelector("a");

a.addEventListener("click", function(e){ e.preventDefault(); console.log("Evento não está mais funicionando.")}); //O evento preventDefault() alterou meu evento, ao invés de aparecer na tela o conteudo da function(e), apareceu o a mensagem do "Evento não está mais funcionando."