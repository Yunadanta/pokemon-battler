const { TestScheduler } = require("jest");
const { Pokemon } = require("./pokemon");
const { Trainer } = require("./pokemon-trainer");
const { BattleArena } = require("./pokemon-battle");
const pokemon = require("./pokemon");

const redTrainer = new Trainer("Red");
const blueTrainer = new Trainer("Blue");

const rattata = new Pokemon("Rattata", 24, 7, "Rattata!", "Bite")
const zigzagoon = new Pokemon("Zigzagoon", 28, 6, "Zigzagoon!", "Tackle")
const bulbasaur = new Pokemon("Bulbasaur", 36, 6, "Bulbasaur!", "Vine Whip", "Grass");
const charmander = new Pokemon("Charmander", 24, 12, "Charmander!", "Ember", "Fire");
const squirtle = new Pokemon("Squirtle", 40, 5, "Squirtle!", "Bubble", "Water");

redTrainer.catchPokemon(rattata);
blueTrainer.catchPokemon(zigzagoon);

const testBattle = new BattleArena(redTrainer, blueTrainer)

describe("Checking trainer's name and pokemon", () => {
    describe("Red Trainer", () => {
        test("Check first trainer's name is Red", () => {
            expect(redTrainer.name).toBe("Red");
        })

        test("Check what pokemon what Red has", () => {
            expect(redTrainer.currentPokemon).toEqual({
                "Rattata": {
                    name: 'Rattata',
                    health: 24,
                    attackDamage: 7,
                    sound: 'Rattata!',
                    move: 'Bite',
                    type: 'Normal'
                }
            });
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
            expect(blueTrainer.currentPokemon).toEqual({
                "Zigzagoon": {
                    name: 'Zigzagoon',
                    health: 28,
                    attackDamage: 6,
                    sound: 'Zigzagoon!',
                    move: 'Tackle',
                    type: 'Normal'
                }
            });
        })

        test("Check that filledPokeballs shows how many pokemon Blue has", () => {
            expect(blueTrainer.filledPokeballs).toBe(1);
        })
    })


    describe("Testing battle arena", () => {
        test("Check the battle arena has two trainers", () => {
            const firstBattle = new BattleArena("Peter", "Alice")
            expect(firstBattle.firstTrainer).toBe("Peter");
            expect(firstBattle.secondTrainer).toBe("Alice");
        })
        test("Check which pokemon the first trainer has - it should be rattata", () => {
            expect(testBattle.firstTrainer.name).toBe("Red")
            expect(Object.keys(testBattle.firstTrainer.currentPokemon)).toEqual(["Rattata"])
        })
        test("Check which pokemon the second trainer has - it should be zigzagoon", () => {
            expect(testBattle.secondTrainer.name).toBe("Blue")
            expect(Object.keys(testBattle.secondTrainer.currentPokemon)).toEqual(["Zigzagoon"])
        })
    })

    describe("Testing whoFightsFirst method", () => {
        test("When .whoFightsFirst() is invoked it returns a message saying who attacks first", () => {
            const redPokemon = redTrainer.currentPokemon.Rattata.name
            const bluePokemon = blueTrainer.currentPokemon.Zigzagoon.name

            console.log(testBattle.whoFightsFirst(redPokemon, bluePokemon)) //<--- console.log shows random return messages (these work!)
            expect(typeof testBattle.whoFightsFirst(redPokemon, bluePokemon)).toBe("string")
        })
        test("When .whoFightsFirst() is invoked the firstAttacker and secondAttacker values are updated", () => {
            const redPokemon = redTrainer.currentPokemon.Rattata.name
            const bluePokemon = blueTrainer.currentPokemon.Zigzagoon.name
            testBattle.whoFightsFirst(redPokemon, bluePokemon)
            console.log(testBattle.firstAttacker) //<--- this returns one pokemon object with all properties correctly 
            console.log(testBattle.secondAttacker) //<--- this returns the other pokemon object with all properties correctly 
            expect(testBattle.firstAttacker).not.toBe(null)
            expect(testBattle.secondAttacker).not.toBe(null)
        })


        // We need to write some tests to check the battle health and attackdamage values are changed accordingly (fight method)
        // Also to check statement issued at end of each round


    })
})