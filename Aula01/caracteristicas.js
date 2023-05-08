/* CARACTERÍSTICAS */
/* Case Sensitive */
let camelCase;
let Camelcase; 

/* Tipagem dinâmica */
let numero = 5;
numero = 'seis';
numero = true

/* Tipagem Fraca */
let x = 1
let y = '2'

z = x + y;// z === '12'

/* OOP */
/* Encapsulamento */
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}

let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate)
    },
};

/* Abstração */
employee.getWage();

/* Herança */
// Definindo a função construtora pai
function Animal(name, sound) {
    this.name = name;
    this.sound = sound;
}

Animal.prototype.makeSound = function() {
    console.log(`${this.name} faz ${this.sound}`);
}

// Definindo a função construtora filha que herda de Animal
function Dog(name) {
    Animal.call(this, name, 'au au');
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Criando uma instância de Dog
const myDog = new Dog('Rex');
// Chamando o método makeSound da classe pai a partir da instância de Dog
myDog.makeSound(); // output: "Rex faz au au"

/* Polimorfismo */
// Definindo a função construtora pai
function AnimalDiferente(name) {
    this.name = name;
}

AnimalDiferente.prototype.makeSound = function() {
    console.log(`${this.name} faz um som.`);
}

// Definindo a função construtora filha que herda de Animal
function Cat(name) {
    AnimalDiferente.call(this, name);
}

Cat.prototype = Object.create(AnimalDiferente.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.makeSound = function() {
    console.log(`${this.name} faz miau.`);
}

// Definindo a função construtora filha que herda de Animal
function Fox(name) {
    AnimalDiferente.call(this, name);
}

Fox.prototype = Object.create(AnimalDiferente.prototype);
Fox.prototype.constructor = Fox;

Fox.prototype.makeSound = function() {
    console.log(`${this.name} faz Wa-pa-pa-pa-pa-pa-pow.`);
}

// Criando uma instância de Animal, Fox e Cat
const myAnimal = new AnimalDiferente('Animal');
const myFox = new Fox('Choco');
const myCat = new Cat('Tom');

// Chamando o método makeSound em diferentes instâncias
myAnimal.makeSound(); // output: "Animal faz um som."
myFox.makeSound(); // output: "Choco faz wa-pa-pa-pa-pa-pa-pow."
myCat.makeSound(); // output: "Tom faz miau."
