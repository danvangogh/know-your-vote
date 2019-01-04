import React, { Component } from 'react';
import axios from 'axios';
import Swipe from './_swipe.js'

class Cards extends Component {
  constructor(props){
    super(props)
  }
  state = {
    quotes: [],
    currentQuote: {},
  };

  componentDidMount() {
    axios.get(`/quotes/`)
    .then((response) => {
      this.setState({
        quotes: response.data
      })
      console.log("response.data: ", response.data)
    })
    .catch(function (error) {
      return error;
    });
  }
  quotesText = arr => {
    const textArr = [];
    arr.forEach(function(quote) {
      textArr.push(quote.text)
    })
    return textArr;
  }

  generateRandom = (min, max) => {
    const x = Math.random() * (max - min) + min;
    return Math.round(x)
  }

  render() {
    if (this.state.quotes.length === 0) {
      return <p>Loading...</p>
    }

    const qLength = this.state.quotes.length
    const quoteIndex = this.generateRandom(0, qLength - 1)
    const randomQuote = this.state.quotes[quoteIndex];
    return (
      <div>
        <Swipe quotes={this.quotesText} />
      </div>
    )
  }
}

export default Cards;
