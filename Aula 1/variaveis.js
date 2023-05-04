/* VARIÁVEIS */
/* var */
// Escopo global ou Escopo de função
function sayHi() {
    if (true) {
        var phrase = "Oi";
    }

    console.log(phrase); // funciona
}

sayHi();
//console.log(phrase); // ReferenceError: phrase is not defined

//não tem outros escopos de bloco
if (true) {
    var onde = 'tô fora';
}

// console.log(onde)

// mutável
var metamorfose = "Raul Seixas";
metamorfose = "Ambulante"; 

//Problemas do var
//admite redeclaração
var quem = "pensou que isso";
var quem = "seria uma boa ideia?";// não mostra erro

// Hoisting(raising)
outra  = 'coisa esquisita';
var outra;

/* let */
//Escopo local
if(true){
    let local = true;
    console.log(local)
}


//mutável
let bool = true;
bool = false;

/* const */
//não é mutável
const COR_LARANJA = '#FF7F00';


//array pode ser modificada
const arr = [1, 2, 3];
arr.push(4);
arr[0] = 0;

console.log(arr)