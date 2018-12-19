import React from "react"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  };

  onOpenModal() {
    this.setState({ open: true });
  };

  onCloseModal() {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="App">
      <div>
        <button type="button" onClick={this.onOpenModal}>Find my Poli-match</button>
      </div>
        <h2>Current Topics</h2>
        <div className="topics">
          <div className="section group">
            <div className="col span_1_of_3 hometopics">
              <a href="/"> Topic 1</a>
            </div>
            <div className="col span_1_of_3 hometopics">
              <a href="/"> Topic 2</a>
            </div>
            <div className="col span_1_of_3 hometopics">
              <a href="/"> Topic 3</a>
            </div>
          </div>
          <div className="section group">
            <div className="col span_1_of_3 hometopics">
              <a href="/"> Topic 4</a>
            </div>
            <div className="col span_1_of_3 hometopics">
              <a href="/"> Topic 5</a>
            </div>
            <div className="col span_1_of_3 hometopics">
              <a href="/"> Topic 6</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App
