import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import MediaQuery from 'react-responsive';
import Game from "./_Game.js.jsx";


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
          <a href="/" className="name">KNOW YOUR VOTE</a>
          <MediaQuery minWidth={576}>
            <button type="button" className="button" onClick={this.onOpenModal}>Find my Poli-match</button>
            <button type="button" className="button"><Link to="/currentTopics">Current Topics</Link></button>
          </MediaQuery>
        </div>
        <div>
          <Modal open={open} onClose={this.onCloseModal} center>
            <Game />
          </Modal>
        </div>
      </div>
    )
  };
}

export default NavBar;
