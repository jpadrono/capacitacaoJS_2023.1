/* ARRAY */
// - multiple types
// - multi-dimensional array (nesting)
// - .push(), .pop(), .unshift(), .shift()  
// - spread operator
// - destructuring assignment
// - .length
// - .splice(), .slice()
// - delete, indexOf()


//         0     1        2                  3              4
let arr = [1, 'string', true, {nome: 'joão', idade:'20'}, 1900];
// arr.push(1900); 
// adiciona no final
// arr.unshift(1899); // adiciona no inicial
// let saiu = arr.pop(); //remove do final
// let saiuTbm = arr.shift(); // remoce no início

let arrMaior = ['outro elemento',...arr, 'novo elemento'];

let a = 8, b = 6;

[a, ...b] = arr; 

let meuNome = arr[3].nome

let ano = arr[arr.length - 1] // arr[5]

delete arr[4];

console.log(arr) 