/* NÚMEROS */

// Number() || +
//normalmente recebemos as variáveis como strings, então devemos transforma-las
//para número. Podemos fazer isso de 2 formas
let imput1 = '2';
let imput2 = '5';

console.log(Number(imput1) + Number(imput2))//7
console.log(+imput1 + +imput2)//7

// .toString()
//transforma o número em string
let numero1 = 10;
let numero2 = 0;

console.log(numero1.toString()+ numero2.toString());//'100'

// .toFixed()
//indica as cadas de precisão do meu float
let float = 3.1415;
console.log(float.toFixed(2))//3.14
//toFixed() arredonda o número
console.log(float.toFixed(3))//3.142

//Number é um objeto do JavaScript assim como console e Math
//logo possui métodos e propriedades

// Number.isInteger(), Number.isNaN()
//verifica se o número é inteiro ou Not a Number respectivamente
console.log(Number.isInteger(200))//true
console.log(Number.isInteger(200.4))//false
console.log(Number.isNaN(+'ola'))//true
console.log(Number.isNaN('ola'))//false 'ola' é uma string e não um NaN
console.log(Number.isNaN(3))//false


//Number.MAX_VALUE
//maior valor possível em JavaScript
console.log(Number.MAX_VALUE)//1.7976931348623157e+308

// Number.MIN_VALUE
//menor valor maior positivo
console.log(Number.MIN_VALUE)//5e-324


// IEEE 754 double precision floating point number
//0.1 + 0.2 == ??
// parseFloat(), parseInt()
//analisa o argumento e retorna um float ou inteiro, respectivamente, na base
//específica

let x = '1111';
let y = '184 ele para de ler quando encontra o primeiro caractere desconhecido';

console.log(parseInt(x, 2))// 15, leu a string na base binária
console.log(parseInt(y))//184