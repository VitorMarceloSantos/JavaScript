// Eventos de Tecla(Keys Event) : sempre uma tecla é pressionada, são gerados dois eventos: keyup(é quando soltamos a tecla) e o keydown(quando apertamos a tecla).

window.document.addEventListener("keydown", function(e){if(e.key == "q"){ console.log("Apertou a letra q.")}else if(e.key == "Enter"){console.log("Apertou enter.")} }); //!!! Deve ser aberto no inspecionar(console) do navegador.!!!

window.document.addEventListener("keyup", function(e){if(e.key == "x"){ console.log("Apertou a letra x.")} }) //!!! Deve ser aberto no inspecionar(console) do navegador.!!!
