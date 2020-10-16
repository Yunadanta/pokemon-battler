const { Pokemon } = require("./pokemon");
const { Trainer } = require("./pokemon-trainer");


class BattleArena {
    constructor(trainer1, trainer2) {
        this.firstTrainer = trainer1;
        this.secondTrainer = trainer2;
    }
}

class Battle extends BattleArena {
    constructor(trainer1, trainer2) {
        super(trainer1, trainer2)
        this.firstAttacker = null;
        this.secondAttacker = null;
        this.roundCounter = 1;
    }

    whoFightsFirst(firstPokemon, secondPokemon) {
        const randomGenerator = Math.round(Math.random());
        if (randomGenerator === 1) {
            this.firstAttacker = this.secondTrainer.currentPokemon[secondPokemon]
            this.secondAttacker = this.firstTrainer.currentPokemon[firstPokemon]
            return `${secondPokemon} attacks first`;

        } else {
            this.firstAttacker = this.firstTrainer.currentPokemon[firstPokemon]
            this.secondAttacker = this.secondTrainer.currentPokemon[secondPokemon]
            return `${firstPokemon} attacks first`;
        }
    }


    fight() {
        if (this.firstAttacker.health < 1) {
            return `${this.secondAttacker.name} wins!`
        } else if (this.secondAttacker.health < 1) {
            return `${this.firstAttacker.name} wins!`
        }

        if (this.roundCounter % 2 === 0) {
            this.firstAttacker.health -= this.secondAttacker.attackDamage
            this.roundCounter++
            return `${this.secondAttacker.name} attacked with ${this.secondAttacker.move}, and did ${this.secondAttacker.attackDamage} damage to ${this.firstAttacker.name}`
        }

        this.secondAttacker.health -= this.firstAttacker.attackDamage
        this.roundCounter++
        return `${this.firstAttacker.name} attacked ${this.firstAttacker.move}, and did ${this.firstAttacker.attackDamage} damage to ${this.secondAttacker.name}`
    }

}















// BattleArena.prototype.whoFightsFirst = function (firstPokemon, secondPokemon) {
//     const randomGenerator = Math.round(Math.random());
//     if (randomGenerator === 1) {
//         this.firstAttacker = this.secondTrainer.currentPokemon[secondPokemon]
//         this.secondAttacker = this.firstTrainer.currentPokemon[firstPokemon]
//         return `${secondPokemon} attacks first`;

//     } else {
//         this.firstAttacker = this.firstTrainer.currentPokemon[firstPokemon]
//         this.secondAttacker = this.secondTrainer.currentPokemon[secondPokemon]
//         return `${firstPokemon} attacks first`;
//     }
// }

// BattleArena.prototype.fight = function () {
//     if (this.firstAttacker.health < 1) {
//         return `${this.secondAttacker.name} wins!`
//     } else if (this.secondAttacker.health < 1) {
//         return `${this.firstAttacker.name} wins!`
//     }

//     if (this.roundCounter % 2 === 0) {
//         this.firstAttacker.health -= this.secondAttacker.attackDamage
//         this.roundCounter++
//         return `${this.secondAttacker.name} attacked, and did ${this.secondAttacker.attackDamage} damage to ${this.firstAttacker.name}`
//     }

//     this.secondAttacker.health -= this.firstAttacker.attackDamage
//     this.roundCounter++
//     return `${this.firstAttacker.name} attacked, and did ${this.firstAttacker.attackDamage} damage to ${this.secondAttacker.name}`
// }

// function BattleArena(trainer1, trainer2) {
//     this.firstTrainer = trainer1;
//     this.secondTrainer = trainer2;
//     this.firstAttacker = null;
//     this.secondAttacker = null;
//     this.roundCounter = 1;
// }



module.exports = { BattleArena, Battle }