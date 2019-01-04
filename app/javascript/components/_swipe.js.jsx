import React, { Component } from "react";
import Swipeable from "react-swipy";
import Card from './Card';

const appStyles = {
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "100vh",
  fontFamily: "sans-serif",
  overflow: "hidden"
};

const wrapperStyles = { position: "relative", width: "250px", height: "250px" };
const actionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12
};

class Swipe extends Component {
  constructor(props) {
    super(props)
  }

  remove = () =>
    this.props.quotes.slice(1, this.props.quotes.length);

  render() {
    const quotes = this.props.quotes;
    console.log("quotes ", quotes)

    return (
      <div style={appStyles}>
        <div style={wrapperStyles}>
          {quotes.length > 0 && (
            <div style={wrapperStyles}>
              <Swipeable
                buttons={({ right, left }) => (
                  <div style={actionsStyles}>
                    <button onClick={left}>Reject</button>
                    <button onClick={right}>Accept</button>
                  </div>
                )}
                onAfterSwipe={this.remove}
              >
                <Card>{quotes[0]}</Card>
              </Swipeable>
              {quotes.length > 1 && <Card zIndex={-1}>{quotes[1]}</Card>}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Swipe;
