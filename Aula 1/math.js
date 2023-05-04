// Math é um OBJETO (igual o console)
// de forma análoga, é provida de métodos (funções) prontas!
// então, acessamos da forma Math.metodo()

// Math.ceil(x)
// retorna a função teto de x (menor número inteiro maior ou igual a x)
console.log(Math.ceil(3.14))

// Math.floor(x)
// retorna o maior número inteiro menor ou igual a x
console.log(Math.floor(3.14))


// Math.round(x)
// retorna o valor arredondado de x
console.log(Math.round(3.5))


// Math.PI
// é o número pi (3.14159265...)
// note: não é um método, pois não é da forma Math.metodo()
// é uma propriedade, da forma Math.propriedade
console.log(Math.PI)

// Math.max(x1, x2, x3...) ou Math.min(y1, y2, y3...)
// retorna o máximo/mínimo dos argumentos passados
console.log(Math.max(3, 4, -50, 60, 1500))
console.log(Math.min(3, 4, -50, 60, 1500))

// Math.random() 
// retorna um número aleatório entre 0 e 1
console.log(Math.random());
let max, min;
let car = Math.floor(Math.random()*(max - min) + min)
console.log(car)


// Infinity
// é possível dividir por 0
1/0