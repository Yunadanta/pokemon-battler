Pokemon.prototype.strongAgainst = function () {
    if (this.type === "Normal") return "This pokemon is not strong against anything";
    if (this.type === "Grass") return "This pokemon is strong against Water types";
    if (this.type === "Fire") return "This pokemon is strong against Grass types";
    if (this.type === "Water") return "This pokemon is strong against Fire types";
}

Pokemon.prototype.weakAgainst = function () {
    if (this.type === "Normal") return "This pokemon is not weak against anything";
    if (this.type === "Grass") return "This pokemon is weak against Fire types";
    if (this.type === "Fire") return "This pokemon is weak against Water types";
    if (this.type === "Water") return "This pokemon is weak against Grass types";
}

Pokemon.prototype.soundMade = function () {
    return this.sound;
}

Pokemon.prototype.useYourMoves = function () {
    return this.move;
}

function Pokemon(pokemonName, pokemonHealth, pokemonAttackDamage, pokemonSound, pokemonMove, pokemonType = "Normal") {
    this.name = pokemonName;
    this.health = pokemonHealth;
    this.attackDamage = pokemonAttackDamage;
    this.sound = pokemonSound;
    this.move = pokemonMove;
    this.type = pokemonType;

}



module.exports = { Pokemon }