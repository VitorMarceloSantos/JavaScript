let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box"); //Usar o SelectorALL para selecionar todas as box's.
let buttons = document.querySelectorAll("#buttons-container button");//Usar o SelectorALL
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer; //Escolher Jogador

//Contador de Jogadas  
let player1 = 0;
let player2 = 0;

//Evento: 2 player ou Inteligência Artificial
console.log(buttons)
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        secondPlayer  = this.getAttribute("id");
        for(let j = 0; j < buttons.length; j++){ //Esconder os botões após clicar
        buttons[j].style.display = "none";
        }
        setTimeout(function(){
            let container = document.querySelector("#container-principal");
            container.classList.remove("hide"); //O tabuleiro aparece após 1 segundo.
        }, 1000);
    });
}

//Checar quem vai jogar
function checkEl(player1, player2){
    if(player1 == player2){
        //x 
        el = x;
     }else{
         //O
         el = o;
     }
     return el;
}

//Checar quem venceu
function checkWinCondition(){
    let b1 = document.getElementById("block-1");  
    let b2 = document.getElementById("block-2"); 
    let b3 = document.getElementById("block-3"); 
    let b4 = document.getElementById("block-4"); 
    let b5 = document.getElementById("block-5"); 
    let b6 = document.getElementById("block-6"); 
    let b7 = document.getElementById("block-7"); 
    let b8 = document.getElementById("block-8"); 
    let b9 = document.getElementById("block-9"); 
    
    //Horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 &&b3.childNodes.length > 0){
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == "x" && b2Child == "x" && b3Child == "x"){
            //x Venceu
            declareWinner("x");
        }else if(b1Child == "o" && b2Child == "o" && b3Child == "o"){
            //o Venceu
            declareWinner("o");
        }
    }
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 &&b6.childNodes.length > 0){
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == "x" && b5Child == "x" && b6Child == "x"){
            //x Venceu
            declareWinner("x");
        }else if(b4Child == "o" && b5Child == "o" && b6Child == "o"){
            //o Venceu
            declareWinner("o");
        }
    }
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 &&b9.childNodes.length > 0){
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == "x" && b8Child == "x" && b9Child == "x"){
            //x Venceu
            declareWinner("x");
        }else if(b7Child == "o" && b8Child == "o" && b9Child == "o"){
            //o Venceu
            declareWinner("o");
        }
    }
    //Vertical
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 &&b7.childNodes.length > 0){
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == "x" && b4Child == "x" && b7Child == "x"){
            //x Venceu
            declareWinner("x");
        }else if(b1Child == "o" && b4Child == "o" && b7Child == "o"){
            //o Venceu
            declareWinner("o");
        }
    }
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 &&b8.childNodes.length > 0){
        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == "x" && b5Child == "x" && b8Child == "x"){
            //x Venceu
            declareWinner("x");
        }else if(b2Child == "o" && b5Child == "o" && b8Child == "o"){
            //o Venceu
            declareWinner("o");
        }
    }
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 &&b9.childNodes.length > 0){
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == "x" && b6Child == "x" && b9Child == "x"){
            //x Venceu
            declareWinner("x");
        }else if(b3Child == "o" && b6Child == "o" && b9Child == "o"){
            //o Venceu
            declareWinner("o");
        }
    }
    //Cruzado
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 &&b9.childNodes.length > 0){
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == "x" && b5Child == "x" && b9Child == "x"){
            //x Venceu
            declareWinner("x");
        }else if(b1Child == "o" && b5Child == "o" && b9Child == "o"){
            //o Venceu
            declareWinner("o");
        }
    }
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 &&b7.childNodes.length > 0){
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == "x" && b5Child == "x" && b7Child == "x"){
            //x Venceu
            declareWinner("x");
        }else if(b3Child == "o" && b5Child == "o" && b7Child == "o"){
            //o Venceu
            declareWinner("o");
        }
    }
    //Deu velha, ou seja, ninguem ganhou
    let contador = 0;
    for(let i = 0; i< boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            contador++;
        }
    }
    if(contador == 9){
        declareWinner(contador)
    }
}

//Limpa o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner){
    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardY = document.querySelector("#scoreboard-2");
    let msg = "";

    if(winner == "x"){
      scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
      msg = " O jogador 1 Venceu. Parabéns."
    } else if(winner == "o"){
        scoreboardY.textContent =  parseInt(scoreboardY.textContent) + 1;
        msg = " O jogador 2 Venceu. Parabéns."
    }else if(winner == 9){
        msg = "Deu Velha!"
    }
    
    //Exibir mensagem
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide")

    //Esconder mensagem
    setTimeout(function(){
        messageContainer.classList.add("hide");
    }, 3000); //Vai esconder a mensagem após 3 segundo.

    //Zerar as jogas após o termino do jogo
    let player1 = 0;
    let player2 = 0;

    //Remover os X e O marcados na partida anterior
    let boxesToRemove = document.querySelectorAll(".box div");

    for(let i = 0; i< boxesToRemove.length; i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}

//A.I. jogando - Random
function computerPlay(){
    let cloneO = o.cloneNode(true);
    
    //Somente vai preencher se o filho estiver  vazio
    while(true){
        let randomNumber = Math.floor(Math.random()*9) //Vair gerar numeros aleatórios de 0 a 8, pos são 9 opções
        console.log(randomNumber)
        if(boxes[randomNumber].childNodes[0] == undefined){ //Só vai entrar se o elemento estiver vazio
            boxes[randomNumber].appendChild(cloneO);
        }else{
            computerPlay()
        }
        break; //após preencher uma o tabuleiro uma vez, sai da função.
    }


    /*for(let i = 0; i< boxes.length; i++){
        let randomNumber = Math.floor(Math.random()*10);
        console.log(randomNumber)
        if(boxes[i].childNodes[0] == undefined){ //O filho da div box na posiçao [i] estiver vazio(undefined)
          if(randomNumber <= 1){
              boxes[i].appendChild(cloneO);
              counter++;
              break;
          }else{ //checagem de quantas estão preenchidas
              filled++;
          }  
        }
    }
    if(counter == 0 && filled < 9){
        computerPlay();
    }*/
}

//Adicionando Evento de Click
for(let i = 0; i< boxes.length; i++){
    //Clica na caixa
    boxes[i].addEventListener("click", function(){
        let el = checkEl(player1,player2)  //Chama a função
        if(this.childNodes[0] == undefined){ //Só vai entrar se o elemento estiver vazio
            if(player1 == player2){ //Computar jogada
                player1 +=1;
                if(secondPlayer == "ai-player"){
                  // O segundo player não vai marcar, pois será a inteligencia artificial que fará a jogada.
                  computerPlay();
                  player2 ++;
                }
            }else{
                player2 +=1;
            } 
        let cloneEl = el.cloneNode(true);
        this.appendChild(cloneEl);   
        }
        checkWinCondition(); //Chamando a Função
    });
}

