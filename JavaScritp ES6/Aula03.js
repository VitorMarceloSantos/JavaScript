/* Map: percorre todos os elementos, quando utilizamos  MODIFICAMOS os dados do array. */
const products = [
    {name: "camisa", price: 10.99, category: "Roupas"},
    {name: "chaleira", price: 19.00, category: "Eletro"},
    {name: "fogão", price: 50.99, category: "Eletro"}
]

products.map((products) => {
    if(products.category == "Roupas"){ 
        products.onsale = true //adiciona essa categoria
    }else if(products.category == "Eletro"){ 
        products.volts = 110; //adiciona essa categoria
    }
});
console.log(products)