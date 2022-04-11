// Eventos de Mouse: no mouse tambem temos eventos como mousedown(ao clicar no botão) e mouseup(ao soltar o botão) e o evento dblclick para ativar com dois cliques. 

let btn = document.querySelector("#btn");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn.addEventListener("mousedown", function(){console.log("Apertou o botão do mouse.") }); //!!! Deve ser aberto no inspecionar(console) do navegador.!!!

btn.addEventListener("mouseup", function(){console.log("Soltou o botão do mouse.") }); //!!! Deve ser aberto no inspecionar(console) do navegador.!!!

btn1.addEventListener("dblclick", function(){console.log("Duplo click no botão do mouse.") }); //!!! Deve ser aberto no inspecionar(console) do navegador.!!!

btn2.addEventListener("contextmenu", function(e){ e.preventDefault();  console.log("Click com o botão direito.")}); //!!! Deve ser aberto no inspecionar(console) do navegador.!!!

//Mouse move: movimentação do mouse na tela.

/*
window.addEventListener("mousemove", function(e){ console.log(e.x); console.log(e.y)}) //  Posição do mouse na tela. Pode sobrecarregar a memoria do computador. 
*/