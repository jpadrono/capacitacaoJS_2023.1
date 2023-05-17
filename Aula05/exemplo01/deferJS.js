// Primeira forma de acessar um elemento html:
// Usando document.querySelector("cssSelector")
let titulo = document.querySelector("#titulo");
//perceba que como é um id usa-se o # para acessar, assim como no css
// O querySelector("cssSelector") retorna o primeiro elemento encontrado
console.log(titulo.textContent); // .textContent retorna o texto do elemento.

 // importante, a variável criada e o elemento html a ela associada refletem as
 // mudanças feitas uma na outra
 titulo.textContent = 'Mudei o Exemplo'
 console.log(titulo.textContent);

// Segunda forma:
// Usando document.querySelectorAll("cssSelector")
// Como o querySelector retorna o primeiro elemento, usamos o querySelectorAll 
// para pegar o n-ésimo elemento.
// documento.querySelectorAll("cssSelector") retorna um array-like com todos os 
// elementos encontrados, no exemplo abaixo podemos acessar o n-ésimo parágrafo 
// fazendo: paragrafos[n-1]
let paragrafos = document.querySelectorAll(".paragrafo");
for(let paragrafo of paragrafos){
    console.log(paragrafo.textContent);
}

// Terceira forma:
// Usando document.getElementById("nomeDoIdSem#")
// Semelhante ao querySelector do primeiro exemplo, porém sem usar a #
let conteudoDiv = document.getElementById("conteudo");
console.log(conteudoDiv.innerHTML); //.innerHTML retorna o html contido



 