import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';


import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import memories from './images/memories.png';
import useStyles from './styles';


function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxidh="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    // <div>
    //   <div>
    //     <div>Memories</div>
    //     <img src={memories} alt="memories" height="60" width="60" />
    //   </div>
    //   <div>
    //     <Posts/>
    //   </div>
    //   <div>
    //     <Form/>
    //   </div>
    // </div>
      // <div>
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
  );
}

export default App;
