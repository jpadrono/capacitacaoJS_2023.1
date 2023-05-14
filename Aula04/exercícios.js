const nomes = ['Bokoblin', 'Moblin', 'Lynel', 'Guardian', 'Octorocks', 'Hinox'];
const vidas = [50, 100, 200, 150, 30, 500];
const forcas = [20, 40, 90, 50, 10, 200];
const velocidades = [10, 15, 30, 20, 5, 5];
const habilidades = [
    [
        { nome: 'Lança', range: 'Médio' },
    ],
    [
        { nome: 'Martelo', range: 'Curto' },
        { nome: 'Arco e Flecha', range: 'Longo' }
    ],
    [
        { nome: 'Espada', range: 'Curto' },
        { nome: 'Arco e Flecha', range: 'Longo' },
        { nome: 'Ataque elétrico', range: 'Médio' }
    ],
    [
        { nome: 'Feixe de energia', range: 'Longo' },
        { nome: 'Ataque elétrico', range: 'Médio' }
    ],
    [
        {nome: 'Projétil de pedra', range: 'Longo'}
    ],
    [
        {nome: 'Lançamento de pedras', range: 'Longo'},
        {nome: 'Pancada com clava', range: 'Curto'}
    ]
];

// 1. Criar a Classe Inimigo com as propriedades nome, vida, força, velocidade e
// habilidades
// 2. criar a array inimigos com 6 objetos da classe Inimigo
let inimigos = [];
// 3. Criar 3 array com inimigos com habilidades em cada um dos ranges possíveis
let rangeCurto = [];
let rangeMedio = [];
let rangeLongo = [];
// 4. Simular o ng+, criando uma array onde todos os inimigos tem o triplo de
// vida, o dobro de ataque e + 5 de velocidade
let newGamePlus = [];
// 5. Criar uma função que gere uma array com 10 inimigos aleatoriamente entre 
// os 6 possíveis e retorne a soma do poder dos inimigos gerados 
let inimigosArea1 = [];
let poderTotalArea1 = 0;
// 6. simule um buff nos ataques de range médio. Usando a array do exercício 5
// com os 10 inimigos aleatórios, retorne o poder total de todos os inimigos com
// ataques de range médio considerando que cada ataque contribui igualmente para
// o poder do inimigo e que com o buff os ataques de range médio vão ter o dobro
// de poder (ou seja, se o inimigo tem 1 ataque médio o poder dele dobra, se ti-
// ver 1 ataque médio e outros 2 ataques com range diferente o poder dele aumen-
// ta em 1/3)
let poderTotalBuffAtaqueMedio = 0;