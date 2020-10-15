Pokemon.prototype.strongAgainst = function() {
    if (this.type === "normal") return "This pokemon is not strong against anything";
    if (this.type === "grass") return "This pokemon is strong against water types";
    if (this.type === "fire") return "This pokemon is strong against grass types";
    if (this.type === "water") return "This pokemon is strong against fire types";
}

Pokemon.prototype.weakAgainst = function() {
    if (this.type === "normal") return "This pokemon is not weak against anything";
    if (this.type === "grass") return "This pokemon is strong against fire types";
    if (this.type === "fire") return "This pokemon is strong against water types";
    if (this.type === "water") return "This pokemon is strong against grass types";
}

Pokemon.prototype.soundMade = function() {
    this.sound = `${this.name}!`;
}

Pokemon.prototype.useYourMoves = function (moveName) {
    this.move = moveName;
}

function Pokemon(pokemonType = "normal") {
    this.name = "";
    this.health = 0;
    this.attackDamage = 0;
    this.sound = "";
    this.move = "";
    this.type = pokemonType;
    // this.strongAgainst = isStrongAgainst;
    // this.weakAgainst = isWeakAgainst;
}
// strongAgainst/weakAgainst properties could be changed when a new pokemon is made of a different type, i.e. a grass type.


module.exports = {Pokemon}