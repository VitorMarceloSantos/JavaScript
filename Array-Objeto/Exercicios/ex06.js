// crie dois arrays um cmai de 5 elementos e outro com menos, e faça uma funçã que verifique o numero d elementos

let arr1 = [1,2,3,4]
let arr2 = [20, 22, 24, 26, 28, 29, 30]

function quantidadeElementos(arr){
    if(arr.length > 5){
        console.log(`O array possui ${arr.length} elementos.`)
    }else{
        console.log("Array contem menos que 5 elementos.")
    }
}
quantidadeElementos(arr1)
quantidadeElementos(arr2) 