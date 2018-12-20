import React from 'react';
import { Link, Route } from 'react-router-dom';
import Modal from 'react-responsive-modal';

import Quotes from "./_poli-quotes.js.jsx";
import Topic from "./_topic.js";
import TabTopic from './_tabtopic.js.jsx';

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
              <div className="card-deck section group">
                <div className="card col span_1_of_3 hometopics">
                  <Link to="/topics/blah" className="title">
                      <span className="card-body topic">KeyStone XL</span>
                      <img src={require('../../assets/images/keystone.jpg')} alt="keystone-pipeline" className="img-responsive" />
                  </Link>
                </div>
                <div className="card col span_1_of_3 hometopics">
                  <Link to="/topics/cannabis" className="title">
                    <span className="topic">Legalised Cannabis</span>
                    <img src={require('../../assets/images/cannabis.jpg')} alt="cannabis" className="img-responsive" />
                  </Link>
                </div>
                <div className="card col span_1_of_3 hometopics">
                  <Link to="/topics/keystone" className="title">
                      <span className="card-body topic">KeyStone XL</span>
                      <img src={require('../../assets/images/keystone.jpg')} alt="keystone-pipeline" className="img-responsive" />
                  </Link>
                </div>
              </div>
              <div className="card-deck section group">
                <div className="card col span_1_of_3 hometopics">
                  <Link to="/topics/representation" className="title">
                    <span className="topic">Proportional Representation</span>
                    <img src={require('../../assets/images/prop-rep.jpg')} alt="proportional-representation" className="img-responsive" />
                  </Link>
                </div>
                <div className="card col span_1_of_3 hometopics">
                  <Link to="/topics/representation" className="title">
                    <span className="topic">Subsidized Housing</span>
                    <img src={require('../../assets/images/prop-rep.jpg')} alt="proportional-representation" className="img-responsive" />
                  </Link>
                </div>
                <div className="card col span_1_of_3 hometopics">
                  <Link to="/topics/representation" className="title">
                    <span className="topic">Prince Eric's Hair</span>
                    <img src={require('../../assets/images/prop-rep.jpg')} alt="proportional-representation" className="img-responsive" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}/>
        <Route path="/topics/blah" component={Topic} />
        <Route path="/topics/cannabis" component={TabTopic} />
      </div>
    );
  }
}

export default App;
