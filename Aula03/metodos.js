/* MÉTODOS */
const Poketemon = {
    nome: 'Pikachu',
    tipo: 'Elétrico',
    ataque: 55,
    defesa: 40,
    vida: 35,
  
    // Método para atacar outro Pokémon
    atacar(outro){
      console.log(`${this.nome} atacou ${outro.nome} e deu ${this.ataque - outro.defesa} de dano` )
    },
    // Método para defender-se de um ataque
    defender(parametro) {
      console.log(`${this.nome} defendeu-se`);
    }
  };
  
  
  // Chamando os métodos do objeto Pokemon
  const outroPokemon = {
    nome: 'Charmander',
    tipo: 'Fogo',
    ataque: 52,
    defesa: 43,
    vida: 39,
  };

  Poketemon.atacar(outroPokemon);
  Poketemon.defender()