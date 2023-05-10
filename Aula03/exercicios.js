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
// 2. criar uma função para obter a média de ataque dos pokemons
// 3. criar um método atacar que recebe o pokemon adversário, escolhe um
// movimento aleatório do pokemon atacando e contabiliza o dano causado
// fórmula do dano: Dano==(1/25)*(A/D)*P*Acc
// A é o ataque do pokemon que ataca,
// D é a defesa do pokemon atacado,
// P é o poder do movimento,
// e Acc é a precisão(gerada aleatoriamente a cada ataque)
// a cada ataque deve ser executado:
// console.log('<pokemon que atacou> usou <movimento> e deu <Dano> de dano')
let atacar = (pokemonAdversario) => {
    let Dano
    console.log(`${this.nome} atacouo ${pokemonAdversario.nome} e deu ${Dano}`)
}
this.movimentos[numeroAleatorio]
// 4- criar uma função batalhar que recebe 2 pokemons e simula uma batalha,
// os ataques ocorrem alternadamente começando pelo pokemon com maior velocidade
// O pokemon que chegar com a vida a 0 primeiro, perde e ao final a função 
// retorna o pokemon ganhador

