import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TileGrid from './components/TileGrid.js'


//sourced from https://stackoverflow.com/a/2450976/8994008
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
var TwelveList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

class App extends Component {
  constructor(){
    super()
    this.state = {
      clickedList:[]
    }
    this.handleClick= this.handleClick.bind(this)
  }
  handleClick(event){
    let id = event.target.id;
    if (id in this.state.clickedList){
      //YOU LOSE! YOU GET NOTHING!! GOOD DAY SIR!!!
    } else {
      this.setState({
        clickedList : this.state.clickedList.slice(0).concat([id])
      })
    }
    console.log("teehee! you clicked me! "+id)
  }
  render() {
    return (
      <div className="App">
        <header>Test Your Memory React-ions!</header>
        {shuffleArray(TwelveList)}
        <div className="container">
          <TileGrid idList={TwelveList} handleClick={this.handleClick}/>
        </div>
      </div>
    );
  }
}

export default App;
