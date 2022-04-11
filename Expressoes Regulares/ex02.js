//Crie uma regex que só aceite strings terminadas em ID
let palavra = /\d+ID\b/   //OBS: QUANDO COLOCAR O /b SIGNIFICA QUE O FIM TEM COM ID
console.log(palavra.test("234234ID")) //True
console.log(palavra.test("vitorID")) //False (não tem numero)
console.log(palavra.test("vit2324ID")) //True