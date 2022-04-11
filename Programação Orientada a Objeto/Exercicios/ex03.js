//Crie um objeto que simule o endereço de um cliente: Propriedades - rua, bairro, cidade e estado. Metodos para atualizar todas as propriedades.

class Endereco{
    constructor(rua, bairro, cidade, estado){
        this.rua = rua,
        this.bairro = bairro,
        this.cidade = cidade,
        this.estado = estado
    }
    set altRua(valueRua){
        this.rua = valueRua
    }
    set altBairro(valueBairro){
        this.bairro = valueBairro
    }
    set altCidade(valueCidade){
        this.cidade = valueCidade
    }
    set altEstado(valueEstado){
        this.estado = valueEstado
    }
    get imprimir(){
        return `Rua: ${this.rua} - Bairro: ${this.bairro} - Cidade: ${this.cidade} - Estado: ${this.estado}`
    }
}
let cadastro = new Endereco("Coronel Anicesio", "Paranaiba", "Carmo do Paranaiba", "MG")
console.log(cadastro.imprimir)
cadastro.altRua = "Francisco de Queiroz"
cadastro.altCidade = "Patos de Minas"
console.log(cadastro.imprimir)
cadastro.altBairro = "Centro"
cadastro.altEstado = "BA"
console.log(cadastro.imprimir)