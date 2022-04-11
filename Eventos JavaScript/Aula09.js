// Eventos de carregamento : atrelar um evento quando a página carrega, pelo evento load. E antes do usário fechar a página pelo evento beforeunload.

//O evento load: sempre que a página é carregada irá acionar o evento.

window.addEventListener("load", function(){window.alert("Assine nossos termos de uso.")})


//Sempre que o usuario for fechar a página irá aparecer a caixa de dialogo.
window.addEventListener("beforeload", function(e){event.returnValue = null})

