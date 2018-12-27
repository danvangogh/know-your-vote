import React, { Component } from 'react';
import Cards from "./_Cards.js.jsx";
import ScoreCount from './_ScoreCount.js.jsx'
import ResultsCard from './_ResultsCard.js.jsx'
import axios from 'axios';

class Game extends Component {
  constructor(props){
    super(props)

    this.state = {
      question: 1,
      scores: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
      },
    }

    this.rightSwipe = this.rightSwipe.bind(this);
    this.leftSwipe = this.leftSwipe.bind(this);
  }

  rightSwipe(voted_party_id) {
    this.setState(({scores, question}) => {
      let newScores = {...scores}; // make a copy
      newScores[voted_party_id] = (newScores[voted_party_id]||0) + 1;
      let newQuestion = question;
      newQuestion = newQuestion + 1;
      console.log("done Right")
      return {scores: newScores, question: newQuestion};
    });
  }
  leftSwipe(voted_party_id) {
    this.setState(({scores, question}) => {
      let newScores = {...scores};
      let newQuestion = question;
      newQuestion = newQuestion + 1;
      console.log("done Left")
      return {scores: newScores, question: newQuestion};
    });
  }

  render() {

    const isDonePlay = this.state.question;
    let card;

    if (isDonePlay >= 5) {
      card = <div>
              <ResultsCard count={this.state.scores} />
            </div>
    } else {
      card = <div>
              <Cards rightSwipe={this.rightSwipe} leftSwipe={this.leftSwipe} />
            </div>
    }


    console.log("this.state:", this.state);
    return (
      <div>
        {card}
      </div>
    )
  }
}

export default Game;
