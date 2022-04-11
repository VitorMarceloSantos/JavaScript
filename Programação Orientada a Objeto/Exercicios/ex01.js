//crie uma classe que simula uma conta no banco, deve conter a propriedade saldo, e os metodos saque e deposito.
class Banco{
    constructor(saldoInicial){
        this.saldo = saldoInicial // propriedade Saldo
    }
    deposito(){
        console.log(`Valor a ser depositodo: RS 100,00.`)
        this.saldo += 100
    } 
    saque(){
        console.log(`Valor do saque: RS 50,00.`)
        this.saldo -= 50
    }
    set alterarSaldo(value){
        this.saldo += value
    }
    get verSaldo(){
        return `O saldo atual é: ${this.saldo}`
    }
}
let cliente = new Banco(500) // Cria o objeto cliente e passa o valor de 500 como parametro
cliente.deposito()
cliente.saque()
console.log(cliente.verSaldo)
