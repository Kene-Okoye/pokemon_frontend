import React, { useState } from 'react';
import '../App.css'

function PokemonFight ( { pokemons, selectedPokemon } ) {
// let winnerId = 0;
const [ winner, setWinner ] = useState(null)
console.log(winner)

const handleFight = (a, b) => {
    // let player1 = Math.floor(Math.random()) + a
    // let player2 = Math.floor(Math.random()) + a
    // winnerId = Math.max(selectedPokemon.player, selectedPokemon.opponent)
    setWinner(Math.max(selectedPokemon.player, selectedPokemon.opponent))
}

    return (
        <>
            
            {
                pokemons && pokemons.filter(pokemon => 
                    selectedPokemon.player === pokemon.pokeDexData.id ||
                    selectedPokemon.opponent === pokemon.pokeDexData.id
                )
                .map(pokemon => {
                    return (
                        <>
                            <h1 style={{color: 'white'}} key={ pokemon.pokeDexData.id }>{pokemon.pokeDexData.id}, {pokemon.pokeDexData.base["Sp. Attack"]}</h1>
                            {/* <div className={winner? "displayWinner" : "displayNothing"}>Winner is {`pokemon.pokeDexData.${winner}`}</div> */}
                            { winner && <div style={{color: 'white'}}>Winner is {`pokemon.pokeDexData.${winner}`}</div>}
                        </>
                    )
                })
            }
            <button onClick={handleFight}>Fight</button>
            
        </>
        )
}

export default PokemonFight;
