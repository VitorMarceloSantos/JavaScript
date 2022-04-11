let exemplo = { "nome":"Vitor", "idade":"30", "sexo":"masc"} /*Formato JSON - sempre utiliza aspas duplas e não pode ter comentarios*/

let conversao = JSON.stringify(exemplo) /*Convertendo um arquivo JSON para uma String */ 
console.log(conversao)
let arquivojson = JSON.parse(conversao) /*Convertendo uma String para um arquivo JSON */
console.log(arquivojson)