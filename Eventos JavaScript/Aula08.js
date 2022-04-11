// Eventos por foco: quando focamos em um elemento ou saimos dele, podemos tambem atrelar um evento a esta ação. Focus: quando um elemento recebe o foco. Blur: quando um elemento perde o foco.


//Focus: ao clicar na caixa de texto para preencher o input, o evento será acionado.
//Blur: ao clicar fora da caia de texto(sendo que deverá primeiramente ter clicado dentro(Focus)), o evento será acionado.
let btn = document.querySelector("#btn");

btn.addEventListener("focus", function(){ console.log("Entrou no input.")}); //!!! Deve ser aberto no inspecionar(console) do navegador.!!!

btn.addEventListener("blur", function(){ console.log("Saiu do input.")}); //!!! Deve ser aberto no inspecionar(console) do navegador.!!!


