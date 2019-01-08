import React, { Component } from 'react';
import Cards from "./_Cards.js.jsx";
import ResultsCard from './_ResultsCard.js.jsx'
import axios from 'axios'

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
      return {scores: newScores, question: newQuestion};
    });
  }
  leftSwipe(voted_party_id) {
    this.setState(({scores, question}) => {
      let newScores = {...scores};
      let newQuestion = question;
      newQuestion = newQuestion + 1;
      return {scores: newScores, question: newQuestion};
    });
  }

  duplicates(newArr) {
    newArr.sort(function(a, b){return b - a})
    if (newArr[0] == newArr[1]) {
      return true;
    }
  }

  tieCheck(obj) {
    let arr = []
    for (let num in obj) {
      arr = Object.values(obj)
    }
    if (this.duplicates(arr)) {
      return true;
    }
  }


  render() {
    const isDonePlay = this.state.question;
    let card;

    if (isDonePlay >= 4 && !this.tieCheck(this.state.scores)) {
      card = <div>
              <ResultsCard count={this.state.scores} />
            </div>
    } else {
      card = <div>
              <Cards rightSwipe={this.rightSwipe} leftSwipe={this.leftSwipe} question = {this.state.question}/>
            </div>
    }
    return (
      <div>
        {card}
      </div>
    )
  }
}

export default Game;
