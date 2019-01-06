import React, { Component } from 'react';
import { Bar, Line, Radar } from 'react-chartjs-2';

Chart.defaults.global.defaultFontColor = 'white';

class ScoreGraph extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const grnRes = this.props.count[1]
    const ndpRes = this.props.count[2]
    const libRes = this.props.count[3]
    const cpRes = this.props.count[4]

    const data = {
      labels: ['GRN', 'NDP', 'LIB', 'CP'],
      datasets: [
        {
          data: [grnRes, ndpRes, libRes, cpRes]
        }
      ]
    };
    return (
      <div>
        <Bar
          data={data}
          height={100}
          options={{
            maintainAspectRatio: true,
          }}
          legend={{
            "display": false
          }}
          scales={{
            xAxes: [{
              ticks: [{
                beginAtZero: true,
                display: true,
                lineHeight: 36
              }]
            }]
}}
        />
      </div>
    );
  }
};

export default ScoreGraph;
