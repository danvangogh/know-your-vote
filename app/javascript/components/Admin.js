import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
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
      <Router>
        <div>
          <NavBar />
          <TopicForm parties={this.state.parties} topics={this.state.topics} quotes={this.state.quotes}/>
          <DeleteTopic parties={this.state.parties} topics={this.state.topics} quotes={this.state.quotes}/>
          <QuoteForm parties={this.state.parties} topics={this.state.topics} quotes={this.state.quotes}/>
        </div>
      </Router>
    )
  }
}

export default Admin;
