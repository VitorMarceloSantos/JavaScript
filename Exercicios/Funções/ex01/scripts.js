


function Verificar(){
    let numero_1 = Number(document.getElementById("num1_txt").value);
    let numero_2 = Number(document.getElementById("num2_txt").value);
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = Calculo(numero_1, numero_2);
    
}

function Calculo(num1, num2){
    
    if(num1>num2){
        return  (`<p>O número ${num1} é o maior.</p>`);
    }else{
        if(num2>num1){
            return ( `<p>O número ${num2} é o maior.</p>`);
        }
        else{
            return (`<p>Os números são iguais.</p>`);
        }
    }
}