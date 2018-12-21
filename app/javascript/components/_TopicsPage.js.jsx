import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Main from './Main.js'
import axios from 'axios';
import Topic from "./_topic.js.jsx"

class TopicsPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <h2>Current Topics</h2>
        {
          this.props.topics.map((topic, index) => {
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
    )
  }
}

export default TopicsPage;
