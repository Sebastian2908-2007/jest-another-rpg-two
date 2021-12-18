const Potion = require('../lib/Potion');
const Character = require('../lib/Character');


    class Enemy extends Character {
        constructor(name,weapon) {
            super(name);
            this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    
        }
        getDescription() {
            return `${this.name} has appeared holding ${this.weapon} be ready to fight for your life!!!`
        }
    }



module.exports = Enemy;