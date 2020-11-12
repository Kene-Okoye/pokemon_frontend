import React from 'react';
import Pokemon from './Pokemon';
import { Typography, Grid, CircularProgress } from '@material-ui/core';


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
                
                //: <Grid container  alignItems='center' justify='center' direction='column' spacing={2} style={{marginTop: '250px'}}>
                //     <CircularProgress />
                //     <Grid item><Typography variant='h6'> Your pokémon is getting ready...</Typography></Grid>
                // </Grid>
            }

        </>
    )
}

export default Pokemons
