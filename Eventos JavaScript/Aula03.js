// Propagação: quando não definimos um elemento muito bem(seletor brando) ou um elemento que está dentro de outro tem um evento, pode acontecer a propagação, ou seja, o outro elemento ativar um evente também, aí teremos uma duplicação. O método para evitar a propagação é o: stopPropation

let btn = document.querySelector("#btn");
let parag = document.querySelector("p");

function msg(e){
    console.log("Clicou no botão.")
    e.stopPropagation(); //Esse método evita que haja a propagação, clicando no botão irá acionar apenas o evento do botão.
}

//quando eu clico no botão, deveria acionar apenas o btn, mas está acionando o parag também, pois o btn está dentro do paragrafo aí aciona os dois eventos.
btn.addEventListener("click", msg)

parag.style.backgroundColor = "blue"; //alterando a cor de fundo do paragrafo
parag.addEventListener("click", function(){console.log("Clicou no paragrafo.")}); //o parafrafo ocupa toda a linha no display(inline block) com isso o botão e o paragrafa estão ocupando o mesmo espaço. Clicando em qualquer lugar do paragrafo(azul) aciona o evento do paragrafo.

