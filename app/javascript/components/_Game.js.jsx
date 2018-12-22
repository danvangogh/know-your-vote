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
        5: 0,
        6: 0,
        7: 0,
        8: 0,
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
              <ResultsCard count={this.state.scores} />;
              <ScoreCount count={this.state.scores} question={this.state.question}/>
            </div>
    } else {
      card = <div>
              <Cards rightSwipe={this.rightSwipe} leftSwipe={this.leftSwipe} />;
              <ScoreCount count={this.state.scores} question={this.state.question}/>
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
