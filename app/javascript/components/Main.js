import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import NavBar from './_navbar.js';
import TopicPage from './_TopicPage.js.jsx';
import TopicsPage from './_TopicsPage.js.jsx';
import Game from './_Game.js.jsx';
import axios from 'axios';
import MediaQuery from 'react-responsive';
import Admin from './Admin.js';
import App from './_app.js';
import Footer from './_footer.js.jsx';

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
        this.setState({ topics: response.data}).bind(this)
      })
      .catch(function (error) {
        return error;
      });
  }

  render() {
    return(
      <div id="container">
        <Router>
          <div id="body">
            <NavBar />
            <Switch>
              <Route path='/' exact component={App}/>
              <Route path="/admin" component={Admin}/>
              <Route path="/game" component={Game}/>

              <Route path='/topics/:topic/:id' render={(routerProps) =>
                <TopicPage {...routerProps} topics={this.state.topics}/> }/>

              <Route path='/currentTopics' render={(routerProps) =>
                <TopicsPage {...routerProps} topics={this.state.topics}/> } />

            </Switch>
            <Footer />
            <MediaQuery maxWidth={575}>
              <footer className="mobile-footer">
                <div className="home-icon">
                  <Link to="/">
                    <i className="fas fa-home"></i>
                  </Link>
                </div>
                <p className="split-one">|</p>
                <div className="topic-icon">
                  <Link to="/currentTopics">
                    <i className="far fa-comment"></i>
                  </Link>
                </div>
                <p className="split-two">|</p>
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
