// concatenação (entre STRINGS)
// símbolo + entre strings
let string1 = 'Hello '
let string2 = 'World!'

let concatenation = string1 + string2
console.log(concatenation)
// operações usuais (entre números)
let num1 = 5
let num2 = 2
// soma (+)
console.log(num1 + num2);
// multiplicação (*)
console.log(num1 * num2);
// subtração (-)
console.log(num1 - num2);
// divisão normal (/)
console.log(num1 / num2);
// potenciação (**)
console.log(num1 ** num2);
// raiz quadrada!
console.log(num1 ** (1/2));
// resto (%)
console.log(num1 % num2)
// incrementos (++)

// x++

let x = 5;

console.log(x)
console.log(x++)
console.log(x)


/*
nesse caso, o console.log primeiro lê o x, e imprime o x, e somente depois 
altera seu valor para (x + 1)
*/

let y = 10;
console.log(y)
console.log(++y)
console.log(y)


/*
nesse caso, primeiro é realizada a operação de incremento em si,e, já alterado 
o valor da variável, o console.log a lê e a imprime já com seu novo valor
*/

let str = 'A principal característica do material piezoelétrico é a geração de cargas elétricas ao sofrer algum tipo de deformação mecânica, podendo ser utilizado como biomaterial em processos de osseointegração na área de Medicina, por exemplo. O foco deste trabalho é desenvolver um biomaterial cerâmico piezoelétrico promissor a base de Niobato de Potássio e Sódio (KNN). As amostras foram preparadas pelo método de reação em estado sólido em duas etapas: calcinadas em 850°C e duas rotas para sinterização; a 900°C e 1050°C. Em seguida, as amostras foram caracterizadas pelos testes de Densidade, Difração de raio X (DRX), Microscopia Eletrônica de Varredura (MEV), Espectroscopia de Energia Dispersiva (EDS), de Flexão e, o principal, o teste de Piezeletricidade. Os resultados mostraram que as amostras sinterizadas a 1050°C tiveram propriedades superiores e se pode concluir que apresentaram propriedades piezoelétricas satisfatórias para uma futura aplicação como biomaterial, cumprindo os objetivos desejados'
let dividido = str.split(' ');
console.log(dividido)