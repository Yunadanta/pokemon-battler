const { TestScheduler } = require("jest");
const { Pokemon } = require("./pokemon");
const { Trainer } = require("./pokemon-trainer");
const { BattleArena, Battle } = require("./pokemon-battle");
const pokemon = require("./pokemon");

describe("Checking properties of created instances", () => {
    describe("Red Trainer", () => {
        test("Check first trainer's name is Red", () => {
            const redTrainer = new Trainer("Red");
            expect(redTrainer.name).toBe("Red");
        })

        test("Check what pokemon what Red has", () => {
            const redTrainer = new Trainer("Red");
            const rattata = new Pokemon("Rattata", 24, 7, "Rattata!", "Bite")
            redTrainer.catchPokemon(rattata);
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
            const redTrainer = new Trainer("Red");
            const rattata = new Pokemon("Rattata", 24, 7, "Rattata!", "Bite")
            redTrainer.catchPokemon(rattata);
            expect(redTrainer.filledPokeballs).toBe(1);
        })
    })

    describe("Blue Trainer", () => {
        test("Check first trainer's name is Blue", () => {
            const blueTrainer = new Trainer("Blue");
            expect(blueTrainer.name).toBe("Blue");
        })

        test("Check what pokemon what Blue has", () => {
            const zigzagoon = new Pokemon("Zigzagoon", 28, 6, "Zigzagoon!", "Tackle")
            const blueTrainer = new Trainer("Blue");
            blueTrainer.catchPokemon(zigzagoon);
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
            const zigzagoon = new Pokemon("Zigzagoon", 28, 6, "Zigzagoon!", "Tackle")
            const blueTrainer = new Trainer("Blue");
            blueTrainer.catchPokemon(zigzagoon);
            expect(blueTrainer.filledPokeballs).toBe(1);
        })
    })
})

describe("Testing the methods", () => {
    describe("Testing battle arena", () => {
        test("Check the battle arena has two trainers", () => {
            const firstBattle = new BattleArena("Peter", "Alice")
            expect(firstBattle.firstTrainer).toBe("Peter");
            expect(firstBattle.secondTrainer).toBe("Alice");
        })
        test("Check which pokemon the first trainer has - it should be rattata", () => {
            const rattata = new Pokemon("Rattata", 24, 7, "Rattata!", "Bite")
            const redTrainer = new Trainer("Red");
            redTrainer.catchPokemon(rattata);

            const zigzagoon = new Pokemon("Zigzagoon", 28, 6, "Zigzagoon!", "Tackle")
            const blueTrainer = new Trainer("Blue");
            blueTrainer.catchPokemon(zigzagoon);

            const testBattle = new BattleArena(redTrainer, blueTrainer)
            expect(testBattle.firstTrainer.name).toBe("Red")
            expect(Object.keys(testBattle.firstTrainer.currentPokemon)).toEqual(["Rattata"])
        })

        test("Check which pokemon the second trainer has - it should be zigzagoon", () => {
            const rattata = new Pokemon("Rattata", 24, 7, "Rattata!", "Bite")
            const redTrainer = new Trainer("Red");
            redTrainer.catchPokemon(rattata);

            const zigzagoon = new Pokemon("Zigzagoon", 28, 6, "Zigzagoon!", "Tackle")
            const blueTrainer = new Trainer("Blue");
            blueTrainer.catchPokemon(zigzagoon);

            const testBattle = new BattleArena(redTrainer, blueTrainer)

            expect(testBattle.secondTrainer.name).toBe("Blue")
            expect(Object.keys(testBattle.secondTrainer.currentPokemon)).toEqual(["Zigzagoon"])
        })
    })

    describe("Testing whoFightsFirst method", () => {
        test("When .whoFightsFirst() is invoked it returns a message saying who attacks first", () => {
            const redTrainer = new Trainer("Red");
            const blueTrainer = new Trainer("Blue");
            const rattata = new Pokemon("Rattata", 24, 7, "Rattata!", "Bite")
            const zigzagoon = new Pokemon("Zigzagoon", 28, 6, "Zigzagoon!", "Tackle")
            redTrainer.catchPokemon(rattata);
            blueTrainer.catchPokemon(zigzagoon);

            const testingBattle = new Battle(redTrainer, blueTrainer)

            const redPokemon = redTrainer.currentPokemon.Rattata.name
            const bluePokemon = blueTrainer.currentPokemon.Zigzagoon.name

            // console.log(testingBattle.whoFightsFirst(redPokemon, bluePokemon)) //<--- console.log shows random return messages (these work!)
            expect(typeof testingBattle.whoFightsFirst(redPokemon, bluePokemon)).toBe("string")
        })
        test("When .whoFightsFirst() is invoked the firstAttacker and secondAttacker values are updated", () => {
            const redTrainer = new Trainer("Red");
            const blueTrainer = new Trainer("Blue");
            const rattata = new Pokemon("Rattata", 24, 7, "Rattata!", "Bite")
            const zigzagoon = new Pokemon("Zigzagoon", 28, 6, "Zigzagoon!", "Tackle")
            redTrainer.catchPokemon(rattata);
            blueTrainer.catchPokemon(zigzagoon);

            const testingBattle = new Battle(redTrainer, blueTrainer)
            const redPokemon = redTrainer.currentPokemon.Rattata.name
            const bluePokemon = blueTrainer.currentPokemon.Zigzagoon.name
            testingBattle.whoFightsFirst(redPokemon, bluePokemon)
            // console.log(testingBattle.firstAttacker) //<--- this returns one pokemon object with all properties correctly 
            // console.log(testingBattle.secondAttacker) //<--- this returns the other pokemon object with all properties correctly 
            expect(testingBattle.firstAttacker).not.toBe(null)
            expect(testingBattle.secondAttacker).not.toBe(null)
        })
    })

    describe("Fight Method. Due to the random nature of finding out who attacks first and second using the whoFightsFirst method, we have just defined who is first and second explicitly for these tests.", () => {
        test("Every time the fight method is called the round counter increases by 1", () => {
            const redTrainer = new Trainer("Red");
            const blueTrainer = new Trainer("Blue");
            const rattata = new Pokemon("Rattata", 24, 7, "Rattata!", "Bite")
            const zigzagoon = new Pokemon("Zigzagoon", 28, 6, "Zigzagoon!", "Tackle")
            redTrainer.catchPokemon(rattata);
            blueTrainer.catchPokemon(zigzagoon);

            const testingBattle = new Battle(redTrainer, blueTrainer)
            const redPokemon = redTrainer.currentPokemon.Rattata
            const bluePokemon = blueTrainer.currentPokemon.Zigzagoon
            testingBattle.firstAttacker = redPokemon
            testingBattle.secondAttacker = bluePokemon

            expect(testingBattle.roundCounter).toBe(1)
            testingBattle.fight()
            expect(testingBattle.roundCounter).toBe(2)
            testingBattle.fight()
            expect(testingBattle.roundCounter).toBe(3)
        })

        test("When fight method is called and the round number is odd,firstAttacker attacks and secondAttacker's health goes down", () => {
            const redTrainer = new Trainer("Red");
            const blueTrainer = new Trainer("Blue");
            const rattata = new Pokemon("Rattata", 24, 7, "Rattata!", "Bite")
            const zigzagoon = new Pokemon("Zigzagoon", 28, 6, "Zigzagoon!", "Tackle")
            redTrainer.catchPokemon(rattata);
            blueTrainer.catchPokemon(zigzagoon);

            const testingBattle = new Battle(redTrainer, blueTrainer)
            const redPokemon = redTrainer.currentPokemon.Rattata
            const bluePokemon = blueTrainer.currentPokemon.Zigzagoon
            testingBattle.firstAttacker = redPokemon
            testingBattle.secondAttacker = bluePokemon

            expect(testingBattle.secondAttacker.health).toBe(28)
            testingBattle.fight()
            expect(testingBattle.secondAttacker.health).toBe(21)
        })

        test("When fight method is called and the round number is even,secondAttacker attacks and firstAttacker's health goes down", () => {
            const redTrainer = new Trainer("Red");
            const blueTrainer = new Trainer("Blue");
            const rattata = new Pokemon("Rattata", 24, 7, "Rattata!", "Bite")
            const zigzagoon = new Pokemon("Zigzagoon", 28, 6, "Zigzagoon!", "Tackle")
            redTrainer.catchPokemon(rattata);
            blueTrainer.catchPokemon(zigzagoon);

            const testingBattle = new Battle(redTrainer, blueTrainer)
            const redPokemon = redTrainer.currentPokemon.Rattata
            const bluePokemon = blueTrainer.currentPokemon.Zigzagoon
            testingBattle.firstAttacker = redPokemon
            testingBattle.secondAttacker = bluePokemon

            testingBattle.fight()
            expect(testingBattle.firstAttacker.health).toBe(24)
            testingBattle.fight()
            expect(testingBattle.firstAttacker.health).toBe(18)
        })

        test("When fight method is called, returns a string", () => {
            const redTrainer = new Trainer("Red");
            const blueTrainer = new Trainer("Blue");
            const rattata = new Pokemon("Rattata", 24, 7, "Rattata!", "Bite")
            const zigzagoon = new Pokemon("Zigzagoon", 28, 6, "Zigzagoon!", "Tackle")
            redTrainer.catchPokemon(rattata);
            blueTrainer.catchPokemon(zigzagoon);

            const testingBattle = new Battle(redTrainer, blueTrainer)
            const redPokemon = redTrainer.currentPokemon.Rattata
            const bluePokemon = blueTrainer.currentPokemon.Zigzagoon
            testingBattle.firstAttacker = redPokemon
            testingBattle.secondAttacker = bluePokemon

            expect(typeof testingBattle.fight()).toBe("string")
        })

        test("When fight method is called, it is the first round, and the both pokemon's health is above 0, returns a string saying the first pokemon attacked with its move, the damage it did, and the second pokemon's remaining health.", () => {
            const redTrainer = new Trainer("Red");
            const blueTrainer = new Trainer("Blue");
            const rattata = new Pokemon("Rattata", 24, 7, "Rattata!", "Bite")
            const zigzagoon = new Pokemon("Zigzagoon", 28, 6, "Zigzagoon!", "Tackle")
            redTrainer.catchPokemon(rattata);
            blueTrainer.catchPokemon(zigzagoon);

            const testingBattle = new Battle(redTrainer, blueTrainer)
            const redPokemon = redTrainer.currentPokemon.Rattata
            const bluePokemon = blueTrainer.currentPokemon.Zigzagoon
            testingBattle.firstAttacker = redPokemon
            testingBattle.secondAttacker = bluePokemon

            expect(testingBattle.fight()).toBe("Rattata attacked with Bite! It did 7 damage to Zigzagoon! Zigzagoon has 21 hp remaining!")
        })

        test("When fight method is called, it is the second round, and the both pokemon's health is above 0, returns a string saying the second pokemon attacked with its move, the damage it did, and the first pokemon's remaining health.", () => {
            const redTrainer = new Trainer("Red");
            const blueTrainer = new Trainer("Blue");
            const rattata = new Pokemon("Rattata", 24, 7, "Rattata!", "Bite")
            const zigzagoon = new Pokemon("Zigzagoon", 28, 6, "Zigzagoon!", "Tackle")
            redTrainer.catchPokemon(rattata);
            blueTrainer.catchPokemon(zigzagoon);

            const testingBattle = new Battle(redTrainer, blueTrainer)
            const redPokemon = redTrainer.currentPokemon.Rattata
            const bluePokemon = blueTrainer.currentPokemon.Zigzagoon
            testingBattle.firstAttacker = redPokemon
            testingBattle.secondAttacker = bluePokemon

            testingBattle.fight();
            expect(testingBattle.fight()).toBe("Zigzagoon attacked with Tackle! It did 6 damage to Rattata! Rattata has 18 hp remaining!")
        })

        // Add win condition to attacking statements rather than checking after first calling.
    })
})

// const redTrainer = new Trainer("Red");
// const blueTrainer = new Trainer("Blue");

// const rattata = new Pokemon("Rattata", 24, 7, "Rattata!", "Bite")
// const zigzagoon = new Pokemon("Zigzagoon", 28, 6, "Zigzagoon!", "Tackle")
// const bulbasaur = new Pokemon("Bulbasaur", 36, 6, "Bulbasaur!", "Vine Whip", "Grass");
// const charmander = new Pokemon("Charmander", 24, 12, "Charmander!", "Ember", "Fire");
// const squirtle = new Pokemon("Squirtle", 40, 5, "Squirtle!", "Bubble", "Water");

// redTrainer.catchPokemon(rattata);
// blueTrainer.catchPokemon(zigzagoon);

// const testBattle = new BattleArena(redTrainer, blueTrainer)