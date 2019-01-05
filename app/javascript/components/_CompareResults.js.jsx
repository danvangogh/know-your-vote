import React, { Component } from 'react';

class CompareResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: {
        grnRes: [3, 6, 6, 8, 4, 0],
        ndpRes: [0, 0, 1, 6, 3, 2],
        libRes: [0, 2, 2, 2, 5, 2],
        cpRes: [1, 5, 8, 8, 4, 1],
      }
    };
  }

  componentDidMount() {
    axios.get('/results')
    .then((response) => {
      this.setState({
        results: response.data
      })
    })
    .catch(function (error) {
      return error;
    });
  }

  render() {

    const calc = res => {
      for (let party in res) {
        res[party] = res[party].reduce((a,b) => a + b, 0) / res[party].length
      }
      return res;
    }
  }
}
