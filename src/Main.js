import React from 'react';
import Home from './Home';
import Roles from './Roles';
import Farmer from './Farmer';
import Rec from './Rec';
import Result from './Result';

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isRole: false, isFarmer: false, isRec: false, isHome: true, isResult: false, zipCode: null};
    }
  
    handleClickHome = () =>{
      this.setState({isHome: false, isRole: true});
    };

    handleClickRoles = (farmer) =>{
      if(farmer){
        this.setState({isFarmer: true, isRole: false});
      }
      else{
        this.setState({isRec: true, isRole: false});
      }
    };

    handleZipInput = (input) =>{
      this.setState({zipCode: input});
    }

    handleClickFarmer = () =>{
        this.setState({isResult: true, isFarmer: false});
    };

    handleClickRec = () =>{
      this.setState({isResult: true, isRec: false});
  };

  handleClickResult = () =>{
    this.setState({isHome: true, isResult: false});
};

    render() {
      

      return (
        <div>
            {this.state.isHome &&
                <Home onClick={this.handleClickHome}/>
            }
            {this.state.isRole &&
                <Roles onClick={this.handleClickRoles}/>}
            {this.state.isFarmer &&
                <Farmer onClick={this.handleClickFarmer} onChange={this.handleZipInput}/>}
            {this.state.isRec &&
                <Rec onClick={this.handleClickRec}/>}
            {this.state.isResult &&
                <Result onClick={this.handleClickResult} zip={this.state.zipCode}/>}
        </div>
  );
    }
  }

  export default Main;