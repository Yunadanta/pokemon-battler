const { TestScheduler } = require("jest");
const {Pokemon} = require("./pokemon");
const {Trainer} = require("./pokemon-trainer");

const redTrainer = new Trainer("Red");
const blueTrainer = new Trainer("Blue");

const rattata = new Pokemon("Rattata", 24, 7, "Rattata!", "Bite")
const zigzagoon = new Pokemon("Zigzagoon", 28, 6, "Zigzagoon!", "Tackle")
const bulbasaur = new Pokemon("Bulbasaur", 36, 6, "Bulbasaur!", "Vine Whip", "Grass");
const charmander = new Pokemon("Charmander", 24, 12, "Charmander!", "Ember", "Fire");
const squirtle = new Pokemon("Squirtle", 40, 5, "Squirtle!", "Bubble", "Water");

redTrainer.catchPokemon(rattata);
blueTrainer.catchPokemon(zigzagoon);


describe("Checking trainer's name and pokemon", () => {
    describe("Red Trainer", () => {
        test("Check first trainer's name is Red", () => {
            expect(redTrainer.name).toBe("Red");
        })

        test("Check what pokemon what Red has", () => {
            expect(redTrainer.currentPokemon).toEqual({"Rattata": {
                name: 'Rattata',
                health: 24,
                attackDamage: 7,
                sound: 'Rattata!',
                move: 'Bite',
                type: 'Normal'
              }});
        })

        test("Check that filledPokeballs shows how many pokemon Red has", () => {
            expect(redTrainer.filledPokeballs).toBe(1);
        })
    })

    describe("Blue Trainer", () => {
        test("Check first trainer's name is Blue", () => {
            expect(blueTrainer.name).toBe("Blue");
        })

        test("Check what pokemon what Blue has", () => {
            expect(blueTrainer.currentPokemon).toEqual({"Zigzagoon": {
                name: 'Zigzagoon',
                health: 28,
                attackDamage: 6,
                sound: 'Zigzagoon!',
                move: 'Tackle',
                type: 'Normal'
              }});
        })

        test("Check that filledPokeballs shows how many pokemon Blue has", () => {
            expect(blueTrainer.filledPokeballs).toBe(1);
        })
    })
})