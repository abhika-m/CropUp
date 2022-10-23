import React from 'react';
import {Typography, Grid, TextField} from '@mui/material';
import './App.css';

class Farmer extends React.Component {
    constructor(props) {
      super(props);
    }
  
    handleClick = () =>{
      this.props.onClick();
    };

    handleChange = (e) =>{
      this.props.onChange(e.target.value);
    };
    
    render() {

      return (
        <div className="App">
           
             <Grid xs={8} paddingBottom="48px">
                <Typography fontSize="40px" color="#75A28E" fontWeight="700" fontFamily="sans-serif">
                 Tell us about your region and the crops you'd like to grow.
               </Typography>
             </Grid>
             <Grid xs={12} >
                <Typography paddingBottom="16px" paddingX="60px" fontSize="30px" color="#054D3B" fontWeight="500" fontFamily="sans-serif">
                 Enter Zip Code:
                </Typography>
                 <TextField style={{paddingBottom: '16px'}} label="ZipCode" onChange={this.handleChange}/>
             </Grid>
             <Grid xs={12} >
                <Typography paddingBottom="16px" paddingX="60px" fontSize="30px" color="#054D3B" fontWeight="500" fontFamily="sans-serif">
                 Enter crops you plan to cultivate:
                </Typography>
                 <TextField style={{paddingBottom: '16px'}} label="Crops"/>
             </Grid>
               <button onClick={this.handleClick} className='button'>Submit</button>
               </div>
          );
        
    }
  }

  export default Farmer;