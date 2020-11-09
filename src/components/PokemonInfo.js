import React from 'react';
import { Link } from 'react-router-dom';

const PokemonInfo = ({ pokemon }) => {
const types = pokemon.type;
const abilities = pokemon.pokedata.abilities.ability.name;
console.log (abilities);

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
            <ul>
                <h3>Abilities</h3>
                { abilities 
                ? abilities.map(item =>{
                    return (
                        <li>{item.ability.name}</li>                        
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
