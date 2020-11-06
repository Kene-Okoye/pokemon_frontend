import React from 'react'
import { Link, useParams, useHistory } from 'react-router-dom';
import PokemonInfo from './PokemonInfo'

const Pokemons = ( { pokemons, match, history } ) => {

    return (
        <div>
            <div>
                { pokemons && pokemons.filter( pokemon =>
                    match.params.id ? parseInt(match.params.id, 10) === pokemon.id : pokemon
                    ).map((pokemon) => { 
                        return  <PokemonInfo pokemon={pokemon} key={pokemon.id} />
                     })}
            </div>
        </div>
    )
}

export default Pokemons
