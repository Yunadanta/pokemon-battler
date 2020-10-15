const pokemon = require("./pokemon");

Trainer.prototype.catchPokemon = function (pokemon) {
    this.currentPokemon[pokemon.name] = pokemon;
    this.filledPokeballs++;
}


function Trainer(trainerName) {
    this.name = trainerName;
    this.currentPokemon = {};
    this.filledPokeballs = 0;
    this.maxFilledPokeballs = 6;
}






module.exports = { Trainer }
