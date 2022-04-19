import React from "react";
import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core';

import memories from './images/memories.png';
function App() {
  return (
    <Container maxidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h4" aligh="center">Memories</Typography>
        <img src={memories} alt="memories" height="60" width="60" />
      </AppBar>
    </Container>
      // <div>
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
  );
}

export default App;
