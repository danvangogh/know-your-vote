import React, { Component } from 'react';
import Cards from "./_Cards.js.jsx";
import ScoreCount from './_ScoreCount.js.jsx'
import axios from 'axios';

class Game extends Component {
  constructor(props){
    super(props)

    this.state = {
      question: 1,
      scores: {
        5: 0,
        6: 0,
        7: 0,
        8: 0,
      },
    }

    this.rightSwipe = this.rightSwipe.bind(this);
    this.leftSwipe = this.leftSwipe.bind(this);
    this.countTracker = this.countTracker.bind(this);
  }

  rightSwipe(voted_party_id) {
    this.setState(({scores, question}) => {
      let newScores = {...scores}; // make a copy
      newScores[voted_party_id] = (newScores[voted_party_id]||0) + 1;
      let newQuestion = question;
      newQuestion = newQuestion + 1;
      console.log("done Right")
      this.countTracker(newQuestion);
      return {scores: newScores, question: newQuestion};
    });
  }
  leftSwipe(voted_party_id) {
    this.setState(({scores, question}) => {
      let newScores = {...scores};
      let newQuestion = question;
      newQuestion = newQuestion + 1;
      console.log("done Left")
      this.countTracker(newQuestion);
      return {scores: newScores, question: newQuestion};
    });
  }
  countTracker(num) {
    if (num > 10) {
      result(this.state.scores)
    };
  }

  render() {
    console.log("this.state:", this.state);
    return (
      <div>
        <Cards rightSwipe={this.rightSwipe} leftSwipe={this.leftSwipe} countTracker={this.countTracker}/>
        <ScoreCount count={this.state.scores} question={this.state.question}/>
      </div>
    )
  }
}

export default Game;
