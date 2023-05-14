/* Higher_Order Functions */
// Filter, map reduce
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// Filter: arrayN -> arrayM <== N
// callbackFilter(valor, indice, array) requer que retorne um boolean

let callbackFilter = (valor, indice, array) => {
    return valor > 10
}
let numerosGrandes = numeros.filter(callbackFilter)
// normalmente usa-se uma função anônima
let numerosPequenos = numeros.filter(valor => valor < 7 )
// console.log(numerosPequenos)

// Map: arrayN -> array'N
// callbackFilter(valor, indice, array)
//modificar todos os elementos da array
let quadrados = numeros.map(valor => valor**2 )

// console.log(quadrados)
// reduce: arrayN -> numero/string...
// callbackFilter(acumulador, valor, indice, array)
// array.reduce(função, valorInicial)
let soma = numeros.reduce((acumulador, valor) => {
    acumulador += valor
    return acumulador
}, -200)

console.log(soma)
//iniciar o acumulador

let somaPares = numeros.reduce((acc, valor) => {
    console.log(acc, valor)
    if(valor % 2 == 0){
        acc += valor
    }
    return acc
}, 0)
// console.log(somaPares)

//object.filter().map().reduce();

let zaralho = numeros.filter(valor => valor > 10).map(valor => valor**2).reduce((acc, valor) => acc += valor )

// console.log(zaralho)