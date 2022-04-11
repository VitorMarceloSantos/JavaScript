//Detecta o tipo de dado passado e retorne : Number, boolean, String...Cada um uma função
//Funções tipo Arrow
 let numero = () => {console.log("Tipo: Number")}
 let booleano = () => {console.log("Tipo: Boolean")}
 let caracteres = () => {console.log("Tipo: String")} 
//Funções

let entrada;
entrada = true
let verif = typeof(entrada)

switch(verif){
    case "number":
        numero()
        break
    case "boolean":
        booleano()
        break
    case "string":
        caracteres()
        break
}
