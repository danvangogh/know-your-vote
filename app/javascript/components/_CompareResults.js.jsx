import React, { Component } from 'react';
import axios from 'axios';
import { Bar, Line, Radar } from 'react-chartjs-2';

class CompareResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      grnRes: [],
      ndpRes: [],
      libRes: [],
      cpRes: []
    }
  }

  componentDidMount() {
    axios.get('/results')
    .then((response) => {
      this.setState({
        results: response.data }, () => {
        }).bind(this)
    })
    .catch(function (error) {
      return error;
    });
  }

  resultsSplitter = res => {
    const { results, grnRes, ndpRes, libRes, cpRes } = this.state;
    res.forEach(function(party) {
      grnRes.push(party.grn);
      ndpRes.push(party.ndp)
      libRes.push(party.lib)
      cpRes.push(party.cp)
    })
  }

  average = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;

  render() {
    const { results, grnRes, ndpRes, libRes, cpRes } = this.state;
    if (results.length === 0) {
      return <p>Loading...</p>
    }
    if ((this.state) && (grnRes.length <= 1)) {
      this.resultsSplitter(this.state.results);
      const grnAvg = this.average(grnRes);
      const ndpAvg = this.average(ndpRes);
      const libAvg = this.average(libRes);
      const cpAvg = this.average(cpRes);
    }
    const data = {
      labels: ['GRN', 'NDP', 'LIB', 'CP'],
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [42, 33, 25, 60]
        }
      ]
    };

    return(
      <div>
        <Line data={data} />
      </div>
    )
  }
}

export default CompareResults;
