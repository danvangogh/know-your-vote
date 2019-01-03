import React, { Component } from 'react';
import axios from 'axios';
import Quotes from "./_poli-quotes.js.jsx";

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
        <section className="results-card">
          <div className="mobile-modal-body">
            <div className="mobile-matched-with quotearea">
              <i class="fas fa-quote-left quotation-left"></i>
              <h4 className="quote">{randomQuote.text}</h4>
              <i class="fas fa-quote-right quotation-right"></i>
              <div className="buttons">
                <button
                  className="dissBtn"
                  onClick={() => this.props.leftSwipe(randomQuote.party_id)}>Dislike
                </button>
                <button
                  className="likeBtn"
                  onClick={() => this.props.rightSwipe(randomQuote.party_id)}>Like
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Cards;
