import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import useStyles from './styles';
import memories from '../../images/memories.png';


function Navbar () {
    const classes = useStyles();
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>

            </div>
            <Typography className={classes.heading} variant="h2" align="center">Журнал путешествий</Typography>
            <img className={classes.image} src={memories} alt="memories" height="60" />
        </AppBar>
    )
}

export default Navbar;