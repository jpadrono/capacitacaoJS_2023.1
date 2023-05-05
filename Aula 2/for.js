/* FOR */

let arr = [1, 'string', true, {nome: 'joão', idade:'20'}, 1900];

// for
// igual ao que aprendemos em C e C++
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//for-in em Array
//Numa array percorre os índices da array
for(let index in arr){
    console.log(index)
}

// for-of em array
// returna o valor do elemento, equivalente a fazer o seguinte for:
/*
    for(let i = 0; i< arr.length; i++){
        console.log(arr[i])
    }
*/
//ou
/*
    for(let index in arr){
        console.log(arr[index])
    }
*/
for(let value of arr){
    console.log(value)
}

let meuObjeto = {
    nome: 'sei não',
    ano: 1900,

    falar: function(){
        return 'oi'
    }
};

meuObjeto.nome // 'sei não'
//for-in para objetos
//retorna o valor das keys
for(let key in meuObjeto){
    console.log(meuObjeto[key])
}


