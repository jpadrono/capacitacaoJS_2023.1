/* STRING */
// - começa do 0
//              01234 ou seja contagem[0] == 'i', contagem[1]== 'n' e assim vai
let contagem = 'index';

// - Não é mutável (só reatribuído)
let imutavel = 'elado';
imutavel[2] = 'r';//não funciona
console.log(imutavel)//'elado'

// - Concatenação
// usamos o + para concatenar strings
let primeiro = 'lembra de ';
let segundo = 'deixar o espaço';
console.log(primeiro + segundo)//'lembra de deixar o espaço'

// - Aspas
//para logar aspas simples devemos usar a string com aspas duplas e vice e versa
let simples = 'posso escrever "aspas duplas" na minha frase';
let duplas = "posso escrever 'aspas simples' na minha frase";

// - template literal
//normalmente vamos usar crase
let crase = `posso escrever "aspas duplas" e 'aspas simples' na minha frase`;
//com o template literal tbm podemos escrever um código javascript na string
let x = "meu código javascript";
let templateString = `posso inserir ${x} na minha frase`;

/* - Em JavaScript, uma string é considerada um objeto primitivo. 
    Isso significa que uma string tem propriedades e métodos associados a ela, 
    embora tecnicamente não seja um objeto.  */
// - .length, indexOf()
//semelhantes a array
let tamanho = "essa string tem tamanho 26";
console.log(tamanho.length);//26
console.log(tamanho.indexOf('sa'));//2
//ao passar uma string ele retorna o index no qual a string começa

//lastIndexOf()
//ultimo index que aparece 
console.log(tamanho.lastIndexOf('t'));

//.replace()
//método para mudar uma parte da string
let str = 'minha frase criativa';

console.log(str.replace('minha', 'nossa'))//nossa frase criativa

