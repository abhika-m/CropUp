import React from 'react';
import {Typography, Grid} from '@mui/material';
import './App.css';
import axios from 'axios'
import { wait } from '@testing-library/user-event/dist/utils';

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {humidity: null, temp: null, dew: null, solar: null, zone: "", desc: "No info available"};
  }

  getResult = () =>{
    if(this.state.zone == "2a"){
      this.setState({desc: "Lowbush blueberry, American raspberry, Black berry, Common Snowberry"});
    }
    else if(this.state.zone == "2b"){
      this.setState({desc: "Mongolian Cherry, Creeping Juniper, Bog Rosemary, Sweet gale"});
    }
    else if(this.state.zone == "3a"){
      this.setState({desc: "Spinach, chard, Orach, Kale"});
    }
    else if(this.state.zone == "3b"){
      this.setState({desc: "Escarole, Collards, Bok Choy, Parsley"});
    }
    else if(this.state.zone == "4a"){
      this.setState({desc: "Winterberry, Smoke tree, Cherry, Pine"});
    }
    else if(this.state.zone == "4b"){
      this.setState({desc: "Gayfeather, Aster, Bellflower, Yarrow"});
    }
    else if(this.state.zone == "5a"){
      this.setState({desc: "Asparagus, beets, Cabbage, Carrots"});
    }
    else if(this.state.zone == "5b"){
      this.setState({desc: "Onions, lettuce, Peas, Peppers"});
    }
    else if(this.state.zone == "6a"){
      this.setState({desc: "Tomatoes, squash, peppers, potatoes"});
    }
    else if(this.state.zone == "6b"){
      this.setState({desc: "Cucumbers, Rose, Azalea, peppers"});
    }
    else if(this.state.zone == "7a"){
      this.setState({desc: "Rhododendron, Lenten Rose, Lavender, Dogwood"});
    }
    else if(this.state.zone == "7b"){
      this.setState({desc: "Dahlias, Caladium, Sun Perennials, Daylilies"});
    }
    else if(this.state.zone == "8a"){
      this.setState({desc: "Artichokes, Asparagus, Rhubarb, Strawberries"});
    }
    else if(this.state.zone == "8b"){
      this.setState({desc: "Apple, Pear, Fig, Cherry"});
    }
    else if(this.state.zone == "9a"){
      this.setState({desc: "Kiwis, Strawberries, Tomatillos, Grapes"});
    }
    else if(this.state.zone == "9b"){
      this.setState({desc: "Lemons, oranges, Loquats, Pomegranates"});
    }
    else if(this.state.zone == "10a"){
      this.setState({desc: "Cannas, Croton, Snake Plants, Hibiscus"});
    }
    else if(this.state.zone == "10b"){
      this.setState({desc: "Azaleas, Aloe, Beets, Hydrangea "});
    }
    else if(this.state.zone == "11a"){
      this.setState({desc: "Kiwi, Starfruit, Dragon Fruit, Lychee"});
    }
    else if(this.state.zone == "11b"){
      this.setState({desc: "Guava, Bananas, Peppers, Melons"});
    }
    else if(this.state.zone == "12a"){
      this.setState({desc: "Pineapple, Black Pepper, Mint, Eggplant"});
    }
    else if(this.state.zone == "12b"){
      this.setState({desc: "Rosemary, Peppers, Cucumbers, Dill"});
    }
    else if(this.state.zone == "13a"){
      this.setState({desc: "Peas, Spinach, Chard, Kale"});
    }
    else if(this.state.zone == "13b"){
      this.setState({desc: "Chili Pepper, Aloe, Strawberry, Bush Beans"});
    }
  };

  handleClick = () =>{
    this.props.onClick();
  };

  handleLoad = (h, t, d, s) => {
    const params = { humidity: h, temp: t, dew: d, solar: s };
    axios.post('http://www.localhost:8080/prediction', params).then((res) => {
    console.log(res);
    const data = res.data.data;
    this.setState({zone: data.prediction});
    })
    .catch((error) => this.setState({zone: "invalid zip"}))
    }
  
  componentDidMount() {
    let link = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + this.props.zip + '?unitGroup=metric&key=9VYHRGFDBMYN8EKC9FBHPCRET&contentType=json';
    fetch(link)
    .then(res => res.json())
    .then((data) => {
      this.setState({ humidity: data.days[0].humidity, temp: data.days[0].temp, dew: data.days[0].dew , solar: data.days[0].solarradiation});
      this.handleLoad(data.days[0].humidity, data.days[0].temp, data.days[0].dew, data.days[0].solarradiation);
    })
    .catch(this.setState({humidity: "unavailable", temp: "unavailable", dew: "unavailable", solar:"unavailable"}))
  }
    render() {
      this.getResult();
      return (
          <div className="App">
             <Grid xs={8} paddingBottom="48px">
                <Typography fontSize="40px" color="#75A28E" fontWeight="700" fontFamily="sans-serif">
                 Here is some information we found.
               </Typography>
               <Typography paddingX="60px" paddingY="24px" fontSize="30px" color="#054D3B" fontWeight="500" fontFamily="sans-serif">
                 The following includes data about the crops you should cultivate at this time based
                 on multiple factors using information on where you live:
                </Typography>
                <Typography fontSize="30px" color="#75A28E" fontWeight="500"> You are located in plant hardiness zone: </Typography>
                <Typography fontSize="30px" color="#054D3B" fontWeight="800">
                {this.state.zone}
                </Typography>
                <Typography fontSize="30px" color="#75A28E" fontWeight="500">This zone best supports the following items: </Typography>
                <Typography fontSize="30px" color="#054D3B" fontWeight="800">{this.state.desc}</Typography>
             </Grid>
             <Grid>
               <button onClick={this.handleClick} width="200px" className='button'>Home Page</button>
             </Grid>
          </div>
              
          );
    }
  }

  export default Result;