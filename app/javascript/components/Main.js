import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './_navbar.js';
import TopicPage from './_TopicPage.js.jsx'
import TopicsPage from './_TopicsPage.js.jsx'
import axios from 'axios';
import MediaQuery from 'react-responsive';

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
      <div>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route path='/topics/:topic/:id' render={(routerProps) => 
                <TopicPage {...routerProps} topics={this.state.topics}/> }/>
              <Route path='/' exact render={(routerProps) =>
                <TopicsPage {...routerProps} topics={this.state.topics}/> } />
              <Route path='/' render={() => <Redirect to='/'/>}/>
            </Switch>
          </div>
        </Router>
        <MediaQuery maxWidth={575}>
          <footer className="mobile-footer">
            <div className="home-icon">
              <i className="fas fa-home"></i>
            </div>
            <p className="split">|</p>
            <div className="heart-icon">
              <i className="far fa-heart"></i>
            </div>
          </footer>
        </MediaQuery>
      </div>
    );
  }
}

export default Main;
