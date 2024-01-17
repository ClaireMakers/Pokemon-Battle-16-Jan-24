class Trainer { 
    constructor(name) { 
        this.name = name;
        this.pokemons = []
    }
  

    catchPokemon(pokemon) { 
        this.pokemons.push(pokemon)
    }
        //want to look at all the pokemons in the array
        //check their atttack points
        // return the one with the most attack points

    selectPokemon() { 
        let selectedPokemon = { attackPoints: 0 }

            this.pokemons.map(pokemon => { 
                if (pokemon.getAttackPoints() > selectedPokemon.attackPoints) { 
                selectedPokemon = pokemon;
                }
            })

        return selectedPokemon;
    }
}

module.exports = Trainer;