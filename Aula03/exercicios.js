const nomes = ['Pikachu', 'Bulbasaur', 'Squirtle', 'Charmander', 'Geodude' ];
const tipos = ['Elétrico', 'Grama', 'Água', 'Fogo', 'Pedra'];
const ataques = [55, 49, 52, 44, 80];
const defesas = [30, 49, 43, 65, 100];
const vidas = [45, 39, 44, 35, 40];
const velocidades = [90, 45, 65, 43, 20]
const movimentos = [ 
    [
        {nome: 'Thunderbolt', poder: 90},
        {nome: 'Iron Tail', poder: 100},
        {nome: 'Quick Attack', poder: 40}
    ],
    [
        {nome: 'Razor Leaf', poder: 55},
        {nome: 'Vine Whip', poder: 45},
        {nome: 'Solar Beam', poder: 120}
    ],
    [
        {nome: 'Water Gun', poder: 40},
        {nome: 'Hydro Pump', poder: 110},
        {nome: 'Bubble Beam', poder: 65}
    ],
    [
        {nome: 'Flamethrower', poder: 90},
        {nome: 'Fire Spin', poder: 35},
        {nome: 'Scratch', poder: 40}
    ],
    [
        {nome: 'Rock Blast', poder: 25},
        {nome: 'Rock Throw', poder: 50},
        {nome: 'Bulldoze', poder: 60}
    ],
];

// precisão: número aleatório entre 0.85 e 1;

// 1. criar uma array com objetos de pokemon
function criarPokemon(nome, tipo, ataque, defesa, vida, velocidade, movimento){
    return{
        nome,
        tipo,
        ataque,
        defesa,
        vida,
        velocidade,
        movimento,

        atacar(defesaPokemonAtacado) {
            let movimentoAleatorio = this.movimento[Math.floor(Math.random()*(movimento.length))];
            let precissao = Math.floor(Math.random()*(100 - 85) + 85)/100;
            let dano = (1/25)*(this.ataque/defesaPokemonAtacado.defesa)*precissao*movimentoAleatorio.poder;
            console.log(`${this.nome} usou ${movimentoAleatorio.nome} e deu ${dano} de dano`)
            return dano;
        }
    }
}

let pokemons =[]
for(let indice in nomes){
    pokemons.push(criarPokemon(nomes[indice], tipos[indice], ataques[indice], defesas[indice], vidas[indice], velocidades[indice], movimentos[indice]))
}

// console.dir(pokemons, {depth: null})

// 2. criar uma função para obter a média de ataque dos pokemons
let soma = 0;

for(let pokemon of pokemons){
    soma += pokemon.ataque
}
let media = soma/pokemons.length;
// console.log(media)
// 3. criar um método atacar que recebe o pokemon adversário, escolhe um
// movimento aleatório do pokemon atacando e contabiliza o dano causado
// fórmula do dano: Dano==(1/25)*(A/D)*P*Acc
// A é o ataque do pokemon que ataca,                   
// D é a defesa do pokemon atacado,
// P é o poder do movimento,
// e Acc é a precisão(gerada aleatoriamente a cada ataque)
// a cada ataque deve ser executado:
// console.log('<pokemon que atacou> usou <movimento> e deu <Dano> de dano')
// console.log(pokemons[0].atacar(pokemons[1]))

// 4- criar uma função batalhar que recebe 2 pokemons e simula uma batalha,
// os ataques ocorrem alternadamente começando pelo pokemon com maior velocidade
// O pokemon que chegar com a vida a 0 primeiro, perde e ao final a função 
// retorna o pokemon ganhador

let batalhar = (pokemon1, pokemon2) => {
    let turno = 0; // pra saber qual turno acabou a batalha
    while(pokemon1.vida > 0 && pokemon2.vida > 0){
        
        if(turno % 2 === 0){
            pokemon2.vida -= pokemon1.atacar(pokemon2);
        }else{
            pokemon1.vida -= pokemon2.atacar(pokemon1);
        }
        turno++;
    }
    return `${turno % 2 ? pokemon1.nome : pokemon2.nome} ganhou a batalha`
}

// console.log(batalhar(pokemons[0], pokemons[1]))



