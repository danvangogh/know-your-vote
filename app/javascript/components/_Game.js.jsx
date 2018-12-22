import React, { Component } from 'react';
import Cards from "./_Cards.js.jsx";
import ScoreCount from './_ScoreCount.js.jsx'
import axios from 'axios';

class Game extends Component {
  constructor(props){
    super(props)

    this.state = {

      scores: {
        5: 0,
        6: 0,
        7: 0,
        8: 0,
      },
    }

    this.rightSwipe = this.rightSwipe.bind(this)
  }

  rightSwipe(voted_party_id) {
    // let grn = this.state.GRN;
    // this.setState({
    //   GRN: grn + 1
    // })

    // this.setState((oldState) => {
    //   let oldGrn = oldState.GRN;
    //   return {GRN: oldGrn + 1};
    // })

    this.setState(({scores}) => {
      let newScores = {...scores}; // make a copy
      newScores[voted_party_id] = (newScores[voted_party_id]||0) + 1;
      return {scores: newScores};
    });
  }
  render() {
    console.log("this.state:", this.state);
    return (
      <div>
        <Cards rightSwipe={this.rightSwipe}/>
        <ScoreCount count={this.state.scores}/>
      </div>
    )
  }
}

export default Game;
