
Trainer.prototype.catchPokemon = function (pokemonName) {
    this.currentPokemon[++this.filledPokeballs] = pokemonName;
}


function Trainer() {
    this.name = "";
    this.currentPokemon = {};
    this.filledPokeballs = 0;
    this.maxFilledPokeballs = 6;
}






module.exports = { Trainer }
