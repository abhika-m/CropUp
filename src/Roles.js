import React from 'react';
import {Typography, Grid} from '@mui/material';
import logo from './images/logo.png';
import './App.css';

class Roles extends React.Component {
  
  handleClickFarmer = () =>{
    this.props.onClick(true);
  };

  handleClickRec = () =>{
    this.props.onClick(false);
  };

    render() {
      return (
          <div className="App">
          
             <Grid xs={8} paddingBottom="48px">
                <Typography fontSize="40px" color="#75A28E" fontWeight="700" fontFamily="sans-serif">
                 What is your purpose?
               </Typography>
               <Typography paddingX="60px" fontSize="30px" color="#054D3B" fontWeight="500" fontFamily="sans-serif">
                 Knowing more about your purpose will allow us to cater to your needs.
                </Typography>
             </Grid>
             <Grid>
               <button onClick={this.handleClickFarmer} width="200px" className='button'>Business</button>
               <button onClick={this.handleClickRec} width="200px" className='button'>Recreation</button>
             </Grid>
          </div>
              
          );
    }
  }

  export default Roles;