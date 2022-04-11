let array_par = []
let array_impar = []

function adicionar(){
    let numero = Number(document.getElementById("numero_txt").value);

    if(numero %2 == 0 ){
        array_par.push(numero);
    }else{
        array_impar.push(numero);
    }
}

function finalizar(){
    let num_pares = document.getElementById("num_pares");
    let num_impares = document.getElementById("num_impares");

    num_pares.innerHTML = `O números pares são: ${array_par}.`;
    num_impares.innerHTML = `O números ímpares são: ${array_impar}.`;

}