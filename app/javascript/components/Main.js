import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import App from './_app.js';
import NavBar from './_navbar.js';
import TopicPage from './_TopicPage.js.jsx'
import TopicsPage from './_TopicsPage.js.jsx'
import axios from 'axios';

class Main extends Component {
  constructor(props){
    super(props)
  }
  state = {
    open: false,
    topics: [],
    currentTopic: null
  };

  componentDidMount() {
    console.log("componentDidMount");
    axios.get('/topics')
      .then((response) => {
        console.log("data:", response.data);
        this.setState({ topics: response.data }, () => {
          console.log(this.state)
        }).bind(this)
      })
      .catch(function (error) {
        return error;
      });

  }

  render() {
    console.log("this.state = ", this.state)
    return(
      <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path='/topics/:topic' render={(routerProps) => 
            <TopicPage {...routerProps} topics={this.state.topics}/> }/>
          <Route path='/' exact render={(routerProps) =>
            <TopicsPage {...routerProps} topics={this.state.topics}/> } />
          <Route path='/' render={() => <Redirect to='/'/>}/>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default Main;
