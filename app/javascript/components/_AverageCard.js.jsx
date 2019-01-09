import React, { Component } from 'react';
import ScoreGraph from './_ScoreGraph.js';

class ResultsCard extends Component {
  constructor(props){
    super(props)
  };

  render() {

    // if (!this.state.parties) {
    //   return <p>Loading...</p>
    // }

    return (
      <div>
        <section className="results-card">
          <div className="mobile-modal-body">
              <div className="announcement">
                <h4>See how you compare...</h4>
              </div>
            <div className="matched-with">
              <span className="image">
                <img className="match-photo image" src={this.state.parties.Image_Url} />
              </span>
            </div>
            <div className="matched-with">
              <span className="leader-result quotearea">
                <h5>{this.state.parties.Leadername}</h5>
                <h6>{this.state.parties.name}</h6>
              </span>
            </div>
            <br />
            <div className="matched-with">
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
              <div className="party-result">
                <ScoreGraph count={this.props.count} />
              </div>
              <div className=""></div>
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
