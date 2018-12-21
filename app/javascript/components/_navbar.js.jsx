import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import Quotes from "./_poli-quotes.js.jsx";


class NavBar extends React.Component {
  state = {
    open: false,
    topics: [],
    currentTopic: null
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
      <div>
        <div className="navbar">
          <Link to="/" className="name">KNOW YOUR VOTE</Link>
          <span className="poli-match-button">
          <button type="button" onClick={this.onOpenModal}>Find my Poli-match</button>
        </span>
        </div>
        <div>
          <Modal open={open} onClose={this.onCloseModal} center>
            <h2>Find Your Match</h2>
            <Quotes />
            <button>Disagree</button>
            <button>Agree</button>
          </Modal>
        </div>
      </div>
    )
  };
}

export default NavBar;
