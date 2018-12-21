import React, { Component } from 'react';

import Quotes from "./_poli-quotes.js.jsx";
import axios from 'axios';

class Cards extends Component {
  constructor(props){
    super(props)
  }
  state = {
    quotes: []
  };

  componentDidMount() {
    axios.get(`/quotes/`)
      .then((response) => {
        console.log("data:", response.data);
        this.setState({
          quotes: response.data
        }, () => {
          console.log(this.state)
        })
      })
      .catch(function (error) {
        return error;
      });
    }

  generateID = (min, max) => {
    const x = Math.random() * (max - min) + min;
    return Math.round(x)
  }

  render() {
    if (!this.state.quotes.length > 0) {
      return <p>Loading...</p>
    }
    const qLength = this.state.quotes.length
    return (
      <div>
        <h1>Cards Page</h1>
        <p>{this.state.quotes[this.generateID(0, qLength)].text}</p>
      </div>
    )
  }
}

export default Cards;
