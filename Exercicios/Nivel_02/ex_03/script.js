let array_par = []; //variaveis com escopo global
let array_impar = [];

function alterar_cor(){
    let cor_btn = document.getElementById("verificar_btn");

    cor_btn.style.backgroundColor = "#F8BCFE" //irá alterar a cor do botão 
    cor_btn.style.color = "white"
}
function voltar_cor(){
    let cor_btn = document.getElementById("verificar_btn");

    cor_btn.style.backgroundColor = "" //deixando vazio, volta a cor padrão do navegador
    cor_btn.style.color = ""
}
function adicionar(){
    let number = Number(document.getElementById("number_txt").value);
    

    if(number % 2 == 0){
        array_par.push(number);
    }else {
        array_impar.push(number)
    }
}
function verificar(){
    let resultado = document.getElementById("resultado");
    resultado.innerHTML += `<h2>Resultado:</h2>`
    resultado.innerHTML += `<p>Números pares: ${array_par}</p>`;
    resultado.innerHTML += `<p>Números ímpares: ${array_impar}</p>`;
    resultado.innerHTML += `<p> Total de números: ${(array_par.length)+(array_impar.length)}`
}