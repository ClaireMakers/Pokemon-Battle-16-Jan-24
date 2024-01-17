const BattleRound = require("./Battle");
const Trainer = require("./Trainer");

jest.mock("./Trainer");

describe("Unit tests for Battle class", () => {
  beforeEach(() => {
    // Before each test, reset the mock
    // This helps starting each test case
    // with a "fresh" mocked class
    Trainer.mockClear();
  });

  test("When we play a battle round, it returns the pokemon with the most remaining healthpoint at the end of the round", () => {
    // We're going to create double pokemons, and automatic jest mocks for the trainer instead. 
      
    // 1. We use the normal constructor - Jest will take care of creating a mock.
    const mockedTrainerAsh = new Trainer("ash");
    const mockedTrainerGary = new Trainer("gary");
      
    const doublePokemonAsh = {
          healthPoints : 10,
          getAttackPoints: () => { return 4 },
          getHealthPoints: () => { return doublePokemonAsh.healthPoints }
      }

    const doublePokemonGary = {
          healthPoints : 6,
          getAttackPoints: () => { return 4 },
          getHealthPoints: () => { return doublePokemonGary.healthPoints }
      }
      

    // 2. We mock the method getMove, replacing its normal implementation
    // with a custom function (which here simply returns 'paper').
      mockedTrainerAsh.selectPokemon.mockImplementation(() => { return doublePokemonAsh });
      
      mockedTrainerGary.selectPokemon.mockImplementation(() => { 
          return doublePokemonGary;
      })

      const battleRound = new BattleRound(mockedTrainerAsh, mockedTrainerGary);

        expect(battleRound.playBattleRound()).toEqual(doublePokemonAsh);
  });
});