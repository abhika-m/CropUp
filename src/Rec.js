import React from 'react';
import {Typography, Grid, TextField} from '@mui/material';
import './App.css';

class Rec extends React.Component {
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
      
      const options = ['Seattle', 'San Fransisco'];
      return (
        <div className="App">
           
             <Grid xs={8} paddingBottom="48px">
                <Typography fontSize="30px" color="#75A28E" fontWeight="700" fontFamily="sans-serif">
                 Tell us about your situation
               </Typography>
             </Grid>
             <Grid xs={12}>
                <Typography paddingBottom="16px" paddingX="60px" fontSize="20px" color="#054D3B" fontWeight="500" fontFamily="sans-serif">
                 Enter your Zip Code
                </Typography>
                <TextField style={{paddingBottom: '16px'}} label="Zip Code" onChange={this.handleChange} />
             </Grid>
               <button onClick={this.handleClick} className='button'>Submit</button>
               </div>
          );
        
    }
  }

  export default Rec;