import React, { Component } from 'react';
import Nav from "./Components/Header/Nav";
import Cards from './Components/Cards/Cards';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      index:0
    }
  }
  nextHandler = () => {
    if(this.state.index === 24) {
      this.setState({index: 0})
    }
    else if(this.state.index >= 0) {
      this.setState({index: this.state.index+1})
    }
    
  }
  
  prevHandler = () => {
    if(this.state.index === 0) {
      this.setState({index: 24})
    }
    else if(this.state.index > 0) {
      this.setState({index: this.state.index-1})
    }
  }

  render() {
    return(
      <div>
        <Nav />
        <Cards 
        index = {this.state.index}
        next = {this.nextHandler}
        prev = {this.prevHandler}/> 

      </div>
    )
  }
}
export default App;
