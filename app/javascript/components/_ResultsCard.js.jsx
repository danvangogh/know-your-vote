import React, { Component } from 'react';
import axios from 'axios';

class ResultsCard extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        <section className="results-card">
          <div className="mobile-modal-body">
            <div className="mobile-matched-with quotearea">
              <span className="announcement">
                <h4>You Matched With...</h4>
              </span>
            </div>
            <div className="matched-with">
              <span className="image">
                <img className="match-photo image" src="https://i.ibb.co/fnv8fZt/justin-trudeau-prime-minister-canada.jpg" />
              </span>
            </div>
            <div className="matched-with">
              <span className="leader-result quotearea">
                <h5>Justin Trudeau</h5>
                <h6>Liberal Party</h6>
              </span>
            </div>
            <br />
            <div className="matched-with">
              <div className=""></div>
              <div className=""></div>
              <div className="party-result">GRN: {this.props.count[5]}</div>
              <div className="party-result">NDP: {this.props.count[6]}</div>
              <div className="party-result">LIB: {this.props.count[7]}</div>
              <div className="party-result">CP: {this.props.count[8]}</div>
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default ResultsCard;
