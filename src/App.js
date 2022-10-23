import React from 'react';
import Main from './Main'
import './App.css';
import {Typography, Grid} from '@mui/material';
import logo from './images/logo.png';

function App() {
  return (
    <div className='App'>
    <Grid xs={8}  paddingY="32px">
        <img src={logo} width="10%"></img>
        <Typography fontSize="50px" color="#054D3B" fontWeight="700" fontFamily="sans-serif">
        CROPUP
        </Typography>   
        </Grid>
    <Main />
    </div>
  );
}

export default App;
