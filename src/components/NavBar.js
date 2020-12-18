import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    toolBar: {
        background: '#1B242F', 
        display: 'flex', 
        justifyContent: 'space-between'
    },

    link: {
        textDecoration: 'none',
        color: 'white'
    },

    logoContainer: {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        padding: '12px 10px 10px 10px'
    },

    toolBarButton: {
        color: 'white',
        fontSize: '1.2em',
        margin: '10px',
        '&:hover': {
            background: 'linear-gradient(159deg,#ea9a07 0%, #f71212 80%)',
        },
    },

    typo: {
        fontFamily: 'VT323, monospace',
    },

}))


function NavBar() {
    const classes = useStyles();

    return (
        <>
            <AppBar position='static'>                
                <Toolbar className={classes.toolBar}>
                    <div className={classes.logoContainer}>
                        <Link className={classes.link} to='/pokemons'>
                            <i class="fas fa-gamepad" style={{borderRadius: '10px', fontSize: '2em'}}></i>
                        </Link>
                        <Typography>TeHeKe</Typography>
                    </div>
                    <div>
                        <Button className={classNames(classes.toolBarButton, classes.typo)}>About us</Button>
                        <a style={{textDecoration: 'none'}} href="https://github.com/Kene-Okoye/pokemon_frontend">
                            <Button className={classNames(classes.toolBarButton, classes.typo)}>View gitHub</Button>
                        </a>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavBar;
