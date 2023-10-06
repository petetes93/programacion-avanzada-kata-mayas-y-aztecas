class Warrior {
    constructor(life, power){
        this.life = life
        this.power = power
    }

    attack () {
    
        console.log(`${this.power} golpea al contrincante`);
    }

    defend(damage) {
        let vida = `${this.power}-${this.life}`
        console.log(`Daño recibido: ${vida}`);
        
    }

}


class Maya extends Warrior {
        constructor(nombre){
            super (nombre);
            this.nombre = nombre
        }
      colacao (){
        console.log(`${this.nombre} drinkColaCao suma 10 ${this.life}`);
    }
   
}

class Aztec extends Warrior {
     nesquik (){
        console.log(`drinkNesquik suma 10 ${this.life}`);
    }

    asignarAtaque(Maya, golpe){
        console.log(``);
    }
   
}

const maya1 = new Maya ('maya','100', '100')
console.log(maya1.colacao());

const aztec1 = new Aztec ('100', '100')
console.log(aztec1.nesquik());

console.log(maya1.defend());

console.log(maya1.colacao(),aztec1.nesquik());
