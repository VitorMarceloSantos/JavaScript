/* 
    !!!!  IMPORTANTE  !!!!

Para inserir elementos pode ser utilizados:

 - xxxx.appendChild(novoElemento) em que o elemento será inserido no fim.

 - xxx.isertBefore(elemento, alvo) em que o elemento será inserido antes do alvo.
    Exemplo: let novoElemento = documento.createElement("h1") //criando um titulo
             let div1 = document.getElementById("container_1") //Local
             let parag = document.getElementById("paragrafo_1") //Alvo

             div1.insertBefore(novoElemento, parag)  //Vai ser inserido na div(container_1) o novo elemento(novoElemento) ANTES do paragrafo(paragrafo_1)
*/

function enviar(){
    let ano = Number(window.document.getElementById("txtano").value)
    let sexo = window.document.getElementsByName("radsexo")
    let imagem = document.createElement('img')
    let tela = window.document.getElementById("tela")
    let idade
    let genero
    
    if(ano > 2022){
        console.log("Ano Inválido. Digite novamente.")
    }else{
        idade = 2022 - ano
        if(sexo[0].checked){
            genero = "Homem"
            if(idade <= 12){
                imagem.setAttribute('src', 'menino.png')
            }else if((idade >=13)&&(idade <=50)){
                imagem.setAttribute('src','homem.png')
            }else{
                imagem.setAttribute('src','velho.png')
            }  
        }else{
            genero = "Mulher"
            if(idade <= 12){
                imagem.setAttribute('src', 'menina.png')
            }else if((idade >=13)&&(idade <=50)){
                imagem.setAttribute('src','mulher.png')
            }else{
                imagem.setAttribute('src','velha.png')
            }  
        }
    }
    tela.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    tela.appendChild(imagem)    
}