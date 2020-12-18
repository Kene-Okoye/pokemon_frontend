import React from 'react';
import Pokemon from './Pokemon';
import PokemonCards from './PokemonCards';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Typography, Grid, CircularProgress } from '@material-ui/core';
import classNames from 'classnames';
import Footer from './Footer';
import { StaticBanner } from 'material-ui-banner';
import MoodIcon from '@material-ui/icons/Mood';
import NavBar from './NavBar';


const useStyles = makeStyles((theme) => ({
    gridContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px', 
        width: 'auto',       
    },

    banner:{
        backgroundColor: '#040405',
        color: 'white',
    },

    gridMargin: {
            [theme.breakpoints.up('sm')]: {
                margin: '10px 50px'
            },
            [theme.breakpoints.down('sm')]: {
            margin: '10px 20px'
            }
    },

    typo: {
        fontFamily: 'VT323, monospace',
    },

    choose: {
        textAlign: 'center',
        color: 'white',
        marginTop: '40px',
    },

    loaderContainer: {
        marginTop: '200px',
        flexDirection: 'column',
        margin: theme.spacing(2)
    }
}))

const Pokemons = ( { pokemons, match, history, onSelect, selectedPokemon } ) => {
    const classes = useStyles();

    // START -- Game Instruction Banner styles //
    const theme = createMuiTheme({
        typography: {
        fontFamily: [
            'Goldman',
            'cursive',
        ].join(','),
        }
    })

    StaticBanner.show({
        icon: <MoodIcon/>,
        label: 'Are you ready for the pokémon fight of your life? Simply select any two pokémons from our list of ready-to-rumble pokémons below. Choose your fighter wisely, and let the fight begin!',
    });
    // END -- Game Instruction Banner styles //

    return (
        <>  
            <NavBar/>
            <ThemeProvider theme={theme}>
                <StaticBanner className={classes.banner} />
            </ThemeProvider>

            <Typography variant='h3' className={classNames(classes.choose, classes.typo)}>Choose your pokémon</Typography>
            <Grid container className={classNames(classes.gridContainer, classes.gridMargin)} spacing={2}>
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
                    <Grid item><Typography variant='h6' className={classNames(classes.choose, classes.typo)}>Pokémon loading...<br/>Get ready to catch 'em all!</Typography></Grid>
                </Grid>
            }
            </Grid>
            <Footer/>
        </>
    )
}

export default Pokemons;

