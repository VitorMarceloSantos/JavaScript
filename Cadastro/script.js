var bancoDados = [] //cria um array global para armazenar as informações

function confirmar_cadastro(){
    let nome = document.querySelector("#nome_txt").value;
    let cpf = Number(document.querySelector("#cpf_txt").value);
    let anoNascimento = Number(document.querySelector("#ano_txt").value);
    let endereco = document.querySelector("#endereco_txt").value;

    class Cadastro{
        constructor(nome, cpf, anoNascimento, endereco){
            this.nome = nome;
            this.cpf = cpf;
            this.anoNascimento = anoNascimento;
            this.endereco = endereco
        }

        get imprimirNome(){
            return this.nome;
        }
        get imprimirCpf(){
            return this.cpf;
        }
        get imprimirAnoNascimento(){
            return this.anoNascimento;
        }
        get imprimirEndereco(){
            return this.endereco;
        }
        set ModificarNome(value){
            this.nome = nome;
        }
        set ModificarCpf(value){
            this.cpf = cpf;
        }
        set ModificarAnoNascimento(value){
            this.anoNascimento = anoNascimento;
        }
        set ModificarEndereco(value){
            this.endereco = endereco;
        }
    }

    bancoDados.push(new Cadastro(nome, cpf, anoNascimento, endereco))
    console.log(bancoDados)
}