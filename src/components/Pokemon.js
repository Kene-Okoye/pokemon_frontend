import React from 'react';
import { Link } from 'react-router-dom';

const Pokemon = ({ pokemon }) => {
    const { name, base, id} = pokemon.pokeDexData
    const types = pokemon.pokeDexData.type;
    const imgSrc = pokemon.pokeApiData.sprites.front_default

    return (
        <div className = "pokeInfo">
            <>
            <div classsName = "imageContainer">
                <h3><Link to= {`/pokemons/${id}`}> POKEDEX#: {id}</Link></h3>
                <img src = {imgSrc}/>
            </div>
            <ul>      
                <h3>Name</h3>          
                <li>English:{name.english}  </li>
                <li>Japanese:{name.japanese}  </li>
                <li>Chinese:{name.chinese}  </li>
                <li>French:{name.french}  </li>
            </ul>
            <ul>
                <h3>Base</h3>
                <li>HP:{base.HP} </li>
                <li>Attack:{base.Attack}</li>
                <li>Defense:{base.Defense}</li>
                <li>Sp. Attack:{base["Sp. Attack"]}</li>
                <li>Sp. Defense:{base["Sp. Defense"]}</li>
                <li>Speed:{base.Speed}  </li>
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

export default Pokemon;


