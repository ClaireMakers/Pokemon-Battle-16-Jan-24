const Pokemon = require("./Pokemon");


describe("Unit tests for the Pokemon class", () => { 
    test("when getName() is called, the pokemon name is returned", () => { 
        let pikachu = new Pokemon("pikachu", 10, 3)

        expect(pikachu.getName()).toBe("pikachu");
    })

    test("when getHealthPoints() is called, the pokemon healthPoints is returned", () => {
        let pikachu = new Pokemon("pikachu", 10, 3);
        
        expect(pikachu.getHealthPoints()).toBe(10);
    });

    test("when getHealthPoints() is called, the pokemon healthPoints is returned", () => {
      let pikachu = new Pokemon("pikachu", 10, 3);

      expect(pikachu.getAttackPoints()).toBe(3);
    });
})