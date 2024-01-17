const Trainer = require("./Trainer")
const Pokemon = require("./Pokemon")

describe("Unit tests for the Trainer class", () => { 
    test("When passed a mocked instance of pokemon, it adds it to the pokemons array", () => { 
        const doublePokemon = {
            name: "mockedPokemon",
            healthPoints: 10,
            attackPoints: 3
        }

        const ash = new Trainer("Ash");
        ash.catchPokemon(doublePokemon);
        expect(ash.pokemons).toEqual([doublePokemon]);
    })

    test("when given two mocked pokemons, it selects the one with the most attackPoints", () => {
        const doublePokemonOne = {
            attackPoints: 3,
            getAttackPoints: () => { return 3 }
        };

        const doublePokemonTwo = {
          attackPoints: 5,
          getAttackPoints: () => {
            return 5;
          },
        };

        const ash = new Trainer("Ash");
        ash.catchPokemon(doublePokemonTwo);
        ash.catchPokemon(doublePokemonOne);
        expect(ash.selectPokemon()).toEqual(doublePokemonTwo);
    }); 
})

describe("Integration tests for the Trainer class", () => {
    test("when passed an instance of pokemon, it gets added to the pokemons array", () => { 
        let vulpix = new Pokemon("Vulpix", 9, 4);
        const ash = new Trainer("Ash")

        ash.catchPokemon(vulpix);
        expect(ash.pokemons).toEqual([vulpix]);
    })

    test("when given two pokemons, it selects the one with the most attackPoints", () => { 
        let vulpix = new Pokemon("Vulpix", 9, 4);
        let psyduck = new Pokemon("Psyduck", 10, 3);

        const ash = new Trainer("Ash");
        ash.catchPokemon(vulpix);
        ash.catchPokemon(psyduck);
        expect(ash.selectPokemon()).toEqual(vulpix);
    })
});
