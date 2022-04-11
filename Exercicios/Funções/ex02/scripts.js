var array_notas = []; // Escopo Global

function Novo(){
let notas = Number(document.getElementById("notas_txt").value);

    Armazenar(notas); // Chamada da Função Armazenar
}

function Armazenar(valor){ //A funçao irá apenas armazenar os valores entrados pelo usuário
    array_notas.push(valor);
}

function Finalizar(){
    if(array_notas.length == 0){
        window.alert("[ERRO] - Nenhum valor digitado.")
    }else{
        let imprimir = document.getElementById("resultado");
        let tela = document.createElement("nav");

        tela.setAttribute("class","section_01");
    
        imprimir.appendChild(tela);

        tela.innerHTML += "<p>Opções:</p>";
        tela.innerHTML += `<input class="alterar_btn" type="button" value="Media" onclick="Media()"> `;
        tela.innerHTML += `<input class="alterar_btn" type="button" value="Mostrar Notas" onclick="Mostrar_notas()">`;
    }
}

function Media(){
    let imprimir = document.getElementById("resultado");
    let tela_media = document.createElement("nav");
    let soma = 0;

    tela_media.setAttribute("class","section_01");
    imprimir.appendChild(tela_media);

    for( i in array_notas){ //somando os valores do array
        soma += array_notas[i];
    }
    
    tela_media.innerHTML += `A media é: ${((soma)/(array_notas.length)).toFixed(2)}`;

}

function Mostrar_notas(){
    let imprimir = document.getElementById("resultado");
    let tela_mostrar_notas = document.createElement("nav");
    
    tela_mostrar_notas.setAttribute("class","section_01");
    imprimir.appendChild(tela_mostrar_notas);
    
    tela_mostrar_notas.innerHTML += "<p>Notas:</p>";
    for( i in array_notas){ //somando os valores do array
        tela_mostrar_notas.innerHTML += `<p>Nota ${i}: ${array_notas[i]}</p>`
    }
}