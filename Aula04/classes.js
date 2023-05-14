/* CLASSES */
// é um template de um objeto, função semelhante a da Factory Function
class Inimigo{
    constructor(nome, vida, forca, velocidade, habilidade){
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.velocidade = velocidade;
        this.habilidade = habilidade;
    }

    freeze() {
        this.velocidade = 0;
    }
}

let inimigo1 = new Inimigo("p1", "p2", "p3", "p4", "p5")
inimigo1.freeze()
console.log(inimigo1.velocidade)
// então por que usar classes se já temos a Factory Function?
function criarInimigo(nome, vida, forca, velocidade, habilidade) {
    return{
        nome: nome,
        vida,
        forca,
        velocidade,
        habilidade,

        freeze() {
            this.velocidade = 0;
        }
    }
}

let I1Classe = new Inimigo('joão', 10, 10, 10, 'none');
let I2classe = new Inimigo('Romero', 20, 20, 20, 'todas possíveis e imagináveis');
let I1Function = criarInimigo('Mota', 14, 14, 14, 'jogar rocket league');
let I2Function = criarInimigo('Henrique Holanda', 16, 16, 16, 'Urubu do pix');

// instanceof
console.log(I1Classe instanceof Inimigo) // true
console.log(I1Function instanceof criarInimigo) // false

// reutilização dos métodos
console.log(I1Classe === I2classe) // true
console.log(I1Function === I2Function) // false

// na factory functions os métodos são recriados a cada chamada da função, ocu-
// pando espaços diferentes na memória para cada novo objeto, enquanto na classe
// os métodos são reutilizados






// console.log(I1 instanceof Inimigo)