import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';

class currentTopic extends Component {
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

  topicSet = () => {
    this.setState({ currentTopic: topic.id})
  }

  render() {
    const { open } = this.state;
    return(
      <div className="App">
        <div>
          <button type="button" onClick={this.onOpenModal}>Find my Poli-match</button>
        </div>
        <Route exact={true} path="/" render={() => (
          <div>
            <h2>Current Topics</h2>
            <div>
              Choose a topic from the below
            </div>
            { this.state.topics.map((topic, index) => {
                return(
                  <div className="col span_1_of_3 hometopics" key={topic.id}>
                    <Link to={`/topics/${topic.name}`} className="title">
                      <span className="topic">{topic.name}</span>
                    </Link>
                  </div>
                )
              })
            }
          </div>
        )}/>
       <Route path="/topics" component={(Topic) => (this.props.match)}/>
      </div>
    )
  };
}

export default currentTopic;
