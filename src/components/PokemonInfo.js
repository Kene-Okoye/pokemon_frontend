import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const PokemonInfo = ({ pokemon }) => {
const types = pokemon.type;

const [pokeInfo, setPokeInfo] = useState(null);
console.log({pokeInfo: pokeInfo})

useEffect (() => {
  fetch('/pokemon/:id')
  .then(res => res.json())
  .then(data => console.log({newInfo: data}))
  .catch(err => console.log(err))
},[]);


// const {pokedata:{sprites}} = pokemon; // pokemon.pokedata.sprites destructure
// const imageURI = sprites.front_default;
//<img src ={pokemon.pokedata.sprites.front_default}/>
console.log ({pokemonInfo: pokemon});

    return (
        <div className = "pokeInfo">
            <>
            <ul>
                <h3><Link to= {`/pokemons/${pokemon.id}`}>{pokemon.name.english}</Link></h3>
                <li>Japanese:{pokemon.name.japanese}  </li>
                <li>Chinese:{pokemon.name.chinese}  </li>
                <li>French:{pokemon.name.french}  </li>
            </ul>
            <ul>
                <h3>Base</h3>
                <li>HP:{pokemon.base.HP} </li>
                <li>Attack:{pokemon.base.Attack}</li>
                <li>Defense:{pokemon.base.Defense}</li>
                <li>Sp. Attack:{pokemon.base["Sp. Attack"]}</li>
                <li>Sp. Defense:{pokemon.base["Sp. Defense"]}</li>
                <li>Speed:{pokemon.base.Speed}  </li>
            </ul>
            <ul>
                <h3>Type</h3>
                { types 
                ? types.map(type =>{
                    return (
                        <li>{type}</li>
                    )
                })
                : ""
                }
            </ul>
            
            </>          
        </div>
    )
}

export default PokemonInfo
