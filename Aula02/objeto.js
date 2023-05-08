/* OBJETO */
let meuObjeto = {
    nome: 'sei não',
    ano: 1900,
    divertido: false,

    falar: function(){
        return 'oi'
    }
};

//podemos acessar as propriedades e métodos do meu objeto de 2 formas
//usando obj.propriedade

console.log(meuObjeto.nome)//'sei não'
console.log(meuObjeto.ano)//'1900'

//usando colchetes

console.log(meuObjeto['divertido'])//false

//com o colchetes podemos usar variáveis

let variavel = 'divertido';

console.log(meuObjeto[variavel])//false