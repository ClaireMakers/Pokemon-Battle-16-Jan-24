class BattleRound { 
    constructor(trainerOne, trainerTwo) { 
        this.trainerOne = trainerOne;
        this.trainerTwo = trainerTwo;
    }

    playBattleRound() { 

        const pokemonOne = this.trainerOne.selectPokemon();
        const pokemonTwo = this.trainerTwo.selectPokemon();

        pokemonOne.healthPoints = pokemonOne.getHealthPoints() - pokemonTwo.getAttackPoints();

        pokemonTwo.healthPoints = pokemonTwo.getHealthPoints() - pokemonOne.getAttackPoints();


        if( pokemonOne.getHealthPoints() > pokemonTwo.getHealthPoints() ) 
            return pokemonOne;
        else
            return pokemonTwo;
    }
}

module.exports = BattleRound;