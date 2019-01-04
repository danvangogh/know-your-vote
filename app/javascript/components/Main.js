import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import NavBar from './_navbar.js';
import TopicPage from './_TopicPage.js.jsx';
import TopicsPage from './_TopicsPage.js.jsx';
import Game from './_Game.js.jsx';
import axios from 'axios';
import MediaQuery from 'react-responsive';
import Admin from './Admin.js';


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
    return(
      <div>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route path="/admin" component={Admin}/>
              <Route path="/game" component={Game}/>
              <Route path='/topics/:topic/:id' render={(routerProps) =>
                <TopicPage {...routerProps} topics={this.state.topics}/> }/>
              <Route path='/' exact render={(routerProps) =>
                <TopicsPage {...routerProps} topics={this.state.topics}/> } />
              <Route path='/' render={() => <Redirect to='/'/>}/>
            </Switch>
            <div className="admin-div">
              <a href="/admin" className="admin-link">Admin</a>
            </div>
            <MediaQuery maxWidth={575}>
              <footer className="mobile-footer">
                <div className="home-icon">
                  <Link to="/">
                    <i className="fas fa-home"></i>
                  </Link>
                </div>
                <p className="split">|</p>
                <div className="heart-icon">
                  <Link to="/game">
                    <i className="far fa-heart"></i>
                  </Link>
                </div>
              </footer>
            </MediaQuery>
          </div>
        </Router>
      </div>
    );
  }
}

export default Main;
