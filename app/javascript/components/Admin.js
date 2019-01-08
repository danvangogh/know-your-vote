import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

import NavBar from './_navbar.js';
import TopicForm from './_AdminTopicForm.js.jsx'
import QuoteForm from './_AdminQuoteForm.js.jsx'
import DeleteTopic from './_AdminDeleteTopic.js.jsx'

class Admin extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    topics: [],
    parties: [],
    quotes: []
  }

  componentDidMount() {
    axios.all([
      axios.get('/topics'),
      axios.get('/parties'),
      axios.get('/quotes')
    ])
    .then(axios.spread((topicsRes, partiesRes, quotesRes) => {
      this.setState({
        topics: topicsRes.data,
        parties: partiesRes.data,
        quotes: quotesRes.data
      })
    }))
    .catch(function (error) {
      return error;
    })
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar />
            <TopicForm parties={this.state.parties} topics={this.state.topics} quotes={this.state.quotes}/>
            <DeleteTopic parties={this.state.parties} topics={this.state.topics} quotes={this.state.quotes}/>
            <QuoteForm parties={this.state.parties} topics={this.state.topics} quotes={this.state.quotes}/>
          </div>
        </Router>
        <div className="line"></div>
        <div className="admin-div">
          <div>
            <a href="/"><i className="far fa-check-square"></i> Know Your Vote</a>
          </div>
          <div className="social-media">
            <a href="https://www.facebook.com/knowyourvotecanada/"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
            <a href="https://github.com/danvangogh/know-your-vote"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Admin;
