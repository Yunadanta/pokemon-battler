const { Trainer } = require("./pokemon-trainer")

describe("Pokemon Trainer", () => {
    describe("Testing the instance and its properties and values", () => {
        test("Creates a new instance of Trainer", () => {
            expect(typeof new Trainer).toBe("object")
        })
        test("Check the new instance of Trainer has the correct properties", () => {
            const expectedOutput = [
                "name",
                "currentPokemon",
                "filledPokeballs",
                "maxFilledPokeballs"
            ]
            const testTrainer = new Trainer
            expect(Object.keys(testTrainer)).toEqual(expectedOutput)
        })
        test("Check initial values of Trainer", () => {
            const testTrainer = new Trainer
            const expectedOutput = [
                "",
                {},
                0,
                6
            ]
            expect(Object.values(testTrainer)).toEqual(expectedOutput)
        })
        test("Check 2 new trainers are not the same", () => {
            const testTrainer = new Trainer
            const secondTestTrainer = new Trainer
            expect(testTrainer).not.toBe(secondTestTrainer)
        })
    })
    describe("Checking the new methods for Trainer", () => {
        test("catchPokemon", () => {
            const testTrainer = new Trainer
            testTrainer.catchPokemon("Pikachu")
            expect(testTrainer.currentPokemon).toEqual({ 1: "Pikachu" });
            expect(testTrainer.filledPokeballs).toBe(1);
        })
    })
})
