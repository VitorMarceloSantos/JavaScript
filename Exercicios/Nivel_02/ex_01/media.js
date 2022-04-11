let array = [] // onde será armazenada as notas

function adicionar(){
    let numeros = Number(document.getElementById("notas_txt").value);

    array.push(numeros); // irá armazenar os valores digitados
}

function calcular(){
    let resultado = document.getElementById("resultado")
    let imagem_html = document.getElementById("imagem_html")
    let soma = 0; //criando e incicializando a variavel
    let media = 0;

    for(let i =0; i<array.length; i +=1){
        soma += array[i];
    }
    
    media = (soma/(array.length)); //calcula o valor da media
    
    var imagem = document.createElement("img"); //criando uma tag dinamicamente
    imagem.setAttribute("id","foto");
    if(media >= 7){
        resultado.innerHTML = `Parabéns! Você foi aprovado(a) com a nota: ${media.toFixed(2)}. `; // toFixed é utilizado para fixar a quantidade de duas casas decimais
        imagem.setAttribute("src","aprovacao.png");
        imagem_html.appendChild(imagem) // adicionando a tag imagem
    }else{
        resultado.innerHTML = `Lamentamos! Você foi reprovado(a) com a nota: ${media.toFixed(2)}. `; // toFixed é utilizado para fixar a quantidade de duas casas decimais
        imagem.setAttribute("src","reprovacao.png");
        imagem_html.appendChild(imagem) // adicionando a tag imagem
    }
    
}