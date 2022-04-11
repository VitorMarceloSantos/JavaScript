let array =[] //criando um array, para armazenar os valores digitados - GLOBAL
function adicionar(){
    let num = Number(document.getElementById("numberbtn").value);

    array.push(num); //será adicionado na ultima posição
}

function finalizar(){
    let resultado = document.getElementById("resultado")
    let operacao = document.getElementsByName("operacao")
    let soma = 0; // criando a variável soma
    let media = 0;// criando a variavel media
    
    for(let i in array){ //esta operação está nesta posição pois ele será utilizada tanto para media quanto para a soma
        soma += array[i] //somando o valores em soma
    }
    if(operacao[0].checked){
        resultado.innerHTML = `Soma: ${soma}.`
    } else if(operacao[1].checked){
        media = soma/(array.length) //realizando a media dos valores
        resultado.innerHTML = `Média: ${media}.`
    }
    
    
    /*for(let i in array) {
        resultado.innerHTML += `${array[i]},`; //o sinal de mais faz a concatenação
    }*/
    
}

