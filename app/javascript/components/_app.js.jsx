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
                  <Link to="/topics/keystone" className="title">
                    <span className="topic">KeyStone XL</span>
                    <img src={require('../../assets/images/keystone.jpg')} alt="keystone-pipeline" className="img-responsive" />
                  </Link>
                </div>
                <div className="col span_1_of_3 hometopics">
                  <Link to="/topics/cannabis" className="title">
                    <span className="topic">Legalised Cannabis</span>
                    <img src={require('../../assets/images/cannabis.jpg')} alt="cannabis" className="img-responsive" />
                  </Link>
                </div>
                <div className="col span_1_of_3 hometopics">
                  <Link to="/topics/carbontax" className="title">Carbon Tax</Link>
                </div>
              </div>
              <div className="section group">
                <div className="col span_1_of_3 hometopics">
                  <Link to="/topics/housing" className="title">Subsidised Housing</Link>
                </div>
                <div className="col span_1_of_3 hometopics">
                  <Link to="/topics/representation" className="title">Proportional Represenation</Link>
                </div>
                <div className="col span_1_of_3 hometopics">
                  <Link to="/topics/hair" className="title">Prince Eric's Hair</Link>
                </div>
              </div>
            </div>
          </div>
        )}/>
        <Route path="/topics/keystone" component={Topic} />
      </div>
    );
  }
}

export default App;
