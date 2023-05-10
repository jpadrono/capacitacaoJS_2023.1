/* Factory Functions */
//são funções que retornam objetos

function criarPokemon(nome, vida, ataque, defesa){
    return{
        nome,
        vida,
        ataque,
        defesa,

        atacar(outro){
            console.log(`${this.nome} atacou ${outro.nome} e deu ${this.ataque - outro.defesa} de dano` )
          },
    }
}
let pokemon1 = criarPokemon('charmander', 55, 35, 30)
let pokemon2 = criarPokemon('squirtle', 25, 60, 40)

pokemon1.atacar(pokemon2)