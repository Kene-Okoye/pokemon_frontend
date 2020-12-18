import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, Grid, Typography, CardMedia } from '@material-ui/core';
import '../App.css';
import NavBar from './NavBar';


const useStyles = makeStyles((theme) => ({
    backButton: {
        textDecoration: 'none',
        color: 'white'
    },

    card: {
        background: 'linear-gradient(65deg,rgba(0,185,251,0.22) 0%, rgba(20,140,186,0.66) 80%)' ,
        margin: '10px',
        [theme.breakpoints.up('sm')]: {
            margin: '10px 60px'
        },
    },

    gridContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '100px'
    },

    gridItem: {
        margin: '30px',
    },

    cardMedia: {
        margin: 'auto',
        width: '200px',
        height: '200px',
        marginTop: '20px',
        marginBottom: '20px'
    },

    fightButton: {
        fontFamily: 'Goldman, cursive',
        color: 'white',
        width: '120px',
        height: '40px',
        marginTop: '20px',
        background: 'linear-gradient(159deg,#ea9a07 0%, #f71212 80%)',
        fontSize: '1.2rem',
    },

    fighterTypo: {
        fontFamily: 'Goldman, cursive',
        textAlign: 'center',
        fontSize: '1.5rem',
        color: 'white'
    },

    winnerTypo: {
        fontFamily: 'Goldman, cursive',
        color: 'white',
    }

}))


const PokemonFight = ( { pokemons, selectedPokemon } ) => {
    const classes = useStyles()
    const [ winner, setWinner ] = useState(null)
    console.log(winner);
    

    const handleFight = () => {
        setWinner(Math.max(selectedPokemon.player, selectedPokemon.opponent))
    }

    return (
        <>
            <NavBar/>
            {/* <Button color='primary' variant="contained"><Link to='/pokemons' className={classes.backButton} >Back</Link></Button> */}
            <Grid container className={classes.gridContainer}>
                <Grid xs={12}><Typography variant={'h5'} className={classes.fighterTypo}>VS</Typography></Grid>
                
            {
                pokemons && pokemons.filter(pokemon => 
                    selectedPokemon.player === pokemon.pokeDexData.id ||
                    selectedPokemon.opponent === pokemon.pokeDexData.id
                )
                .map(pokemon => {
                    const pokemonHDImage = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.pokeDexData.id}.png`;
                    return (
                        <>  
                            <Grid item xs={12} sm={6} md={6}   key={pokemon.pokeDexData.id} >
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardMedia} image={pokemonHDImage}/>
                                    <CardContent>
                                        <Typography className={classes.fighterTypo}>{pokemon.pokeDexData.name.english}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <h1 style={{color: 'white'}} key={ pokemon.pokeDexData.id }></h1>                            
                        </>
                    )
                })
            }
            {
                winner && pokemons.filter(pokemon => winner === pokemon.pokeDexData.id)
                .map(pokemon => {
                    const pokemonHDImage = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.pokeDexData.id}.png`;
                    return <>
                    <Grid item xs={12} style={{textAlign: 'center'}} className={classes.gridItem}>
                        <Typography variant={'h3'} className={classes.winnerTypo}>Winner is {pokemon.pokeDexData.name.english}</Typography>
                    </Grid> 
                    </>
                })
            }
                <Button onClick={handleFight} className={classes.fightButton}>Fight</Button>
            </Grid>
        </>
        )
}

export default PokemonFight;
