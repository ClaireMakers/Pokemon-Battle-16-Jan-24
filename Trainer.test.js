const Trainer = require("./Trainer")
const Pokemon = require("./Pokemon")

describe("Unit tests for the Trainer class", () => { 

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
