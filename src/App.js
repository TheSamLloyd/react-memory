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
      clickedList:[],
      best : 0,
      status: ""
    }
    this.handleClick= this.handleClick.bind(this)
  }
  handleClick(event){
    const id = event.target.id;
    if (this.state.clickedList.includes(id)){
      this.setState({
        clickedList:[],
        status: "Game Over! Click to play again!"
      })
      console.log("GAME OVER")
    } else if (this.state.clickedList.length == this.state.best) {
        this.setState({
          clickedList: this.state.clickedList.concat([id]),
          best: this.state.clickedList.length+1,
          status:""
        })
      } else {
      this.setState({
        clickedList : this.state.clickedList.concat([id]),
        status:""
    })
  }
    console.log("teehee! you clicked me! "+id)
    console.log(this.state.clickedList)
  }
  render() {
    return (
      <div className="App indigo darken-4">
        <nav>
          <div className="indigo darken-1 white-text nav-wrapper">
            <a className="brand-logo center">Test Your Memory React-ions!</a>
          </div>
        </nav>
        <div className="row white-text">
            <div className="col s6">Best: {this.state.best}</div>
            <div className="col s6">Current Score: {this.state.clickedList.length}</div>
        </div>
        <div className="row">
          <div className="col s12">
            <h2 className="red accent-1 white-text">{this.state.status}</h2>
          </div>
        </div>
        {shuffleArray(TwelveList)}
        <div className="container">
          <TileGrid idList={TwelveList} handleClick={this.handleClick}/>
        </div>
      </div>
    );
  }
}

export default App;
