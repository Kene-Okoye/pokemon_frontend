import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, Grid, Typography, CardMedia } from '@material-ui/core';
import Pokemon from './Pokemon'
import { useSpring, animated } from 'react-spring'


// Make styles to use 
const useStyles = makeStyles ((theme) => ({
    card: {
        background: 'linear-gradient(160deg,#315c34 0%, #cced60 80%)'
    },
    
    gridContainer: {
        justifyContent: 'center',
        alignItems: 'center',
      },

    cardMedia: {
        margin: 'auto',
        width: '100px',
        height: '100px',
        marginTop: '20px',
        marginBottom: '20px'
    },

    cardContent: {
        textAlign: 'center',
      },

    button: {
        margin: theme.spacing(1),
        borderRadius: '50px',
        background: '#115293',
        color: 'white'
    },

    typo: {
        fontWeight: 'bold'
    },
    
    link: {
        textDecoration: 'none',
        color: 'black'
    },

    more: {
        textDecoration: 'none',
        color: 'white'
    }
}))

// React spring
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const PokemonCards = ({ pokemon, onSelect, selectedPokemon }) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    // console.log(passedFunction)
    // extract needed data from the props 
    const { name, base, id} = pokemon.pokeDexData;
    const types = pokemon.pokeDexData.type;
    const imgSrc = pokemon.pokeApiData.sprites.front_default;

    // Pokemon Fighting Logic (useStates)
    // create States
    const [ fighters, setFighters ] = useState([]);

    const handleSelect = () => {
        if (selectedPokemon.player) {
           return onSelect({...selectedPokemon, opponent:id});
        }  
        onSelect({...selectedPokemon, player:id});
    };

    //import HD image from external image API
    const pokemonHDImage = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;

    // define the style's states and call the its function 
    const classes = useStyles()
    
    return (
        <>  
            <Grid item xs={12} sm={6} md={3}   key={{id}}>
            {/* 'linear-gradient(65deg,rgba(0,185,251,0.22) 0%, rgba(20,140,186,0.66) 80%)' */}
            <animated.div
            class="card"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
            >
                <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia}  image={pokemonHDImage} />
                    <CardContent className={classes.cardContent}>
                        <Typography variant='body1' className={classes.typo}><Link className={classes.link}>{name.english}</Link></Typography>
                        <Button variant="contained" className={classes.button}><Link className={classes.more} to= {`/pokemons/${id}`} render ={(props) => <Pokemon pokemonInfo = {pokemon.pokeDexData} {...props}/>}>More</Link></Button>
                        <Button variant="contained" className={classes.button} onClick={handleSelect} >Select</Button>
                        {/* <Link to= {`/pokemons/${id}`}render ={(props) => <Pokemons pokemon = {pokemon} {...props}/>}/> */}
                    </CardContent>
                </Card>
            </animated.div>
            </Grid>
        </>
    )
}

export default PokemonCards
