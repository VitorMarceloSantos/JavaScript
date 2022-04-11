function inserirTexto(){
    let texto = document.getElementById("txtbtn") //irá receber o conteúdo da caixa de texto
    let resultado = document.getElementById("resultado") // irá apresentar o que foi digitado

    
    resultado.innerHTML = texto.value

}
