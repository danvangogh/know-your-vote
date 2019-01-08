import React, { Component } from 'react';
import axios from 'axios';
import Swipeable from "react-swipy";

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
    })
    .catch(function (error) {
      return error;
    });
  }

  render() {
    if (this.state.quotes.length === 0) {
      return <p>Loading...</p>
    }
    const { question } = this.props;
    const qLength = this.state.quotes.length;
    const randomQuote = this.state.quotes[question];
    console.log("Questionnnn: ", question)
    return (
      <div className="whole-card">
        <Swipeable buttons={({ right, left }) => (
            <div className="buttons">
              <button className="dissBtn"
                onClick={() => {this.props.leftSwipe(randomQuote.party_id); left();}}>Dislike
              </button>
              <button className="likeBtn"
                onClick={() => {this.props.rightSwipe(randomQuote.party_id); right();}}>Like
              </button>
            </div>
          )}
          >
          <section className="play-card">
            <div className="mobile-modal-body">
              <div className="mobile-matched-with quotearea">
                <i className="fas fa-quote-left quotation-left"></i>
                <h4 className="quote">{randomQuote.text}</h4>
                <i className="fas fa-quote-right quotation-right"></i>
              </div>
            </div>
          </section>
        </Swipeable>
      </div>
    )
  }
}

export default Cards;
