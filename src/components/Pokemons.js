import React, { useState } from 'react';
import Pokemon from './Pokemon';
import PokemonCards from './PokemonCards';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, CircularProgress } from '@material-ui/core';
import classNames from 'classnames';


const useStyles = makeStyles((theme) => ({
    gridContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px'
    },

    choose: {
        textAlign: 'center',
        color: 'white',
        marginTop: '20px'
    },

    loaderContainer: {
        marginTop: '200px',
        flexDirection: 'column',
        margin: theme.spacing(2)
    }
}))

const Pokemons = ( { pokemons, match, history, onSelect, selectedPokemon } ) => {
    const classes = useStyles();

// var a = 1;
// var b = 2;
//     const [ trial, setTrial ] = useState()
//     const passedFunction =() =>{
//         setTrial(a + b);
//     }
//     console.log(trial)

    return (
        <>
            <Typography variant='h3' className={classes.choose}>Choose your Pokémon</Typography>
            <Grid container className={classNames(classes.gridContainer)} spacing={2}>
            {pokemons ? 
                pokemons
                .filter(pokemon =>
                    match.params.id ? 
                    parseInt(match.params.id, 10) === pokemon.pokeDexData.id : 
                    pokemon)
               .map((pokemon) => {  
                    return match.params.id ? <Pokemon pokemon={pokemon} key={pokemon.pokeDexData.id} onSelect = { onSelect } selectedPokemon = { selectedPokemon }/> 
                    : <PokemonCards pokemon={pokemon} key={pokemon.pokeDexData.id} onSelect ={ onSelect } selectedPokemon = { selectedPokemon }/>              
                })
                : <Grid container className={classNames(classes.gridContainer, classes.loaderContainer)}>
                    <CircularProgress />
                    <Grid item><Typography variant='h6' className={classes.choose}>Pokémon loading...<br/>Get ready to catch 'em all!</Typography></Grid>
                </Grid>
            }
            </Grid>
        </>
    )
}

export default Pokemons

