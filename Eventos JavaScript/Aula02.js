//Quando criamos eventos, temos a opção de utilizar um argumento opcional, que é chamando de objeto do evento. Ele é criado automaticamento.

function msg(e){
    console.log(e)
}

let btn = document.querySelector("#btn")

btn.addEventListener("click", msg)  //irá mostrar diversas informações a  respeito do botão. !!! Deve ser aberto no inspecionar do navegador.!!!