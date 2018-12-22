import React, { Component } from 'react';
import axios from 'axios';

class ResultsCard extends Component {
  constructor(props){
    super(props)
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
              <h4 className="quote">{randomQuote.text}</h4>
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
