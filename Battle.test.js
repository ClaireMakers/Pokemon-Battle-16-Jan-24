const BattleRound = require("./Battle");
const Pokemon = require("./Pokemon");
const Trainer = require("./Trainer");

jest.mock("./Trainer");

describe("Integration tests for Battle class", () => { 
    test("When we play a battle round, it returns the pokemon with the most remaining healthpoint at the end of the round", () => { 
        let vulpix = new Pokemon("Vulpix", 9, 4);
        let psyduck = new Pokemon("Psyduck", 10, 5);

        const ash = new Trainer("Ash");
        const gary = new Trainer("Gary");

        ash.catchPokemon(vulpix)
        gary.catchPokemon(psyduck)

        const battleRound = new BattleRound(ash, gary);

        expect(battleRound.playBattleRound()).toEqual(psyduck);
    })
})

