import React, { Component } from 'react';

class ScoreCount extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h6>GRN: {this.props.count[5]} / NDP: {this.props.count[6]} / LIB: {this.props.count[7]} / CP: {this.props.count[8]} / Question: {this.props.question}</h6>
      </div>
    )
  }
}

export default ScoreCount;
