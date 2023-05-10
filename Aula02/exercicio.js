let jogosClassicos = [
    { 
        nome: 'Super Mario Bros',
        plataforma: 'NES',
        anoLancamento: 1985,
        multiplayer: false
    },
    { 
        nome: 'Sonic the Hedgehog',
        plataforma: 'Sega Genesis',
        anoLancamento: 1991,
        multiplayer: true
    },
    { 
        nome: 'Tetris',
        plataforma: 'Game Boy',
        anoLancamento: 1989,
        multiplayer: false
    },
    { 
        nome: 'Street Fighter II',
        plataforma: 'Super NES',
        anoLancamento: 1991,
        multiplayer: true
    },
    { 
        nome: 'The Legend of Zelda',
        plataforma: 'NES',
        anoLancamento: 1986,
        multiplayer: false
    },     
  ];
  
// 1- Adicionar Mega Man X

let MegaManX = {
    nome: 'Mega Man X',
    plataforma: 'Super NES',
    anoLancamento: 1993,
    multiplayer: false
}

jogosClassicos.push(MegaManX)
// console.log(jogosClassicos)


// 2- Separar jogos multiplayer e singleplayer 
let jogosMultiplayer = [];
let jogosSingleplayer = [];

// for(let indice in jogosClassicos){
//     if(jogosClassicos[indice].multiplayer){
//         jogosMultiplayer.push(jogosClassicos[indice]);
//     }else{
//         jogosSingleplayer.push(jogosClassicos[indice]);
//     }
// }
//     for(let jogo of jogosClassicos){
//         if(jogo.multiplayer){
//             jogosMultiplayer.push(jogo);
//         }else{
//           jogosSingleplayer.push(jogo);
//         }
//     }

// console.log(jogosMultiplayer, jogosSingleplayer)

// 3- Retornar a média dos anos de lançamento
// let soma = 0;
// for(let jogo of jogosClassicos){
//     soma += jogo.anoLancamento
// }
// let media = soma / jogosClassicos.length
// console.log(media)

// 4- Editar 'The Legend of Zelda' para 'Zelda'
let novaArr = [];
for(let jogo of jogosClassicos){
    if(jogo.nome === 'The Legend of Zelda'){
        jogo.nome = 'Zelda'
    }
    novaArr.push(jogo)
}
//console.log(novaArr)

// 5- Deletar 'Super Mario Bros'
let menosJogos = [];

// for(let jogo of jogosClassicos){
//     if(jogo.nome !== 'Super Mario Bros'){
//         menosJogos.push(jogo)
//     }
// }

// [ , ...menosJogos] = jogosClassicos

// console.log(menosJogos);


// 6- Retornar um jogo aleatório

// let numeroAleatorio = Math.floor(Math.random()*jogosClassicos.length)

// let jogoAleatorio = jogosClassicos[numeroAleatorio]

// console.log(jogoAleatorio)


