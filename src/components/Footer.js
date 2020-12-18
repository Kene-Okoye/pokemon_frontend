import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 0 0 0',
        backgroundColor: 'transparent'
    },

    iconsAnchor: {
        margin: '15px'
    },

    icons: {
        fontSize: '29px',
        fontWeight: '400px',
        color: 'white',
        '&:hover': {
            color: '#9EC253',
        },
    },

    copyRightTypo: {
        color: 'white',
        textAlign: 'center',
        flexGrow: 1,
        fontFamily: 'Goldman, cursive'
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <>
            <footer>
                <div className={classes.footerContainer}>

                    <div className={classes.copyIconContainer}>
                        <Typography variant='body2' className={classes.copyRightTypo}>Built with ❤️ by Teresa, Henry &amp; Kene, ©2020.</Typography>
                    </div>

                    <a className={classes.iconsAnchor} href='http://skype.com'>
                        <GitHubIcon className={classes.icons}/>
                    </a>
                    
                </div>
            </footer>
            
        </>
    )
}

export default Footer;
