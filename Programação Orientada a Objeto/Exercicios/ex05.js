//Crie uma classe conta bancaria.Propriedades - saldo na conta corrente, saldo conta poupança e juros poupança. Metodos - deposito, saque e transferencia de saldo da poupança para a corrente. Crie uma conta especial que herda todos os atributos da conta bancaria e os juros será dobrado.

class ContaNormal{
    constructor(saldocorrente, saldopoupanca){
        this.saldocorrente = saldocorrente,
        this.saldopoupanca = saldopoupanca
        this.jurospoupanca = 0.01 
    }
    depositoCorrente(valueCorrente){
        this.saldocorrente += valueCorrente
    }
    depositoPoupanca(valuePoupanca){
        this.saldopoupanca += valuePoupanca 
    }
    saqueCorrente(valueCorrente){
        if(this.saldocorrente >= valueCorrente){
            this.saldocorrente -= valueCorrente
        }else{
            console.log(`Impossível realizar o saque. Saldo Atual: ${this.saldocorrente}`)
        }
    }
    saquePoupanca(valuePoupanca){
        if(this.saldopoupanca >= valuePoupanca){
            this.saldopoupanca -= valuePoupanca
        }else{
            console.log(`Impossível realizar o saque. Saldo Atual: ${this.saldopoupanca}`)
        }
    }
    transferencia(){
        if(this.saldopoupanca > 0){
            this.saldocorrente += this.saldopoupanca
        }else{
            console.log(`Impossível realizar a transferencia. Saldo ${this.saldopoupanca}.`)
        }
        
    }
    get imprimir(){
        return `Saldo Poupança: ${this.saldopoupanca} - Saldo Corrente: ${this.saldocorrente}`
    }
}
class ContaEspecial extends ContaNormal{
    constructor(saldocorrente, saldopoupanca){
        super(saldocorrente, saldopoupanca)
        this.saldocorrente = saldocorrente,
        this.saldopoupanca = saldopoupanca
        this.jurospoupanca = 0.02 
    }
    get imprimir(){
        return `Saldo Poupança: ${this.saldopoupanca} - Saldo Corrente: ${this.saldocorrente}`
    }
}

let cliente = new ContaNormal(100, 200)
console.log(cliente.imprimir)
cliente.depositoCorrente(50)
cliente.depositoPoupanca(150)
console.log(cliente.imprimir)
cliente.saqueCorrente(200)
cliente.saquePoupanca(350)
console.log(cliente.imprimir)
cliente.transferencia(100)
cliente.saqueCorrente(100)
console.log(cliente.imprimir)

let cliente2 = new ContaEspecial(500, 800)
console.log(cliente2.imprimir)