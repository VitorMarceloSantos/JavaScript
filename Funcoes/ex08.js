//Receba uma String e se tiver mais de 10 caracteres string muito longa.

function tamanho(quant){
    if(quant <= 10){
        console.log(`A String possui ${quant} caracteres, passou no teste.`)
    }else{
        console.log("A String possui mais de 10 caracteres, não passou no teste.")
    }
}

let str = "Bonito."
tamanho(str.length)