/* FUNÇÃO */
//executa uma sub-rotina quando é chamado e retorna um valor
// por padrão, se não for passado um return, a função retorna undefined
function soma(){
    return 2 + 3;
}
// console.log(soma());
//parâmetros
function somaMelhor(x, y){
    return x + y;
}

// console.log(somaMelhor(4, 7));
//argumentos e objeto arguments 
function SomasMultiplas(){
    let soma = 0;
    for(let num of arguments){
        soma += num;
    }
    return soma;
}

// console.log(SomasMultiplas(2, 6, 8, 10, 5, -4, 1));


//arguments não está definido para arrow functions
//para isso usamos o rest operator

//Function expression 
let variavel = function(x, y) {
    return x  + y
}

// console.log(variavel(3, 6))

//Arrow functions
//um jeito mais simples de declara uma função
let arrow = (x, y) => {
    return x  + y
}

// console.log(arrow(3, 6))
//podemos simplificar ainda mais?
// quando a função tem apenas o return, podemos omiti-lo junto com as chaves
let arrowSimplificado = (x, y) => x + y

// console.log(arrowSimplificado(3, 9))
//mais?
//se a função só receber um parâmero, n precisamos do parênteses

let quadrado = x => x**2;
// console.log(quadrado(5))

//Immediately Invoked Function Expression (IIFE)

(function fazNada(){
    console.log('rodei')
    return
})()



