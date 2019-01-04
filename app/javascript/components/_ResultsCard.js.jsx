import React, { Component } from 'react';
import axios from 'axios';

class ResultsCard extends Component {
  constructor(props){
    super(props)
      };
    state = {
      winner: null,
      parties: []
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
}


  render() {

    if (!this.state.parties) {
      return <p>Loading...</p>
    }

    return (
      <div>
        <section className="results-card">
          <div className="mobile-modal-body">
              <div className="announcement">
                <h4>You Matched With...</h4>
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
              <div className="party-result">GRN: {this.props.count[1]}</div>
              <div className="party-result">NDP: {this.props.count[2]}</div>
              <div className="party-result">LIB: {this.props.count[3]}</div>
              <div className="party-result">CP: {this.props.count[4]}</div>
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
