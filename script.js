class Warrior {
    constructor(life, power){
        this.life = life
        this.power = power
    }

    attack(target) {
        console.log(`${this.constructor.name} ataca a ${target.constructor.name}.`);
    }

    defend(damage) {
        console.log(`${this.constructor.name} defiende.`);
    }

}


class Maya extends Warrior {
    constructor(nombre) {
        super(100, 100); 
        this.nombre = nombre;
    }

    colacao() {
        console.log(`${this.nombre} bebe ColaCao y suma 10 de poder.`);
        this.power += 10;
    }
}


class Aztec extends Warrior {
    constructor(nombre) {
        super(100, 100); 
        this.nombre = nombre;
    }

    nesquik() {
        console.log(`${this.nombre} bebe Nesquik y suma 10 de vida.`);
        this.life += 10;
    }

    asignarAtaque(objetivo) {
        console.log(`${this.nombre} asigna un ataque a ${objetivo.nombre}.`);
        objetivo.attack(this);
    }
}
   

const maya1 = new Maya("Maya");
const aztec1 = new Aztec("Azteca");

maya1.colacao();
console.log(maya1);

aztec1.nesquik();
console.log(aztec1);

maya1.attack(aztec1);
aztec1.defend();

aztec1.asignarAtaque(maya1);
maya1.defend();
