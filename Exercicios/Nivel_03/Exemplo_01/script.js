let numero_inscricao = []; // VETOR global para armazenar os dados cadastrados
/*O VETOR DEVE SER GLOBAL(ESCOPO), POIS SERÁ UTILIZADO POR MAIS DE UMA FUNÇÃO*/ 

function Alterar_btn_02(){
    let alterar = document.getElementById("finalizar_btn");
    
    alterar.style.background = "#F2B3BFab";
}

function Voltar_btn_02(){
    let alterar = document.getElementById("finalizar_btn");

    alterar.style.background = "";
}

function Alterar_btn_01(){
    let alterar = document.getElementById("criar_cadastro_btn");
   
    alterar.style.background = "#F2B3BFab";
}

function Voltar_btn_01(){
    let alterar = document.getElementById("criar_cadastro_btn");
    
    alterar.style.background = "";
}

function Criar_cadastro(){
    /*!!!!!IMPORTANTE !!!!
        UTILIZA .value NO FINAL DA ATRIBUIÇÃO PARA SE REFERIR QUE SERÁ PASSADO O CONTEUDO QUE ESTÁ DENTRO DA VARIAVEL(INPUT)
    */ 
    let inp_nome = (document.getElementById("nome_txt")).value;
    let inp_cpf = Number(document.getElementById("cpf_txt").value); // converter para numero(Number.value)
    let inp_endereco = (document.getElementById("endereco_txt")).value;
    

    class Cadastro{ //criando o metodo construtor
        constructor(nome, cpf, endereco){
            this.nome = nome;
            this.cpf = cpf;
            this.endereco = endereco;
        }
    }

     numero_inscricao.push(new Cadastro(inp_nome, inp_cpf,inp_endereco));// criando objeto cadastro
}


function Finalizar(){
    let resultado = document.getElementById("apresentacao");
   

    for (contador in numero_inscricao){
        resultado.innerHTML += `<p>------------------CADASTRO: N°${(contador)}--------------------</p>`;
        resultado.innerHTML += `<p>Resultado: ${numero_inscricao[contador].nome}</p>`;
        resultado.innerHTML += `<p>Resultado: ${numero_inscricao[contador].cpf}</p>`;
        resultado.innerHTML += `<p>Resultado: ${numero_inscricao[contador].endereco}</p>`;
    }
}
