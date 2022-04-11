function analisador(){
    let resultado = document.getElementById("div_01");
    let resultado_02 = document.getElementById("div_02");
    let relogio = new Date;
    let dia_semana = relogio.getDay(); //OBSERVAÇÃO: COLOCAR PARENTESES
    let hora = relogio.getHours(); //OBSERVAÇÃO: COLOCAR PARENTESES
    let minutos = relogio.getMinutes();
    let dia = relogio.getDate();
    let mes = relogio.getMonth();
    let ano = relogio.getFullYear(); //OBSERVAÇÃO: COLOCAR PARENTESES
    let img = document.createElement("img"); //criando a tag imagem
    img.setAttribute("id","foto");

    switch(dia_semana){ //escolhendo o dia da semana
        case 0: resultado.innerHTML += `<p>Dia: Domingo </p>`;
        break;
        case 1: resultado.innerHTML += `<p>Dia: Segunda-Feira </p>`;
        break;
        case 2: resultado.innerHTML += `<p>Dia: Terça-Feira </p>`;
        break;
        case 3: resultado.innerHTML += `<p>Dia: Quarta-Feira </p>`;
        break;
        case 4: resultado.innerHTML += `<p>Dia: Quinta-Feira </p>`;
        break;
        case 5: resultado.innerHTML += `<p>Dia: Sexta-Feira </p>`;
        break;
        case 6: resultado.innerHTML += `<p>Dia: Sábado </p>`;
        break;
    }

    if(minutos <= 9){ //Horas com zero a esquerda
        resultado.innerHTML += `<p>Horas: ${hora}:0${minutos}</p>`;
    }else{
        resultado.innerHTML += `<p>Horas: ${hora}:${minutos}</p>`;
    }
    
    resultado.innerHTML += `<p>Data: ${dia}/${(mes)+1}/${ano}</p>`;

    if(hora >= 6 && hora < 12 ){
        resultado_02.innerHTML += `<p>Bom dia. Que você tenha um excelente dia.</p>`;
        img.setAttribute("src","manha.png");
        document.body.style.background = "#5CDBD4" // alterando o background
        
    }else if(hora >= 12 && hora < 18){
        resultado_02.innerHTML += `<p>Boa tarde. Que tarde ensolarada.</p>`;
        img.setAttribute("src","tarde.png");
        document.body.style.background = "#DB8E5C" // alterando o background
        
    }else {
        resultado_02.innerHTML += `<p>Boa noite. Que tenha uma ótima noite de sono.</p>`;
        img.setAttribute("src","noite.png");
        document.body.style.background = "#33408F" // alterando o background
    }
    resultado_02.appendChild(img)   //adicionando o elemento imagem
}