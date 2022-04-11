//crie um arquivo JSON com 3 propriedas e atribua a ele uma variável, acesses as propriedades

let arquivoJSON = {"nome":"vitor", "idade":"30", "sexo":"masculino"}

let { nome:vnome, idade:vidade, sexo:vsexo} = arquivoJSON //Transformando os elementos em variaveis

console.log(vnome)
console.log(vidade)
console.log(vsexo)