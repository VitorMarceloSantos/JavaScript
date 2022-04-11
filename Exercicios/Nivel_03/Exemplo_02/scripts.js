var array_dados = [] // array universal
var array_cpf = [];



function Novo_cadastro(){
    let nome_let = document.getElementById("nome_input").value;
    let cpf_let = Number(document.getElementById("cpf_input").value);
    let nascimento_let = Number(document.getElementById("nascimento_input").value);
    let sexo_let = document.getElementsByName("sexo_rad"); //apontando para o input type: radio
    let interesse_let = document.getElementsByName("interesse_checkbox"); // apontando para o input type:checkbox
    let array_interesse = []; // irá armazenar as areas de interesse

    class Cadastro { //Metodo construtor
        constructor(nome, cpf, nascimento, sexo, interesse){
            this.nome = nome;
            this.cpf = cpf;
            this.nascimento = nascimento;
            this.sexo = sexo;
            this.interesse = interesse;
        } 
    }

     //Verificar se já está cadastrado(Obs: utiliza o cpf como base) 
    if(array_cpf.indexOf(cpf_let)===-1){ //se for igual a -1 que dizer que não encontrou nada.
        
        if(sexo_let[0].checked){ //irá verificar qual o sexo, e caso seja masculino(0)
                sexo_let = sexo_let[0].value;
        }else{
             sexo_let = sexo_let[1].value;
        }
        
        for(let i =0; i<interesse_let.length; i+=1){ // irá armazenar em novo array as areas de interrese de cada usuario
            if(interesse_let[i].checked){
                array_interesse.push(interesse_let[i].value) //sempre lembrar de colocar o value
            }
        }
        
        array_dados.push(new Cadastro(nome_let, cpf_let, nascimento_let, sexo_let, array_interesse)); //criando um objeto, e passando os valores
        array_cpf.push(cpf_let); //armazena apenas o cpf para verificar se já foi cadastrado   
        window.alert("Cadastro Realizado com sucesso.");
    }else{
        window.alert("[ERRO] - Usuário já cadastrado.");
    }
}


function Finalizar(){
    let resultado_let = document.getElementById("resultado");
    

    for(i in array_dados){
        resultado_let.innerHTML += `<p>Número Cadastral: ${array_dados[i].cpf}</p>`;
        resultado_let.innerHTML += `<p>Nome: ${array_dados[i].nome}</p>`;
        resultado_let.innerHTML += `<p>CPF: ${array_dados[i].cpf}</p>`;
        resultado_let.innerHTML += `<p>Data Nascimento: ${array_dados[i].nascimento}</p>`;
        resultado_let.innerHTML += `<p>Sexo: ${array_dados[i].sexo}</p>`;
        resultado_let.innerHTML += `<p>Interesse: ${array_dados[i].interesse}</p>`;
        resultado_let.innerHTML += `--------------------------------------------`
    }

}