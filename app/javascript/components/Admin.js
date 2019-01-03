import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import NavBar from './_navbar.js';
import TopicPage from './_TopicPage.js.jsx'
import TopicsPage from './_TopicsPage.js.jsx'
import Cards from './_Cards.js.jsx'
import Game from './_Game.js.jsx'
import ResultsCard from './_ResultsCard.js.jsx'
import axios from 'axios';
import MediaQuery from 'react-responsive';


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
    .then(axios.spread((topicsRes, partiesRes) => {
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
        <TopicForm parties={this.state.parties} topics={this.state.topics} quotes={this.state.quotes}/>
        <DeleteTopic parties={this.state.parties} topics={this.state.topics} quotes={this.state.quotes}/>
        <QuoteForm parties={this.state.parties} topics={this.state.topics} quotes={this.state.quotes}/>
      </div>
    )
  }
}

export default Admin;
