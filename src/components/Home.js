import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import classNames from 'classnames';
import '../App.css'

const useStyles = makeStyles((theme) => ({
    imageContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '230px'
    },

    image: {
        width: '300px',
    },

    imageDesktop: {
        [theme.breakpoints.up('sm')]: {
            width: '600px',
        },
        [theme.breakpoints.up('md')]: {
            width: '800px',
        },
    },

    playButton: {
        width: '120px',
        height: '40px',
        background: 'linear-gradient(159deg,#ea9a07 0%, #f71212 80%)',
        fontSize: '1.2rem',
    },

    link: {
        textDecoration: 'none',
        color: 'white'
    }
}))

const Home = () => {
    const classes = useStyles()

    return (
        <>
            <Grid container className={classes.imageContainer}>
                <Grid item >
                    <img src='https://images8.alphacoders.com/770/770462.png' alt='Pokemon logo image' className={classNames(classes.image, classes.imageDesktop)}/>
                </Grid>
                <Grid item><Button variant="contained" className={classes.playButton}><Link className={classes.link} to={'/Pokemons'}>Play</Link></Button></Grid>
                <Grid>
                <div class="ball">
                    <div class="button"></div>
                </div>
                </Grid>
            </Grid>
        </>
    )
}

export default Home
