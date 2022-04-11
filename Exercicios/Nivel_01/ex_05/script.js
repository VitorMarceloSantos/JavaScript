function somar(){
    let num01 = Number(document.getElementById("num01").value); // converter para typeof number, pois quando recebe vem com o formato String
    let num02 = Number(document.getElementById("num02").value); // pode utilizar para conversão, Number, ou parseInt
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `O resultado é: ${(num01)+(num02)}`;
}