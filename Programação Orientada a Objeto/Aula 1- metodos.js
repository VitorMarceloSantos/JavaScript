//Metodos: proriedades que servem como funções, invocamos os métodos da mesma maneira que funções.

let cachorro = {
    latir: function(){console.log("Auauauauau")}, 
    rosnar: () => {console.log("grgrrgrrrr")}
}
cachorro.latir()
cachorro.rosnar()

let pessoa ={
    nome: '',
    setNome: function(novoNome){
        this.nome = novoNome
    },
    getNome: function(){
        return this.nome
    }
}

pessoa.setNome("Vitor")
console.log(pessoa.getNome())