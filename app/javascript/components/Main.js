import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './_app.js';
import NavBar from './_navbar.js';

const Main = () => (
  <Router>
    <Switch>
    <div>
      <NavBar />
      <App />
    </div>
    </Switch>
  </Router>
);


export default Main;
