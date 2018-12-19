import React from 'react';
import Modal from 'react-responsive-modal';
import Quotes from "./_poli-quotes.js.jsx";
import axios from 'axios';

class App extends React.Component {
  state = {
    open: false,
    topics: []
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

componentDidMount() {
  axios.get('/topics')
    .then((response) => {
      console.log("data:", response.data);
      this.setState({
        topics: response.data
      }, () => {
        console.log(this.state)
      })
    })
    .catch(function (error) {
      return error;
    });
}
  render() {

    // const topic1 = axios.get('/topics', {
    //     params: {
    //       ID: 1
    //     }
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    //   console.log("topic1: ", topic1)



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
        <h2>Current Topics</h2>

        {
          this.state.topics.map((topic, index) => {
            return (
              <div className="col span_1_of_3 hometopics" key={index}>
                <a href="/">{ topic.name }</a>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
