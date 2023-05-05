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
//forma rápida de copiar uma array
let copiaArr = [...arr];
let arrMaior = ['outro elemento',...arr, 'novo elemento'];

// - destructuring assignment
//forma de atribuir valores baseado na posição do elemento na array
let [x, y] = arr;//x == arr[0], y == arr[1]
let [ , , z] = arr;//z == arr[3]
//com o destructuring assignment é possível trocar o valor de duas variáveis da
// seguinte forma:
let a = 8, b = 6;
[a, b] = [b, a]// a = 6, b = 8
//tbm podemos usar o spread operator pra atribuir valores a uma variável
let arrCortada= [];
[, , ...arrCortada] = arr;// arrCortada recebe todos os valores de arr, a partir
//do terceiro elemento
console.log(arrCortada)//[ true, {nome: 'joão', idade:'20'}, 1900]

// - .length
// propriedade que diz o tamanho da array
//perceba que .length é uma propriedade e por isso não escrevemos .length();
console.log(arr.length) // 5
//podemos usar a propriedade

// - .splice()
//remove e retorna uma parte da array da seguinte forma
// .splice(começo, número de elementos a serem removidos,)
console.log(arr.splice(1,2));//['string', true]
console.log(arr);            //[1, {nome: 'joão', idade:'20'}, 1900]
//splice(1,2) removeu 2 elementos de arr a partir do elemento de index 1
//perceba que esse método modifica a array original

//.splice() recebe um terceiro argumento: elementos que queremos adicionar
arr.splice(1,1,'novo elemento');
console.log(arr);//[1,'novo elemento', 1900]

// .slice()
//O método slice() retorna uma cópia de parte de um array a partir de um 
//subarray criado entre as posições início e fim  (fim não é incluído) de 
//um array original. O Array original não é modificado
console.log(arr.slice(0,2));

// - delete
//deleta o elemento da arr, criando um espaço vazio no lugar
delete arr[1];
console.log(arr)//[1, <1 empty item>, 1900]
// indexOf()
//retorna o primeiro índice no qual o elemento pode ser encontrado na array
//retorna -1 caso não tenha o elemento
console.log(arr.indexOf(1))// 0
console.log(arr.indexOf('esse não existe'))// -1



