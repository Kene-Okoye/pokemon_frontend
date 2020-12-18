import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, Divider, Grid, Button } from '@material-ui/core';

// Define styles to use
const useStyles = makeStyles((theme) => ({
    backButton: {
        textDecoration: 'none',
        color: 'white'
    },

    backgroundCard: {
        background: 'linear-gradient(160deg,#cced60 0%, #315c34 80%)',
        width: '500px',
        height: '700px',
        position: 'absolute',
        top: '0px',
        marginTop: '110px',
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
    },

    typo: {
        fontFamily: 'VT323, monospace'
    },
}));

const Pokemon = ({ pokemon}) => {
    const { name, base, id} = pokemon.pokeDexData
    const types = pokemon.pokeDexData.type;
    const imgSrc = pokemon.pokeApiData.sprites.front_default
    const pokemonHDImage = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`

    // define stylses class states and call the its function 
    const classes = useStyles()

    return (
            <>  
                <Button color='primary' variant="contained" ><Link className={classes.backButton} to='/pokemons'>Back</Link></Button>
                <Grid container alignItems='center' justify='center' style={{marginTop: '15px'}}>
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

export default Pokemon;


