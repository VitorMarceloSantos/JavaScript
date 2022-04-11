function mouse_enter(){
    let mouse_enter = document.getElementById("button_sortear");

    mouse_enter.style.background = "#D9ACB8";
    mouse_enter.style.color = "black";
}
function mouse_out(){
    let mouse_out = document.getElementById("button_sortear");

    mouse_out.style.background = "azure";
    mouse_out.style.color = "darkorange";
}
function sortear(){
    let numero_user = Number(document.getElementById("number_txt").value);
    let resultado = document.getElementById("div_02");
    let random = Math.random(); // realiza o sorteio de um numero entre 0 e 1;
    let numero_sorteado = Math.ceil(random*(10-1)); // valores miminos e máximo

    if(numero_user == numero_sorteado){
        resultado.innerHTML = `<p>Parabéns, você acertou o número.</p>`
    }else{
        resultado.innerHTML = `<p>Que pena, tente outra vez.</p>`
    }
    resultado.innerHTML += `<p> Número sorteado: ${numero_sorteado} </p>`; // Math.ceil(arredondamento para cima), Math.floor(arredondamento para baixo)
}