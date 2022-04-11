//Crie uma classe que simula um carrinho de compras de um ecommerce, propriedades: itens, quantidade total, valor total. Metodos: adicionar e remover itens.
class Loja{
    constructor(itens, quantidade, total){
        this.itens = itens,
        this.quantidade = quantidade,
        this.total = total
    }
    adicionar(value, total){
        this.quantidade += value, 
        this.total += total
    }
    remover(value, total){
        this.quantidade -= value, 
        this.total -= total 
    }
    get verCarrinho(){
        return `Itens: ${this.itens}
                Quantidade: ${this.quantidade}
                Total: ${this.total}`
    }
}
let comprador = new Loja("Perfume", 2, 100)
comprador.adicionar(1,60)
console.log(comprador.verCarrinho)
comprador.adicionar(2, 120)
console.log(comprador.verCarrinho)
comprador.remover(1,80)
console.log(comprador.verCarrinho)