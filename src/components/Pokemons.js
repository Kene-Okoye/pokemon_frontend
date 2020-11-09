import React from 'react';
import PokemonInfo from './PokemonInfo';

const Pokemons = ( { pokemons, match, history } ) => {

    return (
        <>
            {pokemons && 
                pokemons
                .filter(pokemon =>
                    match.params.id ? 
                    parseInt(match.params.id, 10) === pokemon.id : 
                    pokemon
                ).map((pokemon) => { 
                    return  <PokemonInfo pokemon={pokemon} key={pokemon.id} />
                })
            }

        </>
    )
}

export default Pokemons
