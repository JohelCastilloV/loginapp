import React from 'react';
import Header from './Header';
import { Grid } from '@material-ui/core';

export default ({ children }) => {
  return (
    <div>
      <Header />    
      <Grid container justify="center">
      {children}
      </Grid>
    </div>
  );
};