class Trainer { 
    constructor(name) { 
        this.name = name;
        this.pokemons = []
    }
  

    catchPokemon(pokemon) { 
        this.pokemons.push(pokemon)
    }

    selectPokemon() { 
        let selectedPokemon = { attackPoints: 0 }
        //want to look at all the pokemons in the array
        //check their atttack points
        // return the one with the most attack points
        this.pokemons.map(pokemon => { 
            console.log("selectedPokemon :", selectedPokemon)
            console.log("pokemon :",  pokemon)
            if (pokemon.getAttackPoints() > selectedPokemon.attackPoints) { 
                selectedPokemon = pokemon;
            }
        })

        return selectedPokemon;
    }
}

module.exports = Trainer;