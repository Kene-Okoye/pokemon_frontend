import React from 'react';
import Pokemon from './Pokemon';

const Pokemons = ( { pokemons, match, history } ) => {
    
    return (
        <>
            {pokemons && 
                pokemons
                .filter(pokemon =>
                    match.params.id ? 
                    parseInt(match.params.id, 10) === pokemon.pokeDexData.id : 
                    pokemon
                ).map((pokemon) => { 
                    return  <Pokemon pokemon={pokemon} key={pokemon.pokeDexData.id} />
                })
            }

        </>
    )
}

export default Pokemons
