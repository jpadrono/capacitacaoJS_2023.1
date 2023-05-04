/* ARRAY */
// - multiple types
//arrays podem ter variáveis de diferentes tipos
//         number , string, boolean,      object,            number
let arr = [  1,   'string', true, {nome: 'joão', idade:'20'}, 1900];

// - multi-dimensional array (nesting)
//podemos ter arrays dentro de arrays

let nesting = [['array', 1], ['array', 2, ['array', 2.1]]];
// - .push()
//adiciona o elemento no final da array
arr.push('final'); 
console.log(arr)// [  1,   'string', true, {nome: 'joão', idade:'20'}, 1900, 'final']

// - .unshift()
//adiciona o elemento no início da array
arr.unshift('inicio');
console.log(arr)// ['inicio',  1,   'string', true, {nome: 'joão', idade:'20'}, 1900, 'final']



// - .pop()
//remove o elemento do final da array e retorna o elemento removido
let saiu = arr.pop(); //saiu == 'final'
console.log(arr)//['inicio', 1,'string', true, {nome: 'joão', idade:'20'}, 1900]


// - .shift()
//remove o elemento do início da array e retorna o elemento removido
let saiuTbm = arr.shift();// saiu == 'início'
console.log(arr)//[  1,   'string', true, {nome: 'joão', idade:'20'}, 1900]


// - spread operator

// - destructuring assignment
// - .length
// - .splice(), .slice()
// - delete, indexOf()



let arrMaior = ['outro elemento',...arr, 'novo elemento'];

let a = 8, b = 6;

[a, ...b] = arr; 

let meuNome = arr[3].nome

let ano = arr[arr.length - 1] // arr[5]

delete arr[4];

console.log(arr) 