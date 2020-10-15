const pokemon = require("./pokemon");
const { Pokemon } = require("./pokemon");

describe("Pokemon", () => {
    describe("Testing the new instance", () => {
        test("Creates an object", () => {
            expect(typeof new Pokemon).toBe("object");
        })



        test("Check the instance's properties", () => {
            const expectedOutcome = [
                "name",
                "health",
                "attackDamage",
                "sound",
                "move",
                "type",
            ]

            const testPokemon = new Pokemon;

            expect(Object.keys(testPokemon)).toEqual(expectedOutcome)
        })



        test("Check the instance's default type is 'normal'", () => {

            const testPokemon = new Pokemon;

            expect(testPokemon.type).toBe("normal")
        })



        test("Check the instance's type can be re-assigned", () => {

            const grassPokemon = new Pokemon("grass");
            const firePokemon = new Pokemon("fire");
            const waterPokemon = new Pokemon("water");

            expect(grassPokemon.type).toBe("grass")
            expect(firePokemon.type).toBe("fire")
            expect(waterPokemon.type).toBe("water")
        })
    })

    describe("Testing the instance's methods", () => {
        test("Check what pokemon is strong against", () => {

            const normalPokemon = new Pokemon();
            const grassPokemon = new Pokemon("grass");
            const firePokemon = new Pokemon("fire");
            const waterPokemon = new Pokemon("water");

            expect(normalPokemon.strongAgainst()).toBe("This pokemon is not strong against anything")
            expect(grassPokemon.strongAgainst()).toBe("This pokemon is strong against water types")
            expect(firePokemon.strongAgainst()).toBe("This pokemon is strong against grass types")
            expect(waterPokemon.strongAgainst()).toBe("This pokemon is strong against fire types")
        })



        test("Check what pokemon is weak against", () => {

            const normalPokemon = new Pokemon();
            const grassPokemon = new Pokemon("grass");
            const firePokemon = new Pokemon("fire");
            const waterPokemon = new Pokemon("water");

            expect(normalPokemon.weakAgainst()).toBe("This pokemon is not weak against anything")
            expect(grassPokemon.weakAgainst()).toBe("This pokemon is strong against fire types")
            expect(firePokemon.weakAgainst()).toBe("This pokemon is strong against water types")
            expect(waterPokemon.weakAgainst()).toBe("This pokemon is strong against grass types")
        })



        test("Check what sound the pokemon makes", () => {

            const testPikachu = new Pokemon("electric");
            testPikachu.name = "Pikachu";
            testPikachu.soundMade();

            expect(testPikachu.sound).toBe("Pikachu!")
        })



        test("Checks what move it is using", () => {

            const testPikachu = new Pokemon("electric");
            testPikachu.name = "Pikachu";
            testPikachu.useYourMoves("Thundershock");

            expect(testPikachu.move).toBe("Thundershock")
        })
    })
})

