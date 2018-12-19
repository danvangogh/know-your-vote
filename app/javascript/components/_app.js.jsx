import React from 'react';
import { Link, Route } from 'react-router-dom';
import Modal from 'react-responsive-modal';

import Quotes from "./_poli-quotes.js.jsx";
import Topic from "./_topic.js";


class App extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div className="App">
        <div>
          <button type="button" onClick={this.onOpenModal}>Find my Poli-match</button>
        </div>
        <div>
          <Modal open={open} onClose={this.onCloseModal} center>
            <h2>Find Your Match</h2>
            <Quotes />
            <button>Disagree</button>
            <button>Agree</button>
          </Modal>
        </div>
        <Route exact={true} path="/" render={() => (
          <div>
            <h2>Current Topics</h2>
            <div className="topics">
              <div className="section group">
                <div className="col span_1_of_3 hometopics">
                  <Link to="/topics/1">KeyStone XL</Link>
                </div>
                <div className="col span_1_of_3 hometopics">
                  <Link to="/topics/2">Topic2</Link>
                </div>
                <div className="col span_1_of_3 hometopics">
                  <Link to="/topics/3">Topic3</Link>
                </div>
              </div>
              <div className="section group">
                <div className="col span_1_of_3 hometopics">
                  <Link to="/topics/4">Topic4</Link>
                </div>
                <div className="col span_1_of_3 hometopics">
                  <Link to="/topics/5">Topic5</Link>
                </div>
                <div className="col span_1_of_3 hometopics">
                  <Link to="/topics/6">Topic6</Link>
                </div>
              </div>
            </div>
          </div>
        )}/>
        <Route path="/topics/1" component={Topic} />
      </div>
    );
  }
}

export default App;
