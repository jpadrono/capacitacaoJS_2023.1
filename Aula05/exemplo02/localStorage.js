/* Local Storage */

// localStorage.setItem(key, value)
// Salvar elemento no local Storage
// Semelhante a um objeto em javaScript, o elemento salvo possui uma chave "key" 
// e um valor "value"
localStorage.setItem('filme', 'Meu amigo Totoro');

// localStorage.getItem(key)
// Pegar um elemento salvo no local Storage
let filmeIncrivel = localStorage.getItem('filme')
console.log(filmeIncrivel)
// É importante notar que caso seja passado um valor de chave inexistente, o 
// getItem não lança nenhum erro, e sim retorna null
let nada = localStorage.getItem('chave Inválida')
console.log(nada)

// localStorage.removeItem(key)
// Remover um elemento
// localStorage.removeItem('filme') //  descomente para remover 'filme'

// localStorage.clear() limpa o local Storage
// mas antes disso, veja
localStorage.setItem('ano', 1988)
localStorage.setItem('studio', 'Ghibli')

let anoDoFilme = localStorage.getItem('ano')
console.log(typeof(anoDoFilme)) // string
// O local storage converte todas as variáveis pra string ao armazená-las
localStorage.clear()

//Mas se ele transforma tudo para string, o que acontece quando tentamos salvar
// um objeto?

let filme = {
    nome: 'Totoro',
    ano: 1988,
    studio: 'Ghibli',
}
localStorage.setItem('objeto', filme)
let meuFilme = localStorage.getItem('objeto')
console.log(meuFilme) // [object Oject]

// O que aconteceu? Semelhante ao que aconteceu no exercício da aula 3, o local
// Storage tenta converter diretamente o objeto para uma string, porem:
// object.toString() = [object Object]
// Como fazemos então? Basta usar o objeto JSON para converter o objeto correta-
// mente para uma string usando o método stringify
localStorage.setItem('objeto certo', JSON.stringify(filme))
let meuFilmeString = localStorage.getItem('objeto certo')
console.log(meuFilmeString) //{"nome":"Totoro","ano":1988,"studio":"Ghibli"}
console.log(meuFilmeString.nome) // undefined
// perceba que armazenamos de forma correta, porém agora nosso objeto é uma 
// string, então não conseguimos acessar os métodos e propriedades dele, então
// para voltarmos a ter o nosso objeto corretamente, devemos usar o método parse
// do objeto JSON
let meuFilmeCerto = JSON.parse(meuFilmeString)
console.log(meuFilmeCerto)// { nome: "Totoro", ano: 1988, studio: "Ghibli" }
console.log(meuFilmeCerto.ano)// 1988
