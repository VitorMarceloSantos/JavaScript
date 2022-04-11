/*Rest Operator irá receber indefinidos parâmentros, e vai virar um array. O parâmetro é definido por: ...nome(três pontos e nome do parãmetro)*/

function testando(...param){ /* Não tem um limite estabelicido de parâmetros */  /*Os parâmetros recebidos vão transformar no array param[] */
    for( let i=0; i< param.length; i++){
        console.log(`Numeros: ${param[i]}`)
    }
    console.log(param) /*Imprimir os array param[] */
}

let num = 10
let num1 = 9
let num2 = 8
let num3 = 7
let num4 = 6 

testando(num,num1,num2,num3,num4) /* Chamando a função, e passando uma quantidade indefinada de parâmentros, pode passar  quantos quiser*/ 