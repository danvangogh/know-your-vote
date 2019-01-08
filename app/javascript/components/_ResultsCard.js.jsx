import React, { Component } from 'react';
import axios from 'axios';
import ScoreGraph from './_ScoreGraph.js'
import CompareResults from './_CompareResults.js'

class ResultsCard extends Component {
  constructor(props){
    super(props)

    this.state = {
      winner: null,
      parties: [],
      renderCompare: false
      };

    this.showCompare = this.showCompare.bind(this);
  }

  resultsPost(scores) {
    axios.post('/results', {
      grn: scores[1],
      ndp: scores[2],
      lib: scores[3],
      cp: scores[4]
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    let resultsNum = this.props.count;
    let myMatch = Object.keys(resultsNum).reduce((a, b) => resultsNum[a] > resultsNum[b] ? a : b);
    this.setState({
      winner: myMatch
    });
    const id = myMatch;
    axios.get(`/parties/${id}`)
    .then((response) => {
      this.setState({ parties: response.data }).bind(this)
    })
    .catch(function (error) {
      return error;
    });
    this.resultsPost(resultsNum)
  }

  showCompare() {
    this.setState({renderCompare: true})
  }

  render() {

    if (!this.state.parties) {
      return <p>Loading...</p>
    }

    let gradientClass = "mobile-modal-body";

    if (this.state.parties.id == 1) {
      gradientClass += " grn-gradient"
    }
    else if (this.state.parties.id == 2) {
      gradientClass += " ndp-gradient"
    }
    else if (this.state.parties.id == 3) {
      gradientClass += " lib-gradient"
    }
    else if (this.state.parties.id == 4) {
      gradientClass += " cp-gradient"
    }

    if (!this.state.renderCompare) {
      return (
        <div>
          <section className="results-card">
            <div className={gradientClass}>
                <div className="announcement">
                  <h4>You Matched With...</h4>
                </div>
              <div className="matched-with">

                <span className="image">
                  <img className="match-photo image" src={this.state.parties.Image_Url} />
                </span>

                <span className="leader-result quotearea">
                  <h5>{this.state.parties.Leadername}</h5>
                  <h6>{this.state.parties.name}</h6>
                </span>

                <div className="party-result party-count">
                  <ScoreGraph count={this.props.count} />
                </div>

                <div className="cardFootButton">
                  <button
                    type="button"
                    className="comparisonButton"
                    onClick={this.showCompare}>See how I compare...</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )
    } else {
      return (
        <div>
          <CompareResults count={this.props.count}/>
        </div>
      )
    }
  }
}

export default ResultsCard;
