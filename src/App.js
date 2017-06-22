import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Community from './components/Community';
import NotFound from './components/NotFound';


class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/community" component={Community} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
      </Router>
    );
  }
}

export default App;
