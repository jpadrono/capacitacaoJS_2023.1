/* FOR */
//for...in
//for...of



let arr = [1, 'string', true, {nome: 'joão', idade:'20'}, 1900];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for(let index in arr){
//     console.log(index)
// }

// for(let value of arr){
//     console.log(value)
// }

let meuObjeto = {
    nome: 'sei não',
    ano: 1900,

    falar: function(){
        return 'oi'
    }
};

meuObjeto.nome // 'sei não'

for(let key in meuObjeto){
    console.log(meuObjeto[key])
}


