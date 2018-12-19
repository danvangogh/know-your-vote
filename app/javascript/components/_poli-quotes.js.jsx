import React from 'react';

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NDP: 0,
      LIB: 0,
      CP: 0,
      GRN: 0
    };
  }
  render() {
    return (
      <div>
        <p>"Hello, all of us pledging allegiance to the stars..."</p>
      </div>
    );
  }
}

export default Quotes;
