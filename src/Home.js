import React from 'react';
import {Typography, Grid} from '@mui/material';
import logo from './images/logo.png';
import './App.css';

class Home extends React.Component {
    constructor(props) {
      super(props);
    }
  
    handleClick = () =>{
      this.props.onClick();
    };
    

    render() {
      

      return (
        <div className="App">
           
             <Grid xs={8} paddingBottom="48px">
                <Typography fontSize="40px" color="#75A28E" fontWeight="700" fontFamily="sans-serif">
                 Give your crops the care they need.
               </Typography>
               <Typography paddingX="60px" fontSize="30px" color="#054D3B" fontWeight="500" fontFamily="sans-serif">
                 Give your crops the care they need. CropUp uses its very own machine learning model
                 to detect the plant hardiness zone of your area to provide you with information on 
                 the best crops to plant in your region at that time. Unlike any other plant hardiness zone
                 measuring tool, CropUp uses not only the temperature in your region, but also data on 
                 humidity, dew, and solar radiation.
                </Typography>
             </Grid>
               <button onClick={this.handleClick} className='button'>Start Here</button>
               </div>
          );
        
    }
  }

  export default Home;