import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, Divider, Grid } from '@material-ui/core';
import PokemonCards from './PokemonCards'

// Define styles to use
const useStyles = makeStyles((theme) => ({
    backgroundCard: {
        background: 'linear-gradient(160deg,#cced60 0%, #315c34 80%)',
        width: '500px',
        height: '700px',
        position: 'absolute',
        top: '0px',
        marginTop: '80px',
        borderRadius: '10px',
        borderBottomLeftRadius: '25px',
        borderBottomRightRadius: '25px',
    },
    
    topCard: {
        width: '450px',
        height: 'inherit',
        margin: 'auto',
        position: 'relative',
        marginTop: '240Px', 
        textAlign: 'center'   
    },

    imageStyle: {
        width: '250px',
        height: 'auto',
        margin: '50px 0 0 120px',
        position: 'absolute', 
        zIndex: '1',       
        left: '0',
        right: '0',
    },

        
    gridStlye: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '70px',
    },

    dividerStyle: {
    width: '200px', 
    height: '8px', background: '#446934',
    borderRadius: '10px'
    },

    typeStyle: {
        background: 'linear-gradient(160deg,#315c34 0%, #cced60 80%)',
        marginTop: '2px', padding: '5px 50px',
        borderRadius: '50px',
    }
}));

const Pokemon = ({ pokemon}) => {
    // console.log(pokemon)
    // const { name, base, id} = pokemon.pokeDexData;
    // console.log(name)
    const { name, base, id} = pokemon.pokeDexData
    const types = pokemon.pokeDexData.type;
    const imgSrc = pokemon.pokeApiData.sprites.front_default
    const pokemonHDImage = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`

    // define stylses class states and call the its function 
    const classes = useStyles()
// return (<>Pokemon Info</>)
    return (
            <>
                <h3><Link to= {`/pokemons/${id}`}> POKEDEX#: {id}</Link></h3>
                <Grid container alignItems='center' justify='center'>
                    <Card className={classes.backgroundCard}>
                        <img src = {pokemonHDImage} className={classes.imageStyle}/>
                        <Card className={classes.topCard}>
                            <Grid container className={classes.gridStlye} spacing={1}>
                                <Grid item>
                                    <Typography variant='h4'>{name.english}</Typography>
                                </Grid>
                                <Grid item >
                                    <Divider className={classes.dividerStyle}/>
                                </Grid>
                                <Grid item>
                                    <Typography variant='h6'>{name.japanese}</Typography>
                                </Grid>
                                <Grid item style={{margin: '15px 0 5px 0'}}>
                                        <Typography variant='overline' style={{marginBottom: '10px'}}>Type</Typography>
                                        <div className={classes.typeStyle}>
                                        { types ? types.map(type => {
                                            return (
                                                <Typography variant='body2'>{type}</Typography>
                                            )}) : ""
                                        }
                                    </div>                                
                                </Grid>
                                <Grid container alignItems='center' justify='center' spacing={10} style={{marginTop: '5px'}}>
                                    <Grid item style={{padding: '10px'}}><Typography variant='h6'>{base["Sp. Attack"]}</Typography><Typography variant='overline'>Attack</Typography></Grid>
                                    <Grid item style={{padding: '10px', marginLeft: '30px'}}><Typography variant='h6'>{base["Sp. Defense"]}</Typography><Typography variant='overline'>Defense</Typography></Grid>
                                    <Grid item style={{padding: '10px', marginLeft: '30px'}}><Typography variant='h6'>{base.Speed}</Typography><Typography variant='overline'>Speed</Typography></Grid>
                                </Grid>
                                <Grid item style={{marginTop: '25px'}}>
                                    <Divider variant="middle" style={{background: 'lightGrey', width: '400px', height: '1px', margin: '10px'}}/>
                                </Grid>
                            </Grid>
                            
                        </Card>
                    </Card>
                </Grid>
                </>          
    )

}

                
            {/* <ul>      
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
            </ul> */}
            
       
export default Pokemon;


