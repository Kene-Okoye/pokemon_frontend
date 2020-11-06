import React from 'react'
import { Link } from 'react-router-dom';

const PokemonInfo = ({ pokemon }) => {


    return (
        <div>
            Here is a detailed pokemon profiles!
            <h2>
        <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
      </h2>
      <p>id: {pokemon.id}</p>
     
      <p>type: {pokemon.type}</p>
     
        </div>
    )
}

export default PokemonInfo
