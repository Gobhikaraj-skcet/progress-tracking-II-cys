import React, { Component } from 'react'
import Button from '@mui/material/Button';

export default class Classdemo extends Component {
constructor(props){
    super(props);
    this.state={passive:false};
}
handleShow = () => {
    this.setState({
        passive:true
    });
}
handleHide= () => {
    this.setState({
        passive:false
    });
}

  render() {
    if(this.state.passive){
    return (
      <div>
      <h3>Hi ! This is Gobhika</h3>
      <Button onClick={this.handleHide} variant="contained" size="large"> Hide </Button>
      </div>
      )}
      else{
        return( 
          <Button onClick={this.handleShow} variant="contained" size="large">Show</Button>
        )
      }
    }

  }