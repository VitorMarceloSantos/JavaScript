// Uma forma de encontrar padrões em uma string. Por exemplo, validar se tó tem números. Tambéma chamadas de regex.
//As expressoes regulares são um tipo de objeto. Podemis instanciar de duas formas: New RegExp   e   /.../
//Exemplo: let reg1 = new RegExp("test")   Exemplo: let reg2 = /test/

//Depois da definição do padrão pro meio da regex. Utilizamos o método test() para verificar se o padrão é retornado; Com isso vamos receber de resposta true or false. Exemplo: 
//  Metodo: /.../
console.log(/testando/.test("ttttestandooooo")) //True : o padrão testando estão dentro do texto(string)
console.log(/testando/.test("asdateasera"))//False: o padrão testando não se encontra dentro do texto(string)
console.log(/vitor/.test("vvitorrrr"))//True : o padrão vitor estão dentro do texto(string)

//  Metodo: new RegExp
let reg1 = new RegExp("bola")
console.log(reg1.test("Tem a palavra bola?")) //True
console.log(reg1.test("O dia está bonito"))//False